import './App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faInstagram, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons"


function Socials() {
  return (
    <div className="Socials">
    <a href="https://www.github.com/xtrnglc" target="_blank" class="x1">
      <FontAwesomeIcon className="Icon" icon={faGithub} />   
    </a>
    <a href="https://www.instagram.com/xtrnglc" target="_blank" class="x1">
      <FontAwesomeIcon className="Icon" icon={faInstagram} /> 
    </a>
    <a href="https://www.youtube.com/channel/UCQphoMzLsdSBzi41O5j0TLw" target="_blank" class="x1">
      <FontAwesomeIcon className="Icon" icon={faYoutube} /> 
    </a>
    <a href="https://www.linkedin.com/in/xtrnglc" target="_blank" class="x1">
      <FontAwesomeIcon className="Icon" icon={faLinkedin} /> 
    </a>
      
    </div>
  );
}

export default Socials;
