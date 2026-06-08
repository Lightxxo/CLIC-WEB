import { useEffect, useState } from "react";
import { useFormContext } from "@/contexts/FormContext";
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
  
      onValidityChange(Boolean(occupation) && Boolean(otherOccupation));
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

          <select
            value={occupation}
            onChange={(e) => setOccupation(e.target.value)}
            className="w-full border rounded-md p-2 focus:outline-none"
          >
            <option value="">Select Industry *</option>
            {occupationGroups.map((x, y) => (
              <option key={y} value={x.label}>{x.label}</option>
            ))}
          </select>

          {occupation && occupation !== "Other" && 
              <select
            value={otherOccupation}
            onChange={(e) => setOtherOccupation(e.target.value)}
            className="w-full border rounded-md p-2 focus:outline-none"
          >
            <option value="">Select Occupation *</option>
            {occupationGroups.find((group) =>
                group.label == occupation
              )?.options.map((x, y) => (
              <option key={y} value={x}>{x}</option>
            ))}
          </select>
          }

      {occupation === "Other" && (
        <input
          value={otherOccupationValue}
          onChange={(e) => setOtherOccupationValue(e.target.value)}
          onBlur={(e) => setOtherOccupation(e.target.value)}
          placeholder="Please enter your occupation"
          className="h-11 w-full rounded-md border border-zinc-300 px-3 text-sm shadow-sm outline-none focus:ring-2 focus:ring-zinc-900"
        />
      )}
    </div>
        </div>
    );
};

export default Occupation;