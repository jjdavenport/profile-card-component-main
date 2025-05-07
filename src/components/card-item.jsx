const CardItem = ({ title, subTitle }) => {
  return (
    <>
      <li>
        <span>{title}</span>
        <span>{subTitle}</span>
      </li>
    </>
  );
};

export default CardItem;
