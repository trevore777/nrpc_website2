import { site } from "../lib/site";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>
          <strong>{site.churchName}</strong>
        </p>
        <p>Sunday Service: {site.sundayService}</p>
        <p>{site.wednesdayMeeting}</p>
        <p>{site.fullAddress}</p>
        <p>
          A small church focused on prayer, worship, Bible teaching, and genuine
          fellowship.
        </p>

        <SocialLinks />
      </div>
    </footer>
  );
}