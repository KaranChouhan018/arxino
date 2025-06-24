"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="wp-block-template-part">
      <div
        className="wp-block-group alignfull has-global-padding is-layout-constrained wp-block-group-is-layout-constrained"
        style={{
          paddingTop: "var(--wp--preset--spacing--30)",
          paddingBottom: "var(--wp--preset--spacing--30)",
        }}
      >
        <div className="wp-block-group alignwide is-content-justification-space-between is-nowrap is-layout-flex wp-container-core-group-is-layout-5 wp-block-group-is-layout-flex">
          <div className="wp-block-group is-nowrap is-layout-flex wp-container-core-group-is-layout-3 wp-block-group-is-layout-flex">
            <div className="wp-block-group has-global-padding is-layout-constrained wp-block-group-is-layout-constrained">
              <div className="wp-block-site-logo">
                <Link href="/" aria-current="page" className="custom-logo-link">
                  <Image
                    width={322}
                    height={111}
                    src="/images/logo-arizona-s.jpeg"
                    className="custom-logo"
                    alt="Arizona Gestión Energy"
                    decoding="async"
                    sizes="(max-width: 322px) 100vw, 322px"
                  />
                </Link>
              </div>
            </div>
            <div className="wp-block-group is-layout-flow wp-block-group-is-layout-flow">
              <h1
                style={{ textTransform: "uppercase" }}
                className="wp-block-site-title has-medium-font-size"
              >
                <Link href="/" aria-current="page" className="site-title-link">
                  Arizona Gestión Energy
                </Link>
              </h1>
            </div>
          </div>
          <div className="wp-block-group is-nowrap is-layout-flex wp-container-core-group-is-layout-4 wp-block-group-is-layout-flex">
            <nav
              className="is-responsive items-justified-right wp-block-navigation is-content-justification-right is-layout-flex wp-container-core-navigation-is-layout-1 wp-block-navigation-is-layout-flex"
              aria-label="Navegación de cabecera"
            >
              <button
                aria-haspopup="dialog"
                aria-label="Abrir el menú"
                className="wp-block-navigation__responsive-container-open"
                // The following data-wp-* attributes are for WP interactivity, not needed in React/Next
                // data-wp-on-async--click="actions.openMenuOnClick"
                // data-wp-on--keydown="actions.handleMenuKeydown"
                type="button"
              >
                <svg
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  focusable="false"
                >
                  <rect x="4" y="7.5" width="16" height="1.5"></rect>
                  <rect x="4" y="15" width="16" height="1.5"></rect>
                </svg>
              </button>
              <div
                className="wp-block-navigation__responsive-container"
                id="modal-1"
                tabIndex={-1}
              >
                <div
                  className="wp-block-navigation__responsive-close"
                  tabIndex={-1}
                >
                  <div className="wp-block-navigation__responsive-dialog">
                    <button
                      aria-label="Cerrar el menú"
                      className="wp-block-navigation__responsive-container-close"
                      type="button"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path d="M13 11.8l6.1-6.3-1-1-6.1 6.2-6.1-6.2-1 1 6.1 6.3-6.5 6.7 1 1 6.5-6.6 6.5 6.6 1-1z"></path>
                      </svg>
                    </button>
                    <div
                      className="wp-block-navigation__responsive-container-content"
                      id="modal-1-content"
                    >
                      <ul className="wp-block-navigation__container is-responsive items-justified-right wp-block-navigation">
                        <li className="wp-block-navigation-item wp-block-navigation-link">
                          <Link
                            className="wp-block-navigation-item__content"
                            href="/sobre"
                            rel="noopener noreferrer"
                          >
                            <span className="wp-block-navigation-item__label">
                              <strong>Quiénes somos</strong>
                            </span>
                          </Link>
                        </li>
                        <li className="wp-block-navigation-item wp-block-navigation-link">
                          <Link
                            className="wp-block-navigation-item__content"
                            href="/equipo"
                            rel="noopener noreferrer"
                          >
                            <span className="wp-block-navigation-item__label">
                              <strong>Equipo</strong>
                            </span>
                          </Link>
                        </li>
                        <li className="wp-block-navigation-item wp-block-navigation-link">
                          <Link
                            className="wp-block-navigation-item__content"
                            href="/servicios"
                            rel="noopener noreferrer"
                          >
                            <span className="wp-block-navigation-item__label">
                              <strong>Servicios</strong>
                            </span>
                          </Link>
                        </li>
                        <li className="wp-block-navigation-item wp-block-navigation-link">
                          <Link
                            className="wp-block-navigation-item__content"
                            href="/noticias"
                            rel="noopener noreferrer"
                          >
                            <span className="wp-block-navigation-item__label">
                              <strong>Noticias</strong>
                            </span>
                          </Link>
                        </li>
                        <li className="wp-block-navigation-item wp-block-navigation-link">
                          <Link
                            className="wp-block-navigation-item__content"
                            href="/contacto"
                            rel="noopener noreferrer"
                          >
                            <span className="wp-block-navigation-item__label">
                              <strong>Contacto</strong>
                            </span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
