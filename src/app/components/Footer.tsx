import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faFacebook, faThreads, faXTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="bg-black text-center lg:text-left">
      <div className="p-4 text-center text-neutral-700 dark:text-neutral-200">
        Copyright © 2024 -
        <a className="text-slate-400" href="#"> All Rights Reserved - @jmatzul7</a>
      </div>
      <div className="flex justify-center mb-2">
        <a href="https://twitter.com/jmatzul7" className="text-white hover:text-slate-400 mx-2">
          <FontAwesomeIcon icon={faXTwitter} size="2x" />
        </a>
        <a href="https://www.instagram.com/jmatzul7/" className="text-white hover:text-slate-400 mx-2">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a href="https://www.facebook.com/jmatzul7" className="text-white hover:text-slate-400 mx-2">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a href="https://www.threads.net/@jmatzul7" className="text-white hover:text-slate-400 mx-2">
          <FontAwesomeIcon icon={faThreads} size="2x" />
        </a>
        <br />
        <hr/>
      </div>
    </footer>
  );
}

export default Footer;
