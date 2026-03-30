export default function Section({
  title,
  children
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="section">
      <div className="container">
        <h2>{title}</h2>
        {children}
      </div>
    </section>
  );
}