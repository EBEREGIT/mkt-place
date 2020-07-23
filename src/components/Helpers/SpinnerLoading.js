import React, { Fragment } from "react";
import { Spinner } from "react-bootstrap";

export default function SpinnerLoading() {
  return (
    <Fragment>
      <Spinner
        as="span"
        animation="grow"
        size="sm"
        role="status"
        aria-hidden="true"
      />
    </Fragment>
  );
}
