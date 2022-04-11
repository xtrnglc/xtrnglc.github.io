import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedin, faYoutube, faCoffee } from "@fortawesome/free-brands-svg-icons"
import { faFile, faEnvelope, faLocationDot} from "@fortawesome/free-solid-svg-icons"


function Socials() {
  return (
    <div className="Socials">
    <p>
      <a href="https://www.github.com/xtrnglc" target="_blank" class="x1">
        <FontAwesomeIcon className="Icon" icon={faGithub} />
        xtrnglc
      </a>
    </p>

    <p>
      <a href="https://www.instagram.com/xtrnglc" target="_blank" class="x1">
        <FontAwesomeIcon className="Icon" icon={faInstagram} />
        xtrnglc
      </a>
    </p>

    <p>
      <a href="https://www.youtube.com/channel/UCQphoMzLsdSBzi41O5j0TLw" target="_blank" class="x1">
        <FontAwesomeIcon className="Icon" icon={faYoutube} />
        xtrnglc
      </a>
    </p>

    <p>
      <a href="https://www.linkedin.com/in/xtrnglc" target="_blank" class="x1">
        <FontAwesomeIcon className="Icon" icon={faLinkedin} />
        in/xtrnglc
      </a>
    </p>

    <p>
      <a href="mailto:trung.t.le@utah.edu" target="_blank" class="x1">
      <FontAwesomeIcon className="Icon" icon={faEnvelope} />
        trung.t.le@utah.edu
      </a>
    </p>

    <p>
      <a href="https://github.com/xtrnglc/xtrnglc.github.io/raw/src/src/assets/trung-le-resume-2022.pdf" target="_blank" class="x1">
      <FontAwesomeIcon className="Icon" icon={faFile} />
        Resumé
      </a>
    </p>

    <p>
      <a href="mailto:trung.t.le@utah.edu" target="_blank" class="x1">
      <FontAwesomeIcon className="Icon" icon={faLocationDot} />
        Salt Lake City UT, 84109
      </a>
    </p>


    </div>
  );
}

export default Socials;
