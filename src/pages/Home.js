import React from "react";
import Watsappimage from "../images/watsapp.jpg";
import style from "./Home.module.css";
import Card from "../components/Card";

export default function home() {
  return (
    <div>
      <Card />
      <section>
        <div className={style.constructionStages}>
          <div className="container text-center">
            <h2>Construction Stages</h2>
            <p>
              Knowing every step of construction is important to make informed
              decisions. Below are all the stages of homebuilding with detailed
              benefits, product usage tips and a lot more. All you have to do is
              pick your desired stage and explore!
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div>
            <div>
              <div>
                <ul>
                  <li>Site Clearing</li>
                  <li>Foundation</li>
                  <li>Plinth Beam Or Slab</li>
                  <li>Superstructure</li>
                  <li>Brick Masonry Work</li>
                  <li>The Lintel</li>
                  <li>Roofing Coating</li>
                  <li>Electrical and Plumbing</li>
                  <li>Exterior and Interior Finishing</li>
                  <li>Flooring</li>
                  <li>Painting</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className={style.watsapp}>
        <img width="50px" src={Watsappimage} alt="" />
      </div>
    </div>
  );
}
