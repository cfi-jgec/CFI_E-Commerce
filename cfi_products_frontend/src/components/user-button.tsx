"use client";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { FileCheck, Gauge, HelpCircle, LogOut, User } from "lucide-react";
import { logout } from "@/app/lib";
import { useRouter } from "next/navigation";
import { FC } from "react";

interface userType {
    id: string;
    email: string;
    role: "admin" | "team-member"
}

export const UserButton: FC<userType> = ({ id, role }) => {
    const router = useRouter();
    const signOut = async () => {
        await logout();
        router.replace("/login");
    };
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="!ring-0 !border-none !shadow-none !focus:border-none !focus:ring-0 !outline-none" >
                <Avatar>
                    <AvatarImage />
                    <AvatarFallback className="bg-sky-500">
                        <User className="text-white" />
                    </AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="min-w-[12rem] sm:text-lg space-y-2" align="end">
                <span className="cursor-pointer">
                    <DropdownMenuItem
                        className="cursor-pointer"
                        onClick={() => router.push(`/dashboard`)}
                    >
                        <Gauge className="h-4 w-4 mr-2" />
                        Dashboard
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        className="cursor-pointer"
                        onClick={() => router.push(`/profile/${id}`)}
                    >
                        <User className="h-4 w-4 mr-2" />
                        Profile
                    </DropdownMenuItem>
                    {role === "admin" ? (
                        <DropdownMenuItem
                        className="cursor-pointer"
                            onClick={() => router.push(`/pending-requests`)}
                    >
                        <HelpCircle className="h-4 w-4 mr-2" />
                        Pending Requests
                    </DropdownMenuItem>
                    ) : (
                        <DropdownMenuItem
                        className="cursor-pointer"
                                onClick={() => router.push(`/profile/my-submissions?status=pending&user_id=${id}`)}
                    >
                        <FileCheck className="h-4 w-4 mr-2" />
                        My Submissions
                        </DropdownMenuItem>
                    )}
                    <DropdownMenuItem className="cursor-pointer" onClick={signOut}>
                        <LogOut className="h-4 w-4 mr-2" />
                        Logout
                    </DropdownMenuItem>
                </span>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
