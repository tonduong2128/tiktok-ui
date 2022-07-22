import { useNavigate } from "react-router-dom";
function PrivateComponent({ children, isPrivate }) {
  const navigate = useNavigate();
  return !isPrivate ? { ...children } : <>{navigate("/")}</>;
}
export default PrivateComponent;
