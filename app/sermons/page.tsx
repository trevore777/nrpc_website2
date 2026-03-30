import Section from "../../components/Section";
import { sermons } from "../../lib/sermons";
import { site } from "../../lib/site";

export const metadata = {
  title: `Sermons | ${site.churchName}`,
  description: `Listen to sermons and Bible messages from ${site.churchName}.`
};

function toEmbedUrl(url?: string) {
  if (!url) return "";
  return url.replace("watch?v=", "embed/");
}

export default function SermonsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Sermons</span>
          <h1>Messages and teaching</h1>
          <p className="lead">
            Watch recent messages, read sermon summaries, and revisit key points.
          </p>
        </div>
      </section>

      <Section title="Recent messages">
        <div className="grid-2">
          {sermons.map((sermon) => (
            <div className="card" key={`${sermon.title}-${sermon.date}`}>
              <h3>{sermon.title}</h3>

              <p className="muted">
                {sermon.speaker} • {sermon.date}
              </p>

              {sermon.scripture ? (
                <p>
                  <strong>Scripture:</strong> {sermon.scripture}
                </p>
              ) : null}

              {sermon.youtube ? (
                <iframe
                  src={toEmbedUrl(sermon.youtube)}
                  width="100%"
                  height="240"
                  style={{ border: 0, borderRadius: 12, marginBottom: 14 }}
                  allowFullScreen
                  title={sermon.title}
                />
              ) : sermon.thumbnail ? (
                <img
                  src={sermon.thumbnail}
                  alt={sermon.title}
                  style={{
                    width: "100%",
                    borderRadius: 12,
                    marginBottom: 14
                  }}
                />
              ) : null}

              <p>{sermon.summary}</p>

              {sermon.keyPoints?.length ? (
                <>
                  <h4>Key points</h4>
                  <ul className="list">
                    {sermon.keyPoints.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </>
              ) : null}

              {sermon.link ? (
                <p>
                  <a
                    href={sermon.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-link"
                  >
                    Watch on YouTube
                  </a>
                </p>
              ) : null}
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}