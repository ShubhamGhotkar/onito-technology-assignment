import "./App.css";
import { Route, Routes } from "react-router-dom";
import Form from "./form/Form";
import UserList from "./userList/UserList";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Form />} />
      <Route path="/user-list" element={<UserList />} />
    </Routes>
  );
}

export default App;
