import { useParams, useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";

const Exception = () => {
  console.log("exception");
  const params = useParams();
  const history = useHistory();

  return (
    <>
      <div>
        <p>Hata : {params}</p>
        <Button variant="primary" onClick={() => history.push("/home")}>
          Back to Home
        </Button>
      </div>
    </>
  );
};

export default Exception;
