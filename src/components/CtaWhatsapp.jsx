import { brand } from "../data/brand";

function CtaWhatsapp() {
  const waMessage = encodeURIComponent(
    "Halo Banana Kress, saya mau tanya dan order produknya."
  );

  const waLink = `https://wa.me/${brand.phone}?text=${waMessage}`;

  return (
    <section className="cta section">
      <div className="container cta-box">
        <div>
          <div className="section-label dark">Order Sekarang</div>
          <h2>Mau Coba Banana Kress Hari Ini?</h2>
          <p>
            Klik tombol WhatsApp untuk pesan, tanya stok, atau ambil langsung di
            toko.
          </p>
        </div>

        <div className="cta-actions">
          <a href={waLink} target="_blank" rel="noreferrer" className="btn white">
            Chat WhatsApp
          </a>

          <a href={brand.maps} target="_blank" rel="noreferrer" className="btn outline">
            Buka Maps
          </a>
        </div>
      </div>
    </section>
  );
}

export default CtaWhatsapp;