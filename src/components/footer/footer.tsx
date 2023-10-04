import React from "react";

export const Footer: React.FC = () => {
  return (
    <small className="mt-10 text-secondary">
      Beta version - Made with 💜 by{" "}
      <a
        target="_blank"
        rel="noreferrer"
        href="https://github.com/ethantaylan"
        className="link"
      >
        @ethantaylan
      </a>
    </small>
  );
};
