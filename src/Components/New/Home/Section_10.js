import React from "react";

const Section_10 = () => {
  return (
    <div className=" container py-5">
      <h1 className=" text-center fw-semibold">
        Got Questions, We've
        <br />
        Got Answers!
      </h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item my-4">
          <h2
            className="accordion-header  rounded-top-3 text-white"
            id="headingOne"
          >
            <button
              className="accordion-button fw-semibold"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              How long will it take to receive my order?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body  rounded-bottom-3 primary-bgcolor text-white">
              <p>
                Delivery times vary depending on the item and your location.
                Typically, in-stock items are delivered within 5-10 business
                days. Custom orders may take longer, and we will provide an
                estimated delivery date at checkout.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item mb-4">
          <h2
            className="accordion-header  rounded-top-3 text-white"
            id="headingTwo"
          >
            <button
              className="accordion-button collapsed fw-semibold"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              How long will it take to receive my order?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body  rounded-bottom-3 primary-bgcolor text-white rounded-bottom-3">
              <p>
                Delivery times vary depending on the item and your location.
                Typically, in-stock items are delivered within 5-10 business
                days. Custom orders may take longer, and we will provide an
                estimated delivery date at checkout.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item mb-4">
          <h2 className="accordion-header  rounded-top-3" id="headingThree">
            <button
              className="accordion-button collapsed fw-semibold "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Do you offer assembly services?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body  rounded-bottom-3 primary-bgcolor text-white rounded-bottom-3">
              <p>
                Yes, we offer assembly services for most of our furniture. This
                option can be selected at checkout for an additional fee.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item mb-4">
          <h2 className="accordion-header  rounded-top-3" id="headingFour">
            <button
              className="accordion-button collapsed fw-semibold "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              Can I customize my furniture?
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body  rounded-bottom-3 primary-bgcolor text-white rounded-bottom-3">
              <p>
              Yes, we offer customization options on many of our products. You can select from different materials, colors, and finishes to create a piece that suits your style.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item mb-4">
          <h2 className="accordion-header  rounded-top-3" id="headingFive">
            <button
              className="accordion-button collapsed fw-semibold "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
              What if my furniture arrives damaged?
            </button>
          </h2>
          <div
            id="collapseFive"
            className="accordion-collapse collapse"
            aria-labelledby="headingFive"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body  rounded-bottom-3 primary-bgcolor text-white rounded-bottom-3">
              <p>
              If your furniture arrives damaged, please contact our customer service team within 48 hours of delivery. We will arrange for a replacement or repair as soon as possible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section_10;
