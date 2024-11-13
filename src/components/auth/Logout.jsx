import { useNavigate } from "react-router-dom";
import LogoutImg from "../../assets/icons/logout.svg";

const Logout = () => {
  const navigate = useNavigate();
  const handelLogout = () => {
    navigate("/login");
  };
  return (
    <button className="icon-btn" onClick={handelLogout}>
      <img src={LogoutImg} alt="Logout" />
    </button>
  );
};

export default Logout;
