"use client";

import { DayPicker } from "@/app/scheduler/day-picker";
import {
  Menu,
  MenuButton,
  MenuItems,
  MenuItem,
  Transition,
} from "@headlessui/react";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import moment from "moment";
import { useParams } from "next/navigation";

export default function Header({ days }: { days: Date[] }) {
  const { date } = useParams();

  return (
    <>
      <header className="flex flex-none items-center justify-between border-b border-gray-200 rounded-t-md px-6 py-4 dark:bg-gray-800">
        <div>
          <h2 className="text-base font-semibold leading-6 text-gray-900 dark:text-white">
            <time dateTime="2022-01-22" className="sm:hidden">
              {moment(date).format("MMM D, YYYY")}
            </time>
            <time dateTime="2022-01-22" className="hidden sm:inline">
              {moment(date).format("MMMM D, YYYY")}
            </time>
          </h2>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-50">
            {moment(date).format("dddd")}
          </p>
        </div>

        <div className="flex items-center">
          <DayPicker
            days={days.map((day) => ({
              date: day,
            }))}
          />
          {/* <div className="hidden md:flex md:items-center">
            <div className="ml-6 h-6 w-px bg-gray-300" />
            <button
              type="button"
              className="ml-6 rounded-md bg-sky-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save
            </button>
          </div> */}
          <Menu as="div" className="relative ml-6 md:hidden">
            <MenuButton className="-mx-2 flex items-center rounded-full border border-transparent p-2 text-gray-400 hover:text-gray-500">
              <span className="sr-only">Open menu</span>
              <EllipsisHorizontalIcon className="h-5 w-5" aria-hidden="true" />
            </MenuButton>

            {/* <Transition
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <MenuItems className="absolute right-0 z-10 mt-3 w-36 origin-top-right divide-y divide-gray-100 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <MenuItem>
                    {({ focus }) => (
                      <a
                        href="#"
                        className={clsx(
                          focus ? "bg-gray-100 text-gray-900" : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Save
                      </a>
                    )}
                  </MenuItem>
                </div>
              </MenuItems>
            </Transition> */}
          </Menu>
        </div>
      </header>
    </>
  );
}
