import profilePic from './assets/magnus.jpeg'

function Card(){
    return(
        <div className= "card">
            <img className = "card-image" src= {profilePic} alt = "profile picture"></img>
            <h2 className = "card-title">Magnus Fjeldstad</h2>
            <p className = "card-text">I am an computer science student and play video games</p>
        </div>
    );
}   

export default Card