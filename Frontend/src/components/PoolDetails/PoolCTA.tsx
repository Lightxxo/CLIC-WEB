import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2, Plus, Clock, X } from "lucide-react";
import config from "@/config";

interface Props {
  eventId?: string;
}

type Status = "loading" | "apply" | "pending" | "cancel";

export default function PoolCTA({ eventId }: Props) {
  const [status, setStatus] = useState<Status>("loading");
  const [loading, setLoading] = useState(false);

  const { REMOTE, API_BASE_URL, API_PORT } = config;
  const apiUrl = `http${REMOTE ? "s" : ""}://${API_BASE_URL}:${API_PORT}`;

  const mapStatus = (raw: string): Status => {
    switch (raw?.toLowerCase()) {
      case "pending":
        return "pending";
      case "approved":
        return "cancel";
      case "cancel":
        return "apply";
      default:
        return "apply";
    }
  };

  const fetchStatus = async () => {
    const token = localStorage.getItem("token");
    if (!token || !eventId) return;

    try {
      const res = await fetch(`${apiUrl}/eventUserStatus/${eventId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!res.ok) throw new Error("Failed to fetch event status");
      const result = await res.json();
      setStatus(mapStatus(result.status));
    } catch (e) {
      console.error("Status fetch failed", e);
      setStatus("apply");
    }
  };

  useEffect(() => {
    fetchStatus();
  }, [eventId]);

  const handleAction = async (btnTxt: "join" | "cancel") => {
    const token = localStorage.getItem("token");
    if (!token || !eventId) return;

    try {
      setLoading(true);
      const res = await fetch(`${apiUrl}/eventActionUpdate`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ btnTxt, eventId }),
      });

      if (!res.ok) throw new Error("Action failed");
      const result = await res.json();

      // Confirm backend status after success
      console.log("Action response status:", result.btnTxt);

      const newStatus = mapStatus(result.btnTxt);
      setStatus(newStatus);
    } catch (e) {
      console.error("Action failed", e);
    } finally {
      setLoading(false);
    }
  };

  if (status === "loading" || loading) {
    return (
      <Button disabled className="w-full">
        <Loader2 className="h-4 w-4 animate-spin mr-2" /> Loading
      </Button>
    );
  }

  if (status === "pending") {
    return (
      <Button disabled variant="secondary" className="w-full">
        <Clock className="h-4 w-4 mr-2" /> Pending
      </Button>
    );
  }

  if (status === "apply") {
    return (
      <Button onClick={() => handleAction("join")} className="w-full">
        <Plus className="h-4 w-4 mr-2" /> Apply
      </Button>
    );
  }

  return (
    <Button
      onClick={() => handleAction("cancel")}
      variant="destructive"
      className="w-full"
    >
      <X className="h-4 w-4 mr-2" /> Cancel
    </Button>
  );
}
