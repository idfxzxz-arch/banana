import { restoPackages } from "../data/brand";

<<<<<<< HEAD
const menuImages = {
  "Rp23.000": {
    "Menu A": "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&q=80",
    "Menu B": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600&q=80",
    "Menu C": "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80",
    "Menu D": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80",
  },
  "Rp28.000": {
    "Menu A": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=600&q=80",
    "Menu B": "https://images.unsplash.com/photo-1555126634-323283e090fa?w=600&q=80",
    "Menu C": "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80",
    "Menu D": "https://images.unsplash.com/photo-1574653853027-5382a3d23a15?w=600&q=80",
  },
  "Rp33.000": {
    "Menu A": "https://images.openai.com/static-rsc-4/SwlVS95hhuf5RY4AIBPoaAxdxxEUM7te12afVxAweI3-0J1QFqDIM8QRGtPtre8rlhL6xHj9AlN_o3KZu_z1kW6MbgN5viRm7CdiV5xklmRaKJB3Ijgv2ZHVzBuiNC6zIreX_JjRm4XjIPYtDVRgxpX1CxHD9EEPS2Jwn2i5ZME?purpose=inline",
    "Menu B": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&q=80",
    "Menu C": "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=600&q=80",
    "Menu D": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80",
  },
  "Rp38.000": {
    "Menu A": "https://images.unsplash.com/photo-1559742811-822873691df8?w=600&q=80",
    "Menu B": "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600&q=80",
    "Menu C": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",
    "Menu D": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80",
  },
  "Rp54.000": {
    "Menu A": "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80",
    "Menu B": "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=600&q=80",
    "Menu C": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&q=80",
    "Menu D": "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&q=80",
  },
};

=======
>>>>>>> f11fc328edc531cae16c7d7481047e5f9abfc3f2
function RestoMenu() {
  return (
    <section id="resto" className="section resto">
      <div className="container">
        <div className="section-heading">
          <div className="section-label green">Resto Godong Gedang</div>
          <h2>Paket Menu Prasmanan</h2>
          <p>
            Tersedia paket prasmanan untuk berbagai kebutuhan seperti pertemuan,
            rapat, arisan, catering box, dan acara keluarga.
          </p>
        </div>

<<<<<<< HEAD
        <div className="paket-rows">
          {restoPackages.map((paket) => (
            <div className="paket-row" key={paket.price}>
              <div className="paket-row-price">
                <span>{paket.price}</span>
                <span className="paket-row-pax">/pax</span>
              </div>

              <div className="paket-row-menus">
                {paket.menus.map((menu) => (
                  <article className="paket-card" key={menu.name}>
                    <div className="paket-badge">{menu.name}</div>

                    <div className="paket-img-wrap">
                      <img
                        src={menuImages[paket.price]?.[menu.name]}
                        alt={`${menu.name} ${paket.price}`}
                      />
                    </div>

                    <div className="paket-isi">
                      <div className="paket-isi-title">Isi Paket</div>
                      <ul className="paket-checklist">
                        {menu.items.map((item) => (
                          <li key={item}>
                            <span className="paket-check">✔</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                ))}
              </div>
            </div>
=======
        <div className="package-grid">
          {restoPackages.map((paket) => (
            <article className="package-card" key={paket.price}>
              <div className="package-price">{paket.price}</div>

              <div className="package-menu-grid">
                {paket.menus.map((menu) => (
                  <div className="package-menu" key={menu.name}>
                    <h3>{menu.name}</h3>
                    <ul>
                      {menu.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </article>
>>>>>>> f11fc328edc531cae16c7d7481047e5f9abfc3f2
          ))}
        </div>
      </div>
    </section>
  );
}

export default RestoMenu;