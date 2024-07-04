import { ReactNode } from "react";
import Header from "./header";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import { Button } from "@/components/button";
import { getContest } from "@/app/scheduler/data";

export default async function Layout({
  children,
}: {
  children: Readonly<ReactNode>;
}) {
  const contest = await getContest("foobar");

  return (
    <>
      <Button href="/scheduler">
        <ChevronLeftIcon /> Back
      </Button>

      <h1 className="my-4 text-2xl/8 font-semibold text-zinc-950 sm:text-xl/8 dark:text-white">
        {contest.name}
      </h1>

      <Header days={contest.dates} />
      {children}
    </>
  );
}
