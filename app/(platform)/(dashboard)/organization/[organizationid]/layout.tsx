import React from "react";
import { OrgControl } from "./_components/OrgControl";

function OrganizationIdLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <OrgControl />
      {children}
    </div>
  );
}

export default OrganizationIdLayout;
