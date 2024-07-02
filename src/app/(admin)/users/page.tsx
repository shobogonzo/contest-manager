import { getUsers } from "@/app/data";
import DataTable from "./data-table";

const Page = async () => {
  let { users, nextToken } = await getUsers();
  while (nextToken) {
    const { users: nextPage, nextToken: token } = await getUsers(nextToken);
    users.push(...nextPage);
    nextToken = token;
  }

  return (
    <>
      <h1 className="text-2xl/8 font-semibold text-zinc-950 sm:text-xl/8 dark:text-white">
        Users
      </h1>
      <hr
        role="presentation"
        className="mt-6 w-full border-t border-zinc-950/10 dark:border-white/10"
      />

      <DataTable users={users} />
    </>
  );
};

export default Page;
