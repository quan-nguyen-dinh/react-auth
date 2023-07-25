import { React } from "react";
import LeftIcon from "../icons/LeftIcon";

export default function SlidePrevButton({clx}) {
  return (
    <button className={clx} >
      <LeftIcon />
    </button>
  );
}
