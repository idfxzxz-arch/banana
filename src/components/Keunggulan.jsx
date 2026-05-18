import { advantages, payments, parking } from "../data/brand";

function Keunggulan() {
  return (
    <section id="keunggulan" className="section advantages">
      <div className="container">
        <div className="section-heading">
          <div className="section-label">Kenapa Pilih Kami?</div>
          <h2>Keunggulan Produk</h2>
          <p>
            Banana Kress hadir dengan rasa enak, pelayanan mudah, dan cocok
            untuk semua suasana.
          </p>
        </div>

        <div className="advantage-grid">
          {advantages.map((item, index) => (
            <div className="advantage-card" key={item}>
              <span>{index + 1}</span>
              <p>{item}</p>
            </div>
          ))}
        </div>

        <div className="small-info-grid">
          <div className="small-info-card">
            <h3>Pembayaran</h3>
            {payments.map((item) => (
              <p key={item}>✅ {item}</p>
            ))}
          </div>

          <div className="small-info-card">
            <h3>Parkir</h3>
            {parking.map((item) => (
              <p key={item}>✅ {item}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Keunggulan;