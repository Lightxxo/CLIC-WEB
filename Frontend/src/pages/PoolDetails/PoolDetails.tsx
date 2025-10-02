"use client";

import { useParams } from "react-router-dom";
import { usePoolContext } from "@/contexts/PoolContext";
import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import config from "@/config";
import PoolHeader from "@/components/PoolDetails/PoolHeader";
import PoolFooter from "@/components/PoolDetails/PoolFooter";
export default function PoolDetails() {
  const { id } = useParams<{ id: string }>();
  const { data, setData } = usePoolContext();
  const [pool, setPool] = useState(id ? data[id] : null);
  const [loading, setLoading] = useState(!pool);
  const [poolStatus, setPoolStatus] = useState("loading");

  const { REMOTE, API_BASE_URL, API_PORT } = config;
  const apiUrl = `http${REMOTE ? "s" : ""}://${API_BASE_URL}:${API_PORT}`;

  useEffect(() => {
    if (!id || pool) return;

    const fetchPool = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem("token");
        const res = await fetch(`${apiUrl}/eventForApp/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const json = await res.json();
        setPool(json);
        setData((prev) => ({ ...prev, [id]: json }));
      } catch (e) {
        console.error("Failed to fetch pool:", e);
        setPool(null);
      } finally {
        setLoading(false);
      }
    };

    fetchPool();
  }, [id, pool, setData]);

  if (loading) {
    return (
      <div className="p-4 text-center text-gray-600">
        <Loader2 className="mx-auto animate-spin" />
      </div>
    );
  }

  if (!pool) {
    return <div className="p-4 text-center text-gray-500">Pool not found.</div>;
  }

  return (
    <div className="px-4 py-6 max-w-4xl mx-auto space-y-6">
      <p className="flex justify-center m-0 p-6 bg-[#D9D9D9]"><img src={apiUrl + "/" + pool.imgURL} alt="Event banner" className="" /></p>
      
      <PoolHeader
        title={pool.title}
        location={pool.location}
        date_time={pool.date_time}
        description={pool.description}
        poolStatus={poolStatus}
        setPoolStatus={setPoolStatus}
        eventId={id}
      />

      <PoolFooter></PoolFooter>
    </div>
  );
}
