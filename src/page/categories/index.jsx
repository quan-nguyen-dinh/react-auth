import React from "react";
import SearchIcon from "../../components/icons/SearchIcon";
import FilterIcon from "../../components/icons/FilterIcon";
import "./style.css";
import ProductSrc from "../../components/img/product.png";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SlidePrevButton from "../../components/swiper/leftBtn";
import RateIcon from "../../components/icons/RateIcon";
import DowloadIcon from "../../components/icons/DowloadIcon";
import SlideNextButton from "../../components/swiper/rightBtn";
import { Navigation } from "swiper";
import { Carousel } from "@trendyol-js/react-carousel";

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
  {
    src: ProductSrc,
    title: "The House of the Dead",
    author: "Dostoyevsky",
    rate: 5,
  },
];
const categoriesData = [
  {
    id: 1,
    name: "Novel",
  },
  {
    id: 2,
    name: "Entertainment",
  },
  {
    id: 3,
    name: "Art",
  },
  {
    id: 4,
    name: "Horror",
  },
  {
    id: 5,
    name: "Techonlogy",
  },
  {
    id: 6,
    name: "Business",
  },
  {
    id: 7,
    name: "Funny",
  },
  {
    id: 8,
    name: "Manga",
  },
  {
    id: 9,
    name: "Romance",
  },
  {
    id: 10,
    name: "K-Drama",
  },
  {
    id: 11,
    name: "K-Drama",
  },
  {
    id: 12,
    name: "K-Drama",
  },
  {
    id: 13,
    name: "K-Drama",
  },
];

export default function Categories() {
  const swiper = useSwiper();
  // const swiper = React.useRef(useSwiper());
  const [bodyWidth, setBodyWidth] = React.useState();
  React.useEffect(() => {
    if (window.innerWidth) setBodyWidth(window.innerWidth);
  }, []);
  const handleSpaceBetween = () => {
    if (bodyWidth < 700) {
      return 0;
    }
    if (bodyWidth < 1100) {
      return 20;
    }
    return 50;
  };
  const handleSlidesPreView = () => {
    if (bodyWidth < 992) {
      return ;
    } else if (bodyWidth < 1100) {
      return 2;
    }
    return 10;
  };
  return (
    <div className="my-5">
      <div className="container my-5">
        <div className="row align-items-center">
          <div className="col-12 col-sm-3">
            <h3 className="text-decoration-underline fw-bolder fst-italic">
              Categories
            </h3>
          </div>
          <div className="col-12 col-sm-9 mt-4 mt-sm-0">
            <div className="row">
              <div className="col-10">
                <div className="input-group">
                  <span className="input-group-text bg-none">
                    <SearchIcon />
                  </span>
                  <input
                    type="text"
                    className="form-control "
                    placeholder="book,authors,..."
                  />
                </div>
              </div>
              <div className="col-2 justify-content-end d-flex align-items-center">
                <FilterIcon classNames="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-5 px-xl-2 px-lg-5 px-md-4 px-sm-5">
        <Carousel
          show={10}
          slide={1}
          swiping={true}
          leftArrow={<SlidePrevButton clx="btn btn-left btn-position" />}
          rightArrow={<SlideNextButton clx="btn btn-right btn-position" />}
        >
          {categoriesData.map((item) => (
            <p className="fw-bolder m-0 ">{item.name}</p>
          ))}
        </Carousel>
      </div>
      <div className="container my-5">
        <div className="row">
          {bookPopular.map((item) => (
            <div className=" col-lg-3 col-md-4 col-sm-6 mb-xl-5 pb-4 pe-xl-5">
              <div className="card border-0 bg-primary-custom">
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
                  <div className="text-center">
                    <button className="w-100 btn btn-dowload rounded-5">
                      {" "}
                      <DowloadIcon classNames="me-2" /> Download
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
