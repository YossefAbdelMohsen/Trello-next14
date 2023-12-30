"use client";

import { useOrganizationList } from "@clerk/nextjs";
import { useParams } from "next/navigation";
import { useEffect } from "react";

export const OrgControl = () => {
  const params = useParams();
  const { setActive } = useOrganizationList();
  console.log(params);
  useEffect(() => {
    if (!setActive) return;
    setActive({
      organization: `${params.organizationid}`,
    });
  }, [setActive, params.organizationid]);
  return null;
};
