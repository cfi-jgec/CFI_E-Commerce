"use client"

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { MdMenu } from "react-icons/md";
import { LogOut, ShoppingCart, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { logout } from "@/app/lib";

const Navbar: React.FC = () => {
    const pathname = usePathname();
    const router = useRouter();
    const path = '/' + pathname.split('/')[1];
    const [isShadow, setIsShadow] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // useEffect(() => {
    //     document.addEventListener("scroll", () => {
    //         const scrollVal = window.scrollY;
    //         if (scrollVal > 30) {
    //             setIsShadow(true);
    //         } else setIsShadow(false);
    //     });
    // }, [isShadow])

    const NavItems = [
        { name: 'Home', link: '/' },
        { name: 'Products', link: '/products' },
        { name: 'About', link: '/about' },
        { name: 'Contact', link: '/contact' },
    ]
    const signOut = async () => {
        await logout();
    }

    return (
        <>
            <div className={` ${isShadow ? 'bg-primary shadow-lg' : 'bg-transparent'} w-full h-20 z-[99] border-b border-blue_primary shadow-lg `}>
                <div className="max-w-screen-xl px-8 xl:px-0 h-full mx-auto flex items-center justify-between" >
                    <div>
                        <Link href="/">
                            <Image
                                src={'/logo_light.png'}
                                width="60"
                                height="60"
                                alt="logo"
                            />
                        </Link>
                    </div>
                    {/* <div className="text-white font-semibold space-x-2 hidden min-[1148px]:flex">
                        {
                            NavItems.map((item, i) => (
                                <Link href={item.link} key={i} className={`px-4 py-2  ${path == item.link && "bg-white text-primary"}  rounded-md text-[15px] uppercase`}> {item.name}</Link>
                            ))
                        }
                    </div> */}
                    <div className="flex items-center gap-x-6">
                        <button>
                            <ShoppingCart className="text-white text-xl" />
                        </button>
                        <DropdownMenu>
                            <DropdownMenuTrigger className="!ring-0 !border-none !shadow-none !focus:border-none !focus:ring-0 !outline-none" >
                                <Avatar>
                                    <AvatarImage src="" alt="user" />
                                    <AvatarFallback className="bg-sky-500 font-medium">
                                        SP
                                    </AvatarFallback>
                                </Avatar>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                className="min-w-[12rem] sm:text-lg space-y-2" align="end"
                            >
                                <span className="cursor-pointer">
                                    <DropdownMenuItem
                                        className="cursor-pointer"
                                        onClick={() => router.push(`/profile/1`)}
                                    >
                                        <User className="h-4 w-4 mr-2" />
                                        Profile
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="cursor-pointer" onClick={signOut}>
                                        <LogOut className="h-4 w-4 mr-2" />
                                        Logout
                                    </DropdownMenuItem>
                                </span>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    <button
                        onClick={() => setIsMenuOpen(true)}
                        className="text-4xl text-white min-[1148px]:hidden"
                    >
                        <MdMenu />
                    </button>
                </div>
            </div >
        </>
    );
};
export default Navbar;