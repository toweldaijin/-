import React, { useRef, useState, useMemo } from "react";
import { ListByUniversity } from "./ListByUniversity";
import { collection, connectFirestoreEmulator, deleteDoc, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { auth, db } from '../firebase';
import { async } from '@firebase/util';
import { doc } from 'firebase/firestore';
import ReviewList from "./ReviewList";
import countryList from 'react-select-country-list';
import { createRef, RefObject } from "react";
import "./Search.css"; 

export const SearchByUniversity = () => {

  const [fetchDataByUniversity, setFetchDataByUniversity] = useState([]);
  const refCountry = useRef();
  const refUniversity = useRef();
  const countries = useMemo(() => countryList().getData(), []);
  const [postList, setPostList] = useState([]);
 

  /* inputに文字入力後、エンターしたとき */
  const handleSubmitByCountry = (event) => {
    event.preventDefault();
    console.log(refCountry.current.value);

    /* APIのURL */
    const endpointUrlByUniversity = `https://universities.hipolabs.com/search?country=${refCountry.current.value}`

    /* APIを叩く */
    fetch(endpointUrlByUniversity)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setFetchDataByUniversity(data);
    })
  }

  const handleSubmitByUniversity = async(event) => {
    event.preventDefault();
    console.log(refUniversity.current.value); 
    /* 大学名でPostsをフィルタリング */
   const universitiesRef = collection(db, "posts");
    const q = query(universitiesRef , where("university", "==", refUniversity.current.value));
    
    const querySnapshot = await getDocs(q);
    setPostList(querySnapshot.docs.map((doc) => ({
        ...doc.data(), id: doc.id
    })));
  } 

  return(
    <>
      <div 
        className='searchArea' 
        style={{
          backgroundColor:"#92B4EC",
          color:"white"
        }}
      >
        <h2>大学名で検索</h2>
          <p>国を選択</p>
            <select
              onChange={(e) => handleSubmitByCountry(e)}
              ref={refCountry}
            >
              <option>選択してください</option>
              {countries.map((option, index) => (
                <option key={index}> 
                  {option.label}
                </option>
              ))}
            </select>
        <h2>→</h2>
        <p>大学を選択</p>
            <select
              onChange={(e) => handleSubmitByUniversity(e)} 
              ref={refUniversity} 
            >
              <option>選択してください</option>
              {fetchDataByUniversity.map((data, index)=>(
                <option key={index}>{data.name}</option>
              ))}
            </select>

       {/*  <p>正式名称で入力してください　例）UCLA → University of California, Los Angeles</p> */}
        {/* <form onSubmit={(event) => handleSubmitByUniversity(event)}>
          <input type="text" placeholder="大学名を入力" ref={ref}></input>
        </form> */}
        {/* <ListByUniversity fetchDataByUniversity={fetchDataByUniversity}></ListByUniversity> */}
        </div>
        <ReviewList postList={postList}></ReviewList>
    </>
  )
}