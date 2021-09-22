import React, {Component} from "react";
import Header from "../Common/Header";
import image from "../assets/img/header-bg.jpg";
import Services from "../Common/Services";
import Portfolio from "../Common/Portfolio";
import AboutTeam from "../Common/AboutTeam";
import Team from "../Common/Team";
import Socials from "../Common/Socials";
import Form from "../Common/Form";
class Home extends Component {

render () {


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
<Form/>
</div>

    )
}


}

export default Home;