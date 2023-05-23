import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/main/Navbar";
import Login from "./components/main/Login";

import Signup from "./components/main/Signup";
import Home from "./components/main/Home";
import Feedback from "./components/main/Feedback";
import Footer from "./components/main/Footer";
import FormulaHandler from "./components/user/FormulaHandler";
import ManageTools from "./components/user/ManageTools";
import ManageDataset from "./components/user/ManageDataset";
import Userprofile from "./components/user/Userprofile";
import WorkSpace from "./components/user/WorkSpace";
import Toolpack from "./components/user/Toolpack";
import User from "./components/user";
import Main from "./components/main";
import AdminDashboard from "./components/admin/AdminDashboard";
import Managetools from "./components/admin/Managetools";
import ManageUser from "./components/admin/ManageUser";
import Admin from "./components/admin";
import Toolbar from "./components/user/Toolbar";
import UserAuth from "./auth/UserAuth";
import ExcelSheet from "./components/user/ExcelSheet";
import SheetProvider from "./context/SheetProvider";

function App() {
  return (
    <BrowserRouter>
      <SheetProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/main/home" />} />

          <Route path="main" element={<Main />}>
            <Route path="home" element={<Home />} />
            <Route path="navbar" element={<Navbar />} />
            <Route path="signup" element={<Signup />} />
            <Route path="login" element={<Login />} />
            <Route path="feedback" element={<Feedback />} />
            <Route path="footer" element={<Footer />} />
          </Route>

          <Route
            path="user"
            element={
              <UserAuth>
                <User />
              </UserAuth>
            }
          >
            <Route path="excelsheet" element={<ExcelSheet />} />
            <Route path="toolpack" element={<Toolpack />} />
            <Route path="Workspace" element={<WorkSpace />} />
            <Route path="userprofile" element={<Userprofile />} />
            <Route path="FormulaHandler" element={<FormulaHandler />} />
            <Route path="feedback" element={<Feedback />} />
            <Route path="ManageTools" element={<ManageTools />} />
            <Route path="ManageDataset" element={<ManageDataset />} />
            <Route path="toolbar" element={<Toolbar />} />
          </Route>

          <Route path="admin" element={<Admin />}>
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="managetools" element={<Managetools />} />
            <Route path="manageuser" element={<ManageUser />} />
          </Route>
        </Routes>
      </SheetProvider>
    </BrowserRouter>
  );
}

export default App;
