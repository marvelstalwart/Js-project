import React, {useState} from "react";
import Header from "../Common/Header";
import image from "../assets/img/header-bg.jpg";
import Services from "../Common/Services";
import Portfolio from "../Common/Portfolio";
import AboutTeam from "../Common/AboutTeam";
import Team from "../Common/Team";
import Socials from "../Common/Socials";
import Form from "../Common/Form";

const fields = {
    sections: 
             [
            {name: 'name', element: 'input', type: 'text', placeholder: 'Your name', classname: 'textfield'},
            {name: 'email', element: 'input', type: 'text', placeholder: 'Your email', classname: 'textfield'},
            {name: 'phone', element: 'input', type: 'text', placeholder: 'Phone number', classname: 'textfield'},
            {name: 'message', element: 'textarea', type: 'text', placeholder: 'Type your message', classname: 'textarea'}
            
            ]
    
        
    
    
    }


const Home = () => {

  
   const [formState, setForm] = useState( {
        name: '',
        email:'',
        phone:'',
        message: ''
         }
)




    return (
<div>
<Header
title="Welcome to our Studio"
subtitle="IT'S NICE TO MEET YOU"
buttonText="Tell me more"
link="/services"
showButton={true}
image={image}
/>
<Services/>
<Portfolio/>
<AboutTeam/>
<Team/>
<Socials/>
<Form formState={formState} setForm={setForm} fields={fields}/>
</div>

    )
}




export default Home;