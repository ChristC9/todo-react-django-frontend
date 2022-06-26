import { Link } from "react-router-dom";


const Nav = () => {
    return (
        <nav className="navbar">
            <h1>Users' Todo Lists</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">Add New</Link>
            </div>
        </nav>
    );
}
export default Nav;