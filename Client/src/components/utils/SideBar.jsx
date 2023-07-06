import {Link, useLocation} from 'react-router-dom'
import dp from '../../assets/dp.jpg'
import {PiChatCircleTextFill, PiPhoneCallLight} from 'react-icons/pi'
import logout from '../../assets/logout.png'
import setting from '../../assets/setting.png'

import './SideBar.css'

const SideBar = () => {

  const location = useLocation();


  return (
    <div className='sidebar--container'>

      <div className='sidebar--wrapper'>

        <div className='sidebar--logo'>
          <p>logo</p>
        </div>

        {/* user */}
        <div className='sidebar--userdp'>
          <img src={dp} alt="dp" />
        </div>

        <div className='sidebar--breaker'>
          <hr />
        </div>

        {/* chat */}
        <div className='sidebar--group'>
          
          <div className='sidebar--chats'>
            <Link to='/' className={location.pathname === "/" ? "nav-active" : ""}>
              <PiChatCircleTextFill size={22}/>
            </Link>
          </div>   

          <div className='sidebar--calls'>
            <Link>
              <PiPhoneCallLight size={22}/>
            </Link>
          </div>

        </div>


        <div className='sidebar--breaker'>
          <hr />
        </div>
        
        {/* setting */}

       <div className='sidebar--group'>

        <div className='sidebar--settings'>
          <Link>
            <img src={setting} alt="setting" />
          </Link>
        </div>
        <div className='sidebar--logout'>
          <Link>
            <img src={logout} alt="logout" />
          </Link>
        </div>

       </div>


      </div>

    </div>
  )
}

export default SideBar