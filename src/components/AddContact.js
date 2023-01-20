import React from 'react'
import Contactlist from './Contactlist';

class AddContact extends React.Component
{
        state = {
            name:"",
            email:"",
        };
 



            add = (e) => {
                e.preventDefault();
                if(this.state.name==='' || this.state.email==='')
                    {
                        alert("All fields mandotary");
                        return;
                    }
                        this.props.addContactHandler(this.state);
                    this.setState({name:'',email:''});

            }


    render(){
        return(
            <div className='ui main'>


<form className='ui form' onSubmit={this.add}>
<h2>Add Contact Form</h2>
            <div className='field'>
            <label>Name</label>
            <input
             type="text" 
             name="name"
             value={this.state.name}
              placeholder='Name'
              onChange={(e) => this.setState({name:e.target.value})}
              />
            </div>
            <div className='field'>
            <label>Email</label>
            <input 
             type="email"
             name="email"
             value={this.state.email}
             placeholder='Email'
             onChange={(e) => this.setState({email:e.target.value})} />
            </div>
            
            
            <input type="submit" value="ADD" className='ui button blue' name="submit"  />
        
</form>

                </div>
        );
    }

}

export default AddContact;