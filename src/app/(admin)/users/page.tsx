import { DataTable } from './data-table';
import { columns } from './columns';
import { getUsers } from '@/app/actions';

const Users = async () => {
  let { users: data, nextToken } = await getUsers();
  while (nextToken) {
    const { users, nextToken: token } = await getUsers(nextToken);
    data.push(...users);
    nextToken = token;
  }

  return (
    <div className="container mx-auto">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Users
      </h1>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default Users;
