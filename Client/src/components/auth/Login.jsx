
import { useEffect, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom'
import './Login.css'
import {useDispatch, useSelector} from 'react-redux';
import {clearErrors, login} from '../../action/userAction'


const Login = () => {

  const dispatch = useDispatch()
  const naviaget = useNavigate()

  const [email, setLoginEmail] = useState("");
  const [password, setLoginPassword] = useState("");

  const {error, isAuthenticated} = useSelector((state)=>state.user);

  useEffect(() => {

    if(error){
      //alert.error(error)
      dispatch(clearErrors)
    }

    if(isAuthenticated){
      naviaget('/', { replace: true })
    }

  }, [dispatch, naviaget, error, isAuthenticated])



  const loginSubmit = (e) => {
    e.preventDefault();
    
    dispatch(login(email, password))

  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    dispatch(login(email, password))

  }

  return (
    <div className='login__container'>

      <div className="form-container">
            <form className="form__body" onSubmit={loginSubmit}>

              <div className='form__heading'>
                <p>Login</p>
              </div>

              <div className="inputGroup">
                <label htmlFor="email">Email</label>
                <input type="text" placeholder='Email' required value={email} onChange={(e) => setLoginEmail(e.target.value.toLowerCase())}/>
              </div>

              <div className="inputGroup">
                <label htmlFor="password">Password</label>
                <input type="password" placeholder='Password' required value={password} onChange={(e) => setLoginPassword(e.target.value)}/>
              </div>

              <div className='forget_password'>
                <Link>
                  Forget your password?
                </Link>
              </div>

              <button className="form-submit-btn" type="submit" onClick={handleSubmit}>Login</button>

              <div className='other--options'>
                <div className='or--line'><hr /></div>
                <p>OR</p>
                <div className='or--line'><hr /></div>
              </div>

              <div className='to--regiser'>
                <Link to='/register'>
                  Don't have an account?
                </Link>
              </div>

            </form>
      </div>

    </div>
  )
}

export default Login