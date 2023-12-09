const Card = ({ className, children, ...rest }) => {
  return (
    <div className={className + " rounded-2xl p-5"} {...rest}>
      {children}
    </div>
  );
};
export default Card;
