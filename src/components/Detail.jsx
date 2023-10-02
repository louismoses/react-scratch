import PropTypes from "prop-types";

const Detail = (props) => {
  return (
    <div className="flex flex-col justify-between p-4 leading-normal">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
        {props.name}
      </h5>
      <p className="mb-3 font-normal text-gray-700">{props.text}</p>
      <p className="mb-3 font-normal text-gray-700">
        {props.tel} <br />
        {props.email}
      </p>
    </div>
  );
};
Detail.propTypes = {
  name: PropTypes.string,
  alt: PropTypes.string,
  tel: PropTypes.string,
  email: PropTypes.string,
  img: PropTypes.string,
  text: PropTypes.string,
};

export default Detail;
