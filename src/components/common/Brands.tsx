import React from "react";

export interface BrandItem {
  image: string; // URL or import
  label: string;
  size?: number; // px, for width/height of the box
}

export interface BrandsProps {
  heading: string;
  rightLinkText?: string;
  rightLinkUrl?: string;
  brands: BrandItem[];
  boxDefaultSize?: number; // fallback size if not specified per brand
}

const Brands: React.FC<BrandsProps> = ({
  heading,
  rightLinkText,
  rightLinkUrl = "#",
  brands,
  boxDefaultSize = 220,
}) => (
  <section className="w-100 py-5" style={{background: "#f8fafc", borderRadius: 24}}>
    <div className="container">
      <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap">
        <h2 className="mb-0" style={{fontWeight: 600, fontSize: 28}}>{heading}</h2>
        {rightLinkText && (
          <a
            href={rightLinkUrl}
            className="text-decoration-none d-flex align-items-center gap-1"
            style={{fontWeight: 500, fontSize: 15, color: "#222", opacity: 0.7}}
          >
            {rightLinkText}
            <span className="bi bi-arrow-up-right" style={{fontSize: 16}} />
          </a>
        )}
      </div>
      <div className="row justify-content-center g-4">
        {brands.map((brand, idx) => (
          <div key={brand.label + idx} className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center">
            <div
              className="bg-white d-flex flex-column align-items-center justify-content-center shadow-sm"
              style={{
                borderRadius: 12,
                width: brand.size || boxDefaultSize,
                height: brand.size || boxDefaultSize,
                minWidth: 90,
                minHeight: 90,
                padding: 10,
                transition: "box-shadow 0.2s",
              }}
            >
              <img
                src={brand.image}
                alt={brand.label}
                style={{maxWidth: "60%", maxHeight: 48, objectFit: "contain", marginBottom: 10}}
              />
              <div style={{fontSize: 15, fontWeight: 500, color: "#222", textAlign: "center"}}>{brand.label}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Brands; 