import { brand, services, facilities } from "../data/brand";

function Tentang() {
  return (
    <section id="tentang" className="section about">
      <div className="container about-grid">
        <div>
          <div className="section-label">Tentang Kami</div>

          <h2>Tentang Banana Kress</h2>

          <p>
            {brand.name} adalah camilan pisang renyah yang dibuat untuk kamu
            yang suka snack ringan, enak, praktis, dan punya banyak pilihan
            rasa. Dengan tekstur kriuk dan rasa yang pas, Banana Kress cocok
            dinikmati kapan saja.
          </p>

          <p>
            Kamu bisa datang langsung ke toko, belanja cepat, ambil pesanan di
            tempat, atau melakukan pemesanan secara online melalui WhatsApp.
          </p>
        </div>

        <div className="info-box">
          <h3>Opsi Layanan</h3>
          <ul>
            {services.map((item) => (
              <li key={item}> {item}</li>
            ))}
          </ul>

          <h3>Fasilitas</h3>
          <ul>
            {facilities.map((item) => (
              <li key={item}> {item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Tentang;