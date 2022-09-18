import logo from './logo.svg';
import './Login.css';
import './index.css';
import {Link, useNavigate} from "react-router-dom";
import axios from 'axios';

function Login() {
  const navigate = useNavigate();
  const loginUser = async (e) => {
    e.preventDefault();
    const passwordField = document.getElementById("exampleInputPassword1");
    const usernameField = document.getElementById("exampleInputEmail1");
    
    try {
      const result = await axios.post('http://localhost:3000/login', {
        username: usernameField.value,
        password: passwordField.value
      });
      if (result.data === true) {
        navigate('/');
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <html>
      <link rel="stylesheet" href='Login.css'></link>
      <link rel="stylesheet" href='index.css'></link>
      <div className="Login">
        <body class='bg-dark pb-5'>
        <div class="container py-5"></div>
        <div class="container h-100 align-middle opactiy-75 pb-5">
            <div class ='col-md-4 offset-md-4 p-4 opactiy-75 rounded bg-light text-dark'>
                <h1>Laugh-A-Lot Login</h1>
                <form class="pd-3">
                    <div class="form-group py-2">
                        <label for="exampleInputEmail1">Username</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="usernameHelp" placeholder="Enter username"/>
                      
                    </div>
                    <div class="form-group py-2">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                    </div>
   
                    <button onClick={loginUser} type="submit" class="btn my-2 btn-lg btn-block btn-primary">Submit</button>
                    </form>
                    {/* If User is signed in successfully then send them to the homepage */}
                    <Link to ="/signup">Sign Up Here</Link>
            </div>
        </div>
        </body>
      </div>
    </html>
  );
}

export default Login;
