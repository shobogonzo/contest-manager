import { getSchedule } from "@/app/scheduler/data";
import { ScheduleError } from "@/app/scheduler/models";
import Schedule from "./schedule";

export default async function Page({
  params,
}: {
  params: { id: string; date: string };
}) {
  try {
    // Get the schedule for all rooms for the selected day
    const schedule = await getSchedule(params.id, params.date);

    return <Schedule schedule={schedule} />;
  } catch (error) {
    if (error instanceof ScheduleError) {
      return <div className="dark:text-white">{error.message}</div>;
    } else {
      return <div className="dark:text-white">Failed to load</div>;
    }
  }
}
