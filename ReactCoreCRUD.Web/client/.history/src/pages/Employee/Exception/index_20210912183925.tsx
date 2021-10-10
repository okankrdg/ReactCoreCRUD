import React from "react";
import { useParams } from "react-router-dom";

const Exception = ({ history }) => {
  const ğarams = useParams();

  return (
    <>
      <Result
        status={
          error.errorCode === "400" || error.errorCode === "401"
            ? "403"
            : error.errorCode
        }
        title={error.errorCode}
        subTitle={error.errorDescription}
        extra={
          <Button type="primary" onClick={() => history.push("/home")}>
            Back to Home
          </Button>
        }
      />
    </>
  );
};

export default Exception;
