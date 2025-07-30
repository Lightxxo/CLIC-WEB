import config from "@/config";

interface Props {
  imgURL: string;
}

export default function PoolImage({ imgURL }: Props) {
  const { REMOTE, API_BASE_URL, API_PORT } = config;
  const apiUrl = `http${REMOTE ? "s" : ""}://${API_BASE_URL}:${API_PORT}`;
  const fullUrl = `${apiUrl}/${imgURL.startsWith("/") ? imgURL.slice(1) : imgURL}`;

  return (
    <div className="overflow-hidden rounded-xl shadow-md">
      <img src={fullUrl} alt="Event banner" className="w-full h-64 sm:h-96 object-cover" />
    </div>
  );
}
