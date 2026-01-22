import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2, Plus, Clock, X, Check  } from "lucide-react";
import config from "@/config";
import { useInvite } from "@/contexts/InviteContext";

interface Props {
  eventId?: string;
  poolStatus: string;
  fetchPool: any;
}

export default function PoolCTA({ eventId, poolStatus, fetchPool }: Props) {
  const [loading, setLoading] = useState(false);
  const {fetchInvitationCount} = useInvite();
  const { REMOTE, API_BASE_URL, API_PORT } = config;
  const apiUrl = `http${REMOTE ? "s" : ""}://${API_BASE_URL}:${API_PORT}`;
  const handleAction = async (userStatus: string) => {
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
        body: JSON.stringify({ userStatus, eventId }),
      });

      if (!res.ok) throw new Error("Action failed");
      else {
        fetchPool();
        if (userStatus == "invite-accept" || userStatus == "invite-reject") fetchInvitationCount();
      }
    } catch (e) {
      console.error("Action failed", e);
    } finally {
      setLoading(false);
    }
  };

  if (poolStatus === undefined || loading) {
    return (
      <Button disabled className="w-full bg-gray-400 text-back">
        <Loader2 className="h-4 w-4 animate-spin mr-2" /> Loading
      </Button>
    );
  }

  if (poolStatus === "waiting") {
    return (
      <Button
        disabled
        variant="secondary"
        className="w-full bg-gray-400 text-back"
      >
        <Clock className="h-4 w-4 mr-2" /> RSVP Waiting
      </Button>
    );
  }

  if (poolStatus === "pending") {
    return (
      <Button
        disabled
        variant="secondary"
        className="w-full bg-gray-400 text-back"
      >
        <Clock className="h-4 w-4 mr-2" /> RSVP Pending
      </Button>
    );
  }

  if (poolStatus === "new") {
    return (
      <Button
        onClick={() => handleAction(poolStatus)}
        className="w-full cursor-pointer bg-[#005A2D] hover:bg-[#005A2D]/90 text-white"
      >
        <Plus className="h-4 w-4 mr-2" /> Apply
      </Button>
    );
  }

  if (poolStatus === "closed") {
    return (
      <Button
        onClick={() => handleAction(poolStatus)}
        className="w-full cursor-pointer bg-[#005A2D] hover:bg-[#005A2D]/90 text-white"
      >
        <Plus className="h-4 w-4 mr-2" /> Join Waiting List
      </Button>
    );
  }

  if (poolStatus === "approved") {
    return (
      <Button
        onClick={() => handleAction(poolStatus)}
        className="w-full cursor-pointer bg-[#F05A23] hover:bg-[#F05A23]/90 text-white"
      >
        <X className="h-4 w-4 mr-2" /> Cancel
      </Button>
    );
  }

  if (poolStatus === "invited") {
    return (
      <div className="flex">
        <Button
          onClick={() => handleAction("invite-accept")}
          className="cursor-pointer bg-[#005A2D] hover:bg-[#005A2D]/90 text-white"
        >
          <Check />Accept
        </Button>
        <Button
          onClick={() => handleAction("invite-reject")}
          className="ms-1 cursor-pointer bg-[#F05A23] hover:bg-[#F05A23]/90 text-white"
        >
         <X className="h-4 w-4" />Reject
        </Button>
      </div>
    );
  }

  return (
    <Button
      disabled
      variant="secondary"
      className="w-full bg-gray-400 text-back"
    >
      <X className="h-4 w-4 mr-2" /> Invalid
    </Button>
  );
}
