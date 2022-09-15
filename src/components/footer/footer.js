import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function Footer() {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <MDBContainer>
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a href="" className="me-4 text-reset">
              <li className="fa fa-whatsapp"></li>
            </a>
            <a href="" className="me-4 text-reset">
              <li className="fa fa-instagram"></li>
            </a>

            <a href="" className="me-4 text-reset">
             <li className="fa fa-facebook"></li>
            </a>
            <a href="" className="me-4 text-reset">
            <li className="fa fa-linkedin"></li>
            </a>
            <a href="" className="me-4 text-reset">
            <li className="fa fa-envelope"></li>
            </a>
          </div>
        </section>
      </MDBContainer>
      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                {/* <MDBIcon icon="gem" className="me-3" /> */}
                Vicky Impex
              </h6>
              <p>
                We are Manufacturer excellent quality Baseball Batting Gloves,
                Softball Batting Gloves, Golf Gloves, Polo Gloves, Pole Dancing
                Gloves, Drummer Gloves, Skydiving Gloves, Weightlifting Gloves,
                Gym Gloves, Workout Gloves, Wrestling Gloves, Cycle Gloves,
                Motorbike Gloves
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <a href="#!" className="text-reset">
                  Working & Safety Gloves
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Mechanic Gloves
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Fitness Gloves
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Sporters Gloves
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Dress & Fashion Gloves
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="#!" className="text-reset">
                  Pricing
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Settings
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Orders
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Near USKT Daska Road Sialkot
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                hamzarafique964@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 923107242237
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 923056168840
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4 mb-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2023 Copyright:
        <a className="text-reset fw-bold" href="https://vickyimpex.com/" target='_blank'>
         Vicky Impex
        </a>
      </div>
    </MDBFooter>
  );
}