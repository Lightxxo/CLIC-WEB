import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { siInstagram, siX, siFacebook, siSubstack } from "simple-icons";

type SocialPlatform =
    {
        value: string;
        label: string;
        simpleIconPath: string;
        placeholder: string;
        lucideIcon?: never;
    };

const socialPlatforms: SocialPlatform[] = [
    // {
    //     value: "",
    //     label: "Social Media platform",
    //     simpleIconPath: "",
    //     placeholder: "",
    // },
    {
        value: "instagram",
        label: "Instagram",
        simpleIconPath: siInstagram.path,
        placeholder: "@username",
    },
    {
        value: "x",
        label: "X",
        simpleIconPath: siX.path,
        placeholder: "@username",
    },
    {
        value: "facebook",
        label: "Facebook",
        simpleIconPath: siFacebook.path,
        placeholder: "facebook.com/username",
    },
    {
        value: "linkedin",
        label: "LinkedIn",
        simpleIconPath: "M20.447 20.452h-3.554v-5.569c0-1.327-.027-3.037-1.849-3.037-1.849 0-2.131 1.445-2.131 2.939v5.667H9.359V9h3.414v1.561h.049c.476-.9 1.637-1.849 3.37-1.849 3.601 0 4.268 2.37 4.268 5.455v6.285zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM6.969 20.452H3.705V9h3.264v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
        placeholder: "@username",
    },
    {
        value: "substack",
        label: "Substack",
        simpleIconPath: siSubstack.path,
        placeholder: "@username",
    },
];

type SocialMediaInpProps = {
    socialMediaObj: any;
    setSocialMediaObj: (obj: any) => void;
};

const SocialMediaInp: React.FC<SocialMediaInpProps> = ({ socialMediaObj, setSocialMediaObj }) => {
    return (
        <div>
            <Select value={socialMediaObj} onValueChange={(e) => setSocialMediaObj(e)}>
                <SelectTrigger className='border-e-0 rounded-e-none'>
                    <SelectValue placeholder="Social Media platform" />
                </SelectTrigger>
                <SelectContent>
                    {socialPlatforms.map((platform) => {
                        return (
                            <SelectItem key={platform.value} value={platform.value}>
                                <div className="flex items-center gap-2">
                                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                                            <path d={platform.simpleIconPath} />
                                        </svg>
                                    {platform.label}
                                </div>
                            </SelectItem>
                        );
                    })}
                </SelectContent>
            </Select>
        </div>
    );
};

export default SocialMediaInp;