
import imageConfig from "../utils/config"


const ResCard = ({resObj}) => { 
     //console.log(resObj);
 
    const {id, name, costForTwo, cuisines, avgRating, cloudinaryImageId} = resObj
    //console.log(cuisines)
   return (
       <div data-testid = "resCard" className = "res-card border max-w-[300px] mx-[10px] my-[10px] min-h-[600px] max-h-[600px] shadow-lg hover:bg-green-50 cursor-pointer">
            <div className="res-logo-container ">
                 <img className ="res-logo min-h-[400px] " src = {imageConfig.genResImageURL + cloudinaryImageId}></img>
            </div>

            <div className="font-bold mt-4 mb-2 ml-2">
                  {name}
            </div>
            <div className="avg-price ml-2"> 
                 {costForTwo}
            </div>
            <div className="res-cuisine flex flex-wrap">
                    {cuisines.map(cuisine => (<label className = "mx-2">{cuisine}</label>))}
            </div>
            <div className="res-rating ml-2">
                       {(avgRating == undefined)?"New" : avgRating}
            </div>
       </div>
   );
};


export const withPromotedLabel = (ResCard) => { 
        return ({resObj}) => { 
          return (
               <div>
                    <label className = "absolute border shadow-lg rounded-lg bg-amber-50 text-black-100 font-bold justify-center w-[100px] ml-[8px]"> Promoted </label>
                    <ResCard resObj = {resObj}/>

               </div>
          );
        };

};


export default ResCard;