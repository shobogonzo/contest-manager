import { Avatar } from "@/components/avatar";
import {
  Dropdown,
  DropdownButton,
  DropdownMenu,
  DropdownItem,
  DropdownLabel,
  DropdownDivider,
} from "@/components/dropdown";
import {
  Navbar,
  NavbarItem,
  NavbarLabel,
  NavbarDivider,
  NavbarSection,
  NavbarSpacer,
} from "@/components/navbar";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
  InboxIcon,
  UserIcon,
  Cog8ToothIcon,
  ShieldCheckIcon,
  LightBulbIcon,
  ArrowRightStartOnRectangleIcon,
} from "@heroicons/react/24/outline";
import { NavbarProps } from "./layout";
import DropDownNav from "./drop-down-nav";
import {
  getCurrentUserServer,
  runWithAmplifyServerContext,
} from "@/utils/amplify-utils";
import { useAuthenticator } from "@aws-amplify/ui-react";
import SignOutButton from "./sign-out-button";

export default async function TopNav({ navItems }: NavbarProps) {
  const user = await getCurrentUserServer();
  if (!user) {
    return null;
  }
  const userInitials = `${user.given_name![0]} ${user.family_name![0]}`;

  return (
    <Navbar>
      <Dropdown>
        <DropdownButton as={NavbarItem} className="max-lg:hidden">
          <Avatar src="/logo.png" />
          <NavbarLabel>Contest Manager</NavbarLabel>
          <ChevronDownIcon />
        </DropdownButton>
        <DropDownNav />
      </Dropdown>
      <NavbarDivider className="max-lg:hidden" />
      <NavbarSection className="max-lg:hidden">
        {navItems.map(({ label, url }) => (
          <NavbarItem key={label} href={url}>
            {label}
          </NavbarItem>
        ))}
      </NavbarSection>
      <NavbarSpacer />
      <NavbarSection>
        <Dropdown>
          <DropdownButton as={NavbarItem}>
            <Avatar slot="icon" initials={userInitials} square />
          </DropdownButton>
          <DropdownMenu className="min-w-64" anchor="bottom end">
            {/* <DropdownItem href="/my-profile">
              <UserIcon />
              <DropdownLabel>My profile</DropdownLabel>
            </DropdownItem>
            <DropdownItem href="/settings">
              <Cog8ToothIcon />
              <DropdownLabel>Settings</DropdownLabel>
            </DropdownItem>
            <DropdownDivider />
            <DropdownItem href="/privacy-policy">
              <ShieldCheckIcon />
              <DropdownLabel>Privacy policy</DropdownLabel>
            </DropdownItem>
            <DropdownItem href="/share-feedback">
              <LightBulbIcon />
              <DropdownLabel>Share feedback</DropdownLabel>
            </DropdownItem>
            <DropdownDivider /> */}
            <SignOutButton />
          </DropdownMenu>
        </Dropdown>
      </NavbarSection>
    </Navbar>
  );
}
