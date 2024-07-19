import React from 'react';
import { Trash2 } from 'lucide-react';

const userData = [
  { id: 1, name: "John Doe", email: "john@example.com", phone: "123-456-7890", status: "Active" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", phone: "098-765-4321", status: "Warning" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", phone: "555-555-5555", status: "Danger" },
  { id: 4, name: "Alice Brown", email: "alice@example.com", phone: "111-222-3333", status: "Active" },
];

const getStatusColor = (status) => {
  switch (status) {
    case 'Active':
      return 'text-green-600';
    case 'Warning':
      return 'text-yellow-600';
    case 'Danger':
      return 'text-red-600';
    default:
      return 'text-gray-600';
  }
};

const UserTable = () => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">Name</th>
            <th scope="col" className="px-6 py-3">Email</th>
            <th scope="col" className="px-6 py-3">Phone Number</th>
            <th scope="col" className="px-6 py-3">Status</th>
            <th scope="col" className="px-6 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user) => (
            <tr key={user.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {user.name}
              </th>
              <td className="px-6 py-4">{user.email}</td>
              <td className="px-6 py-4">{user.phone}</td>
              <td className={`px-6 py-4 ${getStatusColor(user.status)}`}>{user.status}</td>
              <td className="px-6 py-4 text-right">
                <button className="font-medium text-red-600 dark:text-red-500 hover:underline">
                  <Trash2 size={18} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;