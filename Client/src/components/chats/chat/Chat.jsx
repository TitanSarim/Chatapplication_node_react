import './Chat.css'
import data from '../../../chat.json'
import Card from './Card';
import {TfiSearch} from 'react-icons/tfi'

const Chat = () => {


  return (
    <div className='chat--container'>

        <div className='chat--heading'>
            <p>Messages</p>
        </div>

        <div className='chat--user--search--container'>
            <div className='chat--user--search'>
                <span className='icon--user--search'>
                    <TfiSearch/>
                </span>
                <input type="text" placeholder="Search"/>
            </div>
        </div>

        <div className='chat--wrapper'>
            <div className='chat--inner-wrapper'>
                {data.map((item, index) => (
                    <div key={index}>
                        <Card data={item}/>
                    </div>
                ))}
            </div>
        </div>
    
    </div>
  )
}

export default Chat