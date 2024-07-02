import { Performance } from "@/app/scheduler/models";
import clsx from "clsx";
import moment from "moment";

export default function Performances({
  startTime,
  endTime,
  performanceTime,
  performances,
  selectedPerformance,
  onSelectPerformance,
}: {
  startTime: string;
  endTime: string;
  performanceTime: number;
  performances: Performance[];
  selectedPerformance: Performance | null;
  onSelectPerformance: (performance: Performance) => void;
}) {
  const start = moment(startTime);
  const end = moment(endTime);

  const totalMinutes = end.diff(start, "minutes");
  const numberOfBlocks = totalMinutes / performanceTime;

  const timeBlocks = [];
  for (let i = 0; i < numberOfBlocks; i++) {
    const blockStart = start.clone().add(i * performanceTime, "minutes");
    const blockEnd = blockStart.clone().add(performanceTime, "minutes");
    timeBlocks.push({ start: blockStart, end: blockEnd });
  }

  const calculateGridRow = (performance: Performance) => {
    const performanceStart = moment(performance.startTime);
    const performanceEnd = moment(performance.endTime);
    const startOffset = performanceStart.diff(start, "minutes");
    const endOffset = performanceEnd.diff(start, "minutes");
    const startRow = Math.floor(startOffset / performanceTime) + 2; // Adding 2 to account for the header
    const spanRows = Math.ceil((endOffset - startOffset) / performanceTime);
    return { startRow, spanRows };
  };

  return (
    <>
      <div className="flex flex-auto flex-col overflow-auto">
        <div className="flex w-full flex-auto">
          <div className="w-20 flex-none ring-1 ring-gray-100" />
          <div className="grid flex-auto grid-cols-1 grid-rows-1">
            {/* Horizontal lines */}
            <div
              className="col-start-1 col-end-2 row-start-1 grid divide-y divide-gray-100"
              style={{
                gridTemplateRows: `repeat(${numberOfBlocks}, minmax(5rem, 1fr))`,
              }}
            >
              <div className="row-end-1 h-7"></div>

              {timeBlocks.map((block, index) => (
                <div key={index}>
                  <div className="sticky left-0 -ml-16 -mt-2.5 w-16 pr-2 text-right text-xs leading-5 text-gray-400">
                    {block.start.format("h:mm A")}
                  </div>
                </div>
              ))}
              <div />
            </div>

            {/* Contest Entries */}
            <ol
              className="col-start-1 col-end-2 row-start-1 grid grid-cols-1"
              style={{
                gridTemplateRows: `1.75rem repeat(${numberOfBlocks}, minmax(0, 1fr)) auto`,
              }}
            >
              {performances?.map((performance, index) => {
                const { startRow, spanRows } = calculateGridRow(performance);

                return (
                  <li
                    key={index}
                    className="relative mt-px flex"
                    style={{ gridRow: `${startRow} / span ${spanRows}` }}
                  >
                    <a
                      type="button"
                      onClick={() => onSelectPerformance(performance)}
                      className={clsx(
                        "group absolute inset-1 flex flex-col overflow-y-auto rounded-lg ring-1 ring-sky-100 p-2 text-xs leading-5 hover:cursor-pointer",
                        performance === selectedPerformance
                          ? "bg-sky-200"
                          : "bg-sky-50 hover:bg-sky-100"
                      )}
                    >
                      {performance.contestEntry.participants.map(
                        (participant) => {
                          return (
                            <>
                              <div
                                className={clsx(
                                  "grid grid-cols-3",
                                  performance === selectedPerformance
                                    ? "text-sky-900"
                                    : "text-sky-500 group-hover:text-sky-700"
                                )}
                              >
                                <div className="font-semibold">
                                  {participant.name}
                                </div>
                                <div>{participant.instrument}</div>
                                <div>
                                  {performance.contestEntry.participants.indexOf(
                                    participant
                                  ) === 0 && performance.contestEntry.org}
                                </div>
                              </div>
                            </>
                          );
                        }
                      )}
                    </a>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}
