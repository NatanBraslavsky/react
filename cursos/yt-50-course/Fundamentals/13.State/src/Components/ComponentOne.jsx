const ComponentOne = ({count, onClickHandler}) => {
    const handleClick = () => onClickHandler();
    return (
        <div>
            <p>{count}</p>
            <button onClick={handleClick}>+</button>
        </div>
    );
};

export default ComponentOne;
