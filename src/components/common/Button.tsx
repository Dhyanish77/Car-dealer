import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

const Button = ({ children, onClick }: ButtonProps) => (
  <button style={{ padding: "10px 20px", background: "#007bff", color: "#fff", border: "none", borderRadius: 4 }} onClick={onClick}>
    {children}
  </button>
);

export default Button; 