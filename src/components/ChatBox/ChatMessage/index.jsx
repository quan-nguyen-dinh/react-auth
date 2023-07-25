import React from "react";
import { auth } from "../../../firebase";

export default function ChatMessage({ text, uid, photoURL, displayName }) {
  console.log("photo : ", photoURL);
  console.log("uid : ", uid, "currentUser : ", auth.currentUser.uid);
  const messageClass =
    uid === auth.currentUser.uid
      ? "justify-content-end"
      : "justify-content-start";
  return (
    <div className={`d-flex flex-row ${messageClass} mb-4 me-2`}>
      <img
        src={
          photoURL || "https://api.adorable.io/avatars/23/abott@adorable.png"
        }
        alt="avatar 1"
        style={{ borderRadius: "100%", width: "45px", height: "100%" }}
      />
      <div>
        <span className="ms-3">{displayName}</span>
        <div
          className="p-2 ms-3"
          style={{
            borderRadius: "15px",
            backgroundColor: "rgba(57, 192, 237,.2)",
          }}
        >
          <p className="small mb-0">{text}</p>
        </div>
      </div>
    </div>
  );
}
