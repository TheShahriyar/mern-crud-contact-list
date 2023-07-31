import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddContact from "./components/AddContact";
import Users from "./components/Contacts";
import UpdateContact from "./components/UpdateContact";

function App() {
  return (
    <>
      <div className="container mx-auto px-5 py-20">
        <div className="text-center mb-10">
          <h1 className="font-bold text-4xl">MERN CRUD Contact App</h1>
        </div>

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Users />} />
            <Route path="/add-contact" element={<AddContact />} />
            <Route path="/update-contact/:id" element={<UpdateContact />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
