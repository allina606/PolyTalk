import defaultPhoto from "./Images/defaultPhoto.png";
import React from "react";

function imageHeader(props) {
  if (props.officialimg == null) {
    return (
      <div>
        <img
          src={defaultPhoto}
          alt="Candidate"
          className="img-thumbnail img-fluid"
        />
      </div>
    );
  } else {
    return (
      <div>
        <img
          src={props.officialimg}
          alt="Candidate"
          className="img-thumbnail img-fluid"
        />
      </div>
    );
  }
}

export default imageHeader;
