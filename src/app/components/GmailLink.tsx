"use client";

import React from "react";

export default function GmailLink() {
  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const email = "info@jjindus.com";
    const userAgent = typeof window !== "undefined" ? navigator.userAgent || navigator.vendor || (window as any).opera : "";

    const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream;
    const isAndroid = /Android/i.test(userAgent);

    if (isIOS) {
      // iOS Gmail scheme
      window.location.href = `googlegmail:///co?to=${email}`;
      // Fallback to web compose if Gmail app is not installed
      setTimeout(() => {
        window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`, "_blank");
      }, 1000);
    } else if (isAndroid) {
      // Android Gmail scheme (intent)
      window.location.href = `intent://co?to=${email}#Intent;scheme=googlegmail;package=com.google.android.gm;end`;
      // Fallback to web compose
      setTimeout(() => {
        window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`, "_blank");
      }, 1000);
    } else {
      // PC/Desktop: Web Gmail
      window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`, "_blank");
    }
  };

  return (
    <a
      className="flex items-center gap-3 text-lg hover:text-primary transition cursor-pointer"
      onClick={handleEmailClick}
      href="https://mail.google.com/mail/?view=cm&fs=1&to=info@jjindus.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="material-icons text-primary">email</span>
      <span>info@jjindus.com</span>
    </a>
  );
}
