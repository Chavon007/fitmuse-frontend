"use client";
import "./signUp.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";


function SignUp() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errMessage, setErrMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSuccess(false);

    if (password.length < 8) {
      setErrMessage("Password must contain atleast 8 characters");
    } else if (confirmPassword !== password) {
      setErrMessage("Confirm password is different from the password");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrMessage("Enter a valid email address");
    } else {
      setErrMessage("Account created successfuly");
      setIsSuccess(true);

      setTimeout(() => {
        router.push("/login");
      }, 2000);
    }
  };

  return (
    <div className="SignUp1">
      <div className="signUp2">
        <div className="signUp-content">
          {errMessage && (
            <div className={isSuccess ? "message-success" : "message-error"}>
              {errMessage}
            </div>
          )}

          <div>
            <form className="form1" onSubmit={handleSubmit} autoComplete="off">
              <input
                type="email"
                value={email}
                placeholder="Enter Your Email"
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="off"
              />
              <input
                type="password"
                value={password}
                placeholder="Enter Password"
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="new-password"
              />

              <input
                type="password"
                value={confirmPassword}
                placeholder="Confirm Password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                autoComplete="new-password"
              />
              <button type="submit">Create Account</button>
            </form>
          </div>
        </div>

        <div className="image">
          <Image src="/login1.avif" alt="" width={1000} height={100}style={{width: "100%", height: "100%"}} />
        </div>
      </div>
    </div>
  );
}

export default SignUp;
