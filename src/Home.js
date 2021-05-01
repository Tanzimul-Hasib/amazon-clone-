import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="1"
            title="Find your ideal TV            "
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_TV_2X._SY304_CB432517900_.jpg"
            rating={5}
          />
          <Product
            id="2"
            title="LG OLED55CXPUA Alexa Built-In CX 55"
            price={13}
            image="https://m.media-amazon.com/images/I/A1LDFBeKebL._AC_UL320_.jpg"
            rating={5}
          />
          <Product
            id="2"
            title="LG OLED55CXPUA Alexa Built-In CX 55"
            price={13}
            image="https://m.media-amazon.com/images/I/A1LDFBeKebL._AC_UL320_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="3"
            title="Computers & Accessories"
            price={13}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg"
            rating={5}
          />
          <Product
            id="2"
            title="LG OLED55CXPUA Alexa Built-In CX 55"
            price={13}
            image="https://m.media-amazon.com/images/I/A1LDFBeKebL._AC_UL320_.jpg"
            rating={5}
          />
          <Product
            id="2"
            title="LG OLED55CXPUA Alexa Built-In CX 55"
            price={13}
            image="https://m.media-amazon.com/images/I/A1LDFBeKebL._AC_UL320_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="2"
            title="LG OLED55CXPUA Alexa Built-In CX 55"
            price={13}
            image="https://m.media-amazon.com/images/I/A1LDFBeKebL._AC_UL320_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
