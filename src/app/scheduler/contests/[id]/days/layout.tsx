import { ReactNode } from "react";
import Header from "./header";
import { Link } from "@/components/link";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";

export default function Layout({
  children,
}: {
  children: Readonly<ReactNode>;
}) {
  const contest = {
    name: "Dist 12 Solo & Ensemble",
    location: "Southern Nazarene University",
    description: "Lorem ipsum",
    dates: [new Date("2024-09-21T14:00:00Z"), new Date("2024-09-22T16:00:00Z")],
  };

  const days = [
    {
      startTime: new Date("2024-09-21T14:00:00Z"),
      endTime: new Date("2024-09-21T22:00:00Z"),
    },
    {
      startTime: new Date("2024-09-22T16:00:00Z"),
      endTime: new Date("2024-09-22T20:00:00Z"),
    },
  ];

  return (
    <>
      <Link href="/scheduler" className="flex items-center dark:text-white">
        <ArrowLeftIcon className="w-5 mr-1" />
        Back
      </Link>

      <h1 className="mt-2 text-2xl/8 font-semibold text-zinc-950 sm:text-xl/8 dark:text-white">
        {contest.name}
      </h1>

      <Header days={days} />
      {children}
    </>
  );
}
