import axios from "axios"

const HomePage = () => {
    const handleLogOut = async ()=>{
        const logOut = await axios.get('http://localhost:8080/auth/logout');
        console.log(logOut);
    }
    return (
        <div>
          <button onClick={handleLogOut}>Log Out</button>
        </div>
    )
}

export default HomePage
