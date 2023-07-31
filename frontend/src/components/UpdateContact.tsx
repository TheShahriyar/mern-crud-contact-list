import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateContact = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    fetch(`https://mern-crud-contact-server.onrender.com/api/contacts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setName(data.payload.name);
        setEmail(data.payload.email);
        setPhone(data.payload.phone);
        setAddress(data.payload.address);
      });
  }, []);

  const handleUpdateContact = (event: any): void => {
    event.preventDefault();

    const name = event.target.name.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
    const address = event.target.address.value;

    const contact = { name, email, phone, address };

    fetch(`https://mern-crud-contact-server.onrender.com/api/contacts/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(contact),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          if (data.success) {
            navigate("/");
            alert(data.message);
          }
        }
      });
  };
  return (
    <div className="w-2/5 mx-auto mt-20">
      <h2 className="text-center font-bold text-3xl">Update Contact</h2>

      <form action="" onSubmit={handleUpdateContact}>
        <div className="mt-10">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Full Name
            </label>
            <div className="mt-2">
              <input
                id="name"
                name="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="block w-full px-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Phone Number
            </label>
            <div className="mt-2">
              <input
                id="phone"
                name="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="block w-full px-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                className="block w-full px-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="address"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Address
            </label>
            <div className="mt-2">
              <input
                id="address"
                name="address"
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="block w-full px-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="px-8 py-3 bg-green-600 text-white font-semibold text-center rounded"
            >
              Update Contact
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateContact;
