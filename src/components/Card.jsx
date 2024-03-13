import profileImage from '../assets/images/avatar-jessica.jpeg';

function Card() {
    return (
        <main>
            <div id="card">
                <div id="profile">
                    <div id="image">
                        <img src={profileImage} alt="" srcSet="" />
                    </div>
                    <div id="info">
                        <h1>Jessica Randall</h1>
                        <span>London, United Kingdom</span>
                    </div>
                    <p id="caption">{'"'}Front-end developer and avid reader.{'"'}</p>
                </div>
                <div id="links">
                    <div className="social-link">GitHub</div>
                    <div className="social-link">Frontend Mentor</div>
                    <div className="social-link">LinkedIn</div>
                    <div className="social-link">Twitter</div>
                    <div className="social-link">Instagram</div>
                </div>
            </div>
        </main>
    );
}

export default Card;