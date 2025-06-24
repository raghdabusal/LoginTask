import { useState } from "react";
import Pagination from "./Pagination";
import { users as mockUsers } from "../Data/users";
import { type User } from "../types/user";

function UserTable() {
  const [currentPage, setCurrentPage] = useState(1); // current page number
  const usersPerPage = 9; // users to show per page

  // Get users for the current page
  const indexOfLastUser = currentPage * usersPerPage; // Caclc. the last user's position on this page  (Page * km userPerPage)
  const indexOfFirstUser = indexOfLastUser - usersPerPage; // Calc. the first user's position on this page (Akher user - km userPerPage)
  const currentUsers = mockUsers.slice(indexOfFirstUser, indexOfLastUser); // to cut only the users for this page

  const totalPages = Math.ceil(mockUsers.length / usersPerPage); // This tells us how many total pages are needed

  // Move to next page
  const goToNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1); // move to the next one
  };

  // Move to previous page
  const goToPrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1); // move to the previous one
  };

  return (
    <div>
      <h2>User Table</h2>

      {/* User Table */}
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">ID</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Role</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Last Login</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* loop through the users for the current page  */}
          {currentUsers.map((user: User) => (
            <tr key={user.id}>
              <td className="border p-2 text-center">{user.id}</td>
              <td className="border p-2">{user.name}</td>
              <td className="border p-2">{user.email}</td>
              <td className="border p-2">{user.role}</td>
              <td className="border p-2">{user.status}</td>
              <td className="border p-2">{user.lastLogin}</td>

              <td className="border p-2 text-center">
                <button className="text-blue-500 mr-2">View</button>
                <button className="text-green-500 mr-2">Edit</button>
                <button className="text-gray-500">Toggle</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Buttons */}
      <Pagination
        currentPage={currentPage} // what page were on
        totalPages={totalPages} // how many pages there are
        onNext={goToNext}
        onPrev={goToPrev}
      />
    </div>
  );
}

export default UserTable;
