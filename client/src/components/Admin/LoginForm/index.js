// import React  from 'react'
// import { Button, Modal, FormGroup } from 'react-bootstrap'
// import API from '../../../utils/AdminAPI'
// import "./style.css";

// class Login extends React.Component {
//     state = {
//         email: "",
//         password: "",
//         status: ""
//     }

//     handleChange = e => {
//         const { name, value } = e.target;
//         this.setState({ [name]: value })
//     }

//     loginUser = async () => {
//         console.log(this.state)
//         try {
//             const User = await API.loginUser(this.state)
//             this.props.updateGlobalState("status", User.data)
//         } catch (error) {
//             console.log(error.message)
//         }
//     }
//     render() {
//     return (
//         <div>
//         <>  Email: <input type="text" name="email" onChange={this.handleChange} /><br />
//             Password: <input type="text" name="password" onChange={this.handleChange} /><br />
//             <button onClick={this.loginUser}>Login</button>
//         </>

//         </div>
//     )}
// }

// export default Login;
