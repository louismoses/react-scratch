import PropTypes from "prop-types";
import Portrait from "./Portrait";
import Detail from "./Detail";

const Card = (props) => {
  return (
    <div>
      <a
        href="#"
        className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100"
      >
        <Portrait img={props.img} alt={props.alt} />
        <Detail
          name={props.name}
          email={props.email}
          tel={props.tel}
          text={props.text}
        />
      </a>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  tel: PropTypes.number.isRequired,
  email: PropTypes.email,
  img: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Card;
