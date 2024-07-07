/* eslint-disable react/prop-types */

import { TaskTableHeader } from "./task-table-header";
import { TaskTableRow } from "./task-table-row";

const TaskTable = ({ tasks }) => {
  return (
    <>
      <div className="w-full md:w-2/3 bg-white px-2 md:px-4 pt-4 pb-4 shadow-md rounded">
        <table className="w-full">
          <TaskTableHeader />
          <tbody>
            {tasks?.map((task, id) => (
              <TaskTableRow key={id} task={task} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TaskTable;
