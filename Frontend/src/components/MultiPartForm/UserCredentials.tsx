"use client";
import type React from "react";
import { useEffect, useState, useCallback, useMemo, useRef } from "react";
import { Input } from "@/components/ui/input";
import { useFormContext } from "@/contexts/FormContext";
import { format } from "date-fns";
import {
  CalendarIcon,
  EyeOpenIcon,
  EyeClosedIcon,
  UploadIcon,
  ImageIcon
} from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import SocialMediaInp from "../SocialMediaInp/SocialMediaInp";
import { toast } from "sonner";
import SearchSelect from "./CityAndCountryInput";
import config from "@/config";

type Country = {
  id: number;
  name: string;
  iso2: string;
  emoji: string;
};

type City = {
  id: number;
  name: string;
  state_name: string;
  latitude: string;
  longitude: string;
};

interface UserCredentialsProps {
  onValidityChange: (isValid: boolean) => void;
  showWarning: boolean;
  renderWarnings: number;
}

export default function UserCredentials({
  onValidityChange, showWarning, renderWarnings,
}: UserCredentialsProps) {
  const { data, setData } = useFormContext();
  const fileInputRef = useRef<HTMLInputElement>(null);

  // --- Local states ---
  const [dob, setDob] = useState<string>(
    localStorage.getItem("dateOfBirth") || data.dateOfBirth
  );
  const [password, setPassword] = useState<string>(data.password || "");
  const [confirmPassword, setConfirmPassword] = useState<string>(
    data.confirmPassword || ""
  );
  const [about, setAbout] = useState<string>(
    localStorage.getItem("about") || data.about || ""
  );

  const [socialMediaObj, setSocialMediaObj] = useState<string>(
    localStorage.getItem("socialMediaObj") || data.socialMediaObj || ""
  );

  const [socialMediaHandle, setSocialMediaHandle] = useState<string>(
    localStorage.getItem("socialMediaHandle") || data.socialMediaHandle || ""
  );

  const [whereLiveCountry, setWhereLiveCountry] = useState<Country | null>(null);
  const [whereLiveCity, setWhereLiveCity] = useState<City | null>(null);

  const [whereFromCountry, setWhereFromCountry] = useState<Country | null>(null);
  const [whereFromCity, setWhereFromCity] = useState<City | null>(null);

  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null); // removed localStorage

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useEffect(() => {
    if (showWarning) {
      toast.error("Please fill up all required fields!", {
        action: {
          label: "Close",
          onClick: () => void 0,
        },
      });
    }
  }, [renderWarnings])

  // --- Sync local state with global context + localStorage ---
  useEffect(() => {
    setData((prev) => ({ ...prev, dateOfBirth: dob }));
    localStorage.setItem("dateOfBirth", dob || "");
  }, [dob, setData]);

  useEffect(() => {
    setData((prev) => ({ ...prev, password }));
  }, [password, setData]);

  useEffect(() => {
    setData((prev) => ({ ...prev, confirmPassword }));
  }, [confirmPassword, setData]);

  useEffect(() => {
    setData((prev) => ({ ...prev, whereLiveCountry, whereLiveCity, whereFromCountry, whereFromCity, about, socialMediaObj, socialMediaHandle }));
    localStorage.setItem("whereLiveCountry", JSON.stringify(whereLiveCountry));
    localStorage.setItem("whereLiveCity", JSON.stringify(whereLiveCity));
    localStorage.setItem("whereFromCountry", JSON.stringify(whereFromCountry));
    localStorage.setItem("whereFromCity", JSON.stringify(whereFromCity));
    localStorage.setItem("about", about);
    localStorage.setItem("socialMediaObj", socialMediaObj);
    localStorage.setItem("socialMediaHandle", socialMediaHandle);
  }, [whereLiveCountry, whereLiveCity, whereFromCountry, whereFromCity, about, socialMediaObj, socialMediaHandle, setData]);
  
  useEffect(() => {
    setData((prev) => ({
      ...prev,
      username: `${prev.firstName || ""} ${prev.lastName || ""}`.trim(),
    }));
  }, [data.firstName, data.lastName, setData]);

  // --- Image handlers ---
  const handleImageSelect = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file && file.type.startsWith("image/")) {
        setSelectedImage(file);
        setData((prev) => ({ ...prev, profileImage: file }));
        // generate preview for immediate display only, not stored
        const reader = new FileReader();
        reader.onload = () => setImagePreview(reader.result as string);
        reader.readAsDataURL(file);
      }
    },
    []
  );

  const handleReuploadClick = useCallback(() => {
    fileInputRef.current?.click();
  }, []);
  const handleImageAreaClick = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  // --- Validity check ---
  const isValid = 
  !!data.firstName?.trim() &&
    !!data.lastName?.trim() &&
    !!dob &&
    !!whereLiveCountry &&
    !!whereLiveCity &&
    !!whereFromCountry &&
    !!whereFromCity &&
    !!password &&
    !!confirmPassword &&
    password === confirmPassword &&
    !!data.gender &&
    (data.gender == "Other" ? !!data.otherGender : true) &&
    !!data.sexualOrientation &&
    (data.sexualOrientation == "Other" ? !!data.otherSexualOrientation : true) &&
    (!!selectedImage || !!imagePreview);

  useEffect(() => {
    onValidityChange(isValid);
  }, [isValid, onValidityChange]);

  // --- Date picker ---
  const onDateSelect = useCallback((date: Date | undefined) => {
    if (date) setDob(date.toString());
  }, []);

  const formattedDob = useMemo(
    () => (dob ? format(new Date(dob), "PPP") : "Pick a date"),
    [dob]
  );
  function socialMediaPlaceholderInput() {
    if (socialMediaObj == "instagram") return "@username";
    else if (socialMediaObj == "x") return "@username";
    else if (socialMediaObj == "facebook") return "facebook.com/username";
    else if (socialMediaObj == "substack") return "@username";
    else if (socialMediaObj == "linkedin") return "@username";
    else return "";
  }

  const { REMOTE, API_BASE_URL, API_PORT } = config;
  
  return (
    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
      <p className="text-sm text-gray-600">
        Except for your last name and date of birth, the following data might
        appear on your profile. <br /><br />
        Require fields are marked with *
      </p>

      {/* Profile Picture */}
      <div className="flex flex-col space-y-2">
        <label className="text-sm font-medium">Profile Picture *</label>
        <div className="flex flex-col items-start gap-3">
          <div
            onClick={handleImageAreaClick}
            className="w-32 h-32 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-gray-400 transition-colors bg-gray-50"
          >
            {imagePreview ? (
              <img
                src={imagePreview}
                alt="Profile preview"
                className="w-full h-full object-cover rounded-lg"
              />
            ) : (
              <>
                <ImageIcon className="w-8 h-8 text-gray-400 mb-2" />
                <span className="text-sm text-gray-500 text-center">
                  Select Image
                </span>
              </>
            )}
          </div>

          {selectedImage && (
            <div className="flex flex-col gap-2">
              <Button
                type="button"
                variant="outline"
                onClick={handleReuploadClick}
                className="w-auto bg-transparent"
              >
                <UploadIcon className="w-4 h-4 mr-2" />
                Reupload Image
              </Button>
              <p className="text-xs text-gray-500">
                {selectedImage.name} (
                {(selectedImage.size / 1024 / 1024).toFixed(2)} MB)
              </p>
            </div>
          )}
        </div>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleImageSelect}
          className="hidden"
        />
      </div>

      {/* Name */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Input
          placeholder="First Name *"
          value={data.firstName || ""}
          onChange={(e) => {
            setData({ ...data, firstName: e.target.value });
            localStorage.setItem("firstName", e.target.value);
          }}
          autoComplete="given-name"
        />
        <Input
          placeholder="Last Name *"
          value={data.lastName || ""}
          onChange={(e) => {
            setData({ ...data, lastName: e.target.value });
            localStorage.setItem("lastName", e.target.value);
          }}
          autoComplete="family-name"
        />
      </div>

      {/* Date of Birth */}
      <div className="flex flex-col space-y-2">
        <label className="text-sm font-medium">Date of Birth *</label>
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

      {/* Other inputs */}

      <label className="text-sm font-medium">Where do you live? *</label>
<SearchSelect<Country>
  label="Country"
  placeholder="Search country"
  endpoint={`http${REMOTE ? "s" : ""}://${API_BASE_URL}:${API_PORT}/countries`}
  value={whereLiveCountry}
  onChange={(c) => {
    setWhereLiveCountry(c);
  }}
  getLabel={(c) => c.name}
/>

<SearchSelect<City>
  label="City"
  placeholder="Search city"
  endpoint={
    `http${REMOTE ? "s" : ""}://${API_BASE_URL}:${API_PORT}${whereLiveCountry ? `/cities?countryId=${whereLiveCountry.id}` : "/cities"}`
  }
  value={whereLiveCity}
  onChange={setWhereLiveCity}
  disabled={!whereLiveCountry}
  getLabel={(c) => c.name}
/>
<label className="text-sm font-medium">Where are you from? *</label>
<SearchSelect<Country>
  label="Country"
  placeholder="Search country"
  endpoint={`http${REMOTE ? "s" : ""}://${API_BASE_URL}:${API_PORT}/countries`}
  value={whereFromCountry}
  onChange={(c) => {
    setWhereFromCountry(c);
  }}
  getLabel={(c) => c.name}
/>

<SearchSelect<City>
  label="City"
  placeholder="Search city"
  endpoint={
    `http${REMOTE ? "s" : ""}://${API_BASE_URL}:${API_PORT}${whereFromCountry ? `/cities?countryId=${whereFromCountry.id}` : "/cities"}`
  }
  value={whereFromCity}
  onChange={setWhereFromCity}
  disabled={!whereFromCountry}
  getLabel={(c) => c.name}
/>

      <Input
        placeholder="Add a tagline about yourself"
        value={about}
        onChange={(e) => setAbout(e.target.value)}
      />

      <div className="flex items-stretch">
        <SocialMediaInp socialMediaObj={socialMediaObj} setSocialMediaObj={setSocialMediaObj} />
        <Input className="rounded-s-none" placeholder={socialMediaPlaceholderInput()} value={socialMediaHandle} onChange={(e) => setSocialMediaHandle(e.target.value)} />
      </div>

      {/* Passwords */}
      <div className="space-y-3">
        <div className="relative">
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Password *"
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
            placeholder="Confirm Password *"
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

      {/* Gender */}
      <select
        value={data.gender || localStorage.getItem("gender") || ""}
        onChange={(e) => {
          setData({ ...data, gender: e.target.value });
          localStorage.setItem("gender", e.target.value);
        }}
        className="w-full border rounded-md p-2 focus:outline-none"
        autoComplete="sex"
      >
        <option value="">Select Gender *</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>
      {(data.gender != "Male" && data.gender != "Female" && data.gender != "")
        &&
        <Input
          placeholder="Please specify your gender"
          value={data.otherGender || localStorage.getItem("otherGender") || ""}
          onChange={(e) => {
          setData({ ...data, otherGender: e.target.value });
          localStorage.setItem("otherGender", e.target.value);
        }}
        />}

        {/* Sexual Orientation */}
      <select
        value={data.sexualOrientation || localStorage.getItem("sexualOrientation") || ""}
        onChange={(e) => {
          setData({ ...data, sexualOrientation: e.target.value });
          localStorage.setItem("sexualOrientation", e.target.value);
        }}
        className="w-full border rounded-md p-2 focus:outline-none"
      >
        <option value="">Select Sexual Orientation *</option>
        <option value="Heterosexual">Heterosexual</option>
        <option value="Homosexual">Homosexual</option>
        <option value="Bisexual">Bisexual</option>
        <option value="Other">Other</option>
      </select>
      {
        data.sexualOrientation != "Heterosexual" && data.sexualOrientation != "Homosexual"
        && data.sexualOrientation != "Bisexual" && data.sexualOrientation != ""
      
        &&
        <Input
          placeholder="Please specify your sexual orientation"
          value={data.otherSexualOrientation || localStorage.getItem("otherSexualOrientation") || ""}
          onChange={(e) => {
          setData({ ...data, otherSexualOrientation: e.target.value });
          localStorage.setItem("otherSexualOrientation", e.target.value);
        }}
        />}
      
    </form>
  );
}
