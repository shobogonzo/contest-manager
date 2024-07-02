import {
  Sidebar,
  SidebarItem,
  SidebarLabel,
  SidebarBody,
  SidebarSection,
  SidebarSpacer,
} from "@/components/sidebar";
import { useAuthenticator } from "@aws-amplify/ui-react";
import {
  ArrowRightCircleIcon,
  ArrowRightStartOnRectangleIcon,
  BuildingLibraryIcon,
  CalendarDaysIcon,
  Cog6ToothIcon,
  HomeIcon,
  UserCircleIcon,
} from "@heroicons/react/20/solid";

function SidebarNav() {
  const { signOut } = useAuthenticator((context) => [context.user]);

  return (
    <Sidebar>
      <SidebarBody>
        <SidebarSection>
          <SidebarItem href="/home">
            <HomeIcon />
            <SidebarLabel>Home</SidebarLabel>
          </SidebarItem>
          <SidebarItem href="/users">
            <UserCircleIcon />
            <SidebarLabel>Users</SidebarLabel>
          </SidebarItem>
          <SidebarItem href="/orgs">
            <BuildingLibraryIcon />
            <SidebarLabel>Organizations</SidebarLabel>
          </SidebarItem>
          <SidebarItem href="/scheduler">
            <CalendarDaysIcon />
            <SidebarLabel className="flex justify-between w-full">
              <div>Scheduler</div>
              <div className="text-sm text-gray-500 w-5">
                <ArrowRightCircleIcon />
              </div>
            </SidebarLabel>
          </SidebarItem>
          <SidebarItem href="/settings">
            <Cog6ToothIcon />
            <SidebarLabel>Settings</SidebarLabel>
          </SidebarItem>
        </SidebarSection>
        <SidebarSpacer />
        <SidebarSection>
          <SidebarItem onClick={signOut}>
            <ArrowRightStartOnRectangleIcon />
            <SidebarLabel>Sign out</SidebarLabel>
          </SidebarItem>
        </SidebarSection>
      </SidebarBody>
    </Sidebar>
  );
}

export default SidebarNav;
