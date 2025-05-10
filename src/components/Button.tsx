const Button = ({ text, className, id }: { text: string; className: string; id: string; }) => {
  return (
    <a className={`${className ?? ''}`}>
        <div className="cta-group group">
            <div className="bg-circle"></div>
            <p className="text">See My Work</p>
            <div className="arrow-wrapper">
                <img src="/images/arrow-down.svg" alt="arrow" />
            </div>
        </div>
    </a>
  )
}
export default Button