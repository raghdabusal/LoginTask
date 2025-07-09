import { users as mockUsers } from "../Data/data";
import { type User } from "../Data/data";
import Action from "./Action";

function UserTable() {
  const columnClass =
    "w-[170px] border-b border-[#DFE1E5] py-[10px] text-left font-medium text-[14px] leading-[20px] text-[#566073] font-inter";
  const cellClass =
    "w-[170px] border-b border-[#DFE1E5] py-[16px] text-left font-medium text-[14px] leading-[20px] text-[#0B1935] font-inter";

  return (
    <div className="lg:p-6 w-full overflow-x-auto">
      <table className="lg:m-0 m-6  table-fixed w-full">
        <thead>
          <tr>
            <th className="sticky left-0 bg-white z-20 w-[40px] border-b border-[#DFE1E5] py-[10px] px-[8px] text-left">
              <input
                type="checkbox"
                className="w-[12px] h-[12px] rounded-[3px] border border-[#DFE1E5]"
              />
            </th>

            <th
              className="sticky bg-white z-10 w-[125px] border-b border-[#DFE1E5] py-[10px] px-[8px] text-left"
              style={{ left: "40px" }}
            >
              Displays ID
            </th>

            <th className={columnClass}>Name</th>
            <th className={columnClass}>Email Address</th>
            <th className={columnClass}>Role(s)</th>
            <th className={columnClass}>Status</th>
            <th className={columnClass}>Last Login</th>
            <th className={columnClass}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {mockUsers.map((user: User) => (
            <tr key={user.id}>
              <td className="sticky left-0 bg-white z-20 w-[40px] border-b border-[#DFE1E5] py-[16px] px-[8px] text-left">
                <input
                  type="checkbox"
                  className="w-[12px] h-[12px] rounded-[3px] border border-[#DFE1E5]"
                  aria-label={`Select user ${user.name}`}
                />
              </td>
              <td
                className="sticky bg-white z-10 w-[125px] border-b border-[#DFE1E5] py-[16px] px-[8px] text-left"
                style={{ left: "40px" }}
              >
                #{user.id}
              </td>{" "}
              <td className={cellClass}>{user.name}</td>
              <td className={cellClass}>{user.email}</td>
              <td className={cellClass}>{user.role}</td>
              <td className={cellClass}>{user.status}</td>
              <td className={cellClass}>{user.lastLogin}</td>
              <td className={cellClass}>
                <Action />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;
