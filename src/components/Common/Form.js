import React, {useState} from "react";
import Field from "./Field";
const fields = {
sections: 
         [
        {name: 'name', element: 'input', type: 'text', placeholder: 'Your name', classname: 'textfield'},
        {name: 'email', element: 'input', type: 'text', placeholder: 'Your email', classname: 'textfield'},
        {name: 'phone', element: 'input', type: 'text', placeholder: 'Phone number', classname: 'textfield'},
        {name: 'message', element: 'textarea', type: 'text', placeholder: 'Type your message', classname: 'textarea'}
        
        ]

    


}


;
export default function Form(props) {
    const initialState =  {
        name: '',
        email:'',
        phone:'',
        message: ''
         }

   const {formState, setForm} = useState(initialState)




        return(

            <section className="page-section" id="contact">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Contact Us</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
              
                <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                    <div className="row align-items-stretch mb-5">
                    <div className='col-md-6' >
                     {fields.sections.map((section, sectionIndex) => {
                         console.log("new rending section", sectionIndex, "with", section);
                     
    
                         return <Field 
                         
                         {...section}
                          key={sectionIndex} 
                          value ={formState[section.name]}
                           
                          onChange = {e => setForm(
                              
                            {[section.name]: e.target.value}
                            
                            
                            )}

                            

                          /> 
                         
                        

                        })}

                         </div>
                     )

                    
                      
                    </div>
                    
                    <div className="d-none" id="submitSuccessMessage">
                        <div className="text-center text-white mb-3">
                            <div className="fw-bolder">Form submission successful!</div>
                            To activate this form, sign up at
                            <br />
                            <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                        </div>
                    </div>
               
                    <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>
                 
                    <div className="text-center">
                        
                        <button className="btn btn-primary btn-xl text-uppercase disabled" 
                        id="submitButton"
                         type="submit"
                        
                         >
                             
                             Send Message
                        
                        </button></div>
                </form>
            </div>
        </section>
        )
    }
