"use client";

import { useEffect, useState, useCallback, useMemo } from "react";
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

  const [dob, setDob] = useState(data.dateOfBirth);
  const [password, setPassword] = useState(data.password || "");
  const [confirmPassword, setConfirmPassword] = useState(
    data.confirmPassword || ""
  );
  const [occupation, setOccupation] = useState("");
  const [live, setLive] = useState("");
  const [from, setFrom] = useState("");
  const [cities, setCities] = useState("");
  const [about, setAbout] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useEffect(() => {
    const handler = setTimeout(() => {
      setData((prev) => ({ ...prev, dateOfBirth: dob }));
    }, 100);
    return () => clearTimeout(handler);
  }, [dob, setData]);

  useEffect(() => {
    setData((prev) => ({ ...prev, password }));
  }, [password, setData]);

  useEffect(() => {
    setData((prev) => ({ ...prev, confirmPassword }));
  }, [confirmPassword, setData]);

  useEffect(() => {
    setData((prev) => ({ ...prev, occupation, live, from, cities, about }));
  }, [occupation, live, from, cities, about, setData]);

  useEffect(() => {
    setData((prev) => ({
      ...prev,
      username: `${prev.firstName || ""}`.trim(),
    }));
  }, [data.firstName, data.lastName, setData]);

  const isValid =
    !!data.firstName?.trim() &&
    !!data.lastName?.trim() &&
    !!dob &&
    !!password &&
    !!confirmPassword &&
    password === confirmPassword &&
    !!data.gender &&
    !!from;

  useEffect(() => {
    onValidityChange(isValid);
  }, [isValid, onValidityChange]);

  const onDateSelect = useCallback((date: Date | undefined) => {
     if (date) setDob(date!.toString());
  }, []);

  const formattedDob = useMemo(
    () => (dob ? format(dob, "PPP") : "Pick a date"),
    [dob]
  );

  return (
    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
      <p className="text-sm text-gray-600">
        Except for your last name and date of birth, the following answers will
        appear on your profile.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Input
          placeholder="First Name"
          value={data.firstName || ""}
          onChange={(e) => setData({ ...data, firstName: e.target.value })}
          autoComplete="given-name"
        />
        <Input
          placeholder="Last Name"
          value={data.lastName || ""}
          onChange={(e) => setData({ ...data, lastName: e.target.value })}
          autoComplete="family-name"
        />
      </div>

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
              {formattedDob}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={dob == "" ? new Date() : new Date(dob)}
              onSelect={onDateSelect}
              disabled={(date) => date > new Date()}
              autoFocus
              captionLayout="dropdown"
            />
          </PopoverContent>
        </Popover>
      </div>

      <Input
        placeholder="Occupation"
        value={occupation}
        onChange={(e) => setOccupation(e.target.value)}
      />
      <Input
        placeholder="Where do you live?"
        value={live}
        onChange={(e) => setLive(e.target.value)}
      />
      <Input
        placeholder="Where are you from? *"
        value={from}
        onChange={(e) => setFrom(e.target.value)}
      />
      <Input
        placeholder="Cities you frequent"
        value={cities}
        onChange={(e) => setCities(e.target.value)}
      />
      <Input
        placeholder="Add what you want other members to know about you"
        value={about}
        onChange={(e) => setAbout(e.target.value)}
      />

      <div className="space-y-3">
        <div className="relative">
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="new-password"
          />
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-full ml-1 bg-white-100 hover:bg-gray-200"
            type="button"
          >
            {showPassword ? <EyeClosedIcon /> : <EyeOpenIcon />}
          </Button>
        </div>

        <div className="relative">
          <Input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className={
              password !== confirmPassword && confirmPassword !== ""
                ? "border-red-600 ring-0 focus-visible:border-red-400"
                : ""
            }
            autoComplete="new-password"
          />
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full ml-1 bg-white-100 hover:bg-gray-200"
            type="button"
          >
            {showConfirmPassword ? <EyeClosedIcon /> : <EyeOpenIcon />}
          </Button>
        </div>
      </div>

      <select
        value={data.gender || ""}
        onChange={(e) => setData({ ...data, gender: e.target.value })}
        className="w-full border rounded-md p-2 focus:outline-none"
        autoComplete="sex"
      >
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
    </form>
  );
}
