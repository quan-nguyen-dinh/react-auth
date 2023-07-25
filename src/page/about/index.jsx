import React from "react";
import "./style.css";
import Bg1Src from "../../components/img/about/bg1.png";
import Bg2Src from "../../components/img/about/bg2.png";
import FreeDownloadSrc from "../../components/img/about/FreeDownload.png";
import MassiveLibrarySrc from "../../components/img/about/MassiveLibrary.png";
import AllCopyrightsSrc from "../../components/img/about/AllCopyrights.png";
import SuggessSrc from "../../components/img/about/suggest.png";
import AmazonSrc from "../../components/img/about/amazon.png";
import KasperskySrc from "../../components/img/about/kaspersky.png";
import SonnySrc from "../../components/img/about/sony.png";
import OracleSrc from "../../components/img/about/oracle.png";
import XiaomiSrc from "../../components/img/about/xiaomi.png";

export default function About() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-6 order-1 order-sm-0 d-flex align-items-center">
          <div className="mx-auto w-50 w-lg-75 mt-4 mt-xl-0">
            <h3 className="mb-4 text-uppercase">Who are we?</h3>
            <p>
              We are a non-profit organization, this is a website to download
              free ebook for everyone and all book are copyright. We proud of
              many people trust to use our website for many purposes for
              research, study, entertainment, teaching,... around the world.{" "}
            </p>
          </div>
        </div>
        <div className="col-sm-6 order-0 order-sm-1 bg-reactangle d-flex aligns-item-center justify-content-center py-lg-5 py-md-4">
          <div className="w-50 w-sm-100 p-4 p-lg-0">
            <img className="w-100" src={Bg1Src} alt="" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 bg-reactangle d-flex aligns-item-center justify-content-center py-lg-5 py-md-4">
          <div className="w-50 w-sm-100 p-4 p-lg-0">
            <img className="w-100" src={Bg2Src} alt="" />
          </div>
        </div>
        <div className="col-sm-6 d-flex align-items-center">
          <div className="mx-auto w-50 w-lg-75 mt-4 mt-xl-0">
            <h3 className="mb-4 text-uppercase">What's the benefit</h3>
            <p>
              Pellentesque suscipit fringilla libero eu ullamcorper. Cras risus
              eros, faucibus sit amet augue id, tempus pellentesque eros. In
              imperdiet tristique tincidunt. Integer lobortis lorem lorem, id
              accumsan arcu tempor id. Suspendisse vitae accumsan massa. Duis
              porttitor, mauris et faucibus sollicitudin, tellus sem tristique
              risus, nec gravida velit diam aliquet enim. Curabitur eleifend
              ligula quis convallis interdum. Sed vitae condimentum urna, nec
              suscipit purus.
            </p>
          </div>
        </div>
      </div>
      <div className="container  py-5">
        <h5 className="text-uppercase fw-bolder text-center">Our services</h5>
        <div className="row  mt-3 g-5">
          <div className="col-12 col-md-6 mb-4">
            <div
              className="img w-100 text-center box-shadow rounded-4 py-5"
              box-shadow
            >
              <img className="w-100" src={FreeDownloadSrc} alt="" />
            </div>
            <h5 className="mt-4 fw-bolder ">Free Download</h5>
            <p>You can free download any ebook from this website </p>
          </div>
          {/* <div className="col-2"></div> */}
          <div className="col-12 col-md-6 mb-4">
            <div className="img w-100 text-center box-shadow rounded-4 py-5">
              <img className="w-100" src={MassiveLibrarySrc} alt="" />
            </div>
            <h5 className="mt-4 fw-bolder">Massive Library</h5>
            <p>Over 10,000 books with many categories.</p>
          </div>
        </div>
        <div className="row  g-5 ">
          <div className="col-12 col-md-6 mb-4 ">
            <div className="img  w-100 text-center box-shadow rounded-4 py-5">
              <img className="w-100" src={AllCopyrightsSrc} alt="" />
            </div>
            <h5 className="mt-4 fw-bolder">All Copyrights</h5>
            <p>These books are copyrights and not fake books. </p>
          </div>
          {/* <div className="col-2"></div> */}
          <div className="col-12 col-md-6  mb-4">
            <div className="img w-100 text-center box-shadow rounded-4 py-5">
              <img className="w-100" src={SuggessSrc} alt="" />
            </div>
            <h5 className="mt-4 fw-bolder">Suggest</h5>
            <p>Website suggests your favorite categories.</p>
          </div>
        </div>
      </div>
      <div className="container  mb-4 my-lg-5">
        <h5 className="text-uppercase fw-bolder text-center">Donors</h5>
        <div className="mt-4 mt-lg-5  d-flex align-items-center justify-content-between">
          <div className="about-item">
            <img src={AmazonSrc} className="w-100" alt="" />
          </div>
          <div className="about-item">
            <img src={KasperskySrc} className="w-100" alt="" />
          </div>
          <div className="about-item">
            <img src={XiaomiSrc} className="w-100" alt="" />
          </div>
          <div className="about-item">
            <img src={OracleSrc} className="w-100" alt="" />
          </div>
          <div className="about-item">
            <img src={SonnySrc} className="w-100" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
