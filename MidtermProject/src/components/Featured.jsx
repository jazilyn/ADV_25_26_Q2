import "./featured.css";

export default function Featured() {
  return (
    <section className="featured-section">
      <h2>Tea of the Month</h2>
      <h4>What's Steeping at The Tea Cozy?</h4>

      <div className="tea-grid">
        <div className="tea-item">
          <div className="image-placeholder"></div>
          <p>Fall Berry Blitz Tea</p>
        </div>

        <div className="tea-item">
          <div className="image-placeholder"></div>
          <p>Spiced Rum Tea</p>
        </div>

        <div className="tea-item">
          <div className="image-placeholder"></div>
          <p>Seasonal Donuts</p>
        </div>

        <div className="tea-item">
          <div className="image-placeholder"></div>
          <p>Myrtle Ave Tea</p>
        </div>

        <div className="tea-item">
          <div className="image-placeholder"></div>
          <p>Bedford Bizarre Tea</p>
        </div>
      </div>
    </section>
  );
}
