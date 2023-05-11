import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from './Animation.module.scss'

interface EnterData {
  login:string,
  password:string,
  header:string
}

const Authorisation = () => {
  const navigate = useNavigate();

  const [enterData,setEnterData] = useState<EnterData>({
    header:'Авторизация',
    password:'',
    login:''
  })

  const buttonRef = useRef<HTMLButtonElement>(null);

  const keyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === "Enter") {
      buttonRef.current?.click();
    }
  };

  const clickHandle = async () => {
    navigate('/menu')
  };

  return (
      <div className="md:h-2/3 md:w-1/2 w-full h-full min-h-[400px] min-w-[325px] flex justify-center items-center flex-col rounded-2xl bg-h1 relative  transition-all">
        <div className="absolute top-0 right-0">
        </div>
        <p className="text-3xl m-10 text-h2 transition-all font-rubic_light text-center">{enterData.header}</p>
        <input
          onKeyDown={keyDownHandler}
          type="text"
          className={styles.input }
          placeholder="Email или номер телефона..."
          value={enterData.login}
          onChange={(e) => {
            setEnterData((prev)=>({...prev,login:e.target.value}));
          }}
        ></input>
        <div className={styles.div}></div>
        <input
          onKeyDown={keyDownHandler}
          type="password"
          className={styles.input }
          placeholder="Пароль..."
          value={enterData.password}
          onChange={(e) => {
            setEnterData((prev)=>({...prev,password:e.target.value}));
          }}
        ></input>
        <div className={styles.div }></div>
        <button
          className={styles.create_button }
          onClick={() => navigate("/create")}
        >
          Или создайте новый аккаунт
        </button>
        <button
          ref={buttonRef}
          className={styles.enter_button + ' m-5 '}
          onClick={() => clickHandle()}
        >
          Вход
        </button>
      </div>
  );
};

export default Authorisation;
