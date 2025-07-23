import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface CaptionProps {
  date: Date;
  onChange: (date: Date) => void;
}

export function YearSelectCaption({ date, onChange }: CaptionProps) {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 120 }, (_, i) => currentYear - i);

  return (
    <div className="flex justify-between items-center px-2 py-1">
      <span className="font-medium">
        {date.toLocaleString("default", { month: "long" })}
      </span>

      <Select
        value={String(date.getFullYear())}
        onValueChange={(value) => {
          const newYear = Number(value);
          onChange(new Date(newYear, date.getMonth(), 1));
        }}
      >
        <SelectTrigger className="w-[100px]">
          <SelectValue placeholder="Year" />
        </SelectTrigger>
        <SelectContent>
          {years.map((year) => (
            <SelectItem key={year} value={String(year)}>
              {year}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
