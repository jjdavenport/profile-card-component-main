import PropTypes from "prop-types";

const CardItem = ({ title, subTitle }) => {
  return (
    <>
      <li className="flex flex-col text-center">
        <span className="text-very-dark-desaturated-blue text-lg font-bold">
          {title}
        </span>
        <span className="text-dark-gray text-xs tracking-wider">
          {subTitle}
        </span>
      </li>
    </>
  );
};

CardItem.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
};

export default CardItem;
