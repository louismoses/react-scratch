import PropTypes from "prop-types";

const Card = (props) => {
  return (
    <div>
      <a
        href="#"
        className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100"
      >
        <img
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={props.img}
          alt={props.alt}
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
            {props.name}
          </h5>
          <p className="mb-3 font-normal text-gray-700">{props.text}</p>
          <p className="mb-3 font-normal text-gray-700">
            Tel:{props.tel} <br />
            Email: {props.email}{" "}
          </p>
        </div>
      </a>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  tel: PropTypes.number.isRequired,
  email: PropTypes.email,
};

export default Card;
