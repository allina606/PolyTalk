import defaultPhoto from "./Images/defaultPhoto.png";

function imageHeader(props) {
  if (props.officialimg == null) {
    console.log("SUP");
    return (
      <div class="">
        <img
          src={defaultPhoto}
          alt="Candidate"
          className="img-thumbnail img-fluid"
        />
      </div>
    );
  } else {
    console.log("BRUH");
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
