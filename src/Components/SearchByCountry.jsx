import React, { useRef, useState, useMemo } from "react";
import ListByCountry from "./ListByCountry";
import countryList from 'react-select-country-list';
import { useEffect } from 'react';
import { collection, connectFirestoreEmulator, deleteDoc, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { auth, db } from '../firebase';
import { async } from '@firebase/util';
import { doc } from 'firebase/firestore';
import ReviewList from "./ReviewList";

export const SearchByCountry = () => {

    const [fetchDataByCountry, setFetchDataByCountry] = useState([]);
    const ref = useRef();
    const countries = useMemo(() => countryList().getData(), []);
    const citiesRef = collection(db, "posts");
    const q = query(citiesRef, where("country", "==", "Algeria"));

    /* Firestoreからデータを取ってくる */
    const [postList, setPostList] = useState([]); 

    useEffect(() => {
        const getPosts = async ()=> {
        const data = await getDocs(collection(db, "posts"));
        setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getPosts(); 
    }, []);

    const postCountries = postList.map((post, index) => post.country)

    /* inputに文字入力後、エンターしたとき */
    const handleSubmitByCountry = async(event) => {
        event.preventDefault();
        console.log(ref.current.value);

    /* APIのURL */
    const endpointUrlByCountry = `http://universities.hipolabs.com/search?country=${ref.current.value}` 

    /* APIを叩く */
    fetch(endpointUrlByCountry)
            .then((res) => {
            return res.json();
            })
            .then((data) => {
            console.log(data);
            setFetchDataByCountry(data);
    })

    
    const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        
    });
            
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
                <p>国で検索</p>
                <select
                    onChange={(e) => handleSubmitByCountry(e)}
                    ref={ref}
                >
                    <option>選択してください</option>
                    {countries.map((option, index) => (
                    <option key={index}> 
                    {option.label}
                    </option>
                    ))}
                </select>
            </div>

         
           
            {/* <ListByCountry fetchDataByCountry={fetchDataByCountry}></ListByCountry> */}
           
               
               
        </>
    )
}