import { Link } from "react-router-dom";
import Header from "../components/common/Header";
import { useAuth } from "../hooks/";

const HomePage = () => {
  const { auth } = useAuth();
  console.log(auth);
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/me">Go to profile</Link>
    </div>
  );
};

export default HomePage;
