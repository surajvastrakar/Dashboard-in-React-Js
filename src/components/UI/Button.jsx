const Button = ({ className, children, Icon, bgColor, ...rest }) => {
  const classes = `font-medium rounded-lg px-5 py-2 
  ${bgColor === "bg-main" ? "bg-main text-black" : "bg-primary text-white"}
  ${className ? className : ""} ${Icon ? "flex items-center gap-1" : ""}`;

  return (
    <button className={classes} {...rest}>
      {Icon && Icon}
      <span className="">{children}</span>
    </button>
  );
};
export default Button;
