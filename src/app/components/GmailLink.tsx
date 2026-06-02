import React from "react";

export default function GmailLink() {
  return (
    <a
      className="flex items-center gap-3 text-lg hover:text-primary transition cursor-pointer"
      href="mailto:info@jjindus.com"
    >
      <span className="material-icons text-primary">email</span>
      <span>info@jjindus.com</span>
    </a>
  );
}
