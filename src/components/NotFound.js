import { faRoadBarrier } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../assets/notfound.css";
const NotFound = () => {
  return (
    <>
    <section className="notfound">
      <div className="d-flex align-items-center justify-content-center">
            <div className="text-center">
            <div className="icon">
                <FontAwesomeIcon icon={faRoadBarrier} />
            </div>
                <h1 className="display-1 fw-bold">404</h1>
                <p className="fs-3"> <span className="text-danger">Opps!</span> Page not found.</p>
                <p className="lead">
                    The page you’re looking for doesn’t exist.
                  </p>
                <a href="/" className="btn btn-success">Go Home</a>
            </div>
        </div>
    </section>
    </>
  );
};

export default NotFound;