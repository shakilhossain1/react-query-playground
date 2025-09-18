import { Navigate, Outlet } from "react-router";
import UsersList from "./UsersList";
import useAuth from "./hooks/useAuth";

const UsersPage = () => {

  return (
    <div className="row">
      <div className="col">
        <UsersList />
      </div>
      <div className="col">
        <Outlet />
      </div>
    </div>
  );
};

export default UsersPage;
