// external imports
import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";

// internal import
import SingleOffice from "./SingleOffice";

export default function MainOffices() {
  // set all office state
  const [allOffices, setOffices] = useState([]);

  //   make API call
  useEffect(() => {
    axios("https://afia.sjcmsportal.com/api/offices")
      .then((result) => {
        setOffices(result);
      })
      .catch((error) => {
        error = Error;
      });
  }, []);

  return (
    <Fragment>
      {allOffices.data &&
        allOffices.data.length > 0 &&
        allOffices.data.map((office) => (
          <SingleOffice
            officeName={office.name}
            officeImage={office.photo}
            officeDescription={office.description}
            officeNumber={office.phone}
          />
        ))}
    </Fragment>
  );
}
