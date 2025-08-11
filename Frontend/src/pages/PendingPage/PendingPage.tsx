import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Clock, Home } from "lucide-react";

const PendingPage: React.FC = () => {
  return (
    <div className="mt-12 min-h-screen flex justify-center items-start bg-gray-50 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md"
      >
        <Card className="text-center shadow-lg border border-gray-200">
          <CardContent className="p-6 space-y-6">
            <div className="flex justify-center">
              <Clock className="h-10 w-10 text-yellow-500" />
            </div>
            <h2 className="text-xl font-semibold text-gray-800">
              You're Almost There!
            </h2>
            <p className="text-gray-600 text-sm">
              Your profile is currently under review. You’ll be notified once
              you're approved to join.
            </p>
            <Button
              asChild
              className="w-full bg-black text-white hover:bg-gray-900"
            >
              <Link to="/" className="flex items-center justify-center gap-2">
                <Home className="w-4 h-4" />
                Return Home
              </Link>
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default PendingPage;
