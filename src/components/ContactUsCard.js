import React from 'react';
class ContactUsCard extends React.Component {
    
    constructor(props) { 
        super(props);
        console.log("Child Component Constructor")
    }

    componentDidMount() { 
        console.log("Child component did mount")
    }

    render() {
        console.log("Child Component Render")
        return (
            <div>
                This is contact us card
            </div>
        ) 

    }

};


export default ContactUsCard;