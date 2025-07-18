import React from "react";

interface LightButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  icon?: React.ReactNode;
  style?: React.CSSProperties;
}

const LightButton: React.FC<LightButtonProps> = ({ children, icon, style, ...props }) => (
  <button
    {...props}
    style={{
      background: "lightgray",
      opacity: 0.7,
      color: "#222",
      border: "none",
      borderRadius: 20,
      padding: "8px 20px",
      fontWeight: 500,
      fontSize: 16,
      marginRight: 8,
      cursor: "pointer",
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      ...style,
    }}
  >
    {icon}
    {children}
  </button>
);


export default LightButton;