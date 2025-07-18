import React from "react";
import Toolbar, { ToolbarItem } from "./Toolbar";
import LightButton from "./LightButton";

export interface HeroBannerProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  filterTabs?: string[];
  toolbarItems?: ToolbarItem[];
  chips?: string[];
  onTabChange?: (tab: string) => void;
  activeTab?: string;
  subtitle2?: string;
}

const HeroBanner: React.FC<HeroBannerProps> = ({
  title,
  subtitle,
  backgroundImage,
  filterTabs,
  toolbarItems,
  chips,
  onTabChange,
  activeTab,
  subtitle2,
}) => {
  return (
    <section
      className="w-100 d-flex align-items-center justify-content-center position-relative pt-4"
      style={{
        minHeight: "100vh",
        backgroundImage: ` url('${backgroundImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "#fff",
        fontFamily: "Inter, Arial, sans-serif",
      }}
    >
      <div
        className="container text-center d-flex flex-column align-items-center justify-content-center"
        style={{ zIndex: 2, maxWidth: 900 }}
      >
        {subtitle && (
          <div
            className="mb-2"
            style={{ fontSize: 18, fontWeight: 400, opacity: 0.85 }}
          >
            {subtitle}
          </div>
        )}
        <h1
          className="mb-4 pt-3"
          style={{ fontWeight: 700, fontSize: 48, letterSpacing: -1 }}
        >
          {title}
        </h1>
        {filterTabs && filterTabs.length > 0 && (
          <ul className="nav nav-underline justify-content-center mb-4 pt-3">
            {filterTabs.map((tab) => (
              <li className="nav-item " key={tab}>
                <button
                  type="button"
                  className={`nav-link  text-white ${activeTab === tab ? "active" : ""}`}
                  aria-current={activeTab === tab ? "page" : undefined}
                  onClick={() => onTabChange && onTabChange(tab)}
                  style={{ fontWeight: 500, fontSize: 16 }}
                >
                  {tab}
                </button>
              </li>
            ))}
          </ul>
        )}

        {/* ToolBar */}
        {toolbarItems && toolbarItems.length > 0 && (
          <div
            className="d-flex align-items-center justify-content-between gap-3 px-4 py-3 mb-4 mx-auto"
            style={{
              backgroundColor: "#fff",
              borderRadius: 999,
              maxWidth: "900px",
              width: "100%",
              border: "none",
              boxShadow: "none",
            }}
          >
            <Toolbar items={toolbarItems} />
          </div>
        )}

        {subtitle2 && (
          <div
            className="mb-2 mt-4"
            style={{ fontSize: 18, fontWeight: 400, opacity: 0.85 }}
          >
            {subtitle2}
          </div>
        )}

        {chips && chips.length > 0 && (
          <div className="d-flex flex-wrap justify-content-center gap-2 mt-4">
            {chips.map((chip, idx) => (
              <LightButton key={chip + idx}>{chip}</LightButton>
            ))}
          </div>
        )}
      </div>

      {/* Overlay for better text contrast on mobile */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100 d-md-none"
        style={{
          background: "rgba(20,24,40,0.55)",
          zIndex: 1,
          borderRadius: 0,
        }}
      />
    </section>
  );
};

export default HeroBanner;
