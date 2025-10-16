"use client";

import { useState, useEffect, useCallback } from "react";
import config from "@/config";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Progress } from "@/components/ui/progress";

const { API_BASE_URL, API_PORT, REMOTE } = config;

interface Invitation {
  _id: string;
  event_id: string;
  title: string;
  user_id: string;
  userName: string;
  user_imgURL: string;
  status: "invited" | "accepted" | "rejected";
  createdAt: string;
  updatedAt: string;
}

type FilterStatus = "all" | "invited" | "accepted" | "rejected";

export default function Invites() {
  const [invitations, setInvitations] = useState<Invitation[]>([]);
  const [filteredInvitations, setFilteredInvitations] = useState<Invitation[]>(
    []
  );
  const [activeFilter, setActiveFilter] = useState<FilterStatus>("all");
  const [loading, setLoading] = useState(true);


  const fetchInvitations = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(
        `http${REMOTE ? "s" : ""}://${API_BASE_URL}:${API_PORT}/invites`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const data: Invitation[] = await res.json();
      const sortedData = data.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
      setInvitations(sortedData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching invitations:", error);
      setLoading(false);
    }
  };

  const handleInvitationAction = async (
    invitationId: string,
    eventId: string,
    action: "accepted" | "rejected"
  ) => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(
        `http${
          REMOTE ? "s" : ""
        }://${API_BASE_URL}:${API_PORT}/invite-interaction/${invitationId}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status: action, event_id: eventId }),
        }
      );
      if (res.ok) {
        setInvitations((prev) =>
          prev.map((inv) =>
            inv._id === invitationId ? { ...inv, status: action } : inv
          )
        );
      }
    } catch (error) {
      console.error("Error updating invitation:", error);
    }
  };

  const applyFilter = useCallback(
    (filter: FilterStatus) => {
      if (filter === "all") setFilteredInvitations(invitations);
      else
        setFilteredInvitations(
          invitations.filter((inv) => inv.status === filter)
        );
    },
    [invitations]
  );

  useEffect(() => {
    fetchInvitations();
  }, []);

  useEffect(() => {
    applyFilter(activeFilter);
  }, [invitations, activeFilter, applyFilter]);

  const getFilterLabel = (status: FilterStatus) => {
    switch (status) {
      case "invited":
        return "Pending";
      case "accepted":
        return "Accepted";
      case "rejected":
        return "Declined";
      default:
        return "All";
    }
  };

  const getFilterIcon = (status: FilterStatus) => {
    switch (status) {
      case "invited":
        return "⏰";
      case "accepted":
        return "✅";
      case "rejected":
        return "❌";
      default:
        return "👥";
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = now.getTime() - date.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0)
      return `Today ${date.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      })}`;
    if (diffDays === 1)
      return `Yesterday ${date.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      })}`;
    if (diffDays <= 7) return `${diffDays} days ago`;
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    })}`;
  };

  return (
    <div className="p-6 bg-white min-h-screen">
      {/* Filters */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-semibold text-gray-900">Pool Invites</h1>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2">
              <span>{getFilterIcon(activeFilter)}</span>
              <span>{getFilterLabel(activeFilter)}</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {(["all", "invited", "accepted", "rejected"] as FilterStatus[]).map(
              (filter) => (
                <DropdownMenuItem
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className="flex justify-between items-center"
                >
                  <span>
                    {getFilterIcon(filter)} {getFilterLabel(filter)}
                  </span>
                  {filter !== "all" && (
                    <span className="text-sm text-gray-500">
                      {
                        invitations.filter((inv) => inv.status === filter)
                          .length
                      }
                    </span>
                  )}
                </DropdownMenuItem>
              )
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Content */}
      {loading ? (
        <div className="flex flex-col items-center justify-center py-20 gap-4">
          <Progress className="w-24" />
          <p className="text-gray-500">Loading your invites...</p>
        </div>
      ) : filteredInvitations.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 gap-4">
          <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center text-4xl">
            📅
          </div>
          <h2 className="text-xl font-semibold text-gray-900">
            {activeFilter === "all"
              ? "No invites yet"
              : `No ${getFilterLabel(activeFilter).toLowerCase()} invites`}
          </h2>
          <p className="text-gray-500 text-center max-w-xs">
            {activeFilter === "all"
              ? "When you receive pool invitations, they'll appear here."
              : `You don't have any ${getFilterLabel(
                  activeFilter
                ).toLowerCase()} invitations at the moment.`}
          </p>
        </div>
      ) : (
        <div className="grid gap-4">
          {filteredInvitations.map((inv) => (
            <div
              key={inv._id}
              className="p-5 border rounded-lg shadow-sm bg-white"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="font-semibold text-gray-900">
                    {inv.status === "invited"
                      ? `You have been invited to join "${inv.title}"`
                      : inv.status === "accepted"
                      ? `You accepted invitation to "${inv.title}"`
                      : `You rejected invitation to "${inv.title}"`}
                  </p>
                  <p className="text-sm text-gray-400">
                    {formatDate(inv.createdAt)}
                  </p>
                </div>
                {inv.status !== "invited" && (
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      inv.status === "accepted"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {inv.status === "accepted" ? "✓ Accepted" : "✗ Declined"}
                  </span>
                )}
              </div>
              {inv.status === "invited" && (
                <div className="flex gap-3">
                  <Button
                    onClick={() =>
                      handleInvitationAction(inv._id, inv.event_id, "accepted")
                    }
                    className="flex-1"
                  >
                    ✓ Accept
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() =>
                      handleInvitationAction(inv._id, inv.event_id, "rejected")
                    }
                    className="flex-1"
                  >
                    ✗ Decline
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
