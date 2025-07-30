// "use client";

// import { useParams, useNavigate } from "react-router-dom";
// import { usePoolContext } from "@/contexts/PoolContext";
// import { useEffect, useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Loader2, Plus, Clock, X, ArrowLeft } from "lucide-react";
// import config from "@/config";

// export default function PoolDetails() {
//   const { id } = useParams<{ id: string }>();
//   const { data, setData } = usePoolContext();
//   const navigate = useNavigate();

//   const [pool, setPool] = useState(id ? data[id] : null);
//   const [loadingPool, setLoadingPool] = useState(!pool);
//   const [status, setStatus] = useState<"loading" | "apply" | "pending" | "cancel">("loading");
//   const [buttonLoading, setButtonLoading] = useState(false);

//   const { REMOTE, API_BASE_URL, API_PORT } = config;
//   const apiUrl = `http${REMOTE ? "s" : ""}://${API_BASE_URL}:${API_PORT}`;

//   useEffect(() => {
//     if (!id) return;
//     if (pool) return;

//     const fetchPool = async () => {
//       setLoadingPool(true);
//       try {
//         const token = localStorage.getItem("token");
//         if (!token) throw new Error("No token found");

//         const res = await fetch(`${apiUrl}/eventForApp/${id}`, {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         if (!res.ok) throw new Error("Pool not found");
//         const poolData = await res.json();

//         setPool(poolData);
//         setData((prev) => ({ ...prev, [id]: poolData }));
//       } catch (error) {
//         console.error("Failed to fetch pool by ID:", error);
//         setPool(null);
//       } finally {
//         setLoadingPool(false);
//       }
//     };

//     fetchPool();
//   }, [id, pool, apiUrl, setData]);

//   useEffect(() => {
//     const fetchStatus = async () => {
//       const token = localStorage.getItem("token");
//       if (!token || !id) return;

//       try {
//         const res = await fetch(`${apiUrl}/eventUserStatus/${id}`, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         const result = await res.json();
//         setStatus(mapStatus(result.status));
//       } catch (error) {
//         console.error("Failed to fetch status", error);
//         setStatus("apply");
//       }
//     };

//     fetchStatus();
//   }, [id]);

//   const mapStatus = (raw: string): "apply" | "pending" | "cancel" => {
//     switch (raw?.toLowerCase()) {
//       case "pending":
//         return "pending";
//       case "approved":
//         return "cancel";
//       case "cancel":
//         return "apply";
//       default:
//         return "apply";
//     }
//   };

//   const handleAction = async (btnTxt: "join" | "cancel") => {
//     if (!id) return;
//     const token = localStorage.getItem("token");
//     if (!token) return;

//     try {
//       setButtonLoading(true);
//       const res = await fetch(`${apiUrl}/eventActionUpdate`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({ btnTxt, eventId: id }),
//       });

//       if (!res.ok) throw new Error("Action failed");
//       const result = await res.json();

//       // Dynamically update the UI based on API success
//       if (btnTxt === "join") setStatus("pending");
//       if (btnTxt === "cancel") setStatus("apply");
//     } catch (err) {
//       console.error("Failed to update status", err);
//     } finally {
//       setButtonLoading(false);
//     }
//   };

//   const renderCTA = () => {
//     if (status === "loading" || buttonLoading) {
//       return (
//         <Button disabled className="w-full">
//           <Loader2 className="h-4 w-4 animate-spin mr-2" /> Loading
//         </Button>
//       );
//     }

//     if (status === "pending") {
//       return (
//         <Button disabled variant="secondary" className="w-full">
//           <Clock className="h-4 w-4 mr-2" /> Pending
//         </Button>
//       );
//     }

//     if (status === "apply") {
//       return (
//         <Button className="w-full" onClick={() => handleAction("join")}>
//           <Plus className="h-4 w-4 mr-2" /> Apply
//         </Button>
//       );
//     }

//     return (
//       <Button variant="destructive" className="w-full" onClick={() => handleAction("cancel")}>
//         <X className="h-4 w-4 mr-2" /> Cancel
//       </Button>
//     );
//   };

//   if (loadingPool) {
//     return (
//       <div className="p-4 text-center text-gray-600">
//         <Loader2 className="mx-auto animate-spin" />
//       </div>
//     );
//   }

//   if (!pool) {
//     return <div className="p-4 text-center text-gray-500">Pool not found.</div>;
//   }

//   return (
//     <div className="px-4 py-6 max-w-4xl mx-auto space-y-6">
//       <div className="flex items-center gap-2 sm:hidden">
//         <button
//           onClick={() => navigate("/pools")}
//           className="flex items-center text-sm text-blue-600 hover:underline"
//         >
//           <ArrowLeft className="h-4 w-4 mr-1" /> Back to all pools
//         </button>
//       </div>

//       <div className="overflow-hidden rounded-xl shadow-md">
//         <img
//           src={`${apiUrl}/${pool.imgURL.startsWith("/") ? pool.imgURL.slice(1) : pool.imgURL}`}
//           alt={pool.title}
//           className="w-full h-64 sm:h-96 object-cover"
//         />
//       </div>

//       <div className="space-y-2">
//         <h1 className="text-3xl font-bold text-gray-800">{pool.title}</h1>
//         <p className="text-gray-600 text-base">📍 {pool.location}</p>
//         <p className="text-gray-600 text-base">
//           🕒 {new Date(pool.date_time).toLocaleString()}
//         </p>
//         <p className="text-gray-700 leading-relaxed text-base whitespace-pre-line">
//           {pool.description}
//         </p>
//       </div>

//       <div>{renderCTA()}</div>
//     </div>
//   );
// }

"use client";

import { useParams, useNavigate } from "react-router-dom";
import { usePoolContext } from "@/contexts/PoolContext";
import { useEffect, useState } from "react";
import { Loader2, ArrowLeft } from "lucide-react";
import config from "@/config";
import PoolImage from "@/components/PoolDetails/PoolImage";
import PoolHeader from "@/components/PoolDetails/PoolHeader";
import PoolCTA from "@/components/PoolDetails/PoolCTA";
export default function PoolDetails() {
  const { id } = useParams<{ id: string }>();
  const { data, setData } = usePoolContext();
  const navigate = useNavigate();
  const [pool, setPool] = useState(id ? data[id] : null);
  const [loading, setLoading] = useState(!pool);

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
      <div className="flex items-center gap-2 sm:hidden">
        <button
          onClick={() => navigate("/pools")}
          className="flex items-center text-sm text-blue-600 hover:underline"
        >
          <ArrowLeft className="h-4 w-4 mr-1" /> Back to all pools
        </button>
      </div>

      <PoolImage imgURL={pool.imgURL} />
      <PoolHeader
        title={pool.title}
        location={pool.location}
        date_time={pool.date_time}
        description={pool.description}
      />
      <PoolCTA eventId={id} />
    </div>
  );
}
