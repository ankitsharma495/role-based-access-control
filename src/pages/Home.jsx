import React from "react";
import img from "../../assets/img.jpg"

const Home = () => {
  return (
    <div className="container mx-auto text-center animate-fadeIn  ">
      <img className="w-[100vw] overflow-hidden h-[92vh]" src={img} alt="" />
      <h2 className=" mt-[-430px] text-6xl font-semibold text-white  ">Welcome to the RBAC System</h2>
      <div className="mt-6">
        <p className="text-2xl text-white ">Role-Based Access Control (RBAC) is a security model that assigns permissions to users based on their roles within an organization, ensuring controlled access to sensitive resources while promoting efficiency and security</p>
      </div>
    </div>
  );
};

export default Home;
