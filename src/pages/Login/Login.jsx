import React, { useState } from "react";
import "./Login.Module.css";
import { Link, useNavigate } from "react-router-dom";
import Sun from "../../assets/206.png";
import Cloud from "../../assets/cloud.png";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Services/firebase/firebase";
import { toast } from "react-hot-toast";
import Loading from "../../components/Loading/Loading";
const Login = () => {
  const [values, Setvalues] = useState({ email: "", password: "" });
  const [loading, Setloading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    Setloading(true);
    if (!values.email || !values.password) {
      toast.error("Please enter All the Fields");
      Setloading(false);
      return;
    }
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      if (user.user) {
        Setvalues({ email: "", password: "" });
        toast.success("Logged In successfully");
        navigate("/");
      } else {
        toast.error(error.message);
      }
    } catch (error) {
      if (error.message === "Firebase: Error (auth/invalid-credential).") {
        toast.error("Invalid Email or Password");
      }
    }
    Setloading(false);
  };
  return (
    <div className="main-login">
      {/* <img className="Sun" src={Sun} alt="" /> */}
      {/* <img className="Cloud1" src={Cloud} alt="" /> */}
      {/* <img className="Cloud2" src={Cloud} alt="" /> */}
      {/* <img className="Cloud3" src={Cloud} alt="" /> */}
      <div className="login">
        <form onSubmit={handleSubmit}>
          <h3 className="lgn-h3">Login <span className="diff">Weather App</span></h3>

          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="login-email"
              placeholder="name@example.com"
              value={values.email}
              onChange={(e) =>
                Setvalues((prev) => ({ ...prev, email: e.target.value }))
              }
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              value={values.password}
              onChange={(e) =>
                Setvalues((prev) => ({ ...prev, password: e.target.value }))
              }
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <button
            className="btn submit"
            type="submit"
            disabled={loading}
          >
            {loading ? <Loading /> : "Login"}
          </button>
        </form>
          <Link className="sgnup-link" to="/signup">
            {" "}
            Don't Have an Account ?{" "}
          </Link>
      </div>
    </div>
  );
};

export default Login;
