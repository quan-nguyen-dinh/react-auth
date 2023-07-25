import React from "react";
import DowloadIcon from "../../components/icons/DowloadIcon";
import SavedIcon from "../../components/icons/SavedIcon";
import ProductSrc from "../../components/img/product.png";

export default function BookInfo() {
  return (
    <div className="container my-5 py-md-5 flex-sm-row-reverse">
      <div className="row">
      <div className="col-lg-4 col-md-5 d-flex align-items-center order-md-1 mb-4">
          <div className="w-100">
            <img className="w-100" src={ProductSrc} alt="" />
          </div>
        </div>
        <div className="col-lg-8 col-md-7 order-md-0">
          <div className="w-lg-75">
            <h4>How The Stell Was Tempered</h4>
            <h5 className="my-4">Author: Nikolai Ostrovsky</h5>
            <p>Pages: 780</p>
            <p className="fst-italic">Released: 1934 </p>
            <p>
              Ut sodales, ex sit amet consectetur accumsan, nibh ex sollicitudin
              metus, volutpat lacinia arcu nibh vel ante. Proin dapibus dui eget
              justo tincidunt eleifend. Mauris porta elementum est. Nullam
              euismod quis libero sed convallis. Vestibulum fringilla felis nec
              turpis aliquam auctor a a lectus. Etiam porttitor at eros vitae
              posuere. Suspendisse nec mollis dolor, vel cursus leo. Integer
              vitae sem vitae leo pretium porta. In consequat magna purus,
              iaculis rhoncus velit imperdiet sit amet.
            </p>
            <div className="mt-5">
              <button className="btn btn-dowload rounded-5 px-sm-5  px-4 py-2 me-lg-5 me-3">
                <DowloadIcon classNames="me-2" /> Download
              </button>
              <button className="btn btn-outline-only rounded-5 py-2 px-sm-5 px-4 ">
                <SavedIcon classNames="me-2" /> Saved
              </button>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
