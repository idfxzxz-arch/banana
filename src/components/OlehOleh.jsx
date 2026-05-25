import { useState } from "react";
import { olehOlehProducts } from "../data/brand";

function OlehOleh() {
  const [activeTab, setActiveTab] = useState(0);

  const activeCategory = olehOlehProducts[activeTab];

  const getCatClass = (category) => {
    return "oleh-cat-" + category.replace(/[^a-zA-Z]/g, "");
  };

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

        {/* TAB NAVBAR */}
        <div className="oleh-tabs">
          {olehOlehProducts.map((cat, i) => (
            <button
              key={cat.category}
              className={`oleh-tab-btn ${i === activeTab ? "active" : ""}`}
              onClick={() => setActiveTab(i)}
            >
              <span className="tab-emoji">{cat.emoji}</span>
              <span className="tab-label">{cat.category}</span>
            </button>
          ))}
        </div>

        {/* GRID PRODUK */}
        <div className="oleh-product-grid">
          {activeCategory.items.map((item) => (
            <div
              className={`oleh-product-card ${getCatClass(activeCategory.category)}`}
              key={item.name}
            >
              <div className="oleh-product-img-wrap">
                <img src={item.img} alt={item.name} />
              </div>
              <div className="oleh-product-info">
                <span className="oleh-product-name">{item.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OlehOleh;