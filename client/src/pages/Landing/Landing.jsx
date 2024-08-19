import './Landing.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Landing() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Fetch recent images from backend (assuming the backend provides a route)
    axios.get('/api/recents')
      .then(res => setImages(res.data))
      .catch(err => console.error(err));
  }, []);
  console.log(images)

  return (
    <div className="landing">
      <section className="section">
        <img src="/assets/images/landingImages/6.jpg" alt="Recent Work" className="section-image" />
        <h2>Recent Work</h2>
        <p>
          Browse through our gallery of recent tattoos and body art. Our portfolio showcases a variety of styles and techniques, reflecting the creativity and skill of our artists. Get inspired by our latest work and see what we can create for you.
        </p>
        {/* <div className="recent-images">
          {images.map((image, index) => (
            <a href="/recent-work" className="section-link" key={index}>
              <img src={image.url} alt={`Recent Work ${index + 1}`} className="section-image" />
            </a>
          ))}
        </div> */}
      </section>
      <section className="section">
        <a href="/about-us" className="section-link">
          <img src="/assets/images/landingImages/5.jpg" alt="About Us" className="section-image" />
          <h2>About Us</h2>
          <p>
            Learn more about our tattoo shop and the passionate team behind it. We pride ourselves on creating a welcoming atmosphere where art and culture come together. Our mission is to provide exceptional service and high-quality artistry in a friendly environment.
          </p>
        </a>
      </section>
      <section className="section">
        <a href="/tattoo-artists" className="section-link">
          <img src="/assets/images/landingImages/1.jpg" alt="Tattoo Artists" className="section-image" />
          <h2>Tattoo Artists</h2>
          <p>
            Discover our talented tattoo artists, each with their unique style and expertise. Whether you&#39;re looking for a classic design or something custom and one-of-a-kind, our artists are here to bring your vision to life with precision and creativity.
          </p>
        </a>
      </section>
      <section className="section">
        <a href="/piercers" className="section-link">
          <img src="/assets/images/landingImages/2.jpg" alt="Piercers" className="section-image" />
          <h2>Piercers</h2>
          <p>
            Our skilled piercers offer a range of services to help you express your individuality. From ear piercings to more specialized body modifications, our team ensures a safe and comfortable experience using top-quality jewelry and techniques.
          </p>
        </a>
      </section>
      <section className="section">
        <a href="/upcoming-events" className="section-link">
          <img src="/assets/images/landingImages/4.jpg" alt="Upcoming Events" className="section-image" />
          <h2>Upcoming Events</h2>
          <p>
            Don&#39;t miss out on our exciting events and gatherings! From tattoo conventions and artist showcases to special promotions and community events, check out what&#39;s coming up and join us for memorable experiences.
          </p>
        </a>
      </section>
      <section className="section">
        <a href="/mailing-list" className="section-link">
          <img src="/assets/images/landingImages/3.jpg" alt="Join Our Mailing List" className="section-image" />
          <h2>Join Our Mailing List</h2>
          <p>
            Stay connected and be the first to know about our latest updates, exclusive offers, and upcoming events. By joining our mailing list, you&#39;ll receive insider news and special promotions directly to your inbox.
          </p>
        </a>
      </section>
    </div>
  );
}
