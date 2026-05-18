import { olehOlehProducts } from "../data/brand";

function OlehOleh() {
  return (
    <section id="oleh-oleh" className="section oleh">
      <div className="container">
        <div className="section-heading">
          <div className="section-label">Pusat Oleh-Oleh</div>
          <h2>Menu Produk Banana Krezzz</h2>
          <p>
            Berbagai pilihan oleh-oleh khas mulai dari Krezzz, bolu, lapis
            kukus, cookies, pastry, pie, sampai camilan renyah.
          </p>
        </div>

        <div className="menu-category-grid">
          {olehOlehProducts.map((category) => (
            <article className="menu-category-card" key={category.category}>
              <h3>{category.category}</h3>

              <div className="menu-list">
                {category.items.map((item) => (
                  <div className="menu-row" key={item.name}>
                    <span>{item.name}</span>
                    <strong>{item.price}</strong>
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

export default OlehOleh;