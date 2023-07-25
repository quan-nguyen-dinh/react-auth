import React, { useRef, useState } from "react";
import "./style.css";
import { auth, firestore } from "../../firebase";
import {
  useCollection,
  useCollectionData,
} from "react-firebase-hooks/firestore";
import ChatMessage from "./ChatMessage";
import firebase from "firebase";

export default function ChatBox({ setIsModalVisible }) {
  const dummy = useRef();
  const [value, setValue] = useState("");
  const messageRef = firestore.collection("messages");
  const query = messageRef.orderBy("createdAt").limit(25);
  const [messages] = useCollectionData(query, {
    idField: "id",
  });
  console.log("message : ", messages);
  const { uid, photoURL, displayName } = auth.currentUser;
  const handleSendMessage = async () => {
    await messageRef.add({
      text: value,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
      displayName,
    });
    setValue("");
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };
  console.log("current user : ", auth.currentUser);
  return (
    <div
      className="position-fixed end-0 bottom-0 me-4 mb-4 chatbox"
      style={{ width: "400px" }}
    >
      <div className="card" id="chat1" style={{ borderRadius: "15px" }}>
        <div
          className="card-header d-flex justify-content-between align-items-center p-3 bg-info text-white border-bottom-0"
          style={{
            borderTopLeftRadius: "15px",
            borderTopRightRadius: "15px",
          }}
        >
          <i className="fas fa-angle-left" />
          <p className="mb-0 fw-bold">Live chat</p>
          <i className="fas fa-times" />
          <svg
            onClick={() => setIsModalVisible(false)}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-x-lg"
            viewBox="0 0 16 16"
          >
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
          </svg>
        </div>
        <div className="card-body">
          <div className="message-list mb-4">
            {messages &&
              messages.map((item) => (
                <ChatMessage
                  text={item.text}
                  uid={item.uid}
                  key={item.id}
                  displayName={item.displayName}
                  photoURL={item.photoURL}
                />
              ))}
            <span ref={dummy}></span>
          </div>

          <div className="form-outline d-flex align-items-center">
            <input
              className="form-control"
              id="textAreaExample"
              rows={4}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Type to message"
            />

            <button className="btn" onClick={handleSendMessage}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-send-fill"
                viewBox="0 0 16 16"
              >
                <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
