/* eslint-disable react/prop-types */

import { UserTableHeader } from "./user-table-header";
import { UserTableRow } from "./user-table-row";

const UserTable = ({ users }) => {
  return (
    <div className="w-full md:w-1/3 bg-white h-fit px-2 md:px-6 py-4 shadow-md rounded">
      <table className="w-full mb-5">
        <UserTableHeader />
        <tbody>
          {users?.map((user, index) => (
            <UserTableRow key={index + user?._id} user={user} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
