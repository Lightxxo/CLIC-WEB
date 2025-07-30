interface Props {
  title: string;
  location: string;
  date_time: string;
  description: string;
}

export default function PoolHeader({
  title,
  location,
  date_time,
  description,
}: Props) {
  return (
    <div className="space-y-2">
      <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
      <p className="text-gray-600 text-base">📍 {location}</p>
      <p className="text-gray-600 text-base">
        🕒 {new Date(date_time).toLocaleString()}
      </p>
      <p className="text-gray-700 leading-relaxed text-base whitespace-pre-line">
        {description}
      </p>
    </div>
  );
}
