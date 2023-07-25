import React, { useState } from "react";
import BgHomeSrc from "../../components/img/BgHome.png";
import RateIcon from "../../components/icons/RateIcon";
import DowloadIcon from "../../components/icons/DowloadIcon";
import SavedIcon from "../../components/icons/SavedIcon";
import FeatureSrc from "../../components/img/feature.png";
import ProductSrc from "../../components/img/product.png";
import ReviewerSrc from "../../components/img/Reviewer.png";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./style.css";
import SlideNextButton from "../../components/swiper/rightBtn";
import SlidePrevButton from "../../components/swiper/leftBtn";
import { Carousel } from "@trendyol-js/react-carousel";
import ChatBox from "../../components/ChatBox";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";

const bookPopular = [
  {
    src: ProductSrc,
    title: "The House of the Dead",
    author: "Dostoyevsky",
    rate: 5,
  },
  {
    src: ProductSrc,
    title: "Norwegian Wood",
    author: "Murakami Haruki",
    rate: 5,
  },
  {
    src: ProductSrc,
    title: "The House of the Dead",
    author: "Dostoyevsky",
    rate: 5,
  },
  {
    src: ProductSrc,
    title: "The House of the Dead",
    author: "Dostoyevsky",
    rate: 5,
  },
  {
    src: ProductSrc,
    title: "The House of the Dead",
    author: "Dostoyevsky",
    rate: 5,
  },
  {
    src: ProductSrc,
    title: "The House of the Dead",
    author: "Dostoyevsky",
    rate: 5,
  },
  {
    src: ProductSrc,
    title: "The House of the Dead",
    author: "Dostoyevsky",
    rate: 5,
  },
  {
    src: ProductSrc,
    title: "The House of the Dead",
    author: "Dostoyevsky",
    rate: 5,
  },
  {
    src: ProductSrc,
    title: "The House of the Dead",
    author: "Dostoyevsky",
    rate: 5,
  },
  {
    src: ProductSrc,
    title: "The House of the Dead",
    author: "Dostoyevsky",
    rate: 5,
  },
  {
    src: ProductSrc,
    title: "The House of the Dead",
    author: "Dostoyevsky",
    rate: 5,
  },
];
const reviewList = [
  {
    src: ReviewerSrc,
    name: "Kydarov Basayev",
    address: "Belarus",
    content:
      "This website is really cool. I wish i found this web sooner, i can download  ebook easily for my study.",
  },
  {
    src: ReviewerSrc,
    name: "Kydarov Basayev",
    address: "Belarus",
    content:
      "This website is really cool. I wish i found this web sooner, i can download  ebook easily for my study.",
  },
  {
    src: ReviewerSrc,
    name: "Kydarov Basayev",
    address: "Belarus",
    content:
      "This website is really cool. I wish i found this web sooner, i can download  ebook easily for my study.",
  },
  {
    src: ReviewerSrc,
    name: "Kydarov Basayev",
    address: "Belarus",
    content:
      "This website is really cool. I wish i found this web sooner, i can download  ebook easily for my study.",
  },
];

export default function Home() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [user] = useAuthState(auth);
  console.log('user : ', user);
  return (
    <div className="container-home">
      <div className="container-fluid mb-4 bg-home zindex-fixed">
        <div className="container h-100">
          <div className="row h-100">
            <div className="col-6 col-md-5 d-flex align-items-center">
              <div>
                <h5 className="fs-em-para">Welcome to the CATALOG</h5>
                <h1 className="fs-md-title fs-em-title text-uppercase my-3 my-md-4 font-custom fw-bolder pe-xl-5 pe-lg-3">
                  Your books from the best authors
                </h1>
                <p className="fw-normal">
                  We believe reading is interesting that make a healthy culture,
                  where you can find the peace inside.{" "}
                </p>
                <button className="mt-3 rounded-5 btn btn-outline-secondary-custom">
                  Discover
                </button>
              </div>
            </div>
            <div className="col-6 col-md-7 d-flex align-items-center justify-content-end py-md-4">
              <div className="img text-end">
                <img className="w-75 w-sm-100" src={BgHomeSrc} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="row"></div>
      </div>
      <div className="container my-5 pt-5">
        <div className="row">
          <div className="col-12 col-sm-5">
            <img className="w-100" src={FeatureSrc} alt="" />
          </div>
          <div className="col-12 col-sm-7 d-flex align-items-center">
            <div>
              <h2 className="fs-md-title mt-4 mt-sm-0 mb-lg-5 mb-4 fw-bolder text-uppercase">
                The most dowload of the year
              </h2>
              <h5 className="fw-bold mb-3">Anna Karenina </h5>
              <span>Leo Tolstoy</span>
              <div className="mb-4 mt-3">
                <span className="me-2">
                  <RateIcon />
                </span>
                <span className="me-2">
                  <RateIcon />
                </span>
                <span className="me-2">
                  <RateIcon />
                </span>
                <span className="me-2">
                  <RateIcon />
                </span>
                <span className="me-2">
                  <RateIcon />
                </span>
              </div>
              <p>1.550.222 Downloads</p>
              <div className="mt-lg-5 mt-4">
                <button className="btn btn-dowload rounded-5 px-md-5 px-4 py-2 me-3">
                  <DowloadIcon classNames="me-2" /> Download
                </button>
                <button className="btn btn-outline-only rounded-5 py-2 px-md-5 px-4">
                  <SavedIcon classNames="me-2" /> Saved
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="container-swiper">
          <h4 className="my-5">Most Popular Book</h4>
          <Carousel
            className="py-sm-3"
            show={4}
            slide={1}
            swiping={true}
            rightArrow={
              <SlideNextButton clx="btn btn-right btn-position-home d-none d-sm-block" />
            }
            leftArrow={
              <SlidePrevButton clx="btn btn-left btn-position-home d-none d-sm-block " />
            }
          >
            {bookPopular.map((item, index) => (
              <div className="card border-0 bg-primary-custom me-4" key={index}>
                <div className="img">
                  <img className="w-100" src={item.src} alt="" />
                </div>
                <div className="content">
                  <h5 className="mt-1 fw-bolder">{item.title}</h5>
                  <p className="mt-3 sub-title">{item.author}</p>
                  <div className="mb-4 mt-3">
                    <span className="me-2">
                      <RateIcon />
                    </span>
                    <span className="me-2">
                      <RateIcon />
                    </span>
                    <span className="me-2">
                      <RateIcon />
                    </span>
                    <span className="me-2">
                      <RateIcon />
                    </span>
                    <span className="me-2">
                      <RateIcon />
                    </span>
                  </div>
                  <div className="pb-3 text-center">
                    <button className="w-100 btn btn-dowload rounded-5">
                      {" "}
                      <DowloadIcon classNames="me-sm-2" /> Download
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
      <div className="container my-5">
        <h4 className="my-5">Recommend</h4>
        <div className="container-swiper">
          <Carousel
            // className="py-sm-3"
            show={4}
            slide={1}
            swiping={true}
            rightArrow={
              <SlideNextButton clx="btn btn-right btn-position-home d-none d-sm-block" />
            }
            leftArrow={
              <SlidePrevButton clx="btn btn-left btn-position-home d-none d-sm-block" />
            }
          >
            {bookPopular.map((item, index) => (
              <div className="card border-0 bg-primary-custom me-4" key={index}>
                <div className="img">
                  <img className="w-100" src={item.src} alt="" />
                </div>
                <div className="content">
                  <h5 className="mt-1 fw-bolder">{item.title}</h5>
                  <p className="mt-3 sub-title">{item.author}</p>
                  <div className="mb-4 mt-3">
                    <span className="me-2">
                      <RateIcon />
                    </span>
                    <span className="me-2">
                      <RateIcon />
                    </span>
                    <span className="me-2">
                      <RateIcon />
                    </span>
                    <span className="me-2">
                      <RateIcon />
                    </span>
                    <span className="me-2">
                      <RateIcon />
                    </span>
                  </div>
                  <div className="pb-3 text-center">
                    <button className=" w-100 btn btn-dowload rounded-5">
                      {" "}
                      <DowloadIcon classNames="me-sm-2" /> Download
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
      <div className="container my-5 pb-sm-5 pb-0">
        <h4 className="my-5">What Users Say?</h4>
        <div className="row">
          {reviewList.map((item, index) => (
            <div key={index} className="col-lg-3 col-sm-6 mt-4 mt-lg-0">
              <div className="review">
                <div className="row">
                  <div className="col-4">
                    <div className="img">
                      <img src={item.src} alt="" className="w-100" />
                    </div>
                  </div>
                  <div className="col-8">
                    <h5>{item.name}</h5>
                    <p>{item.address}</p>
                  </div>
                </div>
                <p className="mt-xl-4 mt-3 mb-0">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {
        !!user &&  (isModalVisible ? (
          <ChatBox setIsModalVisible={setIsModalVisible} />
        ) : (
          <div
            onClick={() => setIsModalVisible(true)}
            className="message-box mb-3 me-3 rounded-circle  p-3  "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-chat-dots"
              viewBox="0 0 16 16"
            >
              <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
              <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z" />
            </svg>
          </div>
        )) 
      }
    </div>
  );
}
