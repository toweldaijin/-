import React, { useRef, useState } from "react";
import HomeImageUrl from './HomeImageUrl.png';
import { SearchByCountry } from "./SearchByCountry";
import { SearchByUniversity } from "./SearchByUniversity.jsx";


export const Home = () => {

    
  return(
    <>
      
      <div>
        <h2>留学ペディアは、海外大学合格体験記をシェアすることで、留学を志す皆さんをお助けするサイトです。</h2>
        <img 
            src={HomeImageUrl} 
            alt="人々が地球の周りで手を繋いでいる" 
            style={{height:"300px", width:"300px"}}
        />
      </div>

      <SearchByCountry></SearchByCountry>
      <SearchByUniversity></SearchByUniversity>

      
    </>
    );
    
}