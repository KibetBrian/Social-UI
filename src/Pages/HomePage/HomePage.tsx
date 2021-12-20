import axios from "axios"
import Feed from "../../Components/Feed/Feed";
import LeftBar from "../../Components/LeftBar/LeftBar";
import RightBar from "../../Components/RightBar/RightBar";
import './homePage.scss';


const HomePage = () => {
    const handleLogOut = async ()=>{
        const logOut = await axios.get('http://localhost:8080/auth/logout');
        console.log(logOut);
    }
    return (
        <div className="home_page">
            <LeftBar />
            <Feed />
            <RightBar />
        </div>
    )
}

export default HomePage
