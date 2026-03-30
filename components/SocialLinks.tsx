import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { site } from "../lib/site";

const socials = [
  {
    name: "Facebook",
    href: site.socialLinks.facebook,
    icon: FaFacebookF
  },
  {
    name: "Instagram",
    href: site.socialLinks.instagram,
    icon: FaInstagram
  },
  {
    name: "LinkedIn",
    href: site.socialLinks.linkedin,
    icon: FaLinkedinIn
  },
  {
    name: "YouTube",
    href: site.socialLinks.youtube,
    icon: FaYoutube
  }
];

export default function SocialLinks() {
  return (
    <div className="social-links" aria-label="Social media links">
      {socials.map((social) => {
        const Icon = social.icon;

        return (
          <Link
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            className="social-link"
            aria-label={social.name}
            title={social.name}
          >
            <span className="social-icon" aria-hidden="true">
              <Icon size={18} />
            </span>
            <span className="social-label">{social.name}</span>
          </Link>
        );
      })}
    </div>
  );
}