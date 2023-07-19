import {useState,} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux';
import {register} from '../../action/userAction'

import './Register.css'

const Register = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();


  const [user, setUser]  = useState({
    username: "",
    email: "",
    password: "",
  });


  const {username, email, password} = user;

  const registerSubmit = (e) => {
    e.preventDefault();

    const myForm = {
      username: username,
      email: email.toLowerCase(),
      password: password,
    };
    dispatch(register(myForm));
    navigate('/')
  };


  const registerDataChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };



  return (
    <div className='login__container' >

        <div className="form-container">
          <form className="form__body" encType='multipart/form-data' onSubmit={registerSubmit}>

            <div className='form__heading'>
              <p>Sign Up</p>
            </div>

            <div className="inputGroup">
              <label htmlFor="username">Username</label>
              <input type="text" placeholder='Username' name='username' value={username} onChange={registerDataChange} required/>
            </div>

            <div className="inputGroup">
              <label htmlFor="email">Email</label>
              <input type="text" placeholder='Email' name='email' value={email} onChange={registerDataChange} required/>
            </div>

            <div className="inputGroup">
              <label htmlFor="password">Password</label>
              <input type="password" placeholder='Password' name='password' value={password} onChange={registerDataChange} required/>
            </div>

            <button className="form-submit-btn" type="submit">Sign Up</button>

            <div className='other--options'>
              <div className='or--line'><hr /></div>
              <p>OR</p>
              <div className='or--line'><hr /></div>
            </div>

            <div className='to--regiser'>
              <Link to='/login'>
                Have an account?
              </Link>
            </div>

          </form>
        </div>

    </div>
  )
}

export default Register