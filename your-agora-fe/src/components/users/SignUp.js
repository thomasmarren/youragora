import React, {Component} from 'react'
import { signUp } from '../../actions/signUp';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class SignUp extends Component {

  constructor(props){
    super(props)
    this.handleName = this.handleName.bind(this)
    this.handleEmail = this.handleEmail.bind(this)
    this.handlePassword = this.handlePassword.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {email: "", password: ""}
  }

  handleName(event){
    this.setState({name: event.target.value})
  }

  handleEmail(event){
    this.setState({email: event.target.value})
  }

  handlePassword(event){
    this.setState({password: event.target.value})
  }

  handleSubmit(event){
    event.preventDefault()
    this.props.signUp(this.state)
  }

  render(){

    return(
      <div id="signup-container">
        <h3>Sign Up</h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name-input">Name:</label>
          <input className="u-full-width" onChange={this.handleName} type="text" />
          <label htmlFor="email-input">Email:</label>
          <input className="u-full-width" onChange={this.handleEmail} type="text" />
          <label htmlFor="password-input">Password:</label>
          <input className="u-full-width" onChange={this.handlePassword} type="password" />
          <input className="u-full-width button" id="signup-button" type="submit" value="Dino Danger!" />
        </form>
        <Link id="already-a-member" to='/signin'><p>Already a member? Sign In</p></Link>
      </div>
    )

  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ signUp: signUp }, dispatch)
}

export default connect(null, mapDispatchToProps)(SignUp)
