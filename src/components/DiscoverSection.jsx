const categories = [
  {
    number: "01",
    title: "Korean Beauty",
    text: "Discover some of the most-loved names in Korean skincare, from gentle essentials to innovative treatments.",
    accent: "✦",
    className: "discover-card--large",
  },
  {
    number: "02",
    title: "Everyday Essentials",
    text: "Simple, dependable skincare for cleansing, hydration, protection and everyday routines.",
    accent: "○",
    className: "",
  },
  {
    number: "03",
    title: "Skin Treatments",
    text: "Serums, masks and targeted skincare for the moments when your routine needs something extra.",
    accent: "✧",
    className: "discover-card--wide",
  },
  {
    number: "04",
    title: "Trusted Brands",
    text: "Well-known international names alongside new skincare discoveries worth knowing.",
    accent: "♡",
    className: "",
  },
];

export default function DiscoverSection() {
  return (
    <section className="discover-section" id="discover">
      <div className="discover-container">

        {/* Section heading */}
        <div className="discover-heading">

          <div className="discover-eyebrow">
            <span></span>
            <p>WHAT WE'RE BRINGING TOGETHER</p>
            <span></span>
          </div>

          <h2>
            Something beautiful for{" "}
            <em>every</em>
            <br />
            <em>routine.</em>
          </h2>

          <p className="discover-intro">
            We're exploring a collection built around the skincare
            categories people love most.
          </p>

        </div>


        {/* Category cards */}
        <div className="discover-grid">

          {categories.map((category) => (
            <article
              className={`discover-card ${category.className}`}
              key={category.number}
            >

              <div className="discover-card-top">
                <span className="discover-number">
                  {category.number}
                </span>

                <span className="discover-symbol">
                  {category.accent}
                </span>
              </div>


              <div className="discover-card-content">

                <p className="discover-label">
                  COMING SOON
                </p>

                <h3>{category.title}</h3>

                <p className="discover-description">
                  {category.text}
                </p>

              </div>


              <div className="discover-card-footer">
                <span>EXPLORE WHEN WE LAUNCH</span>
                <span className="discover-arrow">↗</span>
              </div>

            </article>
          ))}

        </div>


        {/* Bottom message */}
        <div className="discover-bottom">
          <span className="discover-bottom-line"></span>

          <p>
            A carefully considered collection.
            <strong> Nothing rushed.</strong>
          </p>

          <span className="discover-bottom-line"></span>
        </div>

      </div>
    </section>
  );
}