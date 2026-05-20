import { useEffect, useState } from "react";
import { useFormContext } from "@/contexts/FormContext";
import * as Select from "@radix-ui/react-select";
import { ChevronDownIcon, CheckIcon } from "@radix-ui/react-icons";
import { toast } from "sonner";


const occupationGroups = [
  {
    label: "Medicine",
    options: ["Nurse / Carer", "Therapist", "Doctor", "Natural medicines", "Veterinary"],
  },
  {
    label: "Business / Corporate",
    options: [
      "Industry / Engineering",
      "Pharmaceuticals",
      "Real Estate management / estate agent",
      "Tech",
      "Gambling / Betting",
      "Events",
      "Fashion",
      "Retail",
      "Entrepreneur / Business Owner / CEO",
    ],
  },
  {
    label: "Finance / Banking / Investments",
    options: [
      "Private banking",
      "Investment banking",
      "Stocks / Trading / Market making",
      "Real Estate",
      "Venture Capital",
      "Private Equity",
    ],
  },
  {
    label: "Hospitality & Wellness",
    options: ["Wellness", "Food", "Beverage", "Hotels", "Chef", "Drinks / Viticulture"],
  },
  {
    label: "IT / Software development / Coding",
    options: ["IT / Software development / Coding"],
  },
  {
    label: "Accounting",
    options: ["Accounting"],
  },
  {
    label: "Law",
    options: ["Lawyer", "Judge", "Paralegal", "Alternative Dispute Resolution"],
  },
  {
    label: "Design",
    options: ["Architecture", "Interior Design", "Industrial / Product design"],
  },
  {
    label: "Tradesperson",
    options: ["Tradesperson"],
  },
  {
    label: "Creative arts",
    options: [
      "Artist",
      "Art Adjacent",
      "Musician",
      "Acting / Theater",
      "Film production / Writing",
      "Video games",
      "Writer",
      "Fashion designer",
      "Model",
    ],
  },
  {
    label: "Media / Communications",
    options: [
      "Journalist",
      "Public Relations",
      "Marketing",
      "Communications",
      "Music / artist management",
      "Influencer / Social media",
    ],
  },
  {
    label: "Public Services",
    options: [
      "Politics",
      "Diplomacy",
      "International Relations",
      "Emergency services",
      "Social services",
    ],
  },
  {
    label: "Social / Not-for-profit",
    options: ["Social enterprise", "Environment", "Sustainability", "Foreign aid"],
  },
  {
    label: "Education & Research",
    options: [
      "Teaching",
      "Academia",
      "Student - Undergraduate",
      "Student Higher Education",
      "Student - PhD",
      "Student – Vocational training",
    ],
  },
  {
    label: "Agriculture / Nature",
    options: ["Gardener", "Florist", "Farmer", "Agriculture - Other"],
  },
  {
    label: "Off-piste",
    options: ["Drug dealer", "Prison inmate", "Spy", "Prostitution / Escort", "Only Fans"],
  },
  {
    label: "Other",
    options: ["Other"],
  },
];

interface OccupationProps {
  onValidityChange: (valid: boolean) => void;
  showWarning: boolean;
  renderWarnings: number;
}

const Occupation = ({
      onValidityChange, showWarning, renderWarnings,
}: OccupationProps) => {
    const { data, setData } = useFormContext();
      const [occupation, setOccupation] = useState(
    localStorage.getItem("occupation") || data.occupation || ""
  );
  const [otherOccupation, setOtherOccupation] = useState(
    localStorage.getItem("otherOccupation") || data.otherOccupation || ""
  );
  const [otherOccupationValue, setOtherOccupationValue] = useState(
    localStorage.getItem("otherOccupation") || data.otherOccupation || ""
  );

      useEffect(() => {
    if (showWarning) {
      toast.error("Please select your answer!", {
        action: {
          label: "Close",
          onClick: () => void 0,
        },
      });
    }
  }, [renderWarnings]);

  useEffect(() => {
      setData((prev) => ({
        ...prev,
        occupation,
        otherOccupation,
      }));
  
      localStorage.setItem("occupation", occupation);
      localStorage.setItem("otherOccupation", otherOccupation);
  
      if (occupation === "Other") {
        onValidityChange(Boolean(otherOccupation));
      } else {
        onValidityChange(Boolean(occupation) && Boolean(otherOccupation));
      }
  }, [occupation, otherOccupation]);

    return (
        <div className="space-y-4">
            <p className="text-center mb-4">
                <b>
                    Answer 3 multiple choice questions (pick only one most suitable answer).
                </b>
            </p>
            <p className="text-lg font-medium">
                1. Your occupation:
            </p>
                  <div className="w-full max-w-md space-y-2">
<Select.Root
  value={occupation === "Other" ? "Other" : otherOccupation}
  onValueChange={(value) => {
    const selectedGroup = occupationGroups.find((group) =>
      group.options.includes(value)
    );

    if (!selectedGroup) return;

    setOccupation(selectedGroup.label);

    if (selectedGroup.label === "Other") {
      setOtherOccupation("");
    } else {
      setOtherOccupation(value);
    }
  }}
>
        <Select.Trigger className="flex h-11 w-full items-center justify-between rounded-xl border border-zinc-300 bg-white px-3 text-sm shadow-sm outline-none focus:ring-2 focus:ring-zinc-900">
          <Select.Value placeholder="Select your occupation" />
          <Select.Icon>
            <ChevronDownIcon />
          </Select.Icon>
        </Select.Trigger>

        <Select.Portal>
          <Select.Content className="z-50 max-h-80 overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-lg">
            <Select.Viewport className="p-2">
              {occupationGroups.map((group) => (
                <Select.Group key={group.label}>
                  <Select.Label className="px-2 py-1.5 text-xs font-semibold uppercase text-zinc-500">
                    {group.label}
                  </Select.Label>

                  {group.options.map((option) => (
                    <Select.Item
                      key={`${group.label}-${option}`}
                      value={option}
                      className="relative flex cursor-pointer select-none items-center rounded-lg px-8 py-2 text-sm text-zinc-900 outline-none hover:bg-zinc-100 focus:bg-zinc-100"
                    >
                      <Select.ItemIndicator className="absolute left-2">
                        <CheckIcon />
                      </Select.ItemIndicator>
                      <Select.ItemText>{option}</Select.ItemText>
                    </Select.Item>
                  ))}
                </Select.Group>
              ))}
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>

      {occupation === "Other" && (
        <input
          value={otherOccupationValue}
          onChange={(e) => setOtherOccupationValue(e.target.value)}
          onBlur={(e) => setOtherOccupation(e.target.value)}
          placeholder="Please enter your occupation"
          className="h-11 w-full rounded-xl border border-zinc-300 px-3 text-sm shadow-sm outline-none focus:ring-2 focus:ring-zinc-900"
        />
      )}
    </div>
        </div>
    );
};

export default Occupation;