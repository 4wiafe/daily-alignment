import { Link } from "react-router";
import "./PageNotFound.css";

export default function PageNotFound() {
  return (
    <div className="page-not-found">
      <h1>404 Error</h1>
      <h2>Page not found</h2>
      <p>The page you are looking for does not exist.</p>
      <Link to="/">Go to the Home Page</Link>
    </div>
  );
}
