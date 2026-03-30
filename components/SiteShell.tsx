import Link from 'next/link';
import { ReactNode } from 'react';
import { church } from './data';

const nav = [
  ['Home', '/'],
  ['Plan Your Visit', '/plan-your-visit'],
  ['Beliefs', '/beliefs'],
  ['Sermons', '/sermons'],
  ['Contact', '/contact']
] as const;

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <header className="site-header">
        <div className="container nav">
          <Link className="brand" href="/">
            <span className="brand-mark">NR</span>
            <span>{church.name}</span>
          </Link>
          <nav className="nav-links" aria-label="Primary">
            {nav.map(([label, href]) => (
              <Link key={href} href={href}>
                {label}
              </Link>
            ))}
            <Link className="btn btn-primary" href="/plan-your-visit">
              I’m New
            </Link>
          </nav>
        </div>
      </header>
      <main>{children}</main>
      <footer>
        <div className="container two-col">
          <div>
            <div className="brand" style={{ marginBottom: 12 }}>
              <span className="brand-mark">NR</span>
              <span>{church.name}</span>
            </div>
            <p className="muted lead" style={{ fontSize: '1rem' }}>
              A welcoming Pentecostal church in Banora Point focused on loving God, loving people and making disciples.
            </p>
          </div>
          <div className="two-col" style={{ gap: '1rem' }}>
            <div>
              <h3 className="h3">Visit</h3>
              <ul className="list-clean small muted">
                <li>{church.sundayTime}</li>
                <li>{church.addressLine1}</li>
                <li>{church.suburb} {church.state} {church.postcode}</li>
              </ul>
            </div>
            <div>
              <h3 className="h3">Next steps</h3>
              <ul className="list-clean small">
                <li><Link href="/plan-your-visit">Plan your visit</Link></li>
                <li><Link href="/contact">Send a message</Link></li>
                <li><Link href="/beliefs">Read our beliefs</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
