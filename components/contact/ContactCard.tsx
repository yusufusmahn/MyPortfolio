"use client";

import React, { ReactElement } from "react";

interface ContactCardProps {
  icon: ReactElement;
  url: string;
  hoverColor: string;
  hoverBgColor: string;
}

export default function ContactCard({ icon, url, hoverColor, hoverBgColor }: ContactCardProps) {
  return (
    <div className="flex flex-col items-center space-y-4">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`group p-4 rounded-full bg-gray-800 shadow-md transition duration-300 ${hoverBgColor}`}
      >
        <span className={`text-white transition-colors duration-300 group-hover:${hoverColor}`}>
          {icon}
        </span>
      </a>
    </div>
  );
}