"use client";

import { DropdownItem, DropdownLabel } from "@/components/dropdown";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/outline";

function SignOutButton() {
  const { signOut } = useAuthenticator((context) => [context.user]);
  return (
    <DropdownItem onClick={signOut}>
      <ArrowRightStartOnRectangleIcon />
      <DropdownLabel>Sign out</DropdownLabel>
    </DropdownItem>
  );
}

export default SignOutButton;
