"use client";

import { Navbar, NavbarSection, NavbarItem } from "@/components/navbar";
import moment from "moment";
import { usePathname } from "next/navigation";

export function DayPicker({ days }: { days: { date: Date }[] }) {
  const path = usePathname();

  return (
    <>
      <Navbar>
        <NavbarSection>
          {days.map((day) => (
            <NavbarItem
              key={day.date.toISOString()}
              href={moment(day.date).format("YYYY-MM-DD")}
              current={
                path.split("/").pop() === moment(day.date).format("YYYY-MM-DD")
              }
            >
              {moment(day.date).format("dddd")}
            </NavbarItem>
          ))}
        </NavbarSection>
      </Navbar>
    </>
  );
}
