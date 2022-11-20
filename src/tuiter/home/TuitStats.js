import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { updateTuitThunk } from "../../services/tuits-thunks";

const TuitStats = (props) => {
    const [clicked, setClicked] = useState(false);

    // const dispatch = useDispatch();

    const handleSetClicked = () => {
        setClicked(!clicked);
        // dispatch(updateTuitThunk({...props.tuit, likes: props.tuit.likes + 1}));
    }

    return (
        <span onClick={handleSetClicked}>
            <i className={`${props.icon} ${clicked ? "active text-danger fa-solid" : ""}`} /> {props.value}
        </span>
    );
}

export default TuitStats