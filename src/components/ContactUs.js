import React from 'react';
import ContactUsCard from './ContactUsCard';

class ContactUs extends React.Component {
    
    constructor(props) { 
        super(props);
       // console.log("Parent component constructor")
    
    }

    componentDidMount() {
        //console.log("Parent component did mount") 

    }

    render() { 
        //console.log("Parent component render")
        return (

            <div>
                This is contact us. 
                <ContactUsCard/>
              
            </div>
        )
    }

}

export default ContactUs;