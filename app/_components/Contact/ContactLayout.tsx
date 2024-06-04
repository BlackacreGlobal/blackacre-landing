import React from "react";

const ContactLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="article-content text-slate-100 flex flex-col max-w-prose text-[24px] gap-6 mb-12 pt-8">
      {children}
    </div>
  );
};

export default ContactLayout;
