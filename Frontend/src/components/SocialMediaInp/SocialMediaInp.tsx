import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Instagram, Twitter, Facebook, Globe } from "lucide-react"

const socialPlatforms = [
//   { value: "select", label: "Social Media", icon: MousePointer2, placeholder: "@select" },
  { value: "instagram", label: "Instagram", icon: Instagram, placeholder: "@username" },
  { value: "twitter", label: "Twitter", icon: Twitter, placeholder: "@username" },
  { value: "facebook", label: "Facebook", icon: Facebook, placeholder: "facebook.com/username" },
  { value: "other", label: "Other", icon: Globe, placeholder: "Enter your handle" },
]

type SocialMediaInpProps = {
    socialMediaObj: any;
    setSocialMediaObj: (obj: any) => void;
};

const SocialMediaInp: React.FC<SocialMediaInpProps> = ({socialMediaObj, setSocialMediaObj}) => {
    return (
        <div>
            <Select value={socialMediaObj} onValueChange={(e) => setSocialMediaObj(e)}>
                <SelectTrigger className='border-e-0 rounded-e-none'>
                    <SelectValue placeholder="Social Media platform" />
                </SelectTrigger>
                <SelectContent>
                    {socialPlatforms.map((platform) => {
                        const Icon = platform.icon
                        return (
                            <SelectItem key={platform.value} value={platform.value}>
                                <div className="flex items-center gap-2">
                                    <Icon className="w-4 h-4" />
                                    {platform.label}
                                </div>
                            </SelectItem>
                        )
                    })}
                </SelectContent>
            </Select>
        </div>
    );
};

export default SocialMediaInp;