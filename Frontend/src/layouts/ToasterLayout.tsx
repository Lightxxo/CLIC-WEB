import type { ReactNode } from "react";
import { Toaster } from "@/components/ui/sonner"

const ToasterLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            <section>{children}</section>
            <Toaster />
        </div>
    );
};

export default ToasterLayout;