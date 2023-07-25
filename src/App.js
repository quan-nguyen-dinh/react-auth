import React, { useEffect, useMemo, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./components/main";
import { auth, onMessageListener } from "./firebase";
import { firebaseConfig } from "./constant";
import About from "./page/about";
import Account from "./page/account";
import BookInfo from "./page/book-info";
import Categories from "./page/categories";
import Contact from "./page/contact";
import ForgotPassword from "./page/fortgot-password";
import Home from "./page/home";
import Login from "./page/login";
import NewPassword from "./page/new-password";
import RecoveryCode from "./page/recovery-code";
import SignUp from "./page/sign-up";
import Success from "./page/success";
import PrivateRouter from "./routes/PrivateRouter";
import { Modal, notification } from "antd";
import {useAuthState} from 'react-firebase-hooks/auth';
import {useCollectionData} from 'react-firebase-hooks/firestore';

const Context = React.createContext({ name: 'Default' });

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [notify, setNotify] = useState();
  const [api, contextHolder] = notification.useNotification();

  const openNotification = (placement, notify) => {
    api.info({
      message: notify.title,
      description: notify.body,
      placement,
    });
  };


  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [user] = useAuthState(auth);
  console.log('user : ', user)
  if ("serviceWorker" in navigator) {
    const firebaseConfigParams = new URLSearchParams(firebaseConfig).toString();
    navigator.serviceWorker
      .register(`../firebase-messaging-sw.js?${firebaseConfigParams}`)
      .then(function (registration) {
        console.log("Registration successful, scope is:", registration.scope);
      })
      .catch(function (err) {
        console.log("Service worker registration failed, error:", err);
      });
  }
  useEffect(() => {
    onMessageListener().then((data) => {
      showModal();
      setNotify(data.notification);
      openNotification("topRight", data.notification);
    });
  });
  return (
    <div className="App">
   {contextHolder}
      {/* <Modal title={notify} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal> */}
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route path="account" element={<Account />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="categories" element={<Categories />} />
          <Route path="categories/:id" element={<BookInfo />} />
          <Route path="book-info" element={<BookInfo />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/recovery-code" element={<RecoveryCode />} />
        <Route path="/new-password" element={<NewPassword />} />
        <Route path="/success" element={<Success />} />
        <Route path="/signup" element={<SignUp />} />

        <Route element={<PrivateRouter isAuth={user} />}>
          <Route path="/profile" element={<Account />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
