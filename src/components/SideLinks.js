import "../components/icons/index";
import {
  IconGitHub,
  IconInsta,
  IconLinkedin,
  IconTwitter,
} from "../components/icons/index";
const SideLinks = () => {
  return (
    <div>
      <div orientation="left" className="downwards-left">
        <ul>
          <li>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconInsta />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconTwitter />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconLinkedin />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconGitHub />
            </a>
          </li>
        </ul>
      </div>
      <div orientation="right" className="downwards-right">
        <div className="link-wrap">
          <a
            href="mailto:joedoe@gmail.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            joedoe@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default SideLinks;
