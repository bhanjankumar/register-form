import React from 'react';


class RegisterComponent extends React.Component{
    constructor(){
        super();
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            firstName:'',
            lastName:'',
            email:'',
            password:'',
            firstError :'',
            lastError:'',
            emailError:'',
            passError:''
        }
    }
    validateForm = (e) =>{
        this.setState({
            firstError:'',
            lastError:'',
            emailError:'',
            passError:''
        })
        if(this.state.firstName==''){
           this.setState({firstError:'Please enter first Name'});
        }
        if(this.state.firstName){
            if (!(this.state.firstName).match(/^[a-zA-Z]+$/)) {
            this.setState({firstError:'Please enter valid first name'});
            }
        }
        if(this.state.lastName==''){
            this.setState({lastError:'Please enter last name'});
        }
        if(this.state.lastName){
            if (!(this.state.lastName).match(/^[a-zA-Z]+$/)) {
                this.setState({lastError:'Please enter valid last name'});
            }
        }
        if(this.state.email==''){
            this.setState({emailError:'Please enter email'});
        }
        if(this.state.email){
            let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
            if(reg.test(this.state.email) == false){
                this.setState({emailError:'Please enter valid email'});
            }
        }
        if(this.state.password==''){
            this.setState({passError:'Please enter password'});
        }
        if(this.state.password){
            let regPas =  /^[a-z0-9]+$/i;
            if(this.state.password.length > 7){
                if(!this.state.password.match(/^[a-zA-Z0-9]+$/)){
                    this.setState({passError:'Please enter valid password'});
                }
            }else{
                this.setState({passError:'Please enter minimum 8 charachter'});
            }
        }
        
    }
    handleChange(evt){
        const value = evt.target.value;
        this.setState({
            [evt.target.name]: value
        });
        
    }
    handleEnter = (event) =>{
        if (event.keyCode === 13) {
           this.validateForm();
        }
    }
    render(){
        return(
            <div class="container register-form">
            <div class="form">
                <div class="note">
                    <p>Get started today!{this.state.firstName}</p>
                </div>

                <div class="form-content">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>First Name</label>
                                <input type="text" name="firstName"   class="form-control" onKeyUp={(e)=>this.handleEnter(e)} value={this.state.firstName} onChange={(e) => this.handleChange(e)} />
                                <span className="errorMsg">{this.state.firstError}</span>
                            </div>
                            <div class="form-group">
                                <label>Email Address</label>
                                <input type="text" name="email" class="form-control" onKeyUp={(e)=>this.handleEnter(e)} value={this.state.email}  onChange={(e) => this.handleChange(e)}/>
                                <span className="errorMsg">{this.state.emailError}</span>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                            <label>Last Name</label>
                                <input type="text" name="lastName"  class="form-control" onKeyUp={(e)=>this.handleEnter(e)} value={this.state.lastName}  onChange={(e) => this.handleChange(e)}/>
                                <span className="errorMsg">{this.state.lastError}</span>
                            </div>
                            <div class="form-group">
                            <label>Password</label>
                                <input type="text"  name="password" class="form-control" onKeyUp={(e)=>this.handleEnter(e)} value={this.state.password}  onChange={(e) => this.handleChange(e)}/>
                                <span className="errorMsg">{this.state.passError}</span>
                            </div>
                        </div>
                    </div>
                    <button type="button" class="btnSubmit" onClick={()=>this.validateForm()}><span>Claim your free trial <img src={'images/caret-right-solid.svg'} /></span></button>
                    <p className="terms">You are agreeing to our <a href="javascript:void(0)">Terms and Service</a></p>
                </div>
            </div>
        </div>
        )
    }
}

export default RegisterComponent;