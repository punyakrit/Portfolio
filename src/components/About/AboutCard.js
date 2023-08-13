import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Punyakrit Singh Makhni </span>
            from <span className="purple"> Amritsar, India.</span>
            <br /> I am a final year student pursuing B.Tech
            in Computer Science and Engineering at Lovely Professional University.
            

            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "
"Code your dreams into reality; let innovation be your guide.""{" "}
          </p>
          <footer className="blockquote-footer">Chat GPT</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
