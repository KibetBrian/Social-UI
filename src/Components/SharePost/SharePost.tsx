import './sharePost.scss';
import {BsFillImageFill} from 'react-icons/bs';
import {MdSentimentSatisfiedAlt} from 'react-icons/md';
import {MdOutlineLabel} from 'react-icons/md'
const SharePost = () => {
    return (
        <div className = "share_post">
            <form className="share_container">
                <div className="share_post_top">
                    <img src="http://kibet-brian.herokuapp.com/Assets/brianphoto.jpg" alt="User" className="shareProfileImage" />
                    <input type="text" placeholder = "Whats on your mind?"/>
                </div>
                <hr className="hr" />
                <div className="share_bottom">
                    <div className="share_options">
                        <label htmlFor = 'file' className="share_option">
                            <BsFillImageFill className = "share_icon"/>
                            <span className = "share_option_text" >Photo</span>
                            <input style = {{display: "none"}} type ='file' id = 'file' accept = ".jpg, .png, .jpeg" />
                        </label>
                        <div className="share_option tag">
                            <MdOutlineLabel className = "share_icon"/>
                            <span className = "share_option_text" >Article</span>
                        </div>
                        <div className="share_option">
                            <MdSentimentSatisfiedAlt className = "share_icon"/>
                            <span className = "share_option_text" >Random Thoughts</span>
                        </div>
                    </div>
                 <button type= "submit" className = "share_button">Share</button>
                </div>
            </form>
        </div>
    )
}

export default SharePost
