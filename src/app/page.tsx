import { Fragment } from "react";
import HomeMain from "@/components/home/HomeMain";
import HomeGallery from "@/components/home/HomeGallery";

export default function Home() {
  return (
      <Fragment>
        <HomeMain/>
        <HomeGallery extraPadding={false}/>
      </Fragment>
  );
}
