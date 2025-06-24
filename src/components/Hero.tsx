import React from "react";
import Image from "next/image";

const Hero: React.FC = () => (
  <main
    className="wp-block-group is-layout-flow wp-block-group-is-layout-flow"
    style={{ marginTop: 0, marginBottom: 0 }}
  >
    <div className="entry-content wp-block-post-content has-global-padding is-layout-constrained wp-block-post-content-is-layout-constrained">
      <div
        className="wp-block-group alignfull has-background-background-color has-background has-global-padding is-layout-constrained wp-container-core-group-is-layout-8 wp-block-group-is-layout-constrained"
        style={{
          marginTop: 0,
          marginBottom: 0,
          paddingTop: 0,
          paddingRight: 0,
          paddingBottom: 0,
          paddingLeft: 0,
        }}
      >
        <div
          className="wp-block-cover alignfull has-parallax"
          style={{
            paddingRight: "var(--wp--preset--spacing--40)",
            paddingLeft: "var(--wp--preset--spacing--40)",
            minHeight: "60vh",
            aspectRatio: "unset",
          }}
        >
          <span
            aria-hidden="true"
            className="wp-block-cover__background has-background-dim"
            style={{ backgroundColor: "#423e66" }}
          ></span>
          <div
            className="wp-block-cover__image-background wp-image-76 has-parallax"
            style={{
              backgroundPosition: "50% 50%",
              backgroundImage: "url(https://images.unsplash.com/photo-1716547286289-3e650d7bdf7a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
            }}
          ></div>
          <div className="wp-block-cover__inner-container has-global-padding is-layout-constrained wp-container-core-cover-is-layout-1 wp-block-cover-is-layout-constrained">
            <div
              className="wp-block-group has-global-padding is-layout-constrained wp-block-group-is-layout-constrained"
              style={{
                paddingTop: "var(--wp--preset--spacing--80)",
                paddingBottom: "var(--wp--preset--spacing--80)",
              }}
            >
              <p></p>
              <h4 className="wp-block-heading has-text-align-center has-white-color has-text-color has-medium-font-size">
                <strong>Explora nuestras soluciones energéticas</strong>
              </h4>
              <h1
                className="wp-block-heading alignwide has-text-align-center has-white-color has-text-color"
                style={{ marginTop: 12 }}
              >
                Excelencia en Suministro Energético
              </h1>
              <div
                className="wp-block-buttons is-content-justification-center is-layout-flex wp-container-core-buttons-is-layout-1 wp-block-buttons-is-layout-flex"
                style={{ marginTop: "var(--wp--preset--spacing--40)" }}
              >
                <div className="wp-block-button">
                  <a
                    className="wp-block-button__link has-text-color has-background has-link-color wp-element-button"
                    href="/contacto"
                    style={{ color: "#111111", backgroundColor: "#fcfcfc" }}
                  >
                    <strong>Contáctanos</strong>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="wp-block-group alignfull has-global-padding is-layout-constrained wp-block-group-is-layout-constrained">
        <div
          className="wp-block-group alignfull has-background-background-color has-background has-global-padding is-layout-constrained wp-container-core-group-is-layout-9 wp-block-group-is-layout-constrained"
          style={{
            marginTop: 0,
            marginBottom: 0,
            paddingTop: "var(--wp--preset--spacing--60)",
            paddingRight: "var(--wp--preset--spacing--30)",
            paddingBottom: "var(--wp--preset--spacing--60)",
            paddingLeft: "var(--wp--preset--spacing--30)",
          }}
        >
          <div className="wp-block-columns alignwide are-vertically-aligned-center is-layout-flex wp-container-core-columns-is-layout-1 wp-block-columns-is-layout-flex">
            <div className="wp-block-column is-vertically-aligned-center is-layout-flow wp-block-column-is-layout-flow">
              <figure className="wp-block-image size-large">
                <Image
                  priority
                  width={1024}
                  height={683}
                  src="https://images.unsplash.com/photo-1611343693811-2c235c683f26?q=80&w=929&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="wp-image-83"
                  style={{ aspectRatio: "4/3", objectFit: "cover" }}
                  sizes="(max-width: 1024px) 100vw, 1024px"
                />
              </figure>
            </div>
            <div
              className="wp-block-column is-vertically-aligned-center is-layout-flow wp-block-column-is-layout-flow"
              style={{ paddingBottom: "var(--wp--preset--spacing--50)" }}
            >
              <p></p>
              <h2 className="wp-block-heading has-large-font-size">
                Impulsa tu negocio con energía confiable
              </h2>
              <p className="has-text-align-left" style={{ lineHeight: 1.4 }}>
                Dedicados a brindar excelencia en calidad y servicio.{" "}
              </p>
              <p className="has-text-align-left" style={{ lineHeight: 1.4 }}>
                Ofrecemos una amplia variedad de productos en casi todas las
                instalaciones de almacenamiento distribuidas por la red en
                España, tales como Exolum, Tepsa Bilbao,Tepsa Barcelona, Decal,
                DBA y Tradebe.
              </p>
              <div
                className="wp-block-buttons is-layout-flex wp-block-buttons-is-layout-flex"
                style={{ marginTop: "var(--wp--preset--spacing--40)" }}
              >
                <div className="wp-block-button">
                  <a
                    className="wp-block-button__link wp-element-button"
                    href="/servicios"
                  >
                    Servicios
                  </a>
                </div>
              </div>
            </div>
          </div>
          <h2 className="wp-block-heading alignfull has-text-align-center has-tertiary-color has-text-color has-link-color wp-elements-5af1c830d36fd3fc36ab3f7a377f0f05"></h2>
        </div>
      </div>
      <div
        className="wp-block-group alignfull has-background-background-color has-background has-global-padding is-layout-constrained wp-container-core-group-is-layout-14 wp-block-group-is-layout-constrained"
        style={{
          marginTop: 0,
          marginBottom: 0,
          paddingTop: 0,
          paddingRight: 0,
          paddingBottom: 0,
          paddingLeft: 0,
        }}
      >
        <div
          className="wp-block-cover alignfull has-parallax wp-duotone-unset-2"
          style={{
            paddingTop: "var(--wp--preset--spacing--60)",
            paddingBottom: "var(--wp--preset--spacing--60)",
          }}
        >
          <span
            aria-hidden="true"
            className="wp-block-cover__background has-background-dim"
            style={{ backgroundColor: "#78726a" }}
          ></span>
          <div
            className="wp-block-cover__image-background wp-image-90 has-parallax"
            style={{
              backgroundPosition: "50% 50%",
              backgroundImage: "url(https://images.unsplash.com/photo-1719721584783-c35e4f4c66de?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
            }}
          ></div>
          <div className="wp-block-cover__inner-container has-global-padding is-layout-constrained wp-block-cover-is-layout-constrained">
            <div className="wp-block-group has-global-padding is-layout-constrained wp-block-group-is-layout-constrained">
              <div className="wp-block-group has-global-padding is-layout-constrained wp-block-group-is-layout-constrained">
                <div
                  className="wp-block-group has-foreground-color has-tertiary-background-color has-text-color has-background has-link-color wp-elements-af455e604b5cfd21f779df81e1647726 has-global-padding is-layout-constrained wp-container-core-group-is-layout-11 wp-block-group-is-layout-constrained"
                  style={{
                    borderRadius: 2,
                    paddingTop: "var(--wp--preset--spacing--50)",
                    paddingRight: "var(--wp--preset--spacing--50)",
                    paddingBottom: "var(--wp--preset--spacing--50)",
                    paddingLeft: "var(--wp--preset--spacing--50)",
                  }}
                >
                  <h2 className="wp-block-heading has-text-align-center has-large-font-size">
                    Distribución de Hidrocarburos
                  </h2>
                  <p
                    className="has-text-align-center has-text-color has-link-color wp-elements-7e57f653dbb33b4979edbd2b7e8f2821"
                    style={{ color: "#484848", marginTop: 16 }}
                  >
                    Descubre soluciones energéticas eficientes con nosotros.
                    Explora nuestra gama de combustibles y experimenta un
                    servicio excepcional en España e Italia.
                  </p>
                  <div className="wp-block-buttons is-content-justification-center is-layout-flex wp-container-core-buttons-is-layout-3 wp-block-buttons-is-layout-flex">
                    <div className="wp-block-button">
                      <a
                        className="wp-block-button__link wp-element-button"
                        href="#extendify-career-cta"
                      >
                        Más información
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="wp-block-group alignfull has-tertiary-background-color has-background has-global-padding is-layout-constrained wp-container-core-group-is-layout-15 wp-block-group-is-layout-constrained"
        style={{
          marginTop: 0,
          marginBottom: 0,
          paddingTop: "var(--wp--preset--spacing--60)",
          paddingRight: "var(--wp--preset--spacing--30)",
          paddingBottom: "var(--wp--preset--spacing--60)",
          paddingLeft: "var(--wp--preset--spacing--30)",
        }}
      >
        <h4 className="wp-block-heading has-text-align-center has-large-font-size">
          Nuestra Trayectoria y Compromiso en el Sector Energético
        </h4>
        <p className="has-text-align-center" style={{ marginTop: 16 }}>
          Arizona Gestion Energy Sl, su aliado en combustibles en Madrid. Acceda
          a combustibles sólidos, líquidos y gaseosos de manera eficiente y
          confiable en toda España.
        </p>
      </div>
    </div>
    <p></p>
  </main>
);

export default Hero;
