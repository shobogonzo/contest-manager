import { Avatar } from "@/components/avatar";
import { Dropdown, DropdownButton } from "@/components/dropdown";
import {
  Sidebar,
  SidebarHeader,
  SidebarItem,
  SidebarLabel,
  SidebarBody,
  SidebarSection,
} from "@/components/sidebar";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { NavbarProps } from "./layout";
import DropDownNav from "./drop-down-nav";

function MobileNav({ navItems }: NavbarProps) {
  return (
    <Sidebar>
      <SidebarHeader>
        <Dropdown>
          <DropdownButton as={SidebarItem} className="lg:mb-2.5">
            <Avatar src="/logo.png" />
            <SidebarLabel>Contest Manager</SidebarLabel>
            <ChevronDownIcon />
          </DropdownButton>
          <DropDownNav />
        </Dropdown>
      </SidebarHeader>
      <SidebarBody>
        <SidebarSection>
          {navItems.map(({ label, url }) => (
            <SidebarItem key={label} href={url}>
              {label}
            </SidebarItem>
          ))}
        </SidebarSection>
      </SidebarBody>
    </Sidebar>
  );
}

export default MobileNav;
