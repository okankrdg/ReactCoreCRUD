import { RouteComponentProps } from "react-router-dom";
type Tparams = { id: number };
const Edit = ({ match }: { params: RouteComponentProps<Tparams> }) => {
  return <h4>asd : {match}</h4>;
};
export default Edit;
