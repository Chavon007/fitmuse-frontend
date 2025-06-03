"use client";

import "./login.css";
import Link from "next/link";
import Image from "next/image";

import { useRouter } from "next/navigation";
import { useState } from "react";
function User() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSuccess(false);

    if (!email.includes(".com")) {
      setMessage("Email must contain .com");
    } else if (password.length <= 8) {
      setMessage("Password must contain atleast 8 characters");
    } else {
      setMessage("Login in success");
      setIsSuccess(true);

      setTimeout(() => {
        router.push("/");
      }, 2000);
    }
  };
  return (
    <div className="login">
      <div className="login-area">
        <div className="newform">       
          <div className="login-content">
            <div className="login-form">
                <h5 className="text-geen">{message}</h5>
              <form
                className="lForm"
                onSubmit={handleSubmit}
                autoComplete="off"
              >
                <input
                  type="email"
                  value={email}
                  placeholder="Enter Your Email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="off"
                />
                <input
                  type="password"
                  value={password}
                  placeholder="Your password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoComplete="new-password"
                />{" "}
                <br />
                <button type="submit">Sign In</button>
              </form>
            </div>

            <div className="signUp">
              <h5>You do not have an account? </h5>
              <Link href="/signUp">Click here</Link>
            </div>

            <div className="help">
              <h4>
                For further support, you may visit the Help Center or contact
                our customer service team.
              </h4>
            </div>
          </div>

          <div className="img">
            <Image
              src="/login1.avif"
              alt=""
              width={1000}
              height={100}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default User;
