import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  type Dispatch,
  type SetStateAction,
  type ReactNode,
} from "react";
import config from "@/config";

const { REMOTE, API_BASE_URL, API_PORT } = config;

// ---- Context Type ----
interface InviteContextType {
  invitationCount: number;
  showNotificationBanner: boolean;
  fetchInvitationCount: () => Promise<void>;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
}

// ---- Default Value ----
const InviteContext = createContext<InviteContextType>({
  invitationCount: 0,
  showNotificationBanner: false,
  fetchInvitationCount: async () => {},
  setIsLoggedIn: (_value: SetStateAction<boolean>) => {},
});

// ---- Provider Props ----
interface InviteProviderProps {
  children: ReactNode;
}

// ---- Provider Component ----
export const InviteProvider: React.FC<InviteProviderProps> = ({ children }) => {
  const token = localStorage.getItem("token");
  const [invitationCount, setInvitationCount] = useState<number>(0);
  const [showNotificationBanner, setShowNotificationBanner] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const fetchInvitationCount = useCallback(async (): Promise<void> => {
    if (!token) return;

    try {
      const response = await fetch(
        `http${REMOTE ? "s" : ""}://${API_BASE_URL}:${API_PORT}/invites-banner`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) throw new Error("Failed to fetch invitation count");

      const data = await response.json();
      setInvitationCount(data);
    } catch (error) {
      console.error("Error fetching invitation count:", error);
    }
  }, [token]);

  useEffect(() => {
    if (token) setIsLoggedIn(true);
  }, [token]);

  useEffect(() => {
    if (isLoggedIn && invitationCount) setShowNotificationBanner(true);
    else setShowNotificationBanner(false);
  }, [isLoggedIn, invitationCount, location.pathname]);

  useEffect(() => {
    fetchInvitationCount();
  }, [fetchInvitationCount]);

  return (
    <InviteContext.Provider value={{ invitationCount, fetchInvitationCount, showNotificationBanner, setIsLoggedIn }}>
      {children}
    </InviteContext.Provider>
  );
};

// ---- Custom Hook ----
export const useInvite = (): InviteContextType => useContext(InviteContext);
