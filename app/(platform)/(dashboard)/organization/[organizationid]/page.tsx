import { OrganizationSwitcher, auth } from "@clerk/nextjs";
import React from "react";

function OrganizationPage() {
  const { userId, orgId } = auth();
  return <div>lolo</div>;
}

export default OrganizationPage;
