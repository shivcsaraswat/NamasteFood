import { useParams } from "react-router-dom"


const Menu = () => { 
    let params = useParams();
    console.log(params.resId);
   return (
    <div>
        This is restaurant with id {params.resId}
    </div>
   );
}

export default Menu;


// res.data.cards