import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="wp-block-template-part">
      <div
        className="wp-block-group alignfull has-global-padding is-layout-constrained wp-block-group-is-layout-constrained"
        style={{
          paddingTop: "var(--wp--preset--spacing--30)",
          paddingBottom: "var(--wp--preset--spacing--30)",
        }}
      >
        <div className="wp-block-group alignwide is-content-justification-left is-nowrap is-layout-flex wp-container-core-group-is-layout-17 wp-block-group-is-layout-flex">
          <p className="has-text-align-center">
            © 2024 Arizona Gestión Energy S.L.
          </p>

          <hr className="wp-block-separator has-alpha-channel-opacity is-style-wide" />

          <div
            style={{ height: "100px", width: "403px" }}
            aria-hidden="true"
            className="wp-block-spacer wp-container-content-1"
          ></div>

          <p>
            <Link
              href="https://arizonagestionenergy.com/sample-page/"
              target="_blank"
              rel="noopener noreferrer"
              data-type="link"
              data-id="https://arizonagestionenergy.com/sample-page/"
            >
              Aviso legal
            </Link>{" "}
            {" | "}{" "}
            <Link
              href="https://arizonagestionenergy.com/privacy-policy/"
              target="_blank"
              rel="noopener noreferrer"
              data-type="link"
              data-id="https://arizonagestionenergy.com/privacy-policy/"
            >
              Política de privacidad
            </Link>{" "}
            {" | "}{" "}
            <Link
              href="https://arizonagestionenergy.com/politica-de-cookies/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Política de cookies
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
