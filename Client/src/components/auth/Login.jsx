
import {Link} from 'react-router-dom'
import './Login.css'


const Login = () => {
  return (
    <div className='login__container'>

    <div className="form-container">
          <form className="form__body">

            <div className='form__heading'>
              <p>Login</p>
            </div>

            <div className="inputGroup">
              <label htmlFor="email">Email</label>
              <input type="text" placeholder='Email' required=""/>
            </div>

            <div className="inputGroup">
              <label htmlFor="password">Password</label>
              <input type="password" required="" placeholder='Password'/>
            </div>

            <div className='forget_password'>
              <Link>
                Forget your password?
              </Link>
            </div>

            <button className="form-submit-btn" type="submit">Login</button>

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