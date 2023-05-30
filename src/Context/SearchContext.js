import { createContext ,useState} from "react";
import React from "react";
export const SearchContext=createContext(null);

const Search=({children})=>{
    const[searchValue,setSearch]=useState('');
    const [status,setStatus]=useState(true);
    return(
        <SearchContext.Provider value={{searchValue,setSearch,status,setStatus}}>{children}</SearchContext.Provider>
    )

}
export default Search;
