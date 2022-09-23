import { useState } from "react";
import { Col, Button, Row } from "react-bootstrap";
import { assemblyGloves } from "../../gloves/data";
import "./style.css";

function Card(props) {
  return <div className="card">{props.children}</div>;
}
function Image(props) {
  return (
    <div className="card-image">
      <img src={props.src} alt={props.alt} />
    </div>
  );
}
function Content(props) {
  return (
    <div className="card-content">
      <Title text={props.title} />
      <Description text={props.description} />
    </div>
  );
};

function Title(props) {
  return (
    <div className="title">
      <span className="card-title">
        <b>Art No#:</b> {props.text}
      </span>
    </div>
  );
}

function Description(props) {
  return (
    <>
      <p className="card-description">
        <b>Description: </b>
        {props.text}.
      </p>
      <Button onClick="https://wa.me/p/5741853515836118/923107242237">
        Order Now
      </Button>
    </>
  );
}

export const ProductCard = () => {
  const [state, setState] = useState(assemblyGloves)
  console.log(setState)
  return (
    <Row>
      {state.map((Assembly) => {
        return (
          <Col key={Assembly.id} md={3}>
            <Card>
              <Image src={Assembly.img} alt={Assembly.ArtNo} />
              <Content
                title={Assembly.ArtNo}
                description={Assembly.Description}
              />
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};
