/* eslint-disable @next/next/no-img-element */
import "./styles/BackBtn.css";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "usehooks-ts";

function BackBtn(props: {
  destination: string;
  title: string;
  desktopRoute: string[];
}) {
  const mobile = useMediaQuery("(max-width: 480px)");
  const router = useRouter();
  const { t } = useTranslation();

  const handleBackBtn = () => {
    router.push(props.destination);
  };

  if (mobile) {
    return (
      <div className="back-btn-container" onClick={handleBackBtn}>
        <img src="/img/icons/arrowBack_mobile.svg" alt="" />
        <span>{t(props.title)}</span>
      </div>
    );
  } else {
    return (
      <div className="back-btn-container">
        {props.desktopRoute?.map((path: string, index: number) =>
          index + 1 === props.desktopRoute.length ? (
            <span
              key={index}
              className="back-btn-route-span back-btn-route-active"
            >
              {" "}
              {t(path)}{" "}
            </span>
          ) : (
            <div key={index} style={{ display: "flex", alignItems: "center" }}>
              <span
                className="back-btn-route-span"
                onClick={() =>
                  path !== "projects"
                    ? router.push(`/projects/${path}`)
                    : router.push(`/${path}`)
                }
              >
                {" "}
                {t(path)}{" "}
              </span>
              <img
                src={"/img/icons/arrowBack.svg"}
                alt=""
                style={{ paddingInline: 25, height: 15, marginTop: 2.5 }}
              />
            </div>
          )
        )}
      </div>
    );
  }
}

export default BackBtn;
