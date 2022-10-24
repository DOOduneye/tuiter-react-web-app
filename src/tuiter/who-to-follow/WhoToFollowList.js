import whoArray from './who.json';
import WhoToFollowListItem from "./WhoToFollowListItem.js";

const WhoToFollowList = () => {
 return(
    <div className="row w-auto d-inline-block list-group list-group-flush rounded-3 ps-3 border">
      <div className="list-group-item fw-bold fst-normal"> Who to follow </div>
      
      {whoArray.map(who => <WhoToFollowListItem key={who._id} who={who}/> )}

    </div>
 );
};

export default WhoToFollowList;
