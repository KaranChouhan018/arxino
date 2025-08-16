import React from "react";
import Link from "next/link";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import Image from "next/image";
import { useTranslations } from "next-intl";

const page: React.FC = () => {
  const t = useTranslations("sobre");
  return (
    <>
      <Header />
      <main
        className="wp-block-group is-layout-flow wp-block-group-is-layout-flow"
        style={{ marginTop: "0px", marginBottom: "0px" }}
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
                minHeight: "50px",
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
                    "url(https://images.unsplash.com/photo-1638895086783-992727960f27?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
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
                    {t("hero_title")}
                  </h1>

                  <p className="has-text-align-center has-text-color" style={{ color: "#fffffffc" }}>
                    {t("hero_description")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="wp-block-group alignfull has-background-background-color has-background has-global-padding is-layout-constrained wp-container-core-group-is-layout-10 wp-block-group-is-layout-constrained"
            style={{
              marginTop: 0,
              marginBottom: 0,
              paddingTop: "var(--wp--preset--spacing--60)",
              paddingRight: "var(--wp--preset--spacing--30)",
              paddingBottom: "var(--wp--preset--spacing--60)",
              paddingLeft: "var(--wp--preset--spacing--30)",
            }}
          >
            <div className="wp-block-columns alignwide is-layout-flex wp-container-core-columns-is-layout-1 wp-block-columns-is-layout-flex">
              <div
                className="wp-block-column is-layout-flow wp-block-column-is-layout-flow"
                style={{ flexBasis: "50%" }}
              >
                <div
                  className="wp-block-cover is-light"
                  style={{ minHeight: "100%", aspectRatio: "unset" }}
                >
                  <span
                    aria-hidden="true"
                    className="wp-block-cover__background has-background-dim-0 has-background-dim"
                    style={{ backgroundColor: "#9ea4ac" }}
                  ></span>
                  <Image
                    priority
                    width={2560}
                    height={1920}
                    className="wp-block-cover__image-background wp-image-228"
                    alt=""
                    src="https://images.unsplash.com/photo-1626366657705-84fb039744f7?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    style={{ objectFit: "cover" }}
                  />
                  <div className="wp-block-cover__inner-container is-layout-flow wp-block-cover-is-layout-flow">
                    <div
                      style={{ height: "380px" }}
                      aria-hidden="true"
                      className="wp-block-spacer"
                    ></div>
                  </div>
                </div>
              </div>

              <div
                className="wp-block-column is-layout-flow wp-block-column-is-layout-flow"
                style={{
                  paddingTop: "var(--wp--preset--spacing--40)",
                  paddingBottom: "var(--wp--preset--spacing--40)",
                  flexBasis: "50%",
                }}
              >
                <div
                  className="wp-block-group alignwide has-global-padding is-content-justification-left is-layout-constrained wp-container-core-group-is-layout-9 wp-block-group-is-layout-constrained"
                  style={{ marginBottom: "var(--wp--preset--spacing--40)" }}
                >
                  <h2 className="wp-block-heading has-large-font-size">
                    <strong>{t("who_we_are")}</strong>
                  </h2>

                  <p
                    className="has-text-align-left"
                    style={{ marginTop: "16px" }}
                  >
                    {t("who_we_are_desc1")}
                  </p>

                  <p
                    className="has-text-align-left"
                    style={{ marginTop: "16px" }}
                  >
                    {t("who_we_are_desc2")}
                  </p>

                  <p
                    className="has-text-align-left"
                    style={{ marginTop: "16px" }}
                  >
                    {t("who_we_are_desc3")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="wp-block-cover alignfull has-parallax"
            style={{
              borderRadius: "4px",
              paddingTop: "var(--wp--preset--spacing--40)",
              paddingRight: "var(--wp--preset--spacing--50)",
              paddingBottom: "var(--wp--preset--spacing--40)",
              paddingLeft: "var(--wp--preset--spacing--50)",
            }}
          >
            <span
              aria-hidden="true"
              className="wp-block-cover__background has-background-dim-40 has-background-dim"
            ></span>
            <div
              className="wp-block-cover__image-background has-parallax"
              style={{
                backgroundPosition: "50% 50%",
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1521737711867-e3b97375f902?fit=crop&crop=entropy%2Cfaces&auto=format%2Ccompress)",
              }}
            ></div>
            <div className="wp-block-cover__inner-container has-global-padding is-layout-constrained wp-container-core-cover-is-layout-6 wp-block-cover-is-layout-constrained">
              <div className="wp-block-columns alignwide is-layout-flex wp-container-core-columns-is-layout-2 wp-block-columns-is-layout-flex">
                <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
                  <div
                    className="wp-block-cover aligncenter is-light has-custom-content-position is-position-top-center has-foreground-color has-text-color has-link-color wp-elements-871ad679342e0a057a93543daae184f0"
                    style={{
                      borderRadius: "8px",
                      paddingTop: "var(--wp--preset--spacing--30)",
                      paddingRight: "var(--wp--preset--spacing--20)",
                      paddingBottom: "var(--wp--preset--spacing--30)",
                      paddingLeft: "var(--wp--preset--spacing--20)",
                      minHeight: "100%",
                      aspectRatio: "unset",
                    }}
                  >
                    <span
                      aria-hidden="true"
                      className="wp-block-cover__background has-background-background-color has-background-dim-100 has-background-dim"
                    ></span>
                    <div className="wp-block-cover__inner-container has-global-padding is-layout-constrained wp-container-core-cover-is-layout-3 wp-block-cover-is-layout-constrained">
                      <div className="wp-block-group is-nowrap is-layout-flex wp-container-core-group-is-layout-11 wp-block-group-is-layout-flex">
                        <figure className="wp-block-image size-large is-resized ext-aspect-landscape wp-duotone-df620e-ccc-2">
                          <Image
                            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDQ4IDQ4Ij48bWFzayBpZD0iYSIgd2lkdGg9IjQ4IiBoZWlnaHQ9IjQ4IiB4PSIwIiB5PSIwIiBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBzdHlsZT0ibWFzay10eXBlOmFscGhhIj48cGF0aCBmaWxsPSIjRDlEOUQ5IiBkPSJNMCAwaDQ4djQ4SDB6Ii8+PC9tYXNrPjxnIG1hc2s9InVybCgjYSkiPjxwYXRoIGZpbGw9IiMxQzFCMUYiIGQ9Ik0yNCA0NGMtMi44MzMgMC01LjQ2Ny0uNTA4LTcuOS0xLjUyNS0yLjQzMy0xLjAxNy00LjU1LTIuNDI1LTYuMzUtNC4yMjUtMS44LTEuOC0zLjIwOC0zLjkxNy00LjIyNS02LjM1QzQuNTA4IDI5LjQ2NyA0IDI2LjgzMyA0IDI0YzAtMi44LjUwOC01LjQxNyAxLjUyNS03Ljg1UzcuOTUgMTEuNiA5Ljc1IDkuOGMxLjgtMS44IDMuOTE3LTMuMjE3IDYuMzUtNC4yNVMyMS4xNjcgNCAyNCA0YzIuNSAwIDQuODMzLjQgNyAxLjIgMi4xNjcuOCA0LjExNyAxLjkgNS44NSAzLjNsLTIuMTUgMi4xNWExNi43MzIgMTYuNzMyIDAgMCAwLTQuOS0yLjdDMjggNy4zMTcgMjYuMDY3IDcgMjQgN2MtNC44MzMgMC04Ljg3NSAxLjYyNS0xMi4xMjUgNC44NzVTNyAxOS4xNjcgNyAyNHMxLjYyNSA4Ljg3NSA0Ljg3NSAxMi4xMjVTMTkuMTY3IDQxIDI0IDQxczguODc1LTEuNjI1IDEyLjEyNS00Ljg3NVM0MSAyOC44MzMgNDEgMjRjMC0xLS4wNzUtMS45NzUtLjIyNS0yLjkyNS0uMTUtLjk1LS4zNzUtMS44NzUtLjY3NS0yLjc3NWwyLjMtMi4zYTE5LjEyMiAxOS4xMjIgMCAwIDEgMS4yIDMuODVjLjI2NyAxLjMzMy40IDIuNzE3LjQgNC4xNSAwIDIuODMzLS41MTcgNS40NjctMS41NSA3LjktMS4wMzMgMi4zMzMtMi40NSA0LjU1LTQuMjUgNi4zNS0xLjggMS44LTMuOTE3IDMuMjA4LTYuMzUgNC4yMjVDMjkuNDE3IDQzLjQ5MiAyNi44IDQ0IDI0IDQ0Wm0tMi45NS0xMC45LTguMjUtOC4zIDIuMjUtMi4yNSA2IDYgMjAuNy0yMC43IDIuMyAyLjI1LTIzIDIzWiIvPjwvZz48L3N2Zz4="
                            alt=""
                            width={57}
                            height={48}
                            style={{
                              objectFit: "cover",
                              filter:
                                "invert(38%) sepia(98%) saturate(7492%) hue-rotate(1deg) brightness(104%) contrast(105%)",
                              height: "auto",
                            }}
                            unoptimized
                          />
                        </figure>

                        <p className="has-large-font-size">
                          <strong>
                            <mark
                              style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
                              className="has-inline-color has-primary-color"
                            >
                              {t("integrity_title")}
                            </mark>
                          </strong>
                        </p>
                      </div>

                      <p className="has-text-align-center"></p>

                      <p
                        className="has-text-align-center has-small-font-size"
                        style={{ marginTop: "12px" }}
                      >
                        {t("integrity_desc")}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
                  <div
                    className="wp-block-cover is-light has-custom-content-position is-position-top-center has-foreground-color has-text-color has-link-color wp-elements-ff49db07ce32eee48ab66be63da4bd66"
                    style={{
                      borderRadius: "8px",
                      paddingTop: "var(--wp--preset--spacing--30)",
                      paddingRight: "var(--wp--preset--spacing--20)",
                      paddingBottom: "var(--wp--preset--spacing--30)",
                      paddingLeft: "var(--wp--preset--spacing--20)",
                      minHeight: "100%",
                      aspectRatio: "unset",
                    }}
                  >
                    <span
                      aria-hidden="true"
                      className="wp-block-cover__background has-background-background-color has-background-dim-100 has-background-dim"
                    ></span>
                    <div className="wp-block-cover__inner-container has-global-padding is-layout-constrained wp-container-core-cover-is-layout-4 wp-block-cover-is-layout-constrained">
                      <div className="wp-block-group is-nowrap is-layout-flex wp-container-core-group-is-layout-13 wp-block-group-is-layout-flex">
                        <figure className="wp-block-image size-large is-resized ext-aspect-landscape wp-duotone-df620e-ccc-3">
                          <Image
                            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDQ4IDQ4Ij48bWFzayBpZD0iYSIgd2lkdGg9IjQ4IiBoZWlnaHQ9IjQ4IiB4PSIwIiB5PSIwIiBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBzdHlsZT0ibWFzay10eXBlOmFscGhhIj48cGF0aCBmaWxsPSIjRDlEOUQ5IiBkPSJNMCAwaDQ4djQ4SDB6Ii8+PC9tYXNrPjxnIG1hc2s9InVybCgjYSkiPjxwYXRoIGZpbGw9IiMxQzFCMUYiIGQ9Ik0yNCA0NGMtMi44MzMgMC01LjQ2Ny0uNTA4LTcuOS0xLjUyNS0yLjQzMy0xLjAxNy00LjU1LTIuNDI1LTYuMzUtNC4yMjUtMS44LTEuOC0zLjIwOC0zLjkxNy00LjIyNS02LjM1QzQuNTA4IDI5LjQ2NyA0IDI2LjgzMyA0IDI0YzAtMi44LjUwOC01LjQxNyAxLjUyNS03Ljg1UzcuOTUgMTEuNiA5Ljc1IDkuOGMxLjgtMS44IDMuOTE3LTMuMjE3IDYuMzUtNC4yNVMyMS4xNjcgNCAyNCA0YzIuNSAwIDQuODMzLjQgNyAxLjIgMi4xNjcuOCA0LjExNyAxLjkgNS44NSAzLjNsLTIuMTUgMi4xNWExNi43MzIgMTYuNzMyIDAgMCAwLTQuOS0yLjdDMjggNy4zMTcgMjYuMDY3IDcgMjQgN2MtNC44MzMgMC04Ljg3NSAxLjYyNS0xMi4xMjUgNC44NzVTNyAxOS4xNjcgNyAyNHMxLjYyNSA4Ljg3NSA4Ljg3NSAxMi4xMjVTMTkuMTY3IDQxIDI0IDQxczguODc1LTEuNjI1IDEyLjEyNS00Ljg3NVM0MSAyOC44MzMgNDEgMjRjMC0xLS4wNzUtMS45NzUtLjIyNS0yLjkyNS0uMTUtLjk1LS4zNzUtMS44NzUtLjY3NS0yLjc3NWwyLjMtMi4zYTE5LjEyMiAxOS4xMjIgMCAwIDEgMS4yIDMuODVjLjI2NyAxLjMzMy40IDIuNzE3LjQgNC4xNSAwIDIuODMzLS41MTcgNS40NjctMS41NSA3LjktMS4wMzMgMi44MzMtMi40NSA0LjU1LTQuMjUgNi4zNS0xLjggMS44LTMuOTE3IDMuMjA4LTYuMzUgNC4yMjVDMjkuNDE3IDQzLjQ5MiAyNi44IDQ0IDI0IDQ0Wm0tMi45NS0xMC45LTguMjUtOC4zIDIuMjUtMi4yNSA2IDYgMjAuNy0yMC43IDIuMyAyLjI1LTIzIDIzWiIvPjwvZz48L3N2Zz4="
                            alt=""
                            width={57}
                            height={48}
                            style={{
                              objectFit: "cover",
                              filter:
                                "invert(38%) sepia(98%) saturate(7492%) hue-rotate(1deg) brightness(104%) contrast(105%)",
                              height: "auto",
                            }}
                            unoptimized
                          />
                        </figure>

                        <h3 className="wp-block-heading has-text-align-center has-primary-color has-text-color has-large-font-size">
                          {t("market_intelligence_title")}
                        </h3>

                        <div className="wp-block-group has-global-padding is-layout-constrained wp-block-group-is-layout-constrained"></div>
                      </div>

                      <p></p>

                      <p
                        className="has-text-align-center has-small-font-size"
                        style={{ marginTop: "12px" }}
                      >
                        {t("market_intelligence_desc")}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
                  <div
                    className="wp-block-cover is-light has-custom-content-position is-position-top-center has-foreground-color has-text-color has-link-color wp-elements-32ce6edb7e64030b5ed25ca5d42b1bf0"
                    style={{
                      borderRadius: "8px",
                      paddingTop: "var(--wp--preset--spacing--30)",
                      paddingRight: "var(--wp--preset--spacing--20)",
                      paddingBottom: "var(--wp--preset--spacing--30)",
                      paddingLeft: "var(--wp--preset--spacing--20)",
                      minHeight: "367px",
                      aspectRatio: "unset",
                    }}
                  >
                    <span
                      aria-hidden="true"
                      className="wp-block-cover__background has-background-background-color has-background-dim-100 has-background-dim"
                    ></span>
                    <div className="wp-block-cover__inner-container has-global-padding is-layout-constrained wp-container-core-cover-is-layout-5 wp-block-cover-is-layout-constrained">
                      <div className="wp-block-group is-nowrap is-layout-flex wp-container-core-group-is-layout-20 wp-block-group-is-layout-flex">
                        <div className="wp-block-group has-global-padding is-layout-constrained wp-block-group-is-layout-constrained">
                          <div className="wp-block-group is-nowrap is-layout-flex wp-container-core-group-is-layout-14 wp-block-group-is-layout-flex">
                            <figure className="wp-block-image size-large is-resized ext-aspect-landscape wp-duotone-df620e-ccc-4">
                              <Image
                                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDQ4IDQ4Ij48bWFzayBpZD0iYSIgd2lkdGg9IjQ4IiBoZWlnaHQ9IjQ4IiB4PSIwIiB5PSIwIiBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBzdHlsZT0ibWFzay10eXBlOmFscGhhIj48cGF0aCBmaWxsPSIjRDlEOUQ5IiBkPSJNMCAwaDQ4djQ4SDB6Ii8+PC9tYXNrPjxnIG1hc2s9InVybCgjYSkiPjxwYXRoIGZpbGw9IiMxQzFCMUYiIGQ9Ik0yNCA0NGMtMi44MzMgMC01LjQ2Ny0uNTA4LTcuOS0xLjUyNS0yLjQzMy0xLjAxNy00LjU1LTIuNDI1LTYuMzUtNC4yMjUtMS44LTEuOC0zLjIwOC0zLjkxNy00LjIyNS02LjM1QzQuNTA4IDI5LjQ2NyA0IDI2LjgzMyA0IDI0YzAtMi44LjUwOC01LjQxNyAxLjUyNS03Ljg1UzcuOTUgMTEuNiA5Ljc1IDkuOGMxLjgtMS44IDMuOTE3LTMuMjE3IDYuMzUtNC4yNVMyMS4xNjcgNCAyNCA0YzIuNSAwIDQuODMzLjQgNyAxLjIgMi4xNjcuOCA0LjExNyAxLjkgNS44NSAzLjNsLTIuMTUgMi4xNWExNi43MzIgMTYuNzMyIDAgMCAwLTQuOS0yLjdDMjggNy4zMTcgMjYuMDY3IDcgMjQgN2MtNC44MzMgMC04Ljg3NSAxLjYyNS0xMi4xMjUgNC44NzVTNyAxOS4xNjcgNyAyNHMxLjYyNSA4Ljg3NSA0Ljg3NSAxMi4xMjVTMTkuMTY3IDQxIDI0IDQxczguODc1LTEuNjI1IDEyLjEyNS00Ljg3NVM0MSAyOC44MzMgNDEgMjRjMC0xLS4wNzUtMS45NzUtLjIyNS0yLjkyNS0uMTUtLjk1LS4zNzUtMS44NzUtLjY3NS0yLjc3NWwyLjMtMi4zYTE5LjEyMiAxOS4xMjIgMCAwIDEgMS4yIDMuODVjLjI2NyAxLjMzMy40IDIuNzE3LjQgNC4xNSAwIDIuODMzLS41MTcgNS40NjctMS41NSA3LjktMS4wMzMgMi44MzMtMi40NSA0LjU1LTQuMjUgNi4zNS0xLjggMS44LTMuOTE3IDMuMjA4LTYuMzUgNC4yMjVDMjkuNDE3IDQzLjQ5MiAyNi44IDQ0IDI0IDQ0Wm0tMi45NS0xMC45LTguMjUtOC4zIDIuMjUtMi4yNSA2IDYgMjAuNy0yMC43IDIuMyAyLjI1LTIzIDIzWiIvPjwvZz48L3N2Zz4="
                                alt=""
                                width={57}
                                height={48}
                                style={{
                                  objectFit: "cover",
                                  filter:
                                    "invert(38%) sepia(98%) saturate(7492%) hue-rotate(1deg) brightness(104%) contrast(105%)",
                                  height: "auto",
                                }}
                                unoptimized
                              />
                            </figure>

                            <h3 className="wp-block-heading has-text-align-center has-primary-color has-text-color has-large-font-size">
                              {t("client_focused_title")}
                            </h3>
                          </div>
                        </div>

                        <div className="wp-block-group has-global-padding is-layout-constrained wp-block-group-is-layout-constrained">
                          <div className="wp-block-group has-global-padding is-layout-constrained wp-block-group-is-layout-constrained">
                            <div className="wp-block-group has-global-padding is-layout-constrained wp-block-group-is-layout-constrained">
                              <div className="wp-block-group has-global-padding is-layout-constrained wp-block-group-is-layout-constrained"></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <p
                        className="has-text-align-left has-small-font-size"
                        style={{ marginTop: "12px" }}
                      >
                        {t("client_focused_desc")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="wp-block-columns alignwide is-layout-flex wp-container-core-columns-is-layout-2 wp-block-columns-is-layout-flex">
                <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
                  <div
                    className="wp-block-cover is-light has-custom-content-position is-position-top-center has-foreground-color has-text-color has-link-color wp-elements-32ce6edb7e64030b5ed25ca5d42b1bf0"
                    style={{
                      borderRadius: "8px",
                      paddingTop: "var(--wp--preset--spacing--30)",
                      paddingRight: "var(--wp--preset--spacing--20)",
                      paddingBottom: "var(--wp--preset--spacing--30)",
                      paddingLeft: "var(--wp--preset--spacing--20)",
                      minHeight: "100%",
                      aspectRatio: "unset",
                    }}
                  >
                    <span
                      aria-hidden="true"
                      className="wp-block-cover__background has-background-background-color has-background-dim-100 has-background-dim"
                    ></span>
                    <div className="wp-block-cover__inner-container has-global-padding is-layout-constrained wp-container-core-cover-is-layout-5 wp-block-cover-is-layout-constrained">
                      <div className="wp-block-group is-nowrap is-layout-flex wp-container-core-group-is-layout-20 wp-block-group-is-layout-flex">
                        <div className="wp-block-group has-global-padding is-layout-constrained wp-block-group-is-layout-constrained">
                          <div className="wp-block-group is-nowrap is-layout-flex wp-container-core-group-is-layout-14 wp-block-group-is-layout-flex">
                            <figure className="wp-block-image size-large is-resized ext-aspect-landscape wp-duotone-df620e-ccc-4">
                              <Image
                                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDQ4IDQ4Ij48bWFzayBpZD0iYSIgd2lkdGg9IjQ4IiBoZWlnaHQ9IjQ4IiB4PSIwIiB5PSIwIiBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBzdHlsZT0ibWFzay10eXBlOmFscGhhIj48cGF0aCBmaWxsPSIjRDlEOUQ5IiBkPSJNMCAwaDQ4djQ4SDB6Ii8+PC9tYXNrPjxnIG1hc2s9InVybCgjYSkiPjxwYXRoIGZpbGw9IiMxQzFCMUYiIGQ9Ik0yNCA0NGMtMi44MzMgMC01LjQ2Ny0uNTA4LTcuOS0xLjUyNS0yLjQzMy0xLjAxNy00LjU1LTIuNDI1LTYuMzUtNC4yMjUtMS44LTEuOC0zLjIwOC0zLjkxNy00LjIyNS02LjM1QzQuNTA4IDI5LjQ2NyA0IDI2LjgzMyA0IDI0YzAtMi44LjUwOC01LjQxNyAxLjUyNS03Ljg1UzcuOTUgMTEuNiA5Ljc1IDkuOGMxLjgtMS44IDMuOTE3LTMuMjE3IDYuMzUtNC4yNVMyMS4xNjcgNCAyNCA0YzIuNSAwIDQuODMzLjQgNyAxLjIgMi4xNjcuOCA0LjExNyAxLjkgNS44NSAzLjNsLTIuMTUgMi4xNWExNi43MzIgMTYuNzMyIDAgMCAwLTQuOS0yLjdDMjggNy4zMTcgMjYuMDY3IDcgMjQgN2MtNC44MzMgMC04Ljg3NSAxLjYyNS0xMi4xMjUgNC44NzVTNyAxOS4xNjcgNyAyNHMxLjYyNSA4Ljg3NSA0Ljg3NSAxMi4xMjVTMTkuMTY3IDQxIDI0IDQxczguODc1LTEuNjI1IDEyLjEyNS00Ljg3NVM0MSAyOC44MzMgNDEgMjRjMC0xLS4wNzUtMS45NzUtLjIyNS0yLjkyNS0uMTUtLjk1LS4zNzUtMS44NzUtLjY3NS0yLjc3NWwyLjMtMi4zYTE5LjEyMiAxOS4xMjIgMCAwIDEgMS4yIDMuODVjLjI2NyAxLjMzMy40IDIuNzE3LjQgNC4xNSAwIDIuODMzLS41MTcgNS40NjctMS41NSA3LjktMS4wMzMgMi44MzMtMi40NSA0LjU1LTQuMjUgNi4zNS0xLjggMS44LTMuOTE3IDMuMjA4LTYuMzUgNC4yMjVDMjkuNDE3IDQzLjQ5MiAyNi44IDQ0IDI0IDQ0Wm0tMi45NS0xMC45LTguMjUtOC4zIDIuMjUtMi4yNSA2IDYgMjAuNy0yMC43IDIuMyAyLjI1LTIzIDIzWiIvPjwvZz48L3N2Zz4="
                                alt=""
                                width={57}
                                height={48}
                                style={{
                                  objectFit: "cover",
                                  filter:
                                    "invert(38%) sepia(98%) saturate(7492%) hue-rotate(1deg) brightness(104%) contrast(105%)",
                                  height: "auto",
                                }}
                                unoptimized
                              />
                            </figure>

                            <h3 className="wp-block-heading has-text-align-center has-primary-color has-text-color has-large-font-size">
                              {t("sustainability_title")}
                            </h3>
                          </div>
                        </div>

                        <div className="wp-block-group has-global-padding is-layout-constrained wp-block-group-is-layout-constrained">
                          <div className="wp-block-group has-global-padding is-layout-constrained wp-block-group-is-layout-constrained">
                            <div className="wp-block-group has-global-padding is-layout-constrained wp-block-group-is-layout-constrained">
                              <div className="wp-block-group has-global-padding is-layout-constrained wp-block-group-is-layout-constrained"></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <p
                        className="has-text-align-left has-small-font-size"
                        style={{ marginTop: "12px" }}
                      >
                        {t("sustainability_desc")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="wp-block-group alignfull has-tertiary-background-color has-background has-global-padding is-layout-constrained wp-container-core-group-is-layout-23 wp-block-group-is-layout-constrained"
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
              className="wp-block-group alignwide has-background-background-color has-background is-content-justification-space-between is-layout-flex wp-container-core-group-is-layout-22 wp-block-group-is-layout-flex"
              style={{
                paddingTop: "var(--wp--preset--spacing--50)",
                paddingRight: "var(--wp--preset--spacing--50)",
                paddingBottom: "var(--wp--preset--spacing--50)",
                paddingLeft: "var(--wp--preset--spacing--50)",
              }}
            >
              <div className="wp-block-group has-global-padding is-layout-constrained wp-block-group-is-layout-constrained">
                <h2 className="wp-block-heading has-large-font-size">
                  {t("explore_services")}
                </h2>

                <p style={{ marginTop: "16px" }}>
                  {t("explore_services_desc")}
                </p>
              </div>

              <div className="wp-block-buttons is-content-justification-left is-layout-flex wp-container-core-buttons-is-layout-1 wp-block-buttons-is-layout-flex">
                <div className="wp-block-button is-style-outline is-style-outline--523ac244bd2d9fe9516de58f9217abc3">
                  <Link
                    className="wp-block-button__link wp-element-button"
                    href="/servicios"
                  >
                    {t("learn_more")}
                  </Link>
                </div>

                <div className="wp-block-button">
                  <Link
                    className="wp-block-button__link has-background wp-element-button"
                    href="/servicios"
                    style={{ backgroundColor: "#000000" }}
                  >
                    {t("contact_now")}
                  </Link>
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
