function Card() {
    return (
        <main>
            <div id="profile-info">
                <h1>Jessica Randall</h1>
                <span>London, United Kingdom</span>
                <p>{'"'}Front-end developer and avid reader.{'"'}</p>
            </div>
            <div id="links">
                <div className="social-link">GitHub</div>
                <div className="social-link">Frontend Mentor</div>
                <div className="social-link">LinkedIn</div>
                <div className="social-link">Twitter</div>
                <div className="social-link">Instagram</div>
            </div>
        </main>
    );
}

export default Card;