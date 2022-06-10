import React from "react";

const sign_up = () => {
  return (
    <div className="h-screen bg-[url('../public/images/sign_up_bg.png')] bg-cover bg-center flex flex-col justify-center items-center">
      <h1 className=" text-5xl font-mono">Sign Up</h1>
      <div>
        <form action="" className="">
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Re-enter Password" />
          <button className="button" type="submit">
            Enter
          </button>
        </form>
      </div>
    </div>
  );
};

export default sign_up;
