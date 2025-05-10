const Button = ({
  text,
  className,
  id,
}: {
  text: string;
  className: string;
  id: string;
}) => {
  return (
    <a className={`${className ?? ""}`}>
      <div className="cta-button group">
        <div className="bg-circle"></div>
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow" />
        </div>
      </div>
    </a>
  );
};
export default Button;
