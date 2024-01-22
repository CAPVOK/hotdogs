import "./ChartsPage.css";
import { FC } from "react";
import { Link } from "react-router-dom";
import { BreadCrumbs } from "../../components/BreadCrumbs";
import { ROUTES, ROUTE_LABELS } from "../../Routes";
import { Card, Container } from "react-bootstrap";
import image from "../../../public/DefaultImage.jpg";

export const ChartsPage: FC = () => {
  return (
    <div>
      <BreadCrumbs crumbs={[{ label: ROUTE_LABELS.ALBUMS }]} />
      <Container>
        <h1>Альбомы</h1>
        <div className="songs">
          <Link to={`${ROUTES.ALBUMS}/1`}>
            <Card className="card">
              <Card.Img
                className="cardImage"
                variant="top"
                src={image}
                height={100}
                width={100}
              />
              <Card.Body>
                <div className="textStyle">
                  <Card.Title>The Wall</Card.Title>
                </div>
                <div className="textStyle">
                  <Card.Text>Pink Floyd</Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Link>
          <Link to={`${ROUTES.ALBUMS}/1`}>
            <Card className="card">
              <Card.Img
                className="cardImage"
                variant="top"
                src={image}
                height={100}
                width={100}
              />
              <Card.Body>
                <div className="textStyle">
                  <Card.Title>A Night At The Opera</Card.Title>
                </div>
                <div className="textStyle">
                  <Card.Text>Queen</Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Link>
          <Link to={`${ROUTES.ALBUMS}/1`}>
            <Card className="card">
              <Card.Img
                className="cardImage"
                variant="top"
                src={image}
                height={100}
                width={100}
              />
              <Card.Body>
                <div className="textStyle">
                  <Card.Title>Made in Heaven</Card.Title>
                </div>
                <div className="textStyle">
                  <Card.Text>AC/DC</Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Link>
        </div>
      </Container>
    </div>
  );
};
