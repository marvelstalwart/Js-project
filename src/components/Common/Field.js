 const Field = ({fields}) => {



    return(
        
        <div className="form-group">

                    
                  {fields.filter(section  => {
                   
                   return section.element === 'input'  ?
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

                  })} 
                  
                 
                 
            
                                  
                                
    </div>
    )



}

export default Field;