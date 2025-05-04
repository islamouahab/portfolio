import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ouahab islam </span>
            from <span className="purple"> oum el bouaghi, Algeria</span>
            <br />
            I am currently a computer science student doing Msc in distributed systems ,
            I've developed websites ranging from e-commerce platforms to real estate 
            
            listings and doctor appointment systems—each focused on performance
          
             usability, and clean design.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
