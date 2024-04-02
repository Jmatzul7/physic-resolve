import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="bg-black text-center lg:text-left">
      <div className="p-4 text-center text-neutral-700 dark:text-neutral-200">
        Copyright © 2024 -
        <a className="text-slate-400" href="#"> All Rights Reserved - @jmatzul7</a>
      </div>
      <div className="flex justify-center">
        <a href="#" className="text-white hover:text-slate-400 mx-2">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a href="#" className="text-white hover:text-slate-400 mx-2">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a href="#" className="text-white hover:text-slate-400 mx-2">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <br />
      </div>
    </footer>
  );
}

export default Footer;
