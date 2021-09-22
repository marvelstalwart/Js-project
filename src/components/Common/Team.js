import React, {Component} from 'react';
import SingleTeam from './SingleTeam';
import img1 from "../assets/img/team/1.jpg";
import img2 from "../assets/img/team/2.jpg";
import img3 from "../assets/img/team/3.jpg";
const team = [
{image: img1, title: 'Parveen Anand', subtitle: 'Lead Designer' },
{image: img2, title: 'Diana Petersen', subtitle: 'Lead Marketer' },
{image: img3, title: 'Larry Parker', subtitle: 'Lead Developer' }

];
class Team extends Component {

    render(){



    return (

        <section className="page-section bg-light" id="team">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div className="row">
                   
                {team.map((teamprops, index ) => {

return <SingleTeam {...teamprops} key={index} />
})} 
                   
                </div>
                <div className="row">
                    <div className="col-lg-8 mx-auto text-center"><p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p></div>
                 </div>
            </div>
        </section>
       

    )
}



}

export default Team;