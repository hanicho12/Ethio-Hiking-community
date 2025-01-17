import { Link, useRouteError } from "react-router-dom";
import './error.css';


const Error = () => {
  const match = useRouteError();
  console.log(match);

  if (match.status === 404) {
    return (
      <div className="container">
        <div className="error-container">
          <img src="/assets/main/Error.jpg" alt="404" />
          <div className="error-response">
            <Link to="/">Back Home</Link>
          </div>
        </div>
      </div>
    );
  } else {
    return <h1>Something Went Wrong</h1>;
  }
};

export default Error;