import { Outlet } from "react-router-dom";

const AuthLayout = () => {
    return (
        <div>
            <h3>Auth layout</h3>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;