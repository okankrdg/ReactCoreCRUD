import { useParams } from "react-router-dom";
interface RouteParams {
  id: string;
}
const Edit = () => {
  const params = useParams<RouteParams>();
  return <h4>asd : {params.id}</h4>;
};
export default Edit;
