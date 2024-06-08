import { NavLink } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center">
            <h2>Oopps!! Page Not Found</h2>
            <button className="btn btn-outline btn-info my-5"><NavLink to="/">Go Back</NavLink></button>
        </div>
    );
};

export default ErrorPage;