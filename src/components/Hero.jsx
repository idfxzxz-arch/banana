import { brand } from "../data/brand";

function Hero() {
  const waMessage = encodeURIComponent(
    "Halo Banana Krezzz, saya mau tanya produk oleh-oleh dan reservasi resto."
  );

  const waLink = `https://wa.me/${brand.phone}?text=${waMessage}`;

  return (
    <section id="home" className="hero section">
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="badge">Pusat Oleh-Oleh • Resto • Prasmanan</div>

          <h1>
            Banana Krezzz,{" "}
            <span>Pusat Oleh-Oleh & Resto Keluarga</span>
          </h1>

          <p>
            Temukan berbagai pilihan oleh-oleh khas Banana Krezzz, camilan
            renyah, pastry, pie, hingga menu prasmanan dari Resto Godong Gedang.
            Cocok untuk mampir, belanja oleh-oleh, makan bersama keluarga, atau
            reservasi acara.
          </p>

          <div className="hero-actions">
            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="btn primary"
            >
              Order / Reservasi
            </a>

            <a href="#oleh-oleh" className="btn secondary">
              Lihat Oleh-Oleh
            </a>

            <a href="#resto" className="btn secondary">
              Menu Resto
            </a>
          </div>
        </div>

        <div className="hero-card">
          <div className="banana-icon">🍌</div>

          <h2>{brand.name}</h2>
          <p>{brand.tagline}</p>

          <div className="hero-mini-info">
            <span> Pusat oleh-oleh lengkap</span>
            <span> Resto Godong Gedang</span>
            <span> Paket prasmanan & reservasi</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;