import { useParams } from "react-router-dom";
import useEffect from "react";
interface RouteParams {
  id: string;
}
const Edit = () => {
  const params = useParams<RouteParams>();
  useEffect(() => {});
  return <h4>asd : {params.id}</h4>;
};
export default Edit;
