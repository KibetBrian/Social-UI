import './googleButton.scss'

const GoogleButton = (props: {onClick: ()=>void}) => {
    return (
        <div className="googleContainer">
                  <button>                    
                    <img src="/Assets/google_logo.png" alt="logo" />
                    Continue with Google</button>
        </div>
    )
}

export default GoogleButton
