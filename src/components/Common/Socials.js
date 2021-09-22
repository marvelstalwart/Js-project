import React, {Component} from "react";
import SingleSocials from "./SIngleSocials";
import img1 from "../assets/img/logos/facebook.svg";
import img2 from "../assets/img/logos/google.svg";
import img3 from "../assets/img/logos/ibm.svg";
import img4 from "../assets/img/logos/microsoft.svg";
const SocialItems = [
{img: img1},
{img: img2},
{img: img3},
{img: img4}



];


class Socials extends Component {

render(){


    return(

<div className="py-5">
            <div className="container">
            <div className="row align-items-center">
               {SocialItems.map((socialprops, index)=> {
                   return <SingleSocials {...socialprops} key={index} />
               } ) }                 
                </div>
            </div>
       </div>
    )
}



}
export default Socials;