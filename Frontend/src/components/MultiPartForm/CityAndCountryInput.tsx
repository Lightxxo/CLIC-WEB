import { useEffect, useState } from "react";

type BaseOption = { id: number };

export default function SearchSelect<T extends BaseOption>({
    label,
    placeholder,
    endpoint,
    value,
    onChange,
    getLabel,
    disabled,
}: {
    label: string;
    placeholder: string;
    endpoint: string;
    value: T | null;
    onChange: (option: T | null) => void;
    getLabel: (option: T) => string;
    disabled?: boolean;
}) {
    const [query, setQuery] = useState("");
    const [options, setOptions] = useState<T[]>([]);
    const [open, setOpen] = useState(false);

    function useDebouncedValue<T>(value: T, delay = 350) {
        const [debounced, setDebounced] = useState(value);

        useEffect(() => {
            const timer = setTimeout(() => setDebounced(value), delay);
            return () => clearTimeout(timer);
        }, [value, delay]);

        return debounced;
    }

    const debouncedQuery = useDebouncedValue(query);

    useEffect(() => {
        if (value) setQuery(getLabel(value));
    }, [value]);

    useEffect(() => {
        if (!debouncedQuery.trim() || disabled) {
            setOptions([]);
            return;
        }

        const controller = new AbortController();

        async function fetchOptions() {
            const res = await fetch(
                `${endpoint}${endpoint.includes("?") ? "&" : "?"}q=${debouncedQuery}`,
                { signal: controller.signal }
            );

            const data = await res.json();
            setOptions(data);
            setOpen(true);
        }

        fetchOptions();

        return () => controller.abort();
    }, [debouncedQuery, endpoint, disabled]);

    return (
        <div className="relative space-y-2">
            <label className="text-sm font-medium">{label}</label>

            <input
                value={query}
                disabled={disabled}
                placeholder={placeholder}
                onChange={(e) => {
                    setQuery(e.target.value);
                    onChange(null); // 🔥 enforce selection-only
                }}
                onFocus={() => setOpen(true)}
                onBlur={() => {
                    setTimeout(() => {
                        setOpen(false);

                        // 🔒 block free text
                        if (!value || query !== getLabel(value)) {
                            setQuery(value ? getLabel(value) : "");
                        }
                    }, 150);
                }}
                className="h-11 w-full rounded-xl border px-3"
            />

            {open && !disabled && (
                <div className="absolute z-50 w-full rounded-xl border bg-white shadow">
                    {options.map((option) => (
                        <button
                            key={option.id}
                            type="button"
                            onMouseDown={(e) => e.preventDefault()}
                            onClick={() => {
                                onChange(option);
                                setQuery(getLabel(option));
                                setOpen(false);
                            }}
                            className="block w-full px-3 py-2 text-left hover:bg-zinc-100"
                        >
                            {getLabel(option)}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}