import React, { useState } from "react";
import "./SignUp.Module.css";
import { Link, useNavigate } from "react-router-dom";
import Sun from "../../assets/206.png";
import Cloud from "../../assets/cloud.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../Services/firebase/firebase";
import { toast } from "react-hot-toast";
import Loading from "../../components/Loading/Loading";
const SignUp = () => {
  const [values, Setvalues] = useState({ name: "", email: "", password: "" });
  const [loading, Setloading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    Setloading(true);
    if (!values.name || !values.email || !values.password) {
      toast.error("Please enter All the Fields");
      Setloading(false);
      return;
    }
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      if (userCredentials) {
        const user = userCredentials.user;
        try {
          await updateProfile(user, { displayName: values.name });
          localStorage.setItem("username", user.displayName);
          console.log(user.displayName);
        } catch (error) {
          console.log(error.message);
          toast.error(error.message);
        }
        Setvalues({ name: "", email: "", password: "" });
        toast.success("User created successfully");
        navigate("/");
      } else {
        toast.error(error.message);
      }
    } catch (error) {
      if (
        error.message ===
        "Firebase: Password should be at least 6 characters (auth/weak-password)."
      ) {
        toast.error("Password should be at least 6");
      }
      if (error.message === "Firebase: Error (auth/email-already-in-use).") {
        toast.error("Email already in use");
      }
    }
    Setloading(false);
  };
  return (
    <div className="main-sgnup">
      {/* <img className="Sun" src={Sun} alt="" />
      <img className="Cloud1" src={Cloud} alt="" />
      <img className="Cloud2" src={Cloud} alt="" />
      <img className="Cloud3" src={Cloud} alt="" /> */}
      <div className="signup">
        <form onSubmit={handleSubmit}>
          <h3 className="lgn-h3">
            SignUp <span className="diff">Weather App</span>
          </h3>

          <div className="form-floating">
            <input
              type="username"
              className="form-control"
              id="signup-name"
              placeholder="username"
              value={values.name}
              onChange={(e) =>
                Setvalues((prev) => ({ ...prev, name: e.target.value }))
              }
            />
            <label htmlFor="floatingInput">Username</label>
          </div>
          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="signup-email"
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
              id="signup-pass"
              placeholder="Password"
              value={values.password}
              onChange={(e) =>
                Setvalues((prev) => ({ ...prev, password: e.target.value }))
              }
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <button className="btn submit" type="submit" disabled={loading}>
            {loading ? <Loading /> : "Create Account"}
          </button>
        </form>
        <Link className="login-link" to="/login">
          {" "}
          Already Have an Account ?{" "}
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
