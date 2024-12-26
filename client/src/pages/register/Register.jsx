import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./register.css";

const Register = () => {
  const [passwordError, setPasswordError] = useState(null);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    rePass:"",
  });
  const { dispatch, loading, error } = useContext(AuthContext);


  console.log(formData);
  

  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.rePass) {
      setPasswordError("Passwords do not match!");
      return;
    }

    setPasswordError(null);

    const { rePass, ...dataToSend } = formData;

    dispatch({ type: "REGISTER_START" });
    try {
      const response = await axios.post("/api/auth/register", dataToSend);
      dispatch({ type: "REGISTER_SUCCESS", payload: response.data });
      console.log(response.data);
    } catch (error) {
      dispatch({ type: "REGISTER_FAILURE", payload: error.response.data });
      return
    }
    navigate('/login');
  };

  return (
    <div className="login">
      <div className="lContainer">
      {error && <span style={{color:'red'}}>{error.message}</span>}
        <input
          type="text"
          placeholder="username"
          id="username"
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="text"
          placeholder="email"
          id="email"
          onChange={handleChange}
          className="lInput"
        />
          {passwordError ? <p>{passwordError}</p> : null}
        <input
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="password"
          placeholder="Repeat password"
          id="rePass"
          onChange={handleChange}
          className="lInput"
        />
        <button onClick={handleClick} className="lButton">
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;