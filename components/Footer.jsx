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
        window.open("https://www.linkedin.com/in/your-profile", "_blank"),
    },
    {
      icon: <FaGithub size={20} />,
      label: "GitHub",
      onClick: () =>
        window.open("https://github.com/your-username", "_blank"),
    },
    {
      icon: <FaEnvelope size={20} />,
      label: "Email",
      onClick: () => (window.location.href = "mailto:your@email.com"),
    },
    {
      icon: <FaTwitter size={20} />,
      label: "Twitter",
      onClick: () =>
        window.open("https://twitter.com/your-handle", "_blank"),
    },
  ];

  return (
    <footer  className="h-[15vh]">
         <Dock
        items={items}
        panelHeight={68}
        baseItemSize={50}
        magnification={70}
        className="bg-[#0a0a0a] border-none"
      />
    </footer>
  );
}
