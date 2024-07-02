"use client";

import { Button } from "@/components/button";
import clsx from "clsx";

export default function RoomPicker({
  rooms,
  selectedRoom,
  onRoomChange,
}: {
  rooms: { name: string; type: string; judges: { name: string }[] }[];
  selectedRoom: string;
  onRoomChange: (room: string) => void;
}) {
  return (
    <div className="hidden w-1/3 max-w-md flex-none border-l border-gray-100 px-8 py-6 md:block">
      <h3 className="font-semibold">Rooms</h3>
      <div className="isolate">
        {rooms.map((room) => (
          <div
            key={room.name}
            className="rounded-lg text-sm text-zinc-950 shadow ring-1 dark:ring-0 ring-gray-200 mt-2"
          >
            <Button
              onClick={() => onRoomChange(room.name)}
              className={clsx(
                "block w-full p-2 transition hover:cursor-pointer",
                room.name === selectedRoom ? "rounded-b-none" : "rounded"
              )}
            >
              {room.name} - {room.type}
            </Button>

            {room.name === selectedRoom && <Judges judges={room.judges} />}
          </div>
        ))}
      </div>
    </div>
  );
}

function Judges({ judges }: { judges: { name: string }[] }) {
  return (
    <div className="flex flex-col">
      <div className="bg-zinc-100 p-2 border-b border-gray-300">
        <h3 className="text-md font-bold">Judges</h3>
      </div>
      <div className="p-2">
        {judges.map((judge) => (
          <div key={judge.name}>{judge.name}</div>
        ))}
      </div>
    </div>
  );
}
