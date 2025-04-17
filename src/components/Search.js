import {useState} from 'react';


const Search = ({listofRes, setRenderedList}) => {
         
        //const { listofRes, setRenderedList } = searchObj;
       // console.log(listofRes)

        //console.log("Search Rendered");
        const [searchText, setSearchText] = useState("");
        
        // State variable to manage the search clicked
        const [searchClicked, setSearchClicked] = useState(false);

        const handleSearch = () => { 
            
            if (searchClicked === false ) {
                //console.log(listofRes.filter(res => res.info.cuisines.map(cuisine => cuisine.toLowerCase()).includes(searchText.toLowerCase())));
                const filteredList = listofRes.filter(res => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                setRenderedList(filteredList);
                setSearchClicked(true);
            } else { 
                //console.log(listofRes.filter(res => res.info.cuisines.map(cuisine => cuisine.toLowerCase()).includes(searchText.toLowerCase())));
                setRenderedList(listofRes);
                setSearchClicked(false);
            }
        }

        const handleChange = (e) => { 
               setSearchText(e.target.value);
        }
        return (
            <div className = " search mt-4 ml-152">
               <input className = "w-100 border mt-5 mb-4 mr-3 " data-testid = "search-inp" onChange = {(e) => {handleChange(e)}} />
               <button className = "border rounded-xl w-[70px]" onClick={() => {handleSearch()}}>Search</button>
            </div>
        );
    }
    

export default Search;