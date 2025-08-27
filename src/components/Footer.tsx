import React from "react";
import { Link } from "@/src/i18n/routing";
import { useTranslations } from "next-intl";

const Footer: React.FC = () => {
  const t = useTranslations("footer");

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
          <p className="has-text-align-center max-lg:!w-[500px]">
            {t("copyright")}
          </p>

          <div
            style={{ height: "100px", width: "403px" }}
            aria-hidden="true"
            className="wp-block-spacer wp-container-content-1"
          ></div>

          <p className="!text-wrap">
            {/* <Link
              href="https://arizonagestionenergy.com/sample-page/"
              target="_blank"
              rel="noopener noreferrer"
              data-type="link"
              data-id="https://arizonagestionenergy.com/sample-page/"
            >
              {t("legal_notice")}
            </Link>{" "}
            {" | "}{" "} */}
            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              data-type="link"
              data-id="#"
            >
              {t("privacy_policy")}
            </Link>{" "}
            {" | "}{" "}
            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("cookies_policy")}
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
