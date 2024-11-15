import { useNavigate } from "react-router-dom";
import LogoutImg from "../../assets/icons/logout.svg";
import { useAuth } from "../../hooks";

const Logout = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const handelLogout = () => {
    setAuth({});
    navigate("/login");
  };
  return (
    <button className="icon-btn" onClick={handelLogout}>
      <img src={LogoutImg} alt="Logout" />
    </button>
  );
};

export default Logout;
