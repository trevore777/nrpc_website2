import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container site-header-inner">
        <Link href="/" className="brand brand-logo" aria-label="Northern Rivers Pentecostal Church home">
          <div className="logo-crop">
            <Image
              src="/logo.png"
              alt="Northern Rivers Pentecostal Church logo"
              width={500}
              height={200}
              priority
              className="logo-image"
            />
          </div>
        </Link>

        <nav className="nav">
          <Link href="/">Home</Link>
          <Link href="/visit">Plan Your Visit</Link>
          <Link href="/beliefs">Beliefs</Link>
          <Link href="/sermons">Sermons</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}