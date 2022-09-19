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
}

function Title(props) {
  return (
    <div className="title">
      <span className="card-title">{props.text}</span>
      <Button>Oder Now</Button>
    </div>
  );
}

function Description(props) {
  return (
    <p className="card-description">
      <b>Description:</b>
      {props.text}
    </p>
  );
}

export const Hello = () => {
  return (
    <Row>
      {assemblyGloves.map((Assembly) => {
        return (
          <Col className="m-4" key={Assembly.id} sx={3} sm={3}>
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
