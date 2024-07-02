"use server";

import { Chance } from "chance";
import { Performance, ScheduleError } from "./models";

const chance = new Chance();

const getRandomInstrument = () =>
  chance.pickone([
    "Clarinet",
    "Bass Clarinet",
    "Bassoon",
    "Oboe",
    "French Horn",
    "Trumpet",
    "Trombone",
    "Flute",
    "Tuba",
    "Percussion",
    "Saxophone",
    "Violin",
    "Viola",
    "Cello",
  ]);

const getRandomInstrumentType = () =>
  chance.pickone([
    "Wind",
    "String",
    "Percussion",
    "Keyboard",
    "Brass",
    "Woodwind",
    "Other",
  ]);

const getRandomSchool = () =>
  chance.pickone([
    "Oakwood High School",
    "Riverside High School",
    "Hillcrest High School",
    "Evergreen High School",
    "Maple Valley High School",
    "Pine Ridge High School",
    "Crestwood High School",
    "Silver Lake High School",
    "Forest Hill High School",
    "Westbrook High School",
    "Greenfield High School",
    "Meadowview High School",
    "Sunnydale High School",
    "Blue Mountain High School",
    "Northside High School",
    "Brookfield High School",
    "Red Oak High School",
    "Lakeside High School",
    "Elmwood High School",
    "Valley View High School",
    "Lakeview High School",
    "Riverview High School",
    "Lincoln High School",
    "Cedar Grove High School",
    "Granite Hills High School",
    "Springfield High School",
    "Sunnybrook High School",
    "Mountain View High School",
    "Harmony High School",
    "Clearwater High School",
    "Windsor High School",
    "Beacon Hill High School",
    "Liberty High School",
    "Parkside High School",
    "Golden Valley High School",
    "Riverbend High School",
    "Horizon High School",
    "Summit High School",
    "Woodland High School",
    "Bayside High School",
    "Seaside High School",
    "Heritage High School",
  ]);

const getRandomRoomName = () => {
  const roomNumber = chance.integer({ min: 1, max: 100 });
  const roomName = chance.animal({
    type: "grassland",
    capitalize: true,
    length: 10,
  });
  return `${roomName} ${roomNumber}`;
};

const generateRoom = (startTime: Date, endTime: Date) => ({
  name: getRandomRoomName(),
  type: getRandomInstrumentType(),
  judges: [
    { name: chance.name({ nationality: "en" }) },
    { name: chance.name({ nationality: "en" }) },
  ],
  performances: generateSchedule(startTime, endTime),
});

const generatePerformance = (
  startTime: Date,
  duration: number
): Performance => ({
  startTime: startTime.toISOString(),
  endTime: new Date(startTime.getTime() + duration * 60000).toISOString(),
  contestEntry: {
    participants: chance.pickset(students, chance.integer({ min: 2, max: 8 })),
    org: getRandomSchool(),
  },
});

const generateSchedule = (startTime: Date, endTime: Date) => {
  const performances = [];
  let currentTime = startTime;

  while (currentTime < endTime) {
    const performance = generatePerformance(currentTime, 15);
    performances.push(performance);
    currentTime = new Date(currentTime.getTime() + 15 * 60000);
  }

  return performances;
};

const students = chance.n(
  () => ({
    name: chance.name({ nationality: "en" }),
    instrument: getRandomInstrument(),
  }),
  6000
);

const data = {
  contest: {
    id: chance.guid(),
    name: "Dist 12 Solo & Ensemble",
    location: "Southern Nazarene University",
    dates: ["2024-09-21T14:00:00Z", "2024-09-22T16:00:00Z"],
    description: "Lorem ipsum",
  },
  days: [
    {
      startTime: "2024-09-21T14:00:00Z",
      endTime: "2024-09-21T22:00:00Z",
      rooms: Array.from({ length: 30 }, () =>
        generateRoom(
          new Date(Date.UTC(2024, 8, 21, 14, 0)),
          new Date(Date.UTC(2024, 8, 21, 22, 0))
        )
      ),
    },
    {
      startTime: "2024-09-22T16:00:00Z",
      endTime: "2024-09-22T22:00:00Z",
      rooms: Array.from({ length: 30 }, () =>
        generateRoom(
          new Date(Date.UTC(2024, 8, 22, 16, 0)),
          new Date(Date.UTC(2024, 8, 22, 19, 0))
        )
      ),
    },
  ],
};

export async function getRooms(
  contestId: string,
  date: string
): Promise<{ name: string; judges: { name: string }[] }[]> {
  if (!isValidDateString(date)) {
    throw new ScheduleError(`Invalid date: ${date}`);
  }

  // TODO get rooms by contest ID and date from DynamoDB
  const day = data.days.find((day) => day.startTime.split("T")[0] === date);
  if (!day) {
    throw new ScheduleError(`No schedule found for ${date}`);
  }
  return day.rooms;
}

export const getSchedule = async (
  contestId: string,
  date: string
): Promise<{
  startTime: string;
  endTime: string;
  rooms: {
    name: string;
    judges: { name: string }[];
    performances: Performance[];
  }[];
}> => {
  if (!isValidDateString(date)) {
    throw new ScheduleError(`Invalid date: ${date}`);
  }

  // TODO get rooms by contest ID and date from DynamoDB
  const day = data.days.find((day) => day.startTime.split("T")[0] === date);
  if (!day) {
    throw new ScheduleError(`No schedule found for ${date}`);
  }
  return day;
};

// Function that accepts a string and ensures that it is a valid ISO date string
export const isValidDateString = (date: string): boolean => {
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (!dateRegex.test(date)) {
    return false;
  }
  const d = new Date(date);
  return !isNaN(d.getTime());
};
