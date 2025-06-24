import Footer from "@/src/components/Footer";
import Header from "@/src/components/Header";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const ContactPage: React.FC = () => {
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
              className="wp-block-cover__image-background wp-image-128 has-parallax is-repeated"
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
                      <strong>Contacto</strong>
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
                  className="wp-block-cover__image-background wp-image-441"
                  alt=""
                  src="https://images.unsplash.com/photo-1587560699334-bea93391dcef?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  data-object-fit="cover"
                />
                <div className="wp-block-cover__inner-container is-layout-flow wp-block-cover-is-layout-flow">
                  <div className="wp-block-group alignfull is-vertical is-layout-flex wp-container-core-group-is-layout-30 wp-block-group-is-layout-flex">
                    <div className="wp-block-group is-vertical is-layout-flex wp-container-core-group-is-layout-27 wp-block-group-is-layout-flex">
                      <div className="wp-block-group has-global-padding is-layout-constrained wp-block-group-is-layout-constrained">
                        <div className="wp-block-columns is-layout-flex wp-container-core-columns-is-layout-2 wp-block-columns-is-layout-flex">
                          <div
                            className="wp-block-column is-layout-flow wp-block-column-is-layout-flow"
                            style={{ flexBasis: "100%" }}
                          >
                            <div className="wp-block-group alignwide has-global-padding is-layout-constrained wp-block-group-is-layout-constrained"></div>
                          </div>
                        </div>
                      </div>

                      <div
                        className="wp-block-columns alignwide are-vertically-aligned-center is-not-stacked-on-mobile has-background wp-container-content-3 is-layout-flex wp-container-core-columns-is-layout-3 wp-block-columns-is-layout-flex"
                        style={{
                          backgroundColor: "#e6e6e6",
                          marginTop: 0,
                          marginBottom: 0,
                        }}
                      >
                        <div
                          className="wp-block-column is-vertically-aligned-center is-layout-flow wp-block-column-is-layout-flow"
                          style={{ flexBasis: "100%" }}
                        >
                          <div className="wp-block-group has-global-padding is-layout-constrained wp-block-group-is-layout-constrained">
                            <h2
                              className="wp-block-heading alignfull has-text-align-center has-foreground-color has-text-color has-link-color wp-elements-e970e3495aabc359804681c0b10cb2c3"
                              style={{
                                marginTop: "var(--wp--preset--spacing--50)",
                                marginRight: "var(--wp--preset--spacing--30)",
                                marginBottom: "var(--wp--preset--spacing--50)",
                                marginLeft: "var(--wp--preset--spacing--30)",
                                lineHeight: 1.4,
                              }}
                            >
                              <mark
                                style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
                                className="has-inline-color has-primary-color"
                              >
                                Información de contacto
                              </mark>
                            </h2>

                            <hr className="wp-block-separator alignwide has-alpha-channel-opacity is-style-wide" />

                            <p style={{ marginTop: "16px" }}></p>

                            <div className="wp-block-group has-global-padding is-layout-constrained wp-block-group-is-layout-constrained">
                              <div className="wp-block-group has-global-padding is-layout-constrained wp-block-group-is-layout-constrained">
                                <div className="wp-block-group has-global-padding is-layout-constrained wp-block-group-is-layout-constrained">
                                  <div className="wp-block-group has-global-padding is-layout-constrained wp-block-group-is-layout-constrained">
                                    {/* Address Section */}
                                    <div className="wp-block-group is-nowrap is-layout-flex wp-container-core-group-is-layout-13 wp-block-group-is-layout-flex">
                                      <div className="wp-block-group has-global-padding is-layout-constrained wp-block-group-is-layout-constrained">
                                        <figure className="wp-block-image alignleft size-full is-resized ext-aspect-landscape wp-duotone-rgb15133229-ffffff-3">
                                          {/* Option 1: Using custom icon image */}
                                          <Image
                                            width={549}
                                            height={500}
                                            src="https://www.shutterstock.com/image-vector/pin-point-logo-can-be-600nw-1679653036.jpg"
                                            alt="Dirección icon"
                                            className="wp-image-205"
                                            style={{
                                              objectFit: "cover",
                                              width: "57px",
                                              height: "auto",
                                            }}
                                          />

                                          {/* Option 2: Using Lucide React icon (uncomment to use this instead) */}
                                          {/* <div className="flex items-center justify-center w-[57px] h-[57px] bg-primary rounded-lg">
                    <MapPin className="w-8 h-8 text-white" />
                  </div> */}
                                        </figure>
                                      </div>

                                      <div className="wp-block-group has-global-padding is-layout-constrained wp-block-group-is-layout-constrained">
                                        <p className="has-primary-color has-text-color has-link-color has-small-font-size wp-elements-ff310899294439e3b4c509166ace9a2a">
                                          <strong>Dirección. </strong>C/
                                          Velazquez 3, 3º, 28009 Madrid
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="wp-block-group is-layout-grid wp-container-core-group-is-layout-16 wp-block-group-is-layout-grid">
                                  <p className="has-small-font-size wp-container-content-1"></p>
                                </div>

                                <div className="wp-block-group has-global-padding is-layout-constrained wp-block-group-is-layout-constrained">
                                  <div className="wp-block-group has-global-padding is-layout-constrained wp-block-group-is-layout-constrained">
                                    <div className="wp-block-group has-global-padding is-layout-constrained wp-block-group-is-layout-constrained">
                                      {/* Phone Section */}
                                      <div className="wp-block-group is-nowrap is-layout-flex wp-container-core-group-is-layout-18 wp-block-group-is-layout-flex">
                                        <div className="wp-block-group has-global-padding is-layout-constrained wp-block-group-is-layout-constrained">
                                          <figure className="wp-block-image alignleft size-full is-resized ext-aspect-landscape wp-duotone-unset-4">
                                            {/* Option 1: Using custom icon image */}
                                            <Image
                                              width={512}
                                              height={512}
                                              src="https://www.shutterstock.com/image-vector/phone-icon-vector-telephone-symbol-260nw-1723717453.jpg"
                                              alt="Teléfono icon"
                                              className="wp-image-206"
                                              style={{
                                                objectFit: "cover",
                                                width: "51px",
                                                height: "auto",
                                              }}
                                            />

                                            {/* Option 2: Using Lucide React icon (uncomment to use this instead) */}
                                            {/* <div className="flex items-center justify-center w-[51px] h-[51px] bg-primary rounded-lg">
                      <Phone className="w-7 h-7 text-white" />
                    </div> */}
                                          </figure>
                                        </div>

                                        <p className="has-primary-color has-text-color has-link-color wp-elements-5f4b78846fc4b84276f710d8d0b5315f">
                                          <strong>Teléfono</strong>.{" "}
                                          <Link
                                            href="tel:+34608297125"
                                            className="hover:underline"
                                          >
                                            +34 608297125
                                          </Link>
                                        </p>
                                      </div>
                                    </div>
                                    <p></p>
                                  </div>

                                  {/* Email Section */}
                                  <div className="wp-block-group is-content-justification-left is-nowrap is-layout-flex wp-container-core-group-is-layout-21 wp-block-group-is-layout-flex">
                                    <figure className="wp-block-image alignleft size-full is-resized ext-aspect-landscape wp-duotone-1f8cff-1c0a63-5">
                                      {/* Option 1: Using custom icon image */}
                                      <Image
                                        width={512}
                                        height={512}
                                        src="https://www.shutterstock.com/image-vector/phone-icon-vector-telephone-symbol-260nw-1723717453.jpg"
                                        alt="Email icon"
                                        className="wp-image-211"
                                        style={{
                                          objectFit: "cover",
                                          width: "57px",
                                          height: "auto",
                                        }}
                                      />

                                      {/* Option 2: Using Lucide React icon (uncomment to use this instead) */}
                                      {/* <div className="flex items-center justify-center w-[57px] h-[57px] bg-primary rounded-lg">
                <Mail className="w-8 h-8 text-white" />
              </div> */}
                                    </figure>

                                    <p
                                      className="has-text-align-center has-primary-color has-text-color has-link-color wp-elements-6c93572ec24fe0b43d332b5c08c10edd"
                                      style={{ marginTop: "0px" }}
                                    >
                                      <strong>Email.</strong>{" "}
                                      <Link
                                        href="mailto:administración@arizonagestionenergy.com"
                                        className="hover:underline"
                                      >
                                        administración@arizonagestionenergy.com
                                      </Link>
                                    </p>

                                    <div
                                      style={{ height: "100px", width: "0px" }}
                                      aria-hidden="true"
                                      className="wp-block-spacer wp-container-content-2"
                                    />
                                  </div>
                                </div>

                                <div className="wp-block-group has-global-padding is-layout-constrained wp-block-group-is-layout-constrained"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="wp-block-group has-global-padding is-layout-constrained wp-block-group-is-layout-constrained">
                      <div
                        className="wp-block-group is-layout-flow wp-block-group-is-layout-flow"
                        style={{
                          paddingTop: "var(--wp--preset--spacing--30)",
                          paddingRight: "var(--wp--preset--spacing--30)",
                          paddingBottom: "var(--wp--preset--spacing--30)",
                          paddingLeft: "var(--wp--preset--spacing--30)",
                        }}
                      >
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.441197087945!2d-3.687299724140554!3d40.42122845536579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42294ad15b9295%3A0x85fa4f7dc389067e!2sC.%20de%20Vel%C3%A1zquez%2C%203%2C%20Salamanca%2C%2028001%20Madrid!5e0!3m2!1ses!2ses!4v1731410690397!5m2!1ses!2ses"
                          width="600"
                          height="450"
                          style={{ border: 0 }}
                          allowFullScreen={true}
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          title="Arizona Gestión Energy Location"
                        />

                        <p
                          className="has-small-font-size"
                          style={{ marginTop: "8px" }}
                        >
                          En Arizona Gestión Energy, nos dedicamos a ofrecer
                          soluciones energéticas integrales en el sector de los
                          hidrocarburos. Con más de [X] años de experiencia, nos
                          enfocamos en proporcionar un servicio eficiente,
                          seguro y de alta calidad a nuestros clientes.
                        </p>
                      </div>
                    </div>

                    <div className="wp-block-columns is-layout-flex wp-container-core-columns-is-layout-4 wp-block-columns-is-layout-flex">
                      <div
                        className="wp-block-column is-layout-flow wp-block-column-is-layout-flow"
                        style={{ flexBasis: "100%" }}
                      />
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

export default ContactPage;
