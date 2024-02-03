export default function About() {
  return (
    <div className="about-route">
      <div className="about-container">
        <div className="about-top-image">
          <img src='./assets/images/about2.jpg' alt="woman enjoying camper van trip" className="about-img" />
        </div>
        <div className="about-below-image">
        <div className="about-heading">
          Don’t squeeze in a sedan when you could relax in a van.
        </div>
        <div className="about-desc">
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉). <br /><br /><br /> Our
          team is full of vanlife enthusiasts who know firsthand the magic of
          touring the world on 4 wheels.
        </div>
        <div className="button-div">
            <div className="button-div-text">Your destination is waiting. Your van is ready.</div>
            <button className="button-div-button">Explore Our Vans</button>
        </div>
        </div>
      </div>
    </div>
  );
}
