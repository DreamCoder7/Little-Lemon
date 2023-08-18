import classes from "./Footer.module.css";
import { Logo } from "../UI";
import { footer } from "../../constants";
import { Link } from "react-router-dom";

function Footer() {
  const { contact, nav, socialMediaLink } = footer;

  return (
    <footer className={classes.Footer}>
      <div className="container">
        <div className={classes.LogoCon}>
          <Logo />
          <ul className={classes.SocialMediaList}>
            {socialMediaLink.map(({ Icon, link }) => (
              <li key={link} className={classes.SocialMediaItem}>
                <a href={link}>
                  <Icon className={classes.Icon} />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <nav className={classes.Nav}>
          <p className={classes.Title}>{nav.title}</p>
          <ul className={classes.List}>
            <li className={classes.ListItem}>
              <Link className={classes.Link} to="/">
                Home
              </Link>
            </li>
            <li className={classes.ListItem}>
              <Link className={classes.Link} to="/about">
                About
              </Link>
            </li>
            <li className={classes.ListItem}>
              <Link className={classes.Link} to="/menu">
                Menu
              </Link>
            </li>
            <li className={classes.ListItem}>
              <Link className={classes.Link} to="/reservations">
                Reservations
              </Link>
            </li>
            <li className={classes.ListItem}>
              <Link className={classes.Link} to="/order">
                order online
              </Link>
            </li>
            <li className={classes.ListItem}>
              <Link className={classes.Link} to="/login">
                Login
              </Link>
            </li>
          </ul>
        </nav>
        <div className={classes.Contact}>
          <p className={classes.ContactTitle}>{contact.title}</p>
          <ul className={classes.List}>
            {contact.list.map(({ Icon, name }) => (
              <li key={name} className={classes.Item}>
                <Icon className={classes.Icon} />
                <p className={classes.Name}>{name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
