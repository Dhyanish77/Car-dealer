import React from "react";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Listings", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Pages", href: "#" },
  { label: "About", href: "#" },
  { label: "Contact", href: "#" },
  { label: "Sign in", href: "#" },
];

const Header = () => (
  <header style={{
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 10,
    background: "transparent",
    color: "#fff",
    fontFamily: 'Inter, Arial, sans-serif',
    paddingTop: 24
  }}>
    <div style={{
      maxWidth: 1300,
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 32px"
    }}>
      {/* Logo */}
      <div style={{ fontWeight: 700, fontSize: 24, letterSpacing: 1, color: "#fff" }}>BOXCARS</div>
      {/* Navigation */}
      <nav style={{ display: "flex", alignItems: "center", gap: 32, fontSize: 16 }}>
        {navLinks.map((link, idx) => (
          <a
            key={link.label}
            href={link.href}
            style={{
              color: "#fff",
              textDecoration: "none",
              fontWeight: idx === navLinks.length - 1 ? 500 : 400,
              opacity: idx === navLinks.length - 1 ? 0.8 : 1,
              marginRight: idx === navLinks.length - 1 ? 24 : 0
            }}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#"
          style={{
            background: "#fff",
            color: "#1a1a1a",
            borderRadius: 24,
            padding: "8px 24px",
            fontWeight: 600,
            fontSize: 16,
            textDecoration: "none",
            boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
            transition: "background 0.2s, color 0.2s"
          }}
        >
          Submit Listing
        </a>
      </nav>
    </div>
  </header>
);

export default Header; 