import "./locations.css";

export default function Locations() {
  return (
    <section className="locations-section">
      <h2>Locations</h2>

      <div className="locations-grid">
        <div className="location-card">
          <h3>Downtown</h3>
          <p>384 West 4th St</p>
          <p>Suite 108</p>
          <p>Portland, Maine</p>
        </div>

        <div className="location-card">
          <h3>East Bayside</h3>
          <p>3433 Fisherman's Avenue</p>
          <p>(Northwest Corner)</p>
          <p>Portland, Maine</p>
        </div>

        <div className="location-card">
          <h3>Oakdale</h3>
          <p>515 Crescent Avenue</p>
          <p>Second Floor</p>
          <p>Portland, Maine</p>
        </div>
      </div>
    </section>
  );
}
