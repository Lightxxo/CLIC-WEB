"use client";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { options, toLocalString } from "@/lib/dateParser";

type Pool = {
  _id: string;
  title: string;
  imgURL: string;
  description: string;
  date_time: string;
  location: string;
  userStatus: string;
};

export function PoolCard({ pool }: { pool: Pool }) {
  const navigate = useNavigate();
  const cleanPath = pool.imgURL.startsWith("/")
    ? pool.imgURL.slice(1)
    : pool.imgURL;
  const fullImageUrl = `https://twoclicclub.ams3.cdn.digitaloceanspaces.com/${cleanPath}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      onClick={() => navigate(`/pools/${pool._id}`)}
      className="cursor-pointer bg-[#D9D9D9] p-5 shadow-[0_3px_#8c8c8c]"
    >
          <img src={fullImageUrl} />
              <h2 className="text-2xl font-bold truncate mb-4">
                {pool.title}
              </h2>
          <p className="text-sm truncate">📍 {pool.location}</p>
          <p className="text-sm">🕒 {new Date(toLocalString(pool.date_time)).toLocaleString('en-GB', options)}</p>
    </motion.div>
  );
}
