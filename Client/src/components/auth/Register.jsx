import { Link } from 'react-router-dom'

import './Register.css'

const Register = () => {
  return (
    <div className='login__container'>

        <div className="form-container">
          <form className="form__body">

            <div className='form__heading'>
              <p>Sign Up</p>
            </div>

            <div className="inputGroup">
              <label htmlFor="user name">Username</label>
              <input type="text" placeholder='Username' required=""/>
            </div>

            <div className="inputGroup">
              <label htmlFor="email">Email</label>
              <input type="text" placeholder='Email' required=""/>
            </div>

            <div className="inputGroup">
              <label htmlFor="password">Password</label>
              <input type="password" required="" placeholder='Password'/>
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