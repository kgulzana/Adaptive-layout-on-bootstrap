import React from "react";
import { Card, Button } from "react-bootstrap";
import pict1 from "../assets/pict1.png";
import pict2 from "../assets/pict2.png";
import pict3 from "../assets/pict3.png";
import pict4 from "../assets/pict4.png";
function Advice() {
  return (
    <div className="container">
      <section className="page__advice advice my-5">
        <div className="advice__title">
          <h1>Practice Advice</h1>
          <p>
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </p>
        </div>
        <div className="advice__items">
          <div className="row">
            <div className="col-md-6 col-sm-6 col-lg-3">
              <Card className="advice__item h-100">
                <Card.Img variant="top" src={pict1} />
                <Card.Body>
                  <Card.Title>Fastest way to take action</Card.Title>
                  <Card.Text>
                    They describe a universe consisting of bodies moving
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-6 col-sm-6 col-lg-3">
              <Card className="advice__item h-100">
                <Card.Img variant="top" src={pict2} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-6 col-sm-6 col-lg-3">
              <Card className="advice__item h-100">
                <Card.Img variant="top" src={pict3} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-6 col-sm-6 col-lg-3">
              <Card className="advice__item h-100">
                <Card.Img variant="top" src={pict4} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Advice;
