
import React from "react"; 
import Image from "next/image"; 
import Link from "next/link";
import { footerTopItem, lastFooterItems, socialIcons } from "@/utils/FooterItem";

const Footer: React.FC = () => {
    return (
        <div className={`w-full min-h-80 bg-[#03205E]`}>
            <div className={`layout py-8 text-white`}>
                <div className="flex flex-wrap justify-start space-x-4">
                    {footerTopItem.map((item, index) => {
                        return (
                            <Link href={item.link} className="capitalize opacity-80 hover:opacity-100"
                                key={index}
                            >
                                {item.title}
                            </Link>
                        );
                    })}
                </div>
                {/* <hr className="text-[#d4d4d4] h-1 opacity-40 my-4" />
                <h3 className="font-medium text-lg">Departments</h3>
                <div className="flex flex-wrap  py-3 space-x-4 capitalize">
                    {departments.map((department, index) => {
                        return (
                            <div className="cursor-pointer opacity-70 hover:opacity-100" key={index} >
                                {department.title}
                            </div>
                        );
                    })}
                </div> */}
                <hr className="text-[#d4d4d4] h-1 opacity-40 my-4" />
                <div className="flex max-md:flex-col justify-center md:justify-between items-center py-2">
                    <div className="flex items-center">
                        <Image src={'/logo_light.png'} alt="logo" height={80} width={80} />
                        <div className="mx-4 flex flex-col" >
                            <h1 className="text-4xl font-semibold text-white" >
                                CFI JGEC
                            </h1>
                            <p> Centre for Innovation</p>
                        </div>
                    </div>
                    <div className="max-md:mt-4 max-md:mx-auto md:mr-12 flex flex-col w-48 max-sm:hidden">
                        <h1 className="text-center text-lg">
                            Follow us on
                        </h1>
                        <div className="flex justify-center items-center space-x-4 mt-3">
                            {socialIcons.map((icon, index) => {
                                return (
                                    <Link href={icon.link}
                                        className="text-white opacity-70 hover:opacity-100  text-2xl"
                                        key={index}
                                    >
                                        {icon.Icon}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <hr className="text-[#d4d4d4] h-1 opacity-40 my-4" />
                <div className="flex justify-center md:justify-between  items-center max-xs:flex-col  ">
                    <div className="order-2 xs:order-1">
                        <div className="flex flex-wrap justify-center xs:justify-start text-sm py-2 " >
                            {lastFooterItems.map((department, index) => {
                                return (
                                    <Link href={'/'} className="opacity-70 hover:opacity-100"
                                        key={index}
                                    >
                                        {department.title}
                                        {index < lastFooterItems.length - 1 && (
                                            <span className="px-2.5 ">|</span>
                                        )}
                                    </Link>
                                );
                            })}
                        </div>
                        <p className="text-sm opacity-70 max-xs:text-center max-xs:border-t max-xs:pt-3 max-xs:mt-4">
                            © 2023 CFI JGEC - All rights reserved
                        </p>
                    </div>
                    <div className="text-sm space-y-1 opacity-70 order-1 xs:order-2 max-xs:flex items-center max-xs:gap-x-3">
                        <h5 className="text-start xs:text-end">Powered by</h5>
                        <h5 className=" text-start xs:text-end">CFI web team</h5>
                        <h6 className="text-end max-md:hidden">
                            Website last updated on:{" "}
                            <span>{new Date().toLocaleString()}</span>
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer