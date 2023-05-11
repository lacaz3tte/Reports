import React, { useState, useRef } from "react";
import BackButton from "../components/buttons/backButton";
import styles from './Animation.module.scss'

const CreateAccount = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [header, setHeader] = useState("Создание аккаунта");
  const buttonRef = useRef<HTMLButtonElement>(null);

  const keyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === "Enter") {
      buttonRef.current?.click();
    }
  };

  const clickHandle = async () => {
    
  };

  return (
    <div className="md:h-2/3 md:w-1/2 w-full h-full min-h-[400px] min-w-[325px] bg-h1 relative rounded-2xl transition-all flex flex-col justify-center items-center">
      <div className="absolute top-0 right-0 left-0 flex justify-between z-10">
        <BackButton />
      </div>
      <p className="text-3xl m-10 text-h2 transition-all font-rubic_light">{header}</p>
      <input
        autoFocus
        onKeyDown={keyDownHandler}
        type="text"
        className={styles.input }
        placeholder="Email или номер телефона..."
        value={login}
        onChange={(e) => {
          setLogin(e.target.value);
        }}
      ></input>
      <div className={styles.div}></div>
      <input
        onKeyDown={keyDownHandler}
        type="password"
        className={styles.input }
        placeholder="Пароль..."
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      ></input>
      <div className={styles.div }></div>
      <button
        ref={buttonRef}
        className={styles.enter_button + ' mt-[68px] m-5'}
        onClick={() => clickHandle()}
      >
        Создать
      </button>
    </div>
  );
};

export default CreateAccount;
