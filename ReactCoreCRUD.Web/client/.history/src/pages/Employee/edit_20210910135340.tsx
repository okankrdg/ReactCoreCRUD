import { RouteComponentProps } from "react-router-dom";
const Edit = ({ match }: { match: RouteComponentProps<{ id: number }> }) => {
  return <h4>asd : {match.match}</h4>;
};
export default Edit;
