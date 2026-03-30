import Section from "../../components/Section";
import { site } from "../../lib/site";

export const metadata = {
  title: `Plan Your Visit | ${site.churchName}`,
  description: `Find service times, location details, and what to expect when visiting ${site.churchName}.`
};

export default function VisitPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Plan Your Visit</span>
          <h1>Thinking about visiting?</h1>
          <p className="lead">
            We know visiting a church for the first time can feel like a big step.
            Our aim is to make it simple, clear, and welcoming.
          </p>
        </div>
      </section>

      <Section title="When we meet">
        <div className="grid-2">
          <div className="card">
            <h3>Sunday Service</h3>
            <p>{site.sundayService}</p>
            <p>
              A time of worship, prayer, preaching, and fellowship together.
            </p>
          </div>
          <div className="card">
            <h3>Midweek Meeting</h3>
            <p>{site.wednesdayMeeting}</p>
            <p>Prayer, Bible encouragement, and connection during the week.</p>
          </div>
        </div>
      </Section>

      <Section title="Where we are">
        <div className="grid-2">
          <div className="card">
            <h3>Address</h3>
            <p>{site.fullAddress}</p>
            <p className="muted">
              Add parking notes here if needed, for example where visitors can park
              and which entrance to use.
            </p>
          </div>

          <div className="card map-card">
            <iframe
              title="Northern Rivers Pentecostal Church location map"
              src={site.mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="map-frame"
            />
          </div>
        </div>
      </Section>

      <Section title="What to expect">
        <div className="grid-3">
          <div className="card">
            <h3>Friendly people</h3>
            <p>
              We are a smaller church, so people will usually greet you and help you
              feel settled.
            </p>
          </div>

          <div className="card">
            <h3>Simple worship service</h3>
            <p>
              Our service includes singing, prayer, Bible preaching, and time to
              respond to God.
            </p>
          </div>

          <div className="card">
            <h3>Come as you are</h3>
            <p>
              You do not need to know everything before you come. You are welcome
              to attend and quietly observe if that is more comfortable.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Questions people often have">
        <div className="card">
          <ul className="list">
            <li>What should I wear? Modest, neat, everyday clothing is fine.</li>
            <li>How long is the service? Around 60 to 90 minutes.</li>
            <li>Can I come on my own? Yes, absolutely.</li>
            <li>Do I need to contact someone first? No, but you are welcome to.</li>
          </ul>
        </div>
      </Section>
    </>
  );
}