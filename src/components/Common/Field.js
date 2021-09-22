import React, {Component} from "react";
class Field extends Component {


render() {



    return(
        
        <div className="form-group">

                    
                  {this.props.element === 'input'  ?
                  
                  <div className="flex-item1">
                  <input className="form-control" 
                  id={this.props.name} 
                  type={this.props.type}
                   placeholder={this.props.placeholder}
                   className = {this.props.classname}
                    data-sb-validations="required" 
                    value = {this.props.value}
                    onChange = {e => this.props.onChange(e)}

                    />
                      </div>
       
                  : 

                 
                <div className="flex-item2">
           <textarea className="form-control"
                               id={this.props.name} 
                                placeholder={this.props.placeholder}
                                className = {this.props.classname}
                                  data-sb-validations="required"
                                  value = {this.props.value}
                                  onChange = {e => this.props.onChange(e)}
                                  
                                  
                                  />
                                  </div>
                                  
                                } 
    </div>
    )
}


}

export default Field;