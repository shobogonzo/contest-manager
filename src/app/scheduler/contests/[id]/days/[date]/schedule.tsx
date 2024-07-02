"use client";

import { SetStateAction, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import moment from "moment";
import Performances from "./performances";
import RoomPicker from "./room-picker";
import { Performance } from "@/app/scheduler/models";

export default function Schedule({ schedule }: { schedule: any }) {
  const [selectedRoom, setSelectedRoom] = useState(schedule.rooms[0]?.name);
  const [selectedPerformance, setSelectedPerformance] =
    useState<Performance | null>(null);

  const handleRoomChange = (room: SetStateAction<string>) => {
    setSelectedPerformance(null);
    setSelectedRoom(room);
  };

  const performances = schedule.rooms.find(
    (room: { name: string }) => room.name === selectedRoom
  )?.performances;

  if (!performances) {
    // TODO reload schedule
  }

  return (
    <>
      <div className="flex h-full flex-col">
        <div className="isolate flex flex-auto overflow-hidden bg-white">
          <Performances
            startTime={schedule.startTime}
            endTime={schedule.endTime}
            performanceTime={15}
            performances={performances}
            selectedPerformance={selectedPerformance}
            onSelectPerformance={(performance) =>
              setSelectedPerformance(performance)
            }
          />
          <RoomPicker
            rooms={schedule.rooms}
            selectedRoom={selectedRoom}
            onRoomChange={handleRoomChange}
          />
        </div>
      </div>

      {selectedPerformance && (
        <PerformanceDetails
          performance={selectedPerformance}
          onClose={() => setSelectedPerformance(null)}
        />
      )}
    </>
  );
}

function PerformanceDetails({
  performance,
  onClose,
}: {
  performance: Performance;
  onClose: () => void;
}) {
  return (
    <>
      <div className="overflow-hidden bg-gray-100 shadow-lg mx-2 sticky bottom-2 rounded-sm ring-1 ring-gray-200">
        <div className="flex justify-between">
          <div className="p-6">
            {" "}
            <h2 className="font-semibold text-xl">
              {performance.contestEntry.participants.length === 1
                ? "Solo"
                : "Ensemble"}
              {" - "}
              {performance.contestEntry.org}
            </h2>
            <p className="truncate text-sm leading-5 text-gray-700">
              {moment(performance.startTime).format("ddd M/YY h:mm")}
              {" - "}
              {moment(performance.endTime).format("h:mm A")}
            </p>
          </div>

          <div className="flex items-center pr-4">
            <button
              type="button"
              className="rounded-md text-gray-600 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              onClick={() => onClose()}
            >
              <span className="sr-only">Close</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="px-4 py-4 sm:p-6 bg-white">
          {/* <ul role="list">
            {performance.contestEntry.participants.map((person) => (
              <li key={person.name} className="flex gap-x-4 py-2">
                <div className="min-w-0">
                  <p className="text-sm font-semibold leading-6 text-gray-900">
                    {person.name}
                  </p>
                  <p className="truncate text-xs leading-5 text-gray-500">
                    {person.instrument}
                  </p>
                </div>
              </li>
            ))}
          </ul> */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {performance.contestEntry.participants.map((person) => (
              <div
                key={person.name}
                className="relative flex flex-col rounded-lg bg-white shadow border border-gray-200"
              >
                <div className="flex-1 p-4">
                  <p className="text-sm font-semibold leading-6 text-gray-900">
                    {person.name}
                  </p>
                  <p className="truncate text-xs leading-5 text-gray-500">
                    {person.instrument}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
