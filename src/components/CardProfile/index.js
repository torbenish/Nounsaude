import { CardProfileStyle } from "./style";
import { useState } from "react";
import profile1 from "../../assets/img/profile1.jpg";
import profile2 from "../../assets/img/profile2.jpg";
import profile3 from "../../assets/img/profile3.jpg";

function CardProfile() {
  const [name, setName] = useState("Nome");
  const [job, setJob] = useState("Emprego");
  const [about, setAbout] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum amet repudiandae fuga delectus fugit labore debitis distinctio nulla exercitationem consequuntur. Libero, ipsam consequuntur natus sed dolorum illo aut hic tenetur?"
  );
  return (
    <CardProfileStyle>
        <div className="Card-Container">
      <div className="Card">
        <div className="upper-container">
          <div className="image-container">
            <img src={profile1} alt="" height="50px" width="50px" />
          </div>
        </div>
        <div className="lower-container">
          <h3> {name}</h3>
          <h4> {job}</h4>
          <p> {about} </p>
        </div>
      </div>
      <div className="Card">
        <div className="upper-container">
          <div className="image-container">
            <img src={profile2} alt="" height="=50px" width="50px" />
          </div>
        </div>
        <div className="lower-container">
          <h3> {name}</h3>
          <h4> {job}</h4>
          <p> {about} </p>
        </div>
      </div>
      <div className="Card">
        <div className="upper-container">
          <div className="image-container">
            <img src={profile3} alt="" height="50px" width="50px" />
          </div>
        </div>
        <div className="lower-container">
          <h3> {name}</h3>
          <h4> {job}</h4>
          <p> {about} </p>
        </div>
      </div>
      </div>
    </CardProfileStyle>
  );
}

export default CardProfile;
