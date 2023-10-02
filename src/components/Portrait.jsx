import PropTypes from "prop-types";

const Portrait = (props) => {
  return (
    <>
      <img
        className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
        src={props.img}
        alt={props.alt}
      />
    </>
  );
};
Portrait.propTypes = {
  img: PropTypes.string,
  alt: PropTypes.string,
};

export default Portrait;
