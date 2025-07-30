"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { format } from "date-fns";
import config from "@/config";
import { useNavigate } from "react-router-dom";

type Pool = {
  _id: string;
  title: string;
  imgURL: string;
  description: string;
  date_time: string;
  location: string;
};

export function PoolCard({ pool }: { pool: Pool }) {
  const navigate = useNavigate();
  const localDate = new Date(pool.date_time);
  const formattedTime = format(localDate, "EEEE, MMMM d, yyyy p");
  const { REMOTE, API_BASE_URL, API_PORT } = config;
  const apiUrl = `http${REMOTE ? "s" : ""}://${API_BASE_URL}${
    API_PORT ? `:${API_PORT}` : ""
  }`;
  const cleanPath = pool.imgURL.startsWith("/")
    ? pool.imgURL.slice(1)
    : pool.imgURL;
  const fullImageUrl = `${apiUrl}/${cleanPath}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      onClick={() => navigate(`/pools/${pool._id}`)}
      className="cursor-pointer"
    >
      <Card className="w-full overflow-hidden rounded-2xl">
        <div
          className="h-48 bg-cover bg-center relative"
          style={{ backgroundImage: `url('${fullImageUrl}')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent flex items-end">
            <div className="p-4 w-full">
              <h2 className="text-white text-xl font-bold truncate">
                {pool.title}
              </h2>
            </div>
          </div>
        </div>

        <CardContent className="p-4">
          <p className="text-sm text-gray-600 truncate">📍 {pool.location}</p>
          <p className="text-sm text-gray-600">🕒 {formattedTime}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
