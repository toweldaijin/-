import React, { useRef, useState, useMemo } from "react";
import countryList from 'react-select-country-list';
import { collection, connectFirestoreEmulator, deleteDoc, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { db } from '../firebase';
import { async } from '@firebase/util';
import { doc } from 'firebase/firestore';
import ReviewList from "./ReviewList";


export const SearchByCountry = () => {

    const [fetchDataByCountry, setFetchDataByCountry] = useState([]);
    const ref = useRef();
    const countries = useMemo(() => countryList().getData(), []);

    /* Firestoreからデータを取ってくる */
    const [postList, setPostList] = useState([]); 

   /*  useEffect(() => {
        const getPosts = async ()=> {
        const data = await getDocs(collection(db, "posts"));
        setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getPosts(); 
    }, []);  */

    
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

        /* 国名でPostsをフィルタリング */
        const countriesRef = collection(db, "posts");
        const q = query(countriesRef, where("country", "==", ref.current.value));
        
        const querySnapshot = await getDocs(q);
        setPostList(querySnapshot.docs.map((doc) => ({
            ...doc.data(), id: doc.id
        })));
        
    }  
    console.log(postList)
    return(
        <>
            <div 
                className='searchArea' 
                style={{
                        backgroundColor:"#92B4EC",
                        color:"white"
                        }}
            >
                <h2>国で検索</h2>
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
            <ReviewList postList={postList}></ReviewList>
            {/* <ListByCountry fetchDataByCountry={fetchDataByCountry}></ListByCountry> */}
           
        </>
    )
}