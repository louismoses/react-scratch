const Header = (props) => {
  return (
    <>
      <h1 className="text-4xl font-bold  lead stroke-orange-400">
        {props.heading}
      </h1>
    </>
  );
};

export default Header;
