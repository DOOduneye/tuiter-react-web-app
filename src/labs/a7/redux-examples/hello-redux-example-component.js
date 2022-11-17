import React from "react";
import {useSelector} from "react-redux";

const HelloReduxExampleComponent = () => {
<<<<<<< HEAD
    const message = useSelector((state) => state.hello.message);

    return(
        <h3>{message}</h3>
    );
};

export default HelloReduxExampleComponent;
=======
  const message = useSelector((state) => state.hello.message);

  return(
    <h1>{message}</h1>
  );
 };
 
export default HelloReduxExampleComponent;  
>>>>>>> 6a2f1ecdae064d719e76a8b9cf1695befc54a371
