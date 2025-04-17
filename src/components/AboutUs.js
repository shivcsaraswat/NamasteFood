// import  UserCard from "./UserCard";
// import UserCardClass from "./UserCardClass";
// import React from 'react';  

const AboutUs = () => { 
    
    return (
        <div className = "about-us-page ">
            <h1 className =  "font-bold text-center m-2 p-2 text-2xl"> About US </h1>
            {/* <div className = "user-card-container">
                 /* <UserCard name = {"Shiv C Sarraswat"}/> */
                 /* <UserCardClass name = "Shiv C Sarraswat" age = {22} location = "Waterloo"/> */
            /* </div> */
            }
            <input className = "p-2 m-2 border-2 border-black" placeholder="name"/>
            <input className = "p-2 m-2 border-2 border-black" placeholder = "message"/>
            <button className = "p-2 m-2 rounded-lg border-2 bg-gray-300" > Submit </button>
        </div>
    );

}


export default AboutUs;