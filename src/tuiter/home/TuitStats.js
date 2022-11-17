import { useState } from 'react';

const TuitStats = (props) => {
    const [clicked, setClicked] = useState(false);
    const type = props.type;

    const handleSetClicked = () => {
        setClicked(!clicked);
    }

    return (
        <span onClick={handleSetClicked}>
            <i className={`${props.icon} ${clicked ? "active text-danger fa-solid" : ""}`} /> {props.value}
        </span>
    );
}

export default TuitStats