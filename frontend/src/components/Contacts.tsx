import { useEffect, useState } from "react";
import UserRow from "./ContactRow";
import { Link } from "react-router-dom";

const Users = () => {
  const [contacts, setContacts] = useState([]);

  const url = "https://mern-crud-contact-server.onrender.com/api/contacts";

  // Get all contacts
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setContacts(data.payload.contacts));
  }, []);

  // Delete Contact
  const handleDeleteContact = (id: String) => {
    const proceed = window.confirm("Are you sure you want to delete?");
    if (proceed) {
      fetch(`${url}/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            alert(data.message);
          }
        });
      const remaining = contacts.filter((contact: any) => contact._id !== id);
      setContacts(remaining);
    }
  };

  return (
    <>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-base font-semibold leading-6 text-gray-900">
              Total Contacts: {contacts.length}
            </h1>
            <p className="mt-2 text-sm text-gray-700">
              A list of all the contacts including their name, phone, email and
              address.
            </p>
            <p className="mt-2 text-sm text-gray-700">
              You can add, update and delete contact.
            </p>
          </div>
          <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            <Link
              to="/add-contact"
              type="button"
              className="block rounded-md bg-indigo-600 px-8 py-4 text-center text-base font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Add Contact
            </Link>
          </div>
        </div>
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Phone
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Email
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Address
                      </th>
                      <th
                        scope="col"
                        className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                      >
                        <span className="sr-only">Edit/Delete</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {contacts.map((contact, index) => (
                      <UserRow
                        key={index}
                        contact={contact}
                        handleDeleteContact={handleDeleteContact}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;
