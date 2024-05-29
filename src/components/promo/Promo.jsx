import React from "react";
import "./promo.css";
import animateLogo from "../../assets/img/logo-1.png";

const Promo = () => {
  return (
    <section className="promo d-flex justify-content-around align-items-center">
      <div className="profiter">
        <h1>
          Profitez <span>20%*</span>
        </h1>

        <p>*lors du mois d'ouverture</p>
      </div>
      <img
        src={animateLogo}
        alt=""
        width={"65rem"}
        height={"75rem"}
        className="animated-logo"
      />
      <div className="sponsoring">
        <h1>
          Sponsoring <span className="highlight">GRATUIT</span>
        </h1>
        <p>lors de votre innscription au service Community Manager</p>
      </div>
    </section>
  );
};

export default Promo;
