import PoolCTA from "./PoolCTA";

interface Props {
  title: string;
  location: string;
  date_time: string;
  description: string;
  poolStatus: string;
  setPoolStatus: (status: string) => void;
  eventId?: string;
}

export default function PoolHeader({
  title,
  location,
  date_time,
  description,
  poolStatus,
  setPoolStatus,
  eventId,
}: Props) {
  // Format date in European style: DD/MM/YYYY HH:mm
  const formattedDate = new Date(date_time).toLocaleString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="p-6 bg-[#D9D9D9] mb-4 shadow-[0_3px_#8c8c8c]">
 
      <div className="flex items-center gap-3 mb-10">
        <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
        {poolStatus === "cancel" && (
          <span className="px-2 py-0.5 text-xs font-medium border border-green-500 text-green-600 rounded-full">
            Confirmed
          </span>
        )}
      </div>

      {/* Location + CTA */}
      <div className="flex items-center justify-between gap-4">
        <p className="text-gray-600 text-base">📍 {location}</p>
        <div className="w-auto">
          <PoolCTA
            eventId={eventId}
            poolStatus={poolStatus}
            setPoolStatus={setPoolStatus}
          />
        </div>
      </div>

      {/* Time */}
      <p className="text-gray-600 text-base">🕒 {formattedDate}</p>

      {/* Description */}
      <p className="text-gray-700 leading-relaxed text-base whitespace-pre-line">
        {description}
      </p>
    </div>
  );
}
