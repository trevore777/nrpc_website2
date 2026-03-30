import Section from "@/components/Section";

export const metadata = {
  title: "Our Beliefs | Northern Rivers Pentecostal Church",
  description:
    "Read the core beliefs of Northern Rivers Pentecostal Church."
};

export default function BeliefsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Our Beliefs</span>
          <h1>What we believe</h1>
          <p className="lead">
            We are a Bible-believing Pentecostal church seeking to live in
            obedience to God and in the power of the Holy Spirit.
          </p>
        </div>
      </section>

      <Section title="Core convictions">
        <div className="grid-2">
          <div className="card">
            <h3>The Bible</h3>
            <p>
              We believe the Bible is the inspired Word of God and the final
              authority for faith and Christian living.
            </p>
          </div>

          <div className="card">
            <h3>Jesus Christ</h3>
            <p>
              We believe Jesus Christ is Lord and Saviour. Salvation is found in
              Him alone.
            </p>
          </div>

          <div className="card">
            <h3>Repentance and New Life</h3>
            <p>
              We believe people are called to turn from sin, trust in God, and
              walk in a new life of obedience and holiness.
            </p>
          </div>

          <div className="card">
            <h3>The Holy Spirit</h3>
            <p>
              We believe in the work and power of the Holy Spirit in the life of
              the believer and in the church.
            </p>
          </div>
        </div>
      </Section>

      <Section title="A clearer beliefs page">
        <div className="card">
          <p>
            This page should stay warm, readable, and clear for visitors.
            Instead of long copied doctrinal blocks, the public-facing site
            should summarise beliefs simply and then link to a full doctrinal
            statement PDF if needed.
          </p>
          <p>
            That helps newcomers understand the church without feeling lost in
            too much church terminology on the first visit.
          </p>
        </div>
      </Section>
    </>
  );
}