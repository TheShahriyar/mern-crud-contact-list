import { useEffect } from "react";

const baseURL = "http://localhost:3001/api/";

const getContacts = async () => {
  useEffect(() => {
    fetch(baseURL + "contacts")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
};

export default { getContacts };
