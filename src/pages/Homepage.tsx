import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div className="home--container">
      <Link className="home--thumbnail" to="video1">
          <img />
          Video 1
      </Link>
      <Link className="home--thumbnail" to="video2">
          <img />
          Video 2
      </Link>
      <Link className="home--thumbnail" to="video3">
          <img />
          Video 3
      </Link>
      <Link className="home--thumbnail" to="video4">
          <img />
          Video 4
      </Link>
    </div>
  );
}
