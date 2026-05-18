import { brand } from "../data/brand";

function Hero() {
  const waMessage = encodeURIComponent(
    "Halo Banana Kress, saya mau order produknya."
  );

  const waLink = `https://wa.me/${brand.phone}?text=${waMessage}`;

  return (
    <section id="home" className="hero section">
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="badge">Fresh • Crispy • Tasty</div>

          <h1>
            Banana Kress, <span>Kriuknya Bikin Nagih!</span>
          </h1>

          <p>
            Camilan pisang renyah dengan berbagai varian rasa favorit. Cocok
            untuk teman santai, belajar, kerja, hingga oleh-oleh.
          </p>

          <div className="hero-actions">
            <a href={waLink} target="_blank" rel="noreferrer" className="btn primary">
              Order Sekarang
            </a>

            <a href="#oleh-oleh" className="btn secondary">
              Lihat Varian
            </a>
          </div>
        </div>

        <div className="hero-card">
          <div className="banana-icon">🍌</div>
          <h2>{brand.name}</h2>
          <p>{brand.tagline}</p>

          <div className="hero-mini-info">
            <span>✅ Pesan antar</span>
            <span>✅ Ambil di toko</span>
            <span>✅ Belanja langsung</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;