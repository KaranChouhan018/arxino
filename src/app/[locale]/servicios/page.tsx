import React from "react";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import Image from "next/image";
import { useTranslations } from "next-intl";

const page: React.FC = () => {
  const t = useTranslations("servicios");
  return (
    <>
      <Header />
      <main
        className="wp-block-group is-layout-flow wp-block-group-is-layout-flow"
        style={{ marginTop: 0, marginBottom: 0 }}
      >
        <div className="entry-content wp-block-post-content has-global-padding is-layout-constrained wp-block-post-content-is-layout-constrained">
          <div
            className="wp-block-cover alignfull has-parallax"
            style={{
              paddingTop: 0,
              paddingRight: 0,
              paddingBottom: "var(--wp--preset--spacing--60)",
              paddingLeft: 0,
              minHeight: "80vh",
              aspectRatio: "unset",
            }}
          >
            <span
              aria-hidden="true"
              className="wp-block-cover__background has-black-background-color has-background-dim-40 has-background-dim"
            ></span>
            <div
              className="wp-block-cover__image-background wp-image-249 has-parallax"
              style={{
                backgroundPosition: "50% 50%",
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1562892302-97faedd66f1c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
              }}
            ></div>
            <div className="wp-block-cover__inner-container is-layout-flow wp-block-cover-is-layout-flow">
              <div className="wp-block-group has-global-padding is-content-justification-center is-layout-constrained wp-block-group-is-layout-constrained">
                <div className="wp-block-group alignwide has-global-padding is-content-justification-left is-layout-constrained wp-container-core-group-is-layout-8 wp-block-group-is-layout-constrained">
                  <div
                    className="!inline-block wp-block-group has-foreground-color has-tertiary-background-color has-text-color has-background has-link-color wp-elements-b3cd801b136c4b371fb8395973180997 has-global-padding is-content-justification-left is-layout-constrained wp-container-core-group-is-layout-7 wp-block-group-is-layout-constrained"
                    style={{
                      borderRadius: 4,
                      paddingTop: "var(--wp--preset--spacing--40)",
                      paddingRight: "var(--wp--preset--spacing--40)",
                      paddingBottom: "var(--wp--preset--spacing--40)",
                      paddingLeft: "var(--wp--preset--spacing--40)",
                    }}
                  >
                    <h1 className="wp-block-heading alignwide has-text-align-left">
                      {t("explore_services")}
                    </h1>
                    <div
                      className="wp-block-buttons is-content-justification-left is-layout-flex wp-container-core-buttons-is-layout-1 wp-block-buttons-is-layout-flex"
                      style={{ marginTop: "var(--wp--preset--spacing--30)" }}
                    >
                      <div className="wp-block-button has-custom-font-size has-small-font-size">
                        <a
                          className="wp-block-button__link wp-element-button"
                          href="/"
                        >
                          {t("contact")}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="wp-block-group alignfull has-background-background-color has-background has-global-padding is-layout-constrained wp-container-core-group-is-layout-10 wp-block-group-is-layout-constrained"
            style={{
              marginTop: 0,
              marginBottom: 0,
              paddingTop: 0,
              paddingRight: 0,
              paddingBottom: 0,
              paddingLeft: 0,
            }}
          ></div>
          <div
            className="wp-block-group alignfull has-tertiary-background-color has-background has-global-padding is-layout-constrained wp-container-core-group-is-layout-12 wp-block-group-is-layout-constrained"
            id="servicios"
            style={{
              marginTop: 0,
              marginBottom: 0,
              paddingTop: "var(--wp--preset--spacing--60)",
              paddingRight: "var(--wp--preset--spacing--30)",
              paddingBottom: "var(--wp--preset--spacing--60)",
              paddingLeft: "var(--wp--preset--spacing--30)",
            }}
          >
            <div className="wp-block-group alignwide has-global-padding is-content-justification-left is-layout-constrained wp-container-core-group-is-layout-11 wp-block-group-is-layout-constrained">
              <h2 className="!inline-block wp-block-heading has-large-font-size">
                {t("discover_services")}
              </h2>
            </div>
            <div className="wp-block-columns alignwide is-layout-flex wp-container-core-columns-is-layout-3 wp-block-columns-is-layout-flex">
              <div
                className="wp-block-column is-layout-flow wp-block-column-is-layout-flow"
                style={{ flexBasis: "80%" }}
              >
                <div className="wp-block-columns alignwide is-layout-flex wp-container-core-columns-is-layout-2 wp-block-columns-is-layout-flex">
                  <div
                    className="wp-block-column has-background-background-color has-background is-layout-flow wp-block-column-is-layout-flow"
                    style={{ padding: "1.5rem" }}
                  >
                    <h3
                      className="wp-block-heading"
                      style={{
                        fontSize:
                          "clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.625), 20px)",
                        lineHeight: 1.5,
                      }}
                    >
                      {t("supply_procurement")}
                    </h3>
                    <p className="has-small-font-size" style={{ marginTop: 8 }}>
                      {t("supply_procurement_desc")}
                    </p>
                  </div>
                  <div
                    className="wp-block-column has-background-background-color has-background is-layout-flow wp-block-column-is-layout-flow"
                    style={{ padding: "1.5rem" }}
                  >
                    <h3
                      className="wp-block-heading"
                      style={{
                        fontSize:
                          "clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.625), 20px)",
                        lineHeight: 1.5,
                      }}
                    >
                      {t("trading_risk")}
                    </h3>
                    <p className="has-small-font-size" style={{ marginTop: 8 }}>
                      {t("trading_risk_desc")}
                    </p>
                  </div>
                </div>
                <div className="wp-block-columns alignwide is-layout-flex wp-container-core-columns-is-layout-2 wp-block-columns-is-layout-flex">
                  <div
                    className="wp-block-column has-background-background-color has-background is-layout-flow wp-block-column-is-layout-flow"
                    style={{ padding: "1.5rem" }}
                  >
                    <h3
                      className="wp-block-heading"
                      style={{
                        fontSize:
                          "clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.625), 20px)",
                        lineHeight: 1.5,
                      }}
                    >
                      {t("logistics_delivery")}
                    </h3>
                    <p className="has-small-font-size" style={{ marginTop: 8 }}>
                      {t("logistics_delivery_desc")}
                    </p>
                  </div>
                  <div
                    className="wp-block-column has-background-background-color has-background is-layout-flow wp-block-column-is-layout-flow"
                    style={{ padding: "1.5rem" }}
                  >
                    <h3
                      className="wp-block-heading"
                      style={{
                        fontSize:
                          "clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.625), 20px)",
                        lineHeight: 1.5,
                      }}
                    >
                      {t("compliance_quality")}
                    </h3>
                    <p className="has-small-font-size" style={{ marginTop: 8 }}>
                      {t("compliance_quality_desc")}
                    </p>
                  </div>
                </div>
                <div className="wp-block-columns alignwide is-layout-flex wp-container-core-columns-is-layout-2 wp-block-columns-is-layout-flex">
                  <div
                    className="wp-block-column has-background-background-color has-background is-layout-flow wp-block-column-is-layout-flow"
                    style={{ padding: "1.5rem" }}
                  >
                    <h3
                      className="wp-block-heading"
                      style={{
                        fontSize:
                          "clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.625), 20px)",
                        lineHeight: 1.5,
                      }}
                    >
                      {t("strategic_advisory")}
                    </h3>
                    <p className="has-small-font-size" style={{ marginTop: 8 }}>
                      {t("strategic_advisory_desc")}
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="wp-block-column is-layout-flow wp-block-column-is-layout-flow"
                style={{ flexBasis: "50%" }}
              >
                <figure className="wp-block-image">
                  <Image
                    fetchPriority="high"
                    decoding="async"
                    width={1280}
                    height={1919}
                    src="https://images.unsplash.com/photo-1528109688329-6a043167789d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className="wp-image-34"
                    style={{ aspectRatio: 1, objectFit: "cover" }}
                    sizes="(max-width: 1280px) 100vw, 1280px"
                  />
                </figure>
              </div>
            </div>
          </div>
          <div
            className="wp-block-group alignfull has-background-background-color has-background has-global-padding is-layout-constrained wp-container-core-group-is-layout-22 wp-block-group-is-layout-constrained"
            style={{
              marginTop: 0,
              marginBottom: 0,
              paddingTop: "var(--wp--preset--spacing--60)",
              paddingRight: "var(--wp--preset--spacing--30)",
              paddingBottom: "var(--wp--preset--spacing--60)",
              paddingLeft: "var(--wp--preset--spacing--30)",
            }}
          >
            <div className="wp-block-group alignwide has-global-padding is-content-justification-left is-layout-constrained wp-container-core-group-is-layout-13 wp-block-group-is-layout-constrained">
              <h2 className="!inline-block wp-block-heading has-large-font-size">
                {t("products")}
              </h2>
              <p style={{ marginTop: 16 }} className="!mx-0">
                {t("trusted_source")}
              </p>
            </div>
            <div
              className="wp-block-group alignwide has-tertiary-background-color has-background is-layout-flex wp-block-group-is-layout-flex"
              style={{
                borderRadius: 4,
                paddingTop: 0,
                paddingRight: 0,
                paddingBottom: 0,
                paddingLeft: 0,
              }}
            >
              <div
                className="wp-block-cover wp-container-content-2"
                style={{
                  paddingRight: "var(--wp--preset--spacing--80)",
                  paddingLeft: "var(--wp--preset--spacing--80)",
                  minHeight: 269,
                  aspectRatio: "unset",
                }}
              >
                <span
                  aria-hidden="true"
                  className="wp-block-cover__background has-background-dim-0 has-background-dim"
                  style={{ backgroundColor: "#74504a" }}
                ></span>
                <Image
                  decoding="async"
                  width={2560}
                  height={1707}
                  className="wp-block-cover__image-background wp-image-439"
                  alt=""
                  src="https://images.unsplash.com/photo-1580668304124-945a763a7442?q=80&w=867&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  sizes="(max-width: 2560px) 100vw, 2560px"
                />
                <div className="wp-block-cover__inner-container has-global-padding is-layout-constrained wp-container-core-cover-is-layout-3 wp-block-cover-is-layout-constrained">
                  <div
                    style={{ height: 200, width: 0 }}
                    aria-hidden="true"
                    className="wp-block-spacer"
                  ></div>
                </div>
              </div>
              <div
                className="wp-block-group has-global-padding is-layout-constrained wp-block-group-is-layout-constrained"
                style={{
                  paddingTop: "var(--wp--preset--spacing--40)",
                  paddingBottom: "var(--wp--preset--spacing--40)",
                }}
              >
                <h3
                  className="wp-block-heading"
                  style={{
                    fontSize:
                      "clamp(1.119rem, 1.119rem + ((1vw - 0.2rem) * 1.052), 1.75rem)",
                    lineHeight: 1.5,
                  }}
                >
                  <strong>{t("gasoil_a")}</strong>
                </h3>
                <p className="has-small-font-size" style={{ marginTop: 12 }}>
                  {t("gasoil_a_desc")}
                </p>
              </div>
            </div>
            <div
              className="wp-block-group alignwide has-tertiary-background-color has-background is-layout-flex wp-block-group-is-layout-flex"
              style={{
                borderRadius: 4,
                paddingTop: 0,
                paddingRight: 0,
                paddingBottom: 0,
                paddingLeft: 0,
              }}
            >
              <div
                className="wp-block-cover wp-container-content-2"
                style={{
                  paddingRight: "var(--wp--preset--spacing--80)",
                  paddingLeft: "var(--wp--preset--spacing--80)",
                  minHeight: 269,
                  aspectRatio: "unset",
                }}
              >
                <span
                  aria-hidden="true"
                  className="wp-block-cover__background has-background-dim-0 has-background-dim"
                  style={{ backgroundColor: "#74504a" }}
                ></span>
                <Image
                  decoding="async"
                  width={2560}
                  height={1707}
                  className="wp-block-cover__image-background wp-image-439"
                  alt=""
                  src="https://images.unsplash.com/photo-1580668304124-945a763a7442?q=80&w=867&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  sizes="(max-width: 2560px) 100vw, 2560px"
                />
                <div className="wp-block-cover__inner-container has-global-padding is-layout-constrained wp-container-core-cover-is-layout-3 wp-block-cover-is-layout-constrained">
                  <div
                    style={{ height: 200, width: 0 }}
                    aria-hidden="true"
                    className="wp-block-spacer"
                  ></div>
                </div>
              </div>
              <div
                className="wp-block-group has-global-padding is-layout-constrained wp-block-group-is-layout-constrained"
                style={{
                  paddingTop: "var(--wp--preset--spacing--40)",
                  paddingBottom: "var(--wp--preset--spacing--40)",
                }}
              >
                <h3
                  className="wp-block-heading"
                  style={{
                    fontSize:
                      "clamp(1.119rem, 1.119rem + ((1vw - 0.2rem) * 1.052), 1.75rem)",
                    lineHeight: 1.5,
                  }}
                >
                  <strong>{t("gasoil_b")}</strong>
                </h3>
                <p className="has-small-font-size" style={{ marginTop: 12 }}>
                  {t("gasoil_b_desc")}
                </p>
              </div>
            </div>
            <div
              className="wp-block-group alignwide has-tertiary-background-color has-background is-layout-flex wp-block-group-is-layout-flex"
              style={{
                borderRadius: 4,
                paddingTop: 0,
                paddingRight: 0,
                paddingBottom: 0,
                paddingLeft: 0,
              }}
            >
              <div
                className="wp-block-cover wp-container-content-3"
                style={{
                  paddingRight: "var(--wp--preset--spacing--80)",
                  paddingLeft: "var(--wp--preset--spacing--80)",
                  minHeight: 303,
                  aspectRatio: "unset",
                }}
              >
                <span
                  aria-hidden="true"
                  className="wp-block-cover__background has-background-dim-0 has-background-dim"
                  style={{ backgroundColor: "#596f7b" }}
                ></span>
                <Image
                  loading="lazy"
                  decoding="async"
                  width={2560}
                  height={1920}
                  className="wp-block-cover__image-background wp-image-442"
                  alt=""
                  src="https://images.unsplash.com/photo-1580668304124-945a763a7442?q=80&w=867&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  sizes="(max-width: 2560px) 100vw, 2560px"
                />
                <div className="wp-block-cover__inner-container has-global-padding is-layout-constrained wp-container-core-cover-is-layout-4 wp-block-cover-is-layout-constrained">
                  <div
                    style={{ height: 200, width: 0 }}
                    aria-hidden="true"
                    className="wp-block-spacer"
                  ></div>
                </div>
              </div>
              <div
                className="wp-block-group has-global-padding is-layout-constrained wp-block-group-is-layout-constrained"
                style={{
                  paddingTop: "var(--wp--preset--spacing--40)",
                  paddingBottom: "var(--wp--preset--spacing--40)",
                }}
              >
                <h3
                  className="wp-block-heading"
                  style={{
                    fontSize:
                      "clamp(1.119rem, 1.119rem + ((1vw - 0.2rem) * 1.052), 1.75rem)",
                    lineHeight: 1.5,
                  }}
                >
                  <strong>{t("gasoil_c")}</strong>
                </h3>
                <p className="has-small-font-size" style={{ marginTop: 12 }}>
                  {t("gasoil_c_desc")}
                </p>
              </div>
            </div>
            <div
              className="wp-block-group alignwide has-tertiary-background-color has-background is-layout-flex wp-block-group-is-layout-flex"
              style={{
                borderRadius: 4,
                paddingTop: 0,
                paddingRight: 0,
                paddingBottom: 0,
                paddingLeft: 0,
              }}
            >
              <div
                className="wp-block-cover is-light wp-container-content-4"
                style={{
                  paddingRight: "var(--wp--preset--spacing--80)",
                  paddingLeft: "var(--wp--preset--spacing--80)",
                  minHeight: 304,
                  aspectRatio: "unset",
                }}
              >
                <span
                  aria-hidden="true"
                  className="wp-block-cover__background has-background-dim-0 has-background-dim"
                  style={{ backgroundColor: "#8b8e8c" }}
                ></span>
                <Image
                  loading="lazy"
                  decoding="async"
                  width={2505}
                  height={2560}
                  className="wp-block-cover__image-background wp-image-441"
                  alt=""
                  src="https://images.unsplash.com/photo-1580668304124-945a763a7442?q=80&w=867&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  sizes="(max-width: 2505px) 100vw, 2505px"
                />
                <div className="wp-block-cover__inner-container has-global-padding is-layout-constrained wp-container-core-cover-is-layout-5 wp-block-cover-is-layout-constrained">
                  <div
                    style={{ height: 200, width: 0 }}
                    aria-hidden="true"
                    className="wp-block-spacer"
                  ></div>
                </div>
              </div>
              <div
                className="wp-block-group has-global-padding is-layout-constrained wp-block-group-is-layout-constrained"
                style={{
                  paddingTop: "var(--wp--preset--spacing--40)",
                  paddingBottom: "var(--wp--preset--spacing--40)",
                }}
              >
                <h3
                  className="wp-block-heading"
                  style={{
                    fontSize:
                      "clamp(1.119rem, 1.119rem + ((1vw - 0.2rem) * 1.052), 1.75rem)",
                    lineHeight: 1.5,
                  }}
                >
                  <strong>{t("gasoline_95")}</strong>
                </h3>
                <p className="has-small-font-size" style={{ marginTop: 12 }}>
                  {t("gasoline_95_desc")}
                </p>
              </div>
            </div>
          </div>
          <div
            className="wp-block-cover alignfull has-parallax"
            style={{
              paddingTop: 0,
              paddingRight: "var(--wp--preset--spacing--30)",
              paddingBottom: 0,
              paddingLeft: "var(--wp--preset--spacing--30)",
              minHeight: 50,
              aspectRatio: "unset",
            }}
          >
            <span
              aria-hidden="true"
              className="wp-block-cover__background has-black-background-color has-background-dim-60 has-background-dim"
            ></span>
            <div
              className="wp-block-cover__image-background wp-image-250 has-parallax"
              style={{
                backgroundPosition: "50% 50%",
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1628002580365-f3c0a322d577?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
              }}
            ></div>
            <div className="wp-block-cover__inner-container is-layout-flow wp-block-cover-is-layout-flow">
              <div
                className="wp-block-group has-global-padding is-layout-constrained wp-block-group-is-layout-constrained"
                style={{
                  paddingTop: "var(--wp--preset--spacing--60)",
                  paddingBottom: "var(--wp--preset--spacing--60)",
                }}
              >
                <div className="wp-block-group alignwide has-global-padding is-content-justification-center is-layout-constrained wp-block-group-is-layout-constrained">
                  <h1
                    className="wp-block-heading has-text-align-center has-text-color has-x-large-font-size"
                    style={{ color: "#fffffffc" }}
                  >
                    {t("trust_experience")}
                  </h1>
                  <p
                    className="has-text-align-center has-text-color"
                    style={{ color: "#fffffffc", marginTop: 16 }}
                  >
                    {t("discover_range")}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p></p>
        </div>
        <p></p>
      </main>
      <Footer />
    </>
  );
};
export default page;
