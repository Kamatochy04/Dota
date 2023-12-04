import "./entrance.scss";
import qr from "./QR.png";

const Entrance = () => {
  return (
    <>
      <div className="entrance">
        <h2 className="entrance__title">Войти</h2>

        <form action="" className="entrance__form">
          <div className="entrance__container">
            <p className="entrance__txt">войти, используя имя аккаунта</p>
            <input type="text" className="entrance__input" />
            <p className="entrance__txt">войти, используя имя аккаунта</p>
            <input type="password" className="entrance__input" />
            <div className="entrance__flex">
              <input type="checkbox" className="entrance__box" />
              <p className="entrance__txt-check">Запомнить меня</p>
            </div>
            <button className="entrance__button">Войти</button>
          </div>
          <div className="entrance__img">
            <div className="entrance__img-title">Или при помощи QR-кода</div>
            <img src={qr} alt="qr-code" />
          </div>
        </form>
      </div>
    </>
  );
};

export default Entrance;
