import { Chance } from "chance";
import { Link } from "@/components/link";
import moment from "moment";
const chance = new Chance();

// TODO get list
const data = {
  contest: {
    id: chance.guid(),
    name: "Dist 12 Solo & Ensemble",
    location: "Southern Nazarene University",
    dates: [new Date("2024-09-21T14:00:00Z"), new Date("2024-09-22T16:00:00Z")],
    description: "Lorem ipsum",
  },
};

export default function Page() {
  return (
    <>
      <h1 className="text-2xl/8 font-semibold text-zinc-950 sm:text-xl/8 dark:text-white">
        Contests
      </h1>

      <main className="mt-4">
        {[data.contest].map((contest) => (
          <Link
            key={contest.id}
            href={`scheduler/contests/${contest.id}/days/${moment(
              contest.dates[0]
            ).format("YYYY-MM-DD")}`}
            className="text-zinc-950 dark:text-white hover:text-cyan-600"
          >
            {contest.name}
          </Link>
        ))}
      </main>
    </>
  );
}
