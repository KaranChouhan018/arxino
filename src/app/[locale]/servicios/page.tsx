import React from "react";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import Image from "next/image";
import { useTranslations } from "next-intl";

const page: React.FC = () => {
  const t = useTranslations("servicios");
  // Next.js App Router does not provide locale directly, so fallback to window or default
  const locale =
    typeof window !== "undefined"
      ? window.location.pathname.split("/")[1]
      : "es";

  const steps = [
    { title: t("needs_title"), desc: t("needs_desc") },
    { title: t("market_study_title"), desc: t("market_study_desc") },
    { title: t("negotiation_title"), desc: t("negotiation_desc") },
    { title: t("logistics_title"), desc: t("logistics_desc") },
    { title: t("support_title"), desc: t("support_desc") },
  ];

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
              <div className="flex justify-center px-4">
                <div className="w-full max-w-3xl">
                  <div className="inline-block bg-gray-100 text-black rounded p-10 text-center">
                    <h2 className="text-2xl w-[80%] mx-auto font-bold">
                      {t("explore_services")}
                    </h2>

                    <div
                      className=""
                      style={{ marginTop: "var(--wp--preset--spacing--30)" }}
                    >
                      {" "}
                      <div className="wp-block-button has-custom-font-size has-small-font-size">
                        {" "}
                        <a
                          className="wp-block-button__link wp-element-button"
                          href={`/${locale}/contacto`}
                        >
                          {" "}
                          {t("contact")}{" "}
                        </a>{" "}
                      </div>{" "}
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
          <div className="bg-white w-[100%] your-grid-class  py-10 sm:py-12">
            <div className=" px-6 lg:px-8 w-[100%] mx-auto">
              <div className=" lg:text-center">
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  {t("how_it_works_title")}
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  {t("how_it_works_desc")}
                </p>
              </div>
              <div className="mx-auto mt-16 max-w-6xl sm:mt-20 lg:mt-24 ">
                <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                  <div className="relative pl-16">
                    <dt className="text-base font-semibold leading-7 text-gray-900">
                      <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-400">
                        <p className="text-white">1</p>
                      </div>
                      {t("needs_title")}
                    </dt>
                    <dd className="mt-2 text-base leading-7 text-gray-600">
                      {t("needs_desc")}
                    </dd>
                  </div>
                  <div className="relative pl-16">
                    <dt className="text-base font-semibold leading-7 text-gray-900">
                      <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-400">
                        <p className="text-white">2</p>
                      </div>
                      {t("market_study_title")}
                    </dt>
                    <dd className="mt-2 text-base leading-7 text-gray-600">
                      {t("market_study_desc")}
                    </dd>
                  </div>
                  <div className="relative pl-16">
                    <dt className="text-base font-semibold leading-7 text-gray-900">
                      <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-400">
                        <p className="text-white">3</p>
                      </div>
                      {t("negotiation_title")}
                    </dt>
                    <dd className="mt-2 text-base leading-7 text-gray-600">
                      {t("negotiation_desc")}
                    </dd>
                  </div>
                  <div className="relative pl-16">
                    <dt className="text-base font-semibold leading-7 text-gray-900">
                      <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-400">
                        <p className="text-white">4</p>
                      </div>
                      {t("logistics_title")}
                    </dt>
                    <dd className="mt-2 text-base leading-7 text-gray-600">
                      {t("logistics_desc")}
                    </dd>
                  </div>
                  <div className="relative pl-16">
                    <dt className="text-base font-semibold leading-7 text-gray-900">
                      <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-400">
                        <p className="text-white">5</p>
                      </div>
                      {t("support_title")}
                    </dt>
                    <dd className="mt-2 text-base leading-7 text-gray-600">
                      {t("support_desc")}
                    </dd>
                  </div>
                </dl>
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
