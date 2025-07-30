"use client";

import { useEffect, useState } from "react";
import { SkeletonPoolCard } from "@/components/Pools/SkeletonPoolsCard";
import { PoolCard } from "@/components/Pools/PoolCard";
import config from "@/config";

type Pool = {
  _id: string;
  title: string;
  imgURL: string;
  description: string;
  date_time: string;
  location: string;
};

export default function Pools() {
  const [pools, setPools] = useState<Pool[] | null>(null);
  const [loading, setLoading] = useState(true);
  const { REMOTE, API_BASE_URL, API_PORT } = config;
  const apiUrl = `http${REMOTE ? "s" : ""}://${API_BASE_URL}:${API_PORT}`;
  console.log("API URL:", `${apiUrl}/future-events-website`);

  useEffect(() => {
    const fetchPools = async () => {
      try {
        const res = await fetch(`${apiUrl}/future-events-website`);
        const data = await res.json();
        setPools(data);

        console.log("Fetched pools:", data);
      } catch (err) {
        console.error("Failed to fetch events", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPools();
  }, []);

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {loading
        ? Array.from({ length: 3 }).map((_, i) => <SkeletonPoolCard key={i} />)
        : pools?.map((pool) => <PoolCard key={pool._id} pool={pool} />)}
    </div>
  );
}
