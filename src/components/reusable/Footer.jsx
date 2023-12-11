import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faWhatsapp, faInstagram, faTwitter, faSnapchat } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'

function Footer() {
    const handleClick= (e) => {
        const { nodeName } = e.target;
        if (nodeName === 'LI') {
            window.scrollTo(0, 0);
        }
    }

    return (
        <div className='footer'>
            <div className='container'>
                <div className="footer-icons flex">
                    <div>
                        <p className='logo'>The News Galaxy</p>
                        <div className='icons flex'>
                            <FontAwesomeIcon icon={faFacebookSquare} />
                            <FontAwesomeIcon icon={faWhatsapp} />
                            <FontAwesomeIcon icon={faInstagram} />
                            <FontAwesomeIcon icon={faTwitter} />
                            <FontAwesomeIcon icon={faSnapchat} />
                        </div>
                    </div>
                    <div>
                        <p >Subscribe to our newsletter</p>
                        <input type="text" placeholder='Enter your email here...' className='email-input' />
                    </div>
                </div>
                <hr className='footer-seperator' />
                <div className='footer-content flex'>
                    <div className="col" onClick={handleClick}>
                        <h3>Space and Universe</h3>
                        <Link to="/Neighborhood Planets" state={{ name: "Neighborhood Planets" }}><li>Neighborhood Planets</li></Link>
                        <Link to="/NASA Missions" state={{ name: "NASA Missions" }}><li>NASA Missions</li></Link>
                        <Link to="/Extraterrestrials" state={{ name: "Extraterrestrials" }}><li>Extraterrestrials</li></Link>
                        <Link to="/New Planet Discovery" state={{ name: "New Planet Discovery" }}><li>New Planet Discovery</li></Link>
                        <Link to="/Satellite News" state={{ name: "Satellite News" }}><li>Satellite News</li></Link>
                        <Link to="/Astronaut Insights" state={{ name: "Astronaut Insights" }}><li>Astronaut Insights</li></Link>
                    </div>
                    <div className="col" onClick={handleClick}>
                        <h3>Our Planet</h3>
                        <Link to="/Earth" state={{ name: "Earth" }}><li>Earth</li></Link>
                        <Link to="/Discover Animals" state={{ name: "Discover Animals" }}><li>Discover Animals</li></Link>
                        <Link to="/Plants and the Life" state={{ name: "Plants and the Life" }}><li>Plants and the Life</li></Link>
                        <Link to="/Human & Civilization" state={{ name: "Human & Civilization" }}><li>Human & Civilization</li></Link>
                        <Link to="/History & Future of earth" state={{ name: "History & Future" }}><li>History & Future</li></Link>
                        <Link to="/Predict the earth Future" state={{ name: "Predict the Future" }}><li>Predict the Future</li></Link>
                    </div>
                    <div className="col" onClick={handleClick}>
                        <h3>Health and Science</h3>
                        <Link to="/Newest Science" state={{ name: "Newest Science" }}><li>Newest Science </li></Link>
                        <Link to="/Science Projects" state={{ name: "Science Projects" }}><li>Science Projects </li></Link>
                        <Link to="/Science for Humanity" state={{ name: "Science for Humanity" }}><li>Science for Humanity </li></Link>
                        <Link to="/The Reality of Science" state={{ name: "The Reality of Science" }}><li>The Reality of Science </li></Link>
                        <Link to="/Human Health" state={{ name: "Human Health" }}><li>Human Health </li></Link>
                        <Link to="/Animals & Plants Health" state={{ name: "Animals & Plants Health" }}><li>Animals & Plants Health </li></Link>
                    </div>
                    <div className="col" onClick={handleClick}>
                        <h3>Technology</h3>
                        <Link to="/Newest Technology" state={{ name: "Newest Technology" }}><li>Newest Technology </li></Link>
                        <Link to="/Technology for Humanity" state={{ name: "Technology for Humanity" }}><li>Technology for Humanity</li></Link>
                        <Link to="/Technology for Animals" state={{ name: "Technology for Animals" }}><li>Technology for Animals </li></Link>
                        <Link to="/Technology for Plants" state={{ name: "Technology for Plants" }}><li>Technology for Plants</li></Link>
                        <Link to="/Technology for the Planet" state={{ name: "Technology for the Planet" }}><li>Technology for the Planet </li></Link>
                        <Link to="/Technology for the Future" state={{ name: "Technology for the Future" }}><li>Technology for the Future</li></Link>
                    </div>
                    <div className="col">
                        <h3>Our Community</h3>
                        <li>About Us</li>
                        <li>Advertise</li>
                        <li>Events</li>
                        <li>People Insights</li>
                        <li>Satellite News</li>
                        <li>Astronaut Insights</li>
                    </div>
                    <div className="col">
                        <h3>Our Podcasts</h3>
                        <li>It’s All About Earth!y</li>
                        <li>Become an Astronauts</li>
                        <li>Discover Other Life?</li>
                        <li>Our Neighborhoods</li>
                        <li>Earth From Space</li>
                        <li>The Future of Human</li>
                    </div>
                </div>
                <hr className='footer-seperator' />
                <p className='bottom-text'>© 2023 The News Galaxy, LLC. All Rights Reserved.</p>
            </div>

        </div>
    )
}

export default Footer