const Button = (props) => {
    let className = '_btn';
    className += props.light ? ' _light' : '';
    className += props.blue ? ' _blue' : '';
    return (
        <button onClick={() => props.onClick(props.text)} className={className}>
            {props.text}
        </button>
    );
};
export default Button