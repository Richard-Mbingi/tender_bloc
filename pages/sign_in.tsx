import React from "react";
import { useMoralis } from "react-moralis";

const SignIn = () => {
  const { authenticate, isAuthenticated, logout } = useMoralis();

  return (
    <div className="h-screen bg-[url('../public/images/sign_in_bg.png')] bg-cover bg-center flex flex-col justify-center items-center">
      <h1 className=" text-5xl font-mono">Sign In</h1>
      <div>
        <form action="" className="">
          <input type="text" placeholder="Username/ Email" />
          <input type="password" placeholder="Password" />
          <button className="button" type="submit">
            Enter
          </button>
        </form>
      </div>
      {isAuthenticated ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button
          type="submit"
          onClick={() => {
            authenticate({ provider: "metamask" });
          }}
        >
          Sign in with Metamask
        </button>
      )}
    </div>
  );
};

export default SignIn;
