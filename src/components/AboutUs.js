import  UserCard from "./UserCard";
import UserCardClass from "./UserCardClass";

const AboutUs = () => { 
    
    return (
        <div className = "about-us-page">
            About US
            <div className = "user-card-container">
                 <UserCard name = {"Shiv C Sarraswat"}/>
                 <UserCardClass name = "Shiv C Sarraswat" age = {22} location = "Waterloo"/>
            </div>
        </div>
    );

}


export default AboutUs;