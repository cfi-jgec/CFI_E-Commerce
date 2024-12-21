import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

interface footerType {
    title: string,
    link: string
}
interface IconsType {
    Icon: React.ReactNode,
    color: string,
    link: string,
}


export const footerTopItem: footerType[] = [
    {
        title: "team",
        link: "/team",
    },
    {
        title: "alumni",
        link: "/alumni",
    },
    {
        title: "stock",
        link: "/stock",
    },
    {
        title: "review",
        link: "/review",
    },
    {
        title: "gallery",
        link: "/gallery",
    },
    {
        title: "projects",
        link: "/projects",
    },
    {
        title: "certificates",
        link: "/certificate",
    },
    {
        title: "events",
        link: "/events",
    },
];

// export const departments: footerType[] = [
//     {
//         title: "arduino",
//         link: "/arduino",
//     },
//     {
//         title: "IOT",
//         link: "/iot",
//     },
//     {
//         title: "3d printing",
//         link: "/3dPrinting",
//     },
//     {
//         title: "arduino",
//         link: "/arduino",
//     },
//     {
//         title: "IOT",
//         link: "/iot",
//     },
//     {
//         title: "3d printing",
//         link: "/3dPrinting",
//     },
// ];

export const midFooterItems: footerType[] = [
    {
        title: "annual reports",
        link: "/annualReports",
    },
    {
        title: "annual reports",
        link: "/annualReports",
    },
    {
        title: "annual reports",
        link: "/annualReports",
    },
    {
        title: "annual reports",
        link: "/annualReports",
    },
    {
        title: "annual reports",
        link: "/annualReports",
    },
    {
        title: "annual reports",
        link: "/annualReports",
    },
];

export const socialIcons: IconsType[] = [
    {
        Icon: <FaFacebook />,
        color: "blue",
        link: "https://www.facebook.com/CFI.JGEC",
    },
    {
        Icon: <FaInstagram />,
        color: "pink",
        link: "https://www.instagram.com/cfi_jgec",
    },
    {
        Icon: <FaLinkedin />,
        color: "blue",
        link: "https://www.linkedin.com/company/centre-for-innovation-jgec",
    },
    {
        Icon: <FaYoutube />,
        color: "blue",
        link: "",
    },
];

export const lastFooterItems: footerType[] = [
    {
        title: "Accessibility",
        link: "/accessibility",
    },
    {
        title: "Privacy Policy",
        link: "/privacyPolicy",
    },
    {
        title: "Term of Use",
        link: "/termOfUse",
    },
    {
        title: "Sitemap",
        link: "/sitemap",
    },
];