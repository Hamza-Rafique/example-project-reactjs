import { MDBContainer } from "mdb-react-ui-kit";
import React from "react";
import { Image } from "react-bootstrap";
import sideImage from "../../images/sidecustom.jpg";

const CustomDesign = () => {
  return (
    <div id="custom">
      <MDBContainer>
        <div className="row gx-5">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="lasani2">
              <div className="lasani22">
                <h4 className="box-heading">Customized Designing Services</h4>
              </div>
              <p>
                <span>
                  The Research &amp; Development department is equipped with a
                  Technichal team, who very carefully study and work on the
                  latest material defining and designing of our Honorable
                  Customer Gloves&nbsp;
                </span>
              </p>
              <p>
                <span>
                  We will be adding some pictures in near future to show how we
                  work on the Customization of the gloves when we get them.
                </span>
              </p>
              <p>
                <span>
                  Just to ensure, that we play our role well, all kinds of
                  Customizations are processed and implemented, producing
                  variety of gloves, based on Customer Selections.&nbsp;
                </span>
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12">
            <Image src={sideImage} width="100%" />
          </div>
        </div>
      </MDBContainer>
    </div>
  );
};

export default CustomDesign;
