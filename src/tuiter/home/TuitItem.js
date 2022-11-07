import TuitStats from "./TuitStats";
import tuitStatsArray from "./tuitStats.json"

import { useDispatch } from "react-redux";
import { deleteTuit } from "../tuits/tuits-reducer";

const PostSummaryItem = (
    {post = {
        "id": 123,
        "userName": "SpaceX",
        "handle": "@spacex",
        "time": "2h",
        "tuit": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed. Cybertruck is built with an exterior shell made for ultimate durability and passenger protection. Starting with a nearly impenetrable exoskeleton, every component is designed for superior strength and endurance, from Ultra-Hard 30X Cold-Rolled stainless-steel structural skin to Tesla armor glass. Cybertruck is built with an exterior shell made for ultimate durability and passenger protection. Starting with a nearly impenetrable exoskeleton, every component is designed for superior strength and endurance, from Ultra-Hard 30X Cold-Rolled stainless-steel structural skin to Tesla armor glass.",        "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
        "replies": "123",
        "retuits": "432",
        "likes": 234,
        "image": "res/tesla.png"
    }}
 ) => {

    const dispatch = useDispatch();

    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }

    const handleType = (type) => {
        switch (type) {
            case "replies":
                return post.replies;
            case "retuits": 
                return post.retuits;
            case "likes":
                return post.likes;  
            default:
                return "";
        }
    }

    return (
     <section className="d-inline list-group list-group-flush p-0">
        <div className="list-group-item border">
           
            <div className="d-flex flex-row">

                <div className="d-flex flex-column px-3">
                    <p className="circle">
                        <img src={post.image} alt="summaryImage" />
                    </p>
                </div>

                <div className="d-flex flex-column">
                    <i className="bi bi-x-lg float-end" onClick={() => deleteTuitHandler(post._id)} />
                    <p className="mb-0">
                        <span className="fw-bolder">
                            {post.userName}
                        </span>
                        <i className="fa-solid fa-check"></i>
                        {post.handle}
                        <small className="text-muted"> 
                            {String.fromCharCode(183)} {post.time}
                        </small>
                    </p>
                    <div className="ms-auto text-start">
                        {post.tuit}
                    </div>

                    <div className="d-flex flex-row gap-5 pt-2">

                        { tuitStatsArray.map(tuitStat => <TuitStats key={tuitStat.id} icon={tuitStat.icon} value={handleType(tuitStat.type)} type={tuitStat.type} />) }
                       
                    </div>
                </div>
            </div>
        </div>
     </section>
    );
   };
   export default PostSummaryItem;


//    <span>
//    <i className="fa-regular fa-comment" /> {post.comments}
// </span>

// <span>
//    <i className="fa-solid fa-retweet" /> {post.retuits}
// </span>

// <span>
//    <i className="fa-regular fa-heart" /> {post.likes}
// </span>

// <span>
//    <i className="fa-solid fa-share" />
// </span>