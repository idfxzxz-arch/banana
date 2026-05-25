import { testimonials } from "../data/brand";

function Testimoni() {
  return (
    <section id="testimoni" className="section testimonials">
      <div className="container">
        <div className="section-heading">
          <div className="section-label">Kata Pelanggan</div>
          <h2>Testimoni Banana Kress</h2>
          <p>
            Beberapa kesan pelanggan setelah mencoba camilan pisang renyah kami.
          </p>
        </div>

        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <div className="testimonial-card" key={item.name}>
              <div className="stars">★★★★★</div>
              <p>"{item.text}"</p>
              <h3>{item.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimoni;