import { Avatar } from "@/components/avatar";
import {
  DropdownMenu,
  DropdownItem,
  DropdownLabel,
  DropdownDivider,
} from "@/components/dropdown";
import { UserCircleIcon, WrenchIcon } from "@heroicons/react/20/solid";
import { CalendarDaysIcon, PlusIcon } from "@heroicons/react/24/outline";

export default function DropDownNav() {
  return (
    <DropdownMenu className="min-w-80 lg:min-w-64" anchor="bottom start">
      <DropdownItem href="/scheduler">
        <CalendarDaysIcon />
        <DropdownLabel>Scheduler</DropdownLabel>
      </DropdownItem>
      {/* <DropdownDivider /> */}
      <DropdownItem href="/home">
        {/* <Avatar slot="icon" initials="C" className="bg-blue-500 text-white" /> */}
        <WrenchIcon />
        <DropdownLabel className="flex justify-between w-full">
          Administration
        </DropdownLabel>
      </DropdownItem>
      {/* <DropdownDivider />
      <DropdownItem href="/teams/create">
        <PlusIcon />
        <DropdownLabel>New team&hellip;</DropdownLabel>
      </DropdownItem> */}
    </DropdownMenu>
  );
}
