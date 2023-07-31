import React from "react";
import Users from "../components/Contacts";

const Homepage = () => {
  return (
    <div>
      <div className="container mx-auto px-5 py-20">
        <div className="text-center mb-10">
          <h1 className="font-bold text-4xl">MERN CRUD Contact App</h1>
        </div>
        <Users />
      </div>
    </div>
  );
};

export default Homepage;
