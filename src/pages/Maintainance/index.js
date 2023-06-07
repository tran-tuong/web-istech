import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../../components/Button";
import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import './Maintainance.scss';
import images from "../../assets/images";
import { media_links } from '../../assets/media-links';

function Maintainance() {
    return (  
        <div className="maintain-wrapper">
            <div className="maintain-bg-blur">
                <div className="maintain-inner">
                    <header className="maintain-header">
                        <a href="/" className="maintain-logo">
                            <img src={images.logo} alt="Logo"/>
                        </a>
                    </header>
                    <main className="maintain-content">
                        <section className="maintain-content-title">
                            <h1>Coming Soon</h1>
                            <p>Get ready! Something really cool is coming!</p>
                        </section>
                        <section className="maintain-contact">
                            <input type="email" placeholder="Email" />
                            <Button className="btn-notify">Notify Me</Button> 
                        </section>
                        <section className="maintain-media">
                            <a href={media_links.facebook}>
                                <FontAwesomeIcon className="maintain-icon-media" icon={faFacebook} />
                            </a>
                            <a href={media_links.instagram}>
                                <FontAwesomeIcon className="maintain-icon-media" icon={faInstagram} />
                            </a>
                            <a href={media_links.linkedin}>
                                <FontAwesomeIcon className="maintain-icon-media" icon={faLinkedin} />
                            </a>
                        </section>
                    </main>
                </div>
            </div>
        </div>
    );
}

export default Maintainance;