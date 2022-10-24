import React from "react";

const NavigationSidebar = ({active = 'explore'}) => {
    return (
        <div>
            <div className="list-group list-group-flush border rounded-3">
                <a className="list-group-item" href="/">
                    Tuiter
                </a>

                <a className="list-group-item" href="../home/home.html">
                    <i className="fa-solid fa-home"></i>
                    <span className="p-1 d-none d-xl-inline d-xxl-inline">
                        Home
                    </span>
                </a>

                <a className="list-group-item bg-primary text-white" href="../ExploreScreen/explore.html">
                    <i className="fa-solid fa-hashtag"></i>
                    <span className="p-1 d-none d-xl-inline d-xxl-inline">
                        Explore
                    </span>
                </a>

                <a className="list-group-item" href="../notifications/notifications.html">
                    <i className="fa-solid fa-bell"></i> 
                    <span className="p-1 d-none d-xl-inline d-xxl-inline">
                        Notifications
                    </span>
                </a>

                <a className="list-group-item" href="../messages/messages.html">
                    <i className="fa-solid fa-envelope"></i>
                    <span className="p-1 d-none d-xl-inline d-xxl-inline">
                        Messages
                    </span>
                </a>

                <a className="list-group-item" href="../bookmarks/bookmarks.html">
                    <i className="fa-solid fa-bookmark"></i>
                    <span className="p-1 d-none d-xl-inline d-xxl-inline">
                        Bookmarks
                    </span>
                </a>

                <a className="list-group-item" href="../lists/lists.html">
                    <i className="fa-solid fa-list"></i>
                    <span className="p-1 d-none d-xl-inline d-xxl-inline">
                        Lists
                    </span>
                </a>

                <a className="list-group-item" href="../profile/profile.html">
                    <i className="fa-solid fa-user"></i>
                    <span className="p-1 d-none d-xl-inline d-xxl-inline">
                        Profile
                    </span>
                </a>

                <a className="list-group-item" href="../more/more.html">
                    <i className="fa-solid fa-ellipsis-h"></i>
                    <span className="p-1 d-none d-xl-inline d-xxl-inline">
                        More
                    </span>
                </a>
         </div>
    
            <div className="d-grid mt-2">
                <a href="tweet.html" className="btn btn-primary btn-block rounded-pill"> Tweet </a>
            </div>
        </div>
    );
};
 
export default NavigationSidebar;