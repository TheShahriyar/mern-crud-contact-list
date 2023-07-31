import { Link } from "react-router-dom";

const UserRow = ({ contact, handleDeleteContact }: any) => {
  const { _id, name, phone, email, address } = contact;
  return (
    <>
      <tr>
        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
          {name}
        </td>
        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
          {phone}
        </td>
        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
          {email}
        </td>
        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
          {address}
        </td>
        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 space-x-4">
          <Link
            to={`/update-contact/${_id}`}
            className="bg-orange-400 text-white px-8 py-2 rounded transition-all duration-300 hover:bg-red-600"
          >
            Edit
            <span className="sr-only">, {name}</span>
          </Link>
          <button
            onClick={() => handleDeleteContact(_id)}
            className="bg-red-400 text-white px-8 py-2 rounded transition-all duration-300 hover:bg-red-600"
          >
            Delete
            <span className="sr-only">, {name}</span>
          </button>
        </td>
      </tr>
    </>
  );
};

export default UserRow;
