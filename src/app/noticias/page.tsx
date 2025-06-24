import React from "react";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import Image from "next/image";
import Link from "next/link";

const page: React.FC = () => {
  return (
    <>
      <Header />
      <main
        className="wp-block-group sticky-header-offset-container is-layout-flow wp-block-group-is-layout-flow"
        style={{ marginTop: 0, marginBottom: 0 }}
      >
        <div className="entry-content wp-block-post-content has-global-padding is-layout-constrained wp-block-post-content-is-layout-constrained">
          <div
            className="wp-block-group alignfull has-background-background-color has-background has-global-padding is-layout-constrained wp-container-core-group-is-layout-9 wp-block-group-is-layout-constrained"
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
                marginTop: -10,
                marginBottom: -10,
                paddingRight: "var(--wp--preset--spacing--40)",
                paddingLeft: "var(--wp--preset--spacing--40)",
              }}
            >
              <span
                aria-hidden="true"
                className="wp-block-cover__background has-background-background-color has-background-dim-10 has-background-dim"
              ></span>
              <div
                className="wp-block-cover__image-background wp-image-289 has-parallax"
                style={{
                  backgroundPosition: "50% 50%",
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1625656707025-d11270257270?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
                }}
              ></div>
              <div className="wp-block-cover__inner-container is-layout-flow wp-container-core-cover-is-layout-1 wp-block-cover-is-layout-flow">
                <div
                  className="wp-block-group is-layout-flow wp-block-group-is-layout-flow"
                  style={{
                    paddingTop: "var(--wp--preset--spacing--80)",
                    paddingBottom: "var(--wp--preset--spacing--80)",
                  }}
                >
                  <p></p>
                  <h1
                    className="wp-block-heading has-text-align-center has-white-color has-text-color"
                    style={{ marginTop: 12 }}
                  >
                    Noticias destacadas
                  </h1>
                  <div
                    className="wp-block-buttons is-content-justification-center is-layout-flex wp-container-core-buttons-is-layout-1 wp-block-buttons-is-layout-flex"
                    style={{ marginTop: "var(--wp--preset--spacing--40)" }}
                  >
                    <div className="wp-block-button">
                      <Link href="/contacto" passHref legacyBehavior>
                        <a
                          className="wp-block-button__link has-text-color has-background has-link-color wp-element-button"
                          style={{
                            color: "#111111",
                            backgroundColor: "#fcfcfc",
                          }}
                        >
                          <strong>Contáctanos</strong>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="wp-block-group alignfull has-background-background-color has-background has-global-padding is-layout-constrained wp-container-core-group-is-layout-15 wp-block-group-is-layout-constrained"
            style={{
              marginTop: 0,
              marginBottom: 0,
              paddingTop: "var(--wp--preset--spacing--60)",
              paddingRight: "var(--wp--preset--spacing--30)",
              paddingBottom: "var(--wp--preset--spacing--60)",
              paddingLeft: "var(--wp--preset--spacing--30)",
            }}
          >
            <div className="wp-block-group alignwide has-global-padding is-content-justification-left is-layout-constrained wp-container-core-group-is-layout-10 wp-block-group-is-layout-constrained">
              <h2 className="wp-block-heading has-large-font-size">
                Explora Nuestros Productos y Servicios
              </h2>
              <p style={{ marginTop: 16 }}>
                En Compras Virtuales España, ofrecemos una amplia gama de
                productos y servicios para tus compras en línea. Encuentra
                electrónicos, moda y alimentos de calidad. ¡Compra fácil y
                rápido!
              </p>
            </div>
            <div className="wp-block-columns alignwide is-layout-flex wp-container-core-columns-is-layout-1 wp-block-columns-is-layout-flex">
              <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
                <Image
                  fetchPriority="high"
                  decoding="async"
                  width={2560}
                  height={1702}
                  src="https://images.unsplash.com/photo-1678028204284-c918689272c1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="wp-image-290"
                  style={{ aspectRatio: "4/3", objectFit: "cover" }}
                />

                <div className="wp-block-group has-global-padding is-layout-constrained wp-block-group-is-layout-constrained">
                  <div className="wp-block-group has-global-padding is-layout-constrained wp-block-group-is-layout-constrained">
                    <h3
                      className="wp-block-heading"
                      style={{
                        marginTop: 24,
                        fontSize:
                          "clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.625), 20px)",
                        lineHeight: 1.5,
                      }}
                    >
                      <strong>
                        La venta de activos hidroeléctricos de Acciona generó
                        una plusvalía de 180 millones de euros tras ceder su
                        participación a Elawan Energy.
                      </strong>
                    </h3>
                  </div>
                  <div className="wp-block-group has-global-padding is-layout-constrained wp-block-group-is-layout-constrained">
                    <p className="has-small-font-size" style={{ marginTop: 8 }}>
                      Acciona Energía ha completado la venta de parte de sus
                      activos hidroeléctricos a Elawan, lo que le permitió
                      generar una plusvalía de 180 millones de euros. Esta
                      transacción forma parte de su estrategia para enfocar
                      esfuerzos en energías renovables más disruptivas y
                      continuar liderando el sector energético sostenible​.
                    </p>
                    <p className="has-small-font-size" style={{ marginTop: 8 }}>
                      <Link
                        href="https://arizonagestionenergy.com/acciona-completa-la-venta-de-23-centrales-hidroelectricas-a-elawan-energy/"
                        passHref
                        legacyBehavior
                      >
                        <a target="_blank" rel="noopener" title="Leer más">
                          Leer más.
                        </a>
                      </Link>
                    </p>
                  </div>
                </div>
                <p className="has-small-font-size" style={{ marginTop: 8 }}></p>
              </div>
              <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
                <Image
                  decoding="async"
                  width={1707}
                  height={2560}
                  src="https://images.unsplash.com/photo-1678028204284-c918689272c1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="wp-image-291"
                  style={{ aspectRatio: "4/3", objectFit: "cover" }}
                />
                <div className="wp-block-group has-global-padding is-layout-constrained wp-block-group-is-layout-constrained">
                  <h3
                    className="wp-block-heading"
                    style={{
                      marginTop: 24,
                      fontSize:
                        "clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.625), 20px)",
                      lineHeight: 1.5,
                    }}
                  >
                    Las ventas de vehículos eléctricos en Europa aumentan, pero
                    el ritmo de crecimiento se desacelera.
                  </h3>
                  <p className="has-small-font-size" style={{ marginTop: 8 }}>
                    Aunque las ventas de vehículos eléctricos continúan
                    creciendo y alcanzarán un nuevo récord en 2024 con 16,7
                    millones de unidades vendidas, el ritmo de crecimiento se ha
                    ralentizado en comparación con años anteriores. El sector
                    enfrenta desafíos relacionados con infraestructura de
                    recarga y costos​.
                  </p>
                  <p>
                    <Link
                      href="https://arizonagestionenergy.com/la-venta-de-vehiculos-electricos-en-europa-alcanza-un-record-en-2024-pero-el-ritmo-de-crecimiento-se-desacelera/"
                      passHref
                      legacyBehavior
                    >
                      <a target="_blank" rel="noopener" title="Leer más.">
                        Leer más.
                      </a>
                    </Link>
                  </p>
                </div>
              </div>
              <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
                <Image
                  decoding="async"
                  width={1707}
                  height={2560}
                  src="https://images.unsplash.com/photo-1678028204284-c918689272c1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="wp-image-295"
                  style={{ aspectRatio: "4/3", objectFit: "cover" }}
                />

                <h3
                  className="wp-block-heading"
                  style={{
                    marginTop: 24,
                    fontSize:
                      "clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.625), 20px)",
                    lineHeight: 1.5,
                  }}
                >
                  Europa cierra un 2024 con una recuperación significativa en el
                  mercado energético, tras superar la crisis del gas.
                </h3>
                <p className="has-small-font-size" style={{ marginTop: 8 }}>
                  La crisis energética europea se ha estabilizado gracias a un
                  invierno menos severo de lo esperado y la caída de precios del
                  gas y el petróleo. Esto ha aliviado tensiones en el mercado y
                  reducido la presión en la factura energética de hogares y
                  empresas. El bloque busca mantener esta tendencia mediante
                  diversificación de fuentes y reducción de la dependencia de
                  combustibles fósiles​.
                </p>
                <p>
                  <Link
                    href="https://arizonagestionenergy.com/368-2/"
                    passHref
                    legacyBehavior
                  >
                    <a target="_blank" rel="noopener" title="Leer más.">
                      Leer más.
                    </a>
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <h1
            className="wp-block-heading has-text-align-center has-text-color has-x-large-font-size"
            style={{ color: "#fffffffc" }}
          ></h1>
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
              className="wp-block-cover alignfull"
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
              <Image
                loading="lazy"
                decoding="async"
                width={1280}
                height={720}
                className="wp-block-cover__image-background wp-image-29"
                alt=""
                src="https://images.unsplash.com/photo-1617395491892-183ffcf15648?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                style={{ objectFit: "cover" }}
              />
              <div className="wp-block-cover__inner-container is-layout-flow wp-block-cover-is-layout-flow">
                <div
                  className="wp-block-group has-global-padding is-layout-constrained wp-container-core-group-is-layout-16 wp-block-group-is-layout-constrained"
                  style={{
                    paddingTop: "var(--wp--preset--spacing--60)",
                    paddingRight: "var(--wp--preset--spacing--30)",
                    paddingBottom: "var(--wp--preset--spacing--60)",
                    paddingLeft: "var(--wp--preset--spacing--30)",
                  }}
                >
                  <div className="wp-block-buttons is-content-justification-center is-layout-flex wp-container-core-buttons-is-layout-2 wp-block-buttons-is-layout-flex">
                    <div className="wp-block-button is-style-outline is-style-outline--18b044f4d159656570448f438ebfab11">
                      <Link href="/contacto" passHref legacyBehavior>
                        <a className="wp-block-button__link wp-element-button">
                          <strong>Contáctanos</strong>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default page;
