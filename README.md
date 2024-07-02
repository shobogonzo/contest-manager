This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# Terms and Concepts

We are building a contest management system where users can create contests, register participants, schedule performances, and assign scores to performances. Contests are held at locations with many rooms (e.g., a high school) and may span multiple days. Directors register participants for a contest and select preferred performance times. Schedulers review, adjust, and post contest schedules. Each performance is scored by one or more judges. Scores are then publicly posted for directors and participants to review.

## Administration

- Users

### Users

- An Administrator represents a user who is responsible for creating and managing contests at a high level. Administrators set contest dates, locations, and eligibility requirements. Administrators also assign scheduling and adjudication responsibilites for contests.
- A Director represents a user who is responsible for a group of participants. Directors register their groups for contests and select preferred performance times.
- A Scheduler represents a user who is responsible for organizing the performance schedule for a contest. Schedulers set the daily start and end times for a contest. Schedulers can move performances and adjust performance start and end times.
- A Judge represents a user who is responsible for scoring performances. Judges select instrument specializations that determine which performances they are qualified to judge.

## Scheduling

- Day: A date on which the contest is held. A contest may span more than one day.
- Room: The location where a performance takes place. Each room has assigned judges.
- Judge: Individual who evaluates performances. Each judge has specific instrument specializations.
- Performance: A scheduled event with a specified start and end time where a group or individual perform in the contest.
- Participant: Group or individual performing in a contest. A participant plays a specific instrument for a performance, and participants are assigned to rooms based on judges' instrument specialization.
