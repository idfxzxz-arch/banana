import { restoPackages } from "../data/brand";

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
          ))}
        </div>
      </div>
    </section>
  );
}

export default RestoMenu;