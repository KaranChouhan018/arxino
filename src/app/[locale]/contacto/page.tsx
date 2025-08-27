import Faq from "@/src/components/Faq";
import Footer from "@/src/components/Footer";
import Header from "@/src/components/Header";
import Image from "next/image";
import React from "react";
import { Link } from "@/src/i18n/routing";
import { useTranslations } from "next-intl";

const ContactPage: React.FC = () => {
  const t = useTranslations("contact");

  return (
    <>
      <Header />
      <main
        className="wp-block-group sticky-header-offset-container is-layout-flow wp-block-group-is-layout-flow"
        style={{ marginTop: "0px", marginBottom: "0px" }}
      >
        <div className="entry-content wp-block-post-content has-global-padding is-layout-constrained wp-block-post-content-is-layout-constrained">
          <div
            className="wp-block-cover alignfull is-light has-parallax is-repeated"
            style={{
              borderRadius: "4px",
              marginTop: 0,
              marginBottom: 0,
              paddingTop: "var(--wp--preset--spacing--60)",
              paddingRight: "var(--wp--preset--spacing--30)",
              paddingBottom: "var(--wp--preset--spacing--60)",
              paddingLeft: "var(--wp--preset--spacing--30)",
              minHeight: "409px",
              aspectRatio: "unset",
            }}
          >
            <span
              aria-hidden="true"
              className="wp-block-cover__background has-tertiary-background-color has-background-dim"
            />
            <div
              className="wp-block-cover__image-background wp-image-128 has-parallax"
              style={{
                backgroundPosition: "100% 55%",
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=874&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
              }}
            />
            <div className="wp-block-cover__inner-container is-layout-flow wp-block-cover-is-layout-flow">
              <div className="wp-block-columns is-layout-flex wp-container-core-columns-is-layout-1 wp-block-columns-is-layout-flex">
                <div
                  className="wp-block-column is-layout-flow wp-block-column-is-layout-flow"
                  style={{ flexBasis: "100%" }}
                >
                  <div className="wp-block-group has-global-padding is-content-justification-center is-layout-constrained wp-block-group-is-layout-constrained">
                    <h2
                      className="wp-block-heading alignwide has-text-align-center has-xx-large-font-size"
                      style={{
                        marginTop: "var(--wp--preset--spacing--30)",
                        marginBottom: "var(--wp--preset--spacing--30)",
                      }}
                    >
                      <strong>{t("title")}</strong>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="wp-block-cover alignfull is-light">
            <span
              aria-hidden="true"
              className="wp-block-cover__background has-background-dim-0 has-background-dim"
            />
            <div className="wp-block-cover__inner-container is-layout-flow wp-block-cover-is-layout-flow">
              <div className="wp-block-cover aligncenter is-light">
                <span
                  aria-hidden="true"
                  className="wp-block-cover__background has-tertiary-background-color has-background-dim"
                />
                <Image
                  fetchPriority="high"
                  decoding="async"
                  width="2505"
                  height="2560"
                  className="wp-block-cover__image-background wp-image-441 z-0"
                  alt=""
                  src="https://images.unsplash.com/photo-1587560699334-bea93391dcef?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  data-object-fit="cover"
                />

                <section className="w-full  flex flex-col items-center py-12 px-6 md:px-12 z-20 relative">
                  <div className=" bg-gray-200 max-w-6xl mx-auto px-6 py-2 md:px-12 md:py-6 text-center">
                    {/* Title + subtitle */}
                    <h2 className="text-3xl md:text-4xl font-bold text-primary">
                      {t("info_title")}
                    </h2>
                    <p className="mt-4 text-md md:text-lg text-gray-700">
                      Ready to explore fuel sourcing solutions? <br />
                      Contact us for personalized assistance:
                    </p>
                    <div className="mx-auto mt-6  border-[0.1px] border-gray-700 w-full " />

                     {/* Contact Info Grid */}
                  <div className="mt-12 grid gap-10 md:grid-cols-3  items-center max-w-5xl mx-auto">
                    {/* Address */}
                    <div className="flex items-start gap-4">
                      <Image
                        src="https://arizonagestionenergy.com/wp-content/uploads/2024/11/Icono-arizona-direccion-.png"
                        alt="Address icon"
                        width={48}
                        height={48}
                        className="w-12 h-12 object-contain"
                      />
                      <p className="text-sm text-gray-800">
                        <strong>{t("address")}:</strong> {t("address_value")}
                      </p>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start gap-4">
                      <Image
                        src="https://arizonagestionenergy.com/wp-content/uploads/2024/11/Icono-arizona-telefono.png"
                        alt="Phone icon"
                        width={48}
                        height={48}
                        className="w-12 h-12 object-contain"
                      />
                      <p className="text-sm text-gray-800">
                        <strong>{t("phone")}:</strong>{" "}
                        <a
                          href="tel:+34608297125"
                          className="text-blue-600 hover:underline"
                        >
                          +34 600 000 000
                        </a>
                      </p>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-4">
                      <Image
                        src="https://arizonagestionenergy.com/wp-content/uploads/2024/11/icono-arizona-email-3.png"
                        alt="Email icon"
                        width={48}
                        height={48}
                        className="w-12 h-12 object-contain"
                      />
                      <p className="text-sm text-gray-800">
                        <strong>{t("email")}:</strong>{" "}
                        <a
                          href="mailto:contacto@dvxventures.com"
                          className="text-blue-600 hover:underline"
                        >
                          contacto@dvxventures.com
                        </a>
                      </p>
                    </div>
                  </div>
                  </div>

                 

                  {/* Map */}
                  <div className=" mt-12 overflow-hidden shadow-lg">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.441197087945!2d-3.687299724140554!3d40.42122845536579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42294ad15b9295%3A0x85fa4f7dc389067e!2sC.%20de%20Vel%C3%A1zquez%2C%203%2C%20Salamanca%2C%2028001%20Madrid!5e0!3m2!1ses!2ses!4v1731410690397!5m2!1ses!2ses"
                      className="w-[350px] md:w-[1120px] h-[400px] border-0"
                      loading="lazy"
                      allowFullScreen
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Arizona Gestión Energy Location"
                    />
                  </div>
                  {/* Footer description */}
                  <p className="mt-6 text-center text-md font-medium text-black ">
                    {t("description")}{" ."}
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Faq />
      <Footer />
    </>
  );
};

export default ContactPage;
