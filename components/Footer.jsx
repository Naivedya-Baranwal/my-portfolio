"use client";
import Dock from "@/components/animations/Dock"
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  const items = [
    {
      icon: <FaLinkedin size={20} />,
      label: "LinkedIn",
      onClick: () =>
        window.open("https://www.linkedin.com/in/naivedya-baranwal-a10360260/", "_blank"),
    },
    {
      icon: <FaGithub size={20} />,
      label: "GitHub",
      onClick: () =>
        window.open("https://github.com/Naivedya-Baranwal", "_blank"),
    },
    {
      icon: <FaEnvelope size={20} />,
      label: "Email",
      onClick: () => (window.location.href = "mailto:naivedyab198@gmail.com"),
    },
    {
      icon: <FaTwitter size={20} />,
      label: "Twitter",
      onClick: () =>
        window.open("https://x.com/Naivedyab198", "_blank"),
    },
  ];

  return (
    <footer  className="h-[15vh] px-2 md:px-0">
         <Dock
        items={items}
        panelHeight={68}
        baseItemSize={50}
        magnification={70}
        className="dark:bg-[#0a0a0a] bg-white border-none"
      />
    </footer>
  );
}
