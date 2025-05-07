const CardItem = ({ title, subTitle }) => {
  return (
    <>
      <li className="flex flex-col gap-1 text-center">
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

export default CardItem;
