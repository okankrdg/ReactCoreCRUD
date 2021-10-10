import { useParams, useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
interface RouteParams {
  type: string;
}
const Exception = () => {
  const params = useParams<RouteParams>();
  const history = useHistory();

  return (
    <>
      <div>
        <p>Hata : {params.type}</p>
        <Button variant="primary" onClick={() => history.push("/home")}>
          Back to Home
        </Button>
      </div>
    </>
  );
};

export default Exception;
