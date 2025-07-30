"use client";

import { useParams } from "react-router-dom";

export default function PoolDetails() {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Pool Details</h1>
      <p className="text-gray-600 mt-2">Pool ID: {id}</p>
    </div>
  );
}
