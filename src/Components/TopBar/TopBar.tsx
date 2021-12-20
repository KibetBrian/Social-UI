import './topBar.scss';
import {BsSearch, BsChatSquareDots} from 'react-icons/bs';
import {FaUserFriends} from 'react-icons/fa';
import {IoIosNotificationsOutline} from 'react-icons/io'
const TopBar = () => {
    return (
        <div className="top_bar">
            <div className="left_top_bar">
                <div className="logoContainer">
                    <img src="/Assets/tradisfin_block_logo.png" alt="Tradisfin" />
                </div>
                <p className='logo_name'>Tradisfin</p>
            </div>
            <div className="center_top_bar">
                <div className="inputContainer">
                    <BsSearch className='search_icon'/>
                    <input type="text" placeholder='Search for trends, topics, traders ...' />
                </div>
            </div>
            <div className="right_top_bar">
                <div className="left">
                    <div className="friends_icon_container">
                        <FaUserFriends className='friends_icon'/>
                        <div className="badge">1</div>
                    </div>
                    <div className="chat_icon_container">
                         <BsChatSquareDots className='chat_icon'/>
                         <div className="badge">1</div>
                    </div>
                    <div className="notifications_icon_container">
                        <IoIosNotificationsOutline className='notification_icon'/>
                        <div className="badge">1</div>
                    </div>
                </div>
                <div className="right">
                    <img src="http://kibet-brian.herokuapp.com/Assets/brianphoto.jpg" alt="" />
                    <p>Brian Kibet</p>
                </div>
            </div>
        </div>
    )
}

export default TopBar
