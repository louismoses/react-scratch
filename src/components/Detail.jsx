import PropTypes from "prop-types";

const Detail = (props) => {
  return (
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
  );
};
Detail.propTypes = {
  name: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  tel: PropTypes.number.isRequired,
  email: PropTypes.email,
  img: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Detail;
