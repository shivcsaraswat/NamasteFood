

import { useParams } from "react-router-dom";

const RestaurantMenu = () => { 
    let params = useParams();

    return (

    <div> { params.resId } </div>
);
};


export default RestaurantMenu;