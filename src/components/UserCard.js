import { useState } from 'react';

const UserCard = () => {
    
    const [state, setState] = useState(0);    

    return (
        <div className = "user-card">
             <h1> Count : {state} </h1>
             <h1> Name  : Shiv C Sarraswat </h1> 
             <h2> Age   : 22             </h2>
        </div>
    );

}


export default UserCard;

