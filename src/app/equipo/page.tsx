import React from "react";
import Link from "next/link";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import Image from "next/image";

const page: React.FC = () => {
  return (
    <>
      <Header />
      <main
        className="wp-block-group is-layout-flow wp-block-group-is-layout-flow"
        style={{ marginTop: 0, marginBottom: 0 }}
      >
        <div className="entry-content wp-block-post-content has-global-padding is-layout-constrained wp-block-post-content-is-layout-constrained">
          <div
            className="wp-block-group alignfull has-background-background-color has-background has-global-padding is-layout-constrained wp-block-group-is-layout-constrained"
            style={{
              marginTop: 0,
              marginBottom: 0,
              paddingTop: 0,
              paddingBottom: 0,
            }}
          >
            <div
              className="wp-block-cover alignfull has-parallax"
              style={{
                paddingTop: 0,
                paddingRight: 0,
                paddingBottom: 0,
                paddingLeft: 0,
                minHeight: 50,
                aspectRatio: "unset",
              }}
            >
              <span
                aria-hidden="true"
                className="wp-block-cover__background has-black-background-color has-background-dim-60 has-background-dim"
              ></span>
              <div
                className="wp-block-cover__image-background wp-image-29 has-parallax"
                style={{
                  backgroundPosition: "50% 50%",
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
                }}
              ></div>
              <div className="wp-block-cover__inner-container is-layout-flow wp-block-cover-is-layout-flow">
                <div
                  className="wp-block-group has-global-padding is-layout-constrained wp-container-core-group-is-layout-7 wp-block-group-is-layout-constrained"
                  style={{
                    paddingTop: "var(--wp--preset--spacing--60)",
                    paddingRight: "var(--wp--preset--spacing--30)",
                    paddingBottom: "var(--wp--preset--spacing--60)",
                    paddingLeft: "var(--wp--preset--spacing--30)",
                  }}
                >
                  <h1
                    className="wp-block-heading has-text-align-center has-text-color has-x-large-font-size"
                    style={{ color: "#fffffffc" }}
                  >
                    Descubre a Nuestro Equipo de Líderes
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <div
            className="wp-block-group alignfull has-tertiary-background-color has-background has-global-padding is-layout-constrained wp-container-core-group-is-layout-10 wp-block-group-is-layout-constrained"
            id="equipo"
            style={{
              marginTop: 0,
              marginBottom: 0,
              paddingTop: "var(--wp--preset--spacing--60)",
              paddingRight: "var(--wp--preset--spacing--30)",
              paddingBottom: "var(--wp--preset--spacing--60)",
              paddingLeft: "var(--wp--preset--spacing--30)",
            }}
          >
            <div className="wp-block-group alignwide has-global-padding is-content-justification-left is-layout-constrained wp-container-core-group-is-layout-9 wp-block-group-is-layout-constrained">
              <h2 className="wp-block-heading has-text-align-left has-large-font-size">
                Nuestro Equipo Dedicado y Visionario
              </h2>
              <p className="has-text-align-left" style={{ marginTop: 16 }}>
                Conoce a nuestro equipo de expertos con sólida trayectoria en el
                sector energético, logística y atención al cliente, listos para
                ofrecerte soluciones personalizadas.
              </p>
            </div>

            <div className="wp-block-columns alignwide is-layout-flex wp-container-core-columns-is-layout-5 wp-block-columns-is-layout-flex">
              {/* Jesús Morientes */}
              <div className="wp-block-column is-layout-flow wp-container-core-column-is-layout-5 wp-block-column-is-layout-flow">
                <div className="wp-block-columns is-layout-flex wp-container-core-columns-is-layout-1 wp-block-columns-is-layout-flex">
                  <div
                    className="wp-block-column is-layout-flow wp-block-column-is-layout-flow"
                    style={{ flexBasis: "40%" }}
                  >
                    <figure className="wp-block-image size-large is-style-default">
                      <Image
                        priority
                        decoding="async"
                        width={768}
                        height={1024}
                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Foto de Jesús Morientes"
                        className="wp-image-492"
                        style={{ aspectRatio: 1, objectFit: "cover" }}
                        sizes="(max-width: 768px) 100vw, 768px"
                      />
                    </figure>
                  </div>
                  <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
                    <h4
                      className="wp-block-heading has-text-align-left"
                      style={{
                        fontSize:
                          "clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.625), 20px)",
                      }}
                    >
                      Jesús Morientes
                    </h4>
                    <p
                      className="has-text-align-left has-primary-color has-text-color has-small-font-size"
                      style={{ marginTop: 4 }}
                    >
                      CEO
                    </p>
                  </div>
                </div>
                {/* Pedro Segura */}
                <div className="wp-block-columns is-layout-flex wp-container-core-columns-is-layout-2 wp-block-columns-is-layout-flex">
                  <div
                    className="wp-block-column is-layout-flow wp-block-column-is-layout-flow"
                    style={{ flexBasis: "40%" }}
                  >
                    <figure className="wp-block-image size-full is-style-default">
                      <Image
                        decoding="async"
                        width={1276}
                        height={1240}
                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Foto de Pedro Segura"
                        className="wp-image-496"
                        style={{ aspectRatio: 1, objectFit: "cover" }}
                        sizes="(max-width: 1276px) 100vw, 1276px"
                      />
                    </figure>
                  </div>
                  <div className="wp-block-column is-layout-flow wp-container-core-column-is-layout-4 wp-block-column-is-layout-flow">
                    <h4
                      className="wp-block-heading has-text-align-left"
                      style={{
                        fontSize:
                          "clamp(16.293px, 1.018rem + ((1vw - 3.2px) * 0.907), 25px)",
                      }}
                    >
                      Pedro Segura
                    </h4>
                    <p
                      className="has-text-align-left has-primary-color has-text-color has-link-color has-small-font-size wp-elements-f1275838a1b11a5b6c6b75b5b35ea4e9"
                      style={{ lineHeight: 1.3 }}
                    >
                      Chief Legal Officer (CLO)
                    </p>
                  </div>
                </div>
              </div>
              {/* Alex Oliva & José Gregorio */}
              <div className="wp-block-column is-layout-flow wp-container-core-column-is-layout-10 wp-block-column-is-layout-flow">
                <div className="wp-block-columns is-layout-flex wp-container-core-columns-is-layout-3 wp-block-columns-is-layout-flex">
                  <div
                    className="wp-block-column is-layout-flow wp-block-column-is-layout-flow"
                    style={{ flexBasis: "40%" }}
                  >
                    <figure className="wp-block-image size-full is-style-default">
                      <Image
                        decoding="async"
                        width={3024}
                        height={4032}
                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Foto de Alex Oliva"
                        className="wp-image-491"
                        style={{ aspectRatio: 1, objectFit: "cover" }}
                        sizes="(max-width: 3024px) 100vw, 3024px"
                      />
                    </figure>
                  </div>
                  <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
                    <h4
                      className="wp-block-heading has-text-align-left"
                      style={{
                        fontSize:
                          "clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.625), 20px)",
                      }}
                    >
                      Alex Oliva
                    </h4>
                    <p
                      className="has-text-align-left has-primary-color has-text-color has-small-font-size"
                      style={{ marginTop: 4 }}
                    >
                      Director General
                    </p>
                  </div>
                </div>
                <div className="wp-block-columns is-layout-flex wp-container-core-columns-is-layout-4 wp-block-columns-is-layout-flex">
                  <div
                    className="wp-block-column is-layout-flow wp-block-column-is-layout-flow"
                    style={{ flexBasis: "40%" }}
                  >
                    <figure className="wp-block-image size-large is-style-default">
                      <Image
                        loading="lazy"
                        decoding="async"
                        width={768}
                        height={1024}
                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Foto de José Gregorio"
                        className="wp-image-488"
                        style={{ aspectRatio: 1, objectFit: "cover" }}
                        sizes="(max-width: 768px) 100vw, 768px"
                      />
                    </figure>
                  </div>
                  <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
                    <h4
                      className="wp-block-heading has-text-align-left"
                      style={{
                        fontSize:
                          "clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.625), 20px)",
                      }}
                    >
                      José Gregorio
                    </h4>
                    <p
                      className="has-text-align-left has-primary-color has-text-color has-small-font-size"
                      style={{ marginTop: 4 }}
                    >
                      Gerente de Ventas
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="wp-block-group alignfull has-background-background-color has-background has-global-padding is-layout-constrained wp-container-core-group-is-layout-11 wp-block-group-is-layout-constrained"
            id="acerca-de"
            style={{
              marginTop: 0,
              marginBottom: 0,
              paddingTop: "var(--wp--preset--spacing--60)",
              paddingRight: "var(--wp--preset--spacing--30)",
              paddingBottom: "var(--wp--preset--spacing--60)",
              paddingLeft: "var(--wp--preset--spacing--30)",
            }}
          >
            <div className="wp-block-columns alignwide are-vertically-aligned-center is-layout-flex wp-container-core-columns-is-layout-6 wp-block-columns-is-layout-flex">
              <div
                className="wp-block-column is-vertically-aligned-center is-layout-flow wp-block-column-is-layout-flow"
                style={{ flexBasis: "33.3%" }}
              >
                <h2 className="wp-block-heading has-text-align-left has-large-font-size">
                  Nuestro Trayecto de Crecimiento
                </h2>
                <p style={{ marginTop: 16 }}>
                  Bienvenido a Arizona Gestion Energy Sl, su socio estratégico
                  en Madrid para el suministro de energía. Descubra soluciones
                  eficientes de combustibles con un servicio dedicado y seguro
                  en toda España.
                </p>
              </div>
              <div
                className="wp-block-column is-vertically-aligned-center is-layout-flow wp-container-core-column-is-layout-12 wp-block-column-is-layout-flow"
                style={{ flexBasis: "50%" }}
              >
                <div style={{ display: "flex", gap: 40 }}>
                  <figure className="wp-block-image" style={{ flex: 1, margin: 0 }}>
                    <Image
                      loading="lazy"
                      decoding="async"
                      width={1280}
                      height={960}
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Galería 1"
                      className="wp-image-44"
                      style={{ aspectRatio: 3 / 4, objectFit: "cover", width: "100%" }}
                      sizes="(max-width: 1280px) 100vw, 1280px"
                    />
                  </figure>
                  <figure className="wp-block-image" style={{ flex: 1, margin: 0 }}>
                    <Image
                      loading="lazy"
                      decoding="async"
                      width={1280}
                      height={960}
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Galería 2"
                      className="wp-image-45"
                      style={{ aspectRatio: 3 / 4, objectFit: "cover", width: "100%" }}
                      sizes="(max-width: 1280px) 100vw, 1280px"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>

          <div
            className="wp-block-group alignfull has-tertiary-background-color has-background has-global-padding is-layout-constrained wp-container-core-group-is-layout-14 wp-block-group-is-layout-constrained"
            style={{
              marginTop: 0,
              marginBottom: 0,
              paddingTop: "var(--wp--preset--spacing--60)",
              paddingRight: "var(--wp--preset--spacing--30)",
              paddingBottom: "var(--wp--preset--spacing--60)",
              paddingLeft: "var(--wp--preset--spacing--30)",
            }}
          >
            <div
              className="wp-block-group alignwide has-background-background-color has-background is-content-justification-space-between is-layout-flex wp-container-core-group-is-layout-13 wp-block-group-is-layout-flex"
              style={{
                paddingTop: "var(--wp--preset--spacing--50)",
                paddingRight: "var(--wp--preset--spacing--50)",
                paddingBottom: "var(--wp--preset--spacing--50)",
                paddingLeft: "var(--wp--preset--spacing--50)",
              }}
            >
              <div className="wp-block-group has-global-padding is-layout-constrained wp-block-group-is-layout-constrained">
                <h2 className="wp-block-heading has-large-font-size">
                  Explora nuestras soluciones energéticas
                </h2>
                <p style={{ marginTop: 16 }}>
                  Gestiona tu energía con confianza. Explora nuestra gama de
                  combustibles y aprovecha servicios de primer nivel.
                  Contáctanos y recibe atención personalizada en toda España.
                </p>
              </div>
              <div className="wp-block-buttons is-content-justification-left is-layout-flex wp-container-core-buttons-is-layout-1 wp-block-buttons-is-layout-flex">
                <div className="wp-block-button is-style-outline is-style-outline--f837a04c7388f6556b728392fb90f140">
                  <Link
                    className="wp-block-button__link wp-element-button"
                    href="/servicios"
                  >
                    Servicios
                  </Link>
                </div>
                <div className="wp-block-button">
                  <Link
                    className="wp-block-button__link wp-element-button"
                    href="/contacto"
                  >
                    Contáctanos hoy
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p></p>
      </main>
      <Footer />
    </>
  );
};

export default page;
