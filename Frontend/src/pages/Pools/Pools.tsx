"use client";

import { useEffect, useState } from "react";
import { SkeletonPoolCard } from "@/components/Pools/SkeletonPoolsCard";
import { PoolCard } from "@/components/Pools/PoolCard";
import config from "@/config";
import { usePoolContext } from "@/contexts/PoolContext";

export default function Pools() {
  const [loading, setLoading] = useState(true);
  const { setData, data } = usePoolContext();

  const { REMOTE, API_BASE_URL, API_PORT } = config;
  const apiUrl = `http${REMOTE ? "s" : ""}://${API_BASE_URL}:${API_PORT}`;

  useEffect(() => {
    const fetchPools = async () => {
      try {
        const res = await fetch(`${apiUrl}/future-events-website`);
        const data = await res.json();

        const mapped = data.reduce((acc: any, curr: any) => {
          const { _id, ...rest } = curr;
          acc[_id] = rest;
          return acc;
        }, {});

        setData(mapped);
      } catch (err) {
        console.error("Failed to fetch events", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPools();
  }, []);

  const poolEntries = Object.entries(data);

  return (
    <div className="p-4">
      {/* Responsive mobile-first heading */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6">
        Explore pools
      </h1>

      {/* Pool grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {loading
          ? Array.from({ length: 3 }).map((_, i) => (
              <SkeletonPoolCard key={i} />
            ))
          : poolEntries.map(([id, pool]) => (
              <PoolCard key={id} pool={{ _id: id, ...pool }} />
            ))}
      </div>
    </div>
  );
}
