import { RouteComponentProps } from "react-router-dom";
type Tparams = { id: number };
const Edit = ({ match }: { match: RouteComponentProps<Tparams> }) => {
  return <h4>asd : {match.match}</h4>;
};
export default Edit;
