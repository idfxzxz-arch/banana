import { brand } from "../data/brand";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h2>🍌 {brand.name}</h2>
          <p>{brand.tagline}</p>
        </div>

        <div>
          <h3>Kontak</h3>
          <p>WhatsApp: 0822-2058-3113</p>
          <a href={`https://wa.me/${brand.phone}`} target="_blank" rel="noreferrer">
            Chat WhatsApp
          </a>
        </div>

        <div>
          <h3>Lokasi</h3>
          <p>{brand.address}</p>
          <a href={brand.maps} target="_blank" rel="noreferrer">
            Buka Google Maps
          </a>
        </div>

        {/*
<div>
  <h3>Link</h3>
  <a href={brand.linktree} target="_blank" rel="noreferrer">
    Linktree Banana Kress
  </a>
</div>
*/}
      </div>

      <div className="footer-bottom">
        <p>© 2026 Banana Kress. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;