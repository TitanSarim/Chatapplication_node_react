
import './Card.css'

const Card = ({data}) => {

    console.log(data.profileImage);

  return (
    <div className='chat--card--container'> 

        <div className='chat--card--wrapper'>
            <div className='chat--card--img'>
                <img src={data.profileImage}/>
            </div>
            <div className='chat--card--name'>
                <p>{data.username}</p>
                <span>ok byee</span>
            </div>
        </div>
    
        <div className='chat--card--date'>
            <p>14 May</p>
            <div className='chat--card--status'>
                <p>10</p>
            </div>
        </div>
    </div>
  )
}

export default Card