import React, {Component} from "react";
class SingleSocials extends Component {

render(){

return(

    <div className="col-md-3 col-sm-6 my-3">
        <a href="#!"><img className="img-fluid img-brand d-block mx-auto" src={this.props.img} alt="..." /></a>
    </div>

) 

}


}
export default SingleSocials;