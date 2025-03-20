 import React from 'react';


class UserCardClass extends React.Component { 


    constructor(props) { 
        super(props)
        console.log(props);

        console.log("Child")

        this.state = { 
            state1 : 0, 
            state2 : 0
        }

    };

    render() { 
        const {name, age, location} = this.props;
        const {state1, state2 } = this.state;

        console.log("Component re-rendered ")

        const handleStateUpd = () => { 
            this.setState({
                state1: this.state.state1 + 1
            })
        }

        return (
          
            <div className = "user-card-class">
                  
                 <h1>
                     Count : {state1}
                 </h1>
                 <button onClick = {() => {  
                    this.state.state1 = this.state.state1 + 1;
                    console.log(this.state.state1)
                    }}>
                           Update Counter
                 </button>
                 <h1>
                     Name : {name}
                 </h1>
                 <h2>
                     Age : {age}
                 </h2>
                 <h2>
                     Location : {location}
                 </h2>
                 <button onClick = {() => { handleStateUpd() }}>
                           Update Counter using set state
                 </button>

                 
            </div>
        );
    }
}


export default UserCardClass;