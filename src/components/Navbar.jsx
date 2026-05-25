import { useEffect, useState } from "react";
import { brand } from "../data/brand";

const navLinks = [
  { label: "Home", href: "#home", id: "home" },
  { label: "Tentang", href: "#tentang", id: "tentang" },
  { label: "Oleh-Oleh", href: "#oleh-oleh", id: "oleh-oleh" },
  { label: "Resto", href: "#resto", id: "resto" },
  { label: "Keunggulan", href: "#keunggulan", id: "keunggulan" },
  { label: "Testimoni", href: "#testimoni", id: "testimoni" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");

  const waLink = `https://wa.me/${brand.phone}`;

  useEffect(() => {
    const detectActiveSection = () => {
      const scrollY = window.scrollY;
      const offset = 140;

      let currentSection = "home";

      navLinks.forEach((link) => {
        const section = document.getElementById(link.id);

        if (section) {
          const sectionTop = section.offsetTop - offset;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (scrollY >= sectionTop && scrollY < sectionBottom) {
            currentSection = link.id;
          }
        }
      });

      setActiveId(currentSection);
    };

    detectActiveSection();

    window.addEventListener("scroll", detectActiveSection);
    window.addEventListener("resize", detectActiveSection);

    return () => {
      window.removeEventListener("scroll", detectActiveSection);
      window.removeEventListener("resize", detectActiveSection);
    };
  }, []);

  return (
    <header className="navbar">
      <div className="container nav-wrapper">
        <a href="#home" className="logo" onClick={() => setOpen(false)}>
          <span>🍌</span>
          {brand.name}
        </a>

        <nav className={`nav-menu ${open ? "active" : ""}`}>
          {navLinks.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={
                activeId === item.id
                  ? "nav-link active-link"
                  : "nav-link"
              }
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}

          <a
            href={waLink}
            target="_blank"
            rel="noreferrer"
            className="nav-btn"
            onClick={() => setOpen(false)}
          >
            Order
          </a>
        </nav>

        <button className="menu-btn" onClick={() => setOpen(!open)}>
          {open ? "✕" : "☰"}
        </button>
      </div>
    </header>
  );
}

export default Navbar;