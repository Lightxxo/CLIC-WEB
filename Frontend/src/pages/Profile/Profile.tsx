import type React from 'react';
import { useFormContext } from "@/contexts/FormContext";
import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Camera, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { toast } from "sonner";
import config from "@/config";
import { Skeleton } from "@/components/ui/skeleton"

const Profile = () => {
    const { REMOTE, API_BASE_URL, API_PORT } = config;
    const apiUrl = `http${REMOTE ? "s" : ""}://${API_BASE_URL}${API_PORT ? `:${API_PORT}` : ""
        }`;
    const { data, setData } = useFormContext();
    const [isHovering, setIsHovering] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [currentProfilePicture, setCurrentProfilePicture] = useState(`https://twoclicclub.ams3.cdn.digitaloceanspaces.com/${data.imgURL}`)
    const fileInputRef = useRef<HTMLInputElement>(null)

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        if (file) {
            setIsLoading(true);
            // Create a preview URL for the selected image
            // const previewUrl = URL.createObjectURL(file)
            // setCurrentProfilePicture(previewUrl);

            const formData = new FormData();
            formData.append("profilePicture", file);
            formData.append("imgURL", data.imgURL);
            fetch(`${apiUrl}/user-app`, {
                method: "PUT",
                headers: {
                    Authorization: `Bearer ${data.token}`,
                },
                body: formData,
            }).then(res => res.json())
                .then(data => {
                    if (data._id) {
                        localStorage.setItem("imgURL", data.imgURL);
                        setCurrentProfilePicture(`https://twoclicclub.ams3.cdn.digitaloceanspaces.com/${data.imgURL}`);
                        setData((prev) => ({
                            ...prev,
                            imgURL: data.imgURL,
                        }));
                        toast("Profile picture updated!", {
                            action: {
                                label: "Close",
                                onClick: () => void 0,
                            },
                        });
                        setIsLoading(false);
                    } else {
                        toast("Failed to update profile picture!", {
                            action: {
                                label: "Close",
                                onClick: () => void 0,
                            },
                        });
                        setIsLoading(false);
                    }
                })


        }
    }

    const handleUpdateClick = () => {
        fileInputRef.current?.click()
    }

    const getUserInitials = (name: string) => {
        return name
            .split(" ")
            .map((word) => word.charAt(0))
            .join("")
            .toUpperCase()
            .slice(0, 2)
    }

    return (
        <Card className="w-full max-w-md mx-auto mt-10">
            {isLoading ? 
                <div className="flex items-center space-x-4 p-10">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
            : 
                        <CardContent className="p-6">
                <div className="flex items-center gap-6">
             
                    <div className="relative">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onHoverStart={() => setIsHovering(true)}
                            onHoverEnd={() => setIsHovering(false)}
                            className="cursor-pointer"
                            onClick={handleUpdateClick}
                        >
                            <Avatar className="w-20 h-20 border-4 border-accent shadow-lg">
                                <AvatarImage src={currentProfilePicture || "/placeholder.svg"} alt={`${data.username}'s profile picture`} />
                                <AvatarFallback className="bg-secondary text-secondary-foreground text-lg font-semibold">
                                    {getUserInitials(data.username)}
                                </AvatarFallback>
                            </Avatar>

                           
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: isHovering ? 1 : 0 }}
                                className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center"
                            >
                                <Camera className="w-6 h-6 text-white" />
                            </motion.div>
                        </motion.div>
                    </div>

                  
                    <div className="flex-1 space-y-4">
                        <div>
                            <h2 className="text-2xl font-bold text-foreground leading-tight">{data.username}</h2>
                            <p className='my-1'>{data.email}</p>
                            <p className="text-sm text-muted-foreground">Click the avatar to update your profile picture</p>
                        </div>

                        <Button
                            onClick={handleUpdateClick}
                            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium transition-colors cursor-pointer"
                        >
                            <User className="w-4 h-4 mr-2" />
                            Update Profile Picture
                        </Button>
                    </div>
                </div>

               
                <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                    aria-label="Upload profile picture"
                />
            </CardContent>}

        </Card>
    );
};

export default Profile;