import React from "react";

export default function Contact({theme}) {
  return (
    <div className={`px-4 ${theme === 'theme2' ? 'text-white pt-10' : 'pt-48 md:pt-24'}`}>
      <h1 className="text-3xl font-bold mb-4">Contact Page</h1>
      <p>This is the contact page.</p>
    </div>
  );
}