import moment from "moment";
import clsx from "clsx";
import PropTypes from "prop-types";

import { getInitials } from "../../../utils/get-initials";

export const UserTableRow = ({ user }) => (
  <tr className="border-b border-gray-200  text-gray-600 hover:bg-gray-400/10">
    <td className="py-2">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full text-white flex items-center justify-center text-sm bg-violet-700">
          <span className="text-center">{getInitials(user?.name)}</span>
        </div>

        <div>
          <p> {user.name}</p>
          <span className="text-xs text-black">{user?.role}</span>
        </div>
      </div>
    </td>

    <td>
      <p
        className={clsx(
          "w-fit px-3 py-1 rounded-full text-sm",
          user?.isActive ? "bg-blue-200" : "bg-yellow-100"
        )}
      >
        {user?.isActive ? "Active" : "Disabled"}
      </p>
    </td>
    <td className="py-2 text-sm">{moment(user?.createdAt).fromNow()}</td>
  </tr>
);

UserTableRow.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
    createdAt: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.instanceOf(Date),
    ]).isRequired,
  }).isRequired,
};
