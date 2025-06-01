import "../styles/footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <ul className="social-links">
        <li>
          <i className="lni lni-instagram-original"></i>
        </li>
        <li>
          <i className="lni lni-twitter"></i>
        </li>
        <li>
          <i className="lni lni-linkedin"></i>
        </li>
        <li>
          <i className="lni lni-github"></i>
        </li>
      </ul>

      <p>
        Built By{" "}
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Joe Doe
        </a>
      </p>
      <p>
        Designed by{" "}
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Joe Doe
        </a>
      </p>
    </div>
  );
};

export default Footer;
