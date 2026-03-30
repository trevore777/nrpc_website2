import Link from "next/link";
import Section from "../components/Section";
import { site } from "../lib/site";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">Welcome to {site.shortName}</span>
            <h1>A small church where people can pray, belong, and grow.</h1>
            <p className="lead">
              {site.churchName} is a welcoming Pentecostal church for individuals,
              couples, families, and anyone looking for a simple place to worship
              God and connect with genuine people.
            </p>

            <div className="button-row">
              <Link href="/visit" className="button primary">
                Plan Your Visit
              </Link>
              <Link href="/contact" className="button secondary">
                Contact Us
              </Link>
            </div>
          </div>

          <div className="hero-card">
            <h3>Service Times</h3>
            <p>
              <span className="highlight">Sunday Worship:</span> {site.sundayService}
            </p>
            <p>
              <span className="highlight">Midweek Meeting:</span> {site.wednesdayMeeting}
            </p>
            <p>
              <span className="highlight">Location:</span> {site.fullAddress}
            </p>
            <p className="muted">
              Looking for a small church where you can quietly come, meet people,
              and seek God? You are very welcome.
            </p>
          </div>
        </div>
      </section>

      <Section title="What you will find here">
        <div className="grid-3">
          <div className="card">
            <h3>Warm Fellowship</h3>
            <p>
              We value genuine friendships, care for one another, and a church
              atmosphere where people are noticed and welcomed.
            </p>
          </div>

          <div className="card">
            <h3>Biblical Teaching</h3>
            <p>
              We believe the Bible is the Word of God and we aim to preach and teach
              it clearly, simply, and faithfully.
            </p>
          </div>

          <div className="card">
            <h3>Prayer and Worship</h3>
            <p>
              Our gatherings include prayer, worship, preaching, and room for people
              to seek God personally.
            </p>
          </div>
        </div>
      </Section>

      <Section title="New to church or visiting for the first time?">
        <div className="grid-2">
          <div className="card">
            <h3>You do not need to have it all together</h3>
            <p>
              Some people arrive with a long church background. Others have none at
              all. Some are searching quietly. Some are returning to faith. Wherever
              you are at, you are welcome to come and see.
            </p>
            <p>
              There is no pressure to perform. We want people to feel at ease, hear
              the Word of God, and experience a loving Christian community.
            </p>
          </div>

          <div className="card">
            <h3>Plan your visit</h3>
            <p>
              Our visit page explains what the service is like, what to expect, where
              we meet, and how to contact us before you come.
            </p>
            <div className="button-row">
              <Link href="/visit" className="button primary">
                Go to Plan Your Visit
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Our heart as a church">
        <blockquote>
          We want to be a church where people can encounter God, hear truth from
          Scripture, grow in holiness, and build strong Christian lives through
          prayer, faith, and obedience.
        </blockquote>
      </Section>
    </>
  );
}