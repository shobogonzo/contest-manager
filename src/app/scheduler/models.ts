export class ScheduleError {
  message: string;
  constructor(message: string) {
    this.message = message;
  }
}

export interface Performance {
  startTime: string;
  endTime: string;
  contestEntry: {
    participants: any[];
    org: string;
  };
}
