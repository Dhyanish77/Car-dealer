import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const companyLinks = ["About Us", "Blog", "Services", "FAQs", "Terms", "Contact Us"];
const quickLinks = ["Get in Touch", "Help center", "Live chat", "How it works"];
const brands = ["Toyota", "Porsche", "Audi", "BMW", "Ford", "Nissan", "Peugeot", "Volkswagen"];
const vehicleTypes = ["Sedan", "Hatchback", "SUV", "Hybrid", "Electric", "Coupe", "Truck", "Convertible"];
const socialIcons = [
  { label: "Facebook", icon: <FaFacebookF color="#000" style={{ background: '#fff', borderRadius: '50%', padding: 2 }} />, href: "#" },
  { label: "Twitter", icon: <FaTwitter color="#000" style={{ background: '#fff', borderRadius: '50%', padding: 2 }} />, href: "#" },
  { label: "Instagram", icon: <FaInstagram color="#000" style={{ background: '#fff', borderRadius: '50%', padding: 2 }} />, href: "#" },
  { label: "LinkedIn", icon: <FaLinkedinIn color="#000" style={{ background: '#fff', borderRadius: '50%', padding: 2 }} />, href: "#" },
];

const Footer = () => (
  <footer style={{ background: "#0a1023", color: "#fff", fontFamily: 'Inter, Arial, sans-serif', fontSize: 15, marginTop: 60 }}>
    {/* Newsletter */}
    <div style={{ maxWidth: 1300, margin: "0 auto", padding: "48px 32px 0 32px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" }}>
      <div style={{ minWidth: 320, marginBottom: 24 }}>
        <div style={{ fontWeight: 600, fontSize: 22, marginBottom: 6 }}>Join BoxCar</div>
        <div style={{ color: "#bfc6d1", fontSize: 15 }}>Receive pricing updates, shopping tips & more!</div>
      </div>
      <form style={{ display: "flex", alignItems: "center", gap: 0, background: "#181f36", borderRadius: 24, padding: 4, minWidth: 340 }}>
        <input type="email" placeholder="Your email address" style={{ background: "transparent", border: "none", outline: "none", color: "#fff", padding: "10px 16px", fontSize: 15, borderRadius: 24, flex: 1 }} />
        <button type="submit" style={{ background: "#4f5fff", color: "#fff", border: "none", borderRadius: 24, padding: "10px 28px", fontWeight: 600, fontSize: 15, cursor: "pointer", marginLeft: 8 }}>Sign Up</button>
      </form>
    </div>
    {/* Divider */}
    <div style={{ borderTop: "1px solid #232a43", margin: "32px 0 0 0" }} />
    {/* Columns */}
    <div style={{ maxWidth: 1300, margin: "0 auto", padding: "40px 32px 0 32px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 32 }}>
      {/* Company */}
      <div style={{ minWidth: 140, marginBottom: 32 }}>
        <div style={{ fontWeight: 600, fontSize: 16, marginBottom: 18 }}>Company</div>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, color: "#bfc6d1" }}>
          {companyLinks.map(link => <li key={link} style={{ marginBottom: 10 }}>{link}</li>)}
        </ul>
      </div>
      {/* Quick Links */}
      <div style={{ minWidth: 140, marginBottom: 32 }}>
        <div style={{ fontWeight: 600, fontSize: 16, marginBottom: 18 }}>Quick Links</div>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, color: "#bfc6d1" }}>
          {quickLinks.map(link => <li key={link} style={{ marginBottom: 10 }}>{link}</li>)}
        </ul>
      </div>
      {/* Our Brands */}
      <div style={{ minWidth: 140, marginBottom: 32 }}>
        <div style={{ fontWeight: 600, fontSize: 16, marginBottom: 18 }}>Our Brands</div>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, color: "#bfc6d1" }}>
          {brands.map(link => <li key={link} style={{ marginBottom: 10 }}>{link}</li>)}
        </ul>
      </div>
      {/* Vehicles Type */}
      <div style={{ minWidth: 140, marginBottom: 32 }}>
        <div style={{ fontWeight: 600, fontSize: 16, marginBottom: 18 }}>Vehicles Type</div>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, color: "#bfc6d1" }}>
          {vehicleTypes.map(link => <li key={link} style={{ marginBottom: 10 }}>{link}</li>)}
        </ul>
      </div>
      {/* Our Mobile App */}
      <div style={{ minWidth: 200, marginBottom: 32 }}>
        <div style={{ fontWeight: 600, fontSize: 16, marginBottom: 18 }}>Our Mobile App</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 18 }}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Available_on_the_App_Store_(black)_SVG.svg" alt="App Store" style={{ height: 36, borderRadius: 8, background: "#181f36" }} />
          <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" style={{ height: 36, borderRadius: 8, background: "#181f36" }} />
        </div>
        <div style={{ marginTop: 8 }}>
          <span style={{ fontWeight: 500, color: "#bfc6d1", marginRight: 10 }}>Connect With Us</span>
          {socialIcons.map(icon => (
            <a key={icon.label} href={icon.href} style={{ color: "#bfc6d1", fontSize: 20, marginRight: 10, textDecoration: "none", display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 32, height: 32 }} title={icon.label}>
              {icon.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
    {/* Bottom bar */}
    <div style={{ borderTop: "1px solid #232a43", marginTop: 32, padding: "18px 32px 0 32px", display: "flex", justifyContent: "space-between", alignItems: "center", maxWidth: 1300, margin: "32px auto 0 auto", color: "#bfc6d1", fontSize: 14, flexWrap: "wrap" }}>
      <div style={{ marginBottom: 8 }}>© 2024 examplep.com. All rights reserved.</div>
      <div style={{ display: "flex", gap: 18, marginBottom: 8 }}>
        <a href="#" style={{ color: "#bfc6d1", textDecoration: "none" }}>Terms & Conditions</a>
        <span>•</span>
        <a href="#" style={{ color: "#bfc6d1", textDecoration: "none" }}>Privacy Notice</a>
      </div>
    </div>
  </footer>
);

export default Footer;