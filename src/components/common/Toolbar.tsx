import React from "react";

export type ToolbarItem =
  | {
      type: "dropdown";
      label: string;
      options: string[];
      value: string;
      onChange: (value: string) => void;
    }
  | { type: "text"; label: string }
  | { type: "button"; label: string; onClick: () => void };

interface ToolbarProps {
  items: ToolbarItem[];
  style?: React.CSSProperties;
}

const Toolbar: React.FC<ToolbarProps> = ({ items, style }) => (
  <div
    style={{
      display: "flex",
      gap: 16,
      alignItems: "center",
      width: "900%",
      height: "40px",
      ...style,
    }}
  >
    {items.map((item, idx) => {
      if (item.type === "dropdown") {
        return (
          <select
            key={idx}
            value={item.value}
            onChange={(e) => item.onChange(e.target.value)}
            className="form-select border-0 shadow-none"
            style={{
              padding: "8px 16px",
              borderRadius: 8,
              minWidth: 120,
              backgroundColor: "#f9f9f9",
              fontWeight: 500,
              fontSize: 14,
            }}
          >
            <option value="">{item.label}</option>
            {item.options.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        );
      }

      if (item.type === "text") {
        return (
          <span
            key={idx}
            className="text-muted"
            style={{ fontWeight: 500, fontSize: 14 }}
          >
            {item.label}
          </span>
        );
      }

      if (item.type === "button") {
        return (
          <button
            key={idx}
            onClick={item.onClick}
            className="btn d-flex align-items-center gap-2"
            style={{
              backgroundColor: "#3B4FE4",
              color: "#fff",
              padding: "10px 24px",
              borderRadius: 999,
              fontWeight: 600,
              fontSize: 14,
              border: "none",
            }}
          >
            <i className="bi bi-search"></i>
            {item.label}
          </button>
        );
      }

      return null;
    })}
  </div>
);

export default Toolbar;
