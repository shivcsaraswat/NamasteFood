
import {useState} from 'react';


const TopRated = ({listofRes, setRenderedList}) => {
         
        console.log("clicked")
        
        // State variable to manage the search clicked
        const [topRatedClicked, setTopRatedClicked] = useState(false);

        const handleClick = () => { 
            
            if (topRatedClicked === false ) {
                //console.log(listofRes.filter(res => res.info.cuisines.map(cuisine => cuisine.toLowerCase()).includes(searchText.toLowerCase())));
                const filteredList = listofRes.filter(res => res.info.avgRating > 4.5);
                console.log(filteredList)
                setRenderedList(filteredList);
                setTopRatedClicked(true);
            } else { 
                //console.log(listofRes.filter(res => res.info.cuisines.map(cuisine => cuisine.toLowerCase()).includes(searchText.toLowerCase())));
                setRenderedList(listofRes);
                setTopRatedClicked(false);
            }
        }

       

        return (
            <div className = " filter-restaurant">
               <button className = "filter ml-300 border rounded-lg w-[200px]" onClick={() => {handleClick()}}>Top Rated Restaurants</button>
            </div>
        );
    }
    

export default TopRated;