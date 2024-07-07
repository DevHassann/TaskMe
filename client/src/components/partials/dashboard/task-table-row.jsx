import moment from "moment";
import clsx from "clsx";
import PropTypes from "prop-types";

import UserInfo from "../user-information";

import { DashboardTaskTableIcons } from "../../../static/dashboard-data";

import { TaskTypeStyle } from "../../../styles/task-type-style";
import { PriotityStyles } from "../../../styles/priotity-styles";
import { Backgrounds } from "../../../styles/backgrounds";

export const TaskTableRow = ({ task }) => (
  <tr className="border-b border-gray-300 text-gray-600 hover:bg-gray-300/10">
    <td className="py-2">
      <div className="flex items-center gap-2">
        <div
          className={clsx("w-4 h-4 rounded-full", TaskTypeStyle[task.stage])}
        />

        <p className="text-base text-black">{task.title}</p>
      </div>
    </td>

    <td className="py-2">
      <div className="flex gap-1 items-center">
        <span className={clsx("text-lg", PriotityStyles[task.priority])}>
          {DashboardTaskTableIcons[task.priority]}
        </span>
        <span className="capitalize">{task.priority}</span>
      </div>
    </td>

    <td className="py-2">
      <div className="flex">
        {task.team.map((m, index) => (
          <div
            key={index}
            className={clsx(
              "w-7 h-7 rounded-full text-white flex items-center justify-center text-sm -mr-1",
              Backgrounds[index % Backgrounds.length]
            )}
          >
            <UserInfo user={m} />
          </div>
        ))}
      </div>
    </td>
    <td className="py-2 hidden md:block">
      <span className="text-base text-gray-600">
        {moment(task?.date).fromNow()}
      </span>
    </td>
  </tr>
);

TaskTableRow.propTypes = {
  task: PropTypes.shape({
    title: PropTypes.string.isRequired,
    priority: PropTypes.string.isRequired,
    stage: PropTypes.string.isRequired,
    team: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        title: PropTypes.string,
        email: PropTypes.string.isRequired,
      })
    ).isRequired,
    date: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)])
      .isRequired,
  }).isRequired,
};
