"use client";

import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { useFormContext } from "@/contexts/FormContext";
import { format } from "date-fns";
import {
  CalendarIcon,
  EyeOpenIcon,
  EyeClosedIcon,
} from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";

interface UserCredentialsProps {
  onValidityChange: (isValid: boolean) => void;
}

export default function UserCredentials({
  onValidityChange,
}: UserCredentialsProps) {
  const { data, setData } = useFormContext();

  // Initialize local state from context or defaults
  const [dob, setDob] = useState<Date | null>(data.dateOfBirth);
  const [password, setPassword] = useState(data.password || "");
  const [confirmPassword, setConfirmPassword] = useState(
    data.confirmPassword || ""
  );

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Sync local dob with context
  useEffect(() => {
    setData((prev) => ({ ...prev, dateOfBirth: dob }));
  }, [dob, setData]);

  // Sync local password with context
  useEffect(() => {
    setData((prev) => ({ ...prev, password }));
  }, [password, setData]);

  // Sync local confirmPassword with context
  useEffect(() => {
    setData((prev) => ({ ...prev, confirmPassword }));
  }, [confirmPassword, setData]);

  // Update username based on first and last name changes
  useEffect(() => {
    setData((prev) => ({
      ...prev,
      username: `${prev.firstName || ""} ${prev.lastName || ""}`.trim(),
    }));
  }, [data.firstName, data.lastName, setData]);

  // Validate all required fields + passwords match
  const isValid =
    !!data.firstName?.trim() &&
    !!data.lastName?.trim() &&
    !!dob &&
    !!password &&
    !!confirmPassword &&
    password === confirmPassword &&
    !!data.gender;

  // Report validity changes to parent
  useEffect(() => {
    onValidityChange(isValid);
  }, [isValid, onValidityChange]);

  const onDateSelect = (date: Date | undefined) => {
    setDob(date || null);
  };

  return (
    <div className="space-y-4">
      {/* First and Last Name side by side */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Input
          placeholder="First Name"
          value={data.firstName || ""}
          onChange={(e) => setData({ ...data, firstName: e.target.value })}
        />
        <Input
          placeholder="Last Name"
          value={data.lastName || ""}
          onChange={(e) => setData({ ...data, lastName: e.target.value })}
        />
      </div>

      {/* Date of Birth */}
      <div className="flex flex-col space-y-2">
        <label className="text-sm font-medium">Date of Birth</label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                "w-full justify-start text-left font-normal",
                !dob && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {dob ? format(dob, "PPP") : "Pick a date"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={dob || undefined}
              onSelect={onDateSelect}
              disabled={(date) => date > new Date()}
              autoFocus
              captionLayout="dropdown"
            />
          </PopoverContent>
        </Popover>
      </div>

      {/* Password and Confirm Password stacked vertically with eye icons */}
      <div className="space-y-3">
        {/* Password */}
        <div className="relative">
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-full ml-1 bg-white-100 hover:bg-gray-200 focus:outline-none focus-visible:outline-none focus-visible:ring-0"
            aria-label={showPassword ? "Hide password" : "Show password"}
            type="button"
          >
            {showPassword ? <EyeClosedIcon /> : <EyeOpenIcon />}
          </Button>
        </div>

        {/* Confirm Password */}
        <div className="relative">
          <Input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className={
              password !== confirmPassword && confirmPassword !== ""
                ? "border-red-600 ring-0 focus-visible:border-red-400 focus-visible:ring-red-400 !border-red-600"
                : ""
            }
          />
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full ml-1 bg-white-100 hover:bg-gray-200 focus:outline-none focus-visible:outline-none focus-visible:ring-0"
            aria-label={showConfirmPassword ? "Hide password" : "Show password"}
            type="button"
          >
            {showConfirmPassword ? <EyeClosedIcon /> : <EyeOpenIcon />}
          </Button>
        </div>
      </div>

      {/* Gender select */}
      <select
        value={data.gender || ""}
        onChange={(e) => setData({ ...data, gender: e.target.value })}
        className="w-full border rounded-md p-2 focus:outline-none focus:ring"
      >
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
    </div>
  );
}
