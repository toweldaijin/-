import React, { useRef, useState, useMemo } from "react";
import ListByCountry from "./ListByCountry";
import countryList from 'react-select-country-list';

export const SearchByCountry = () => {


    const [fetchDataByCountry, setFetchDataByCountry] = useState([]);
    const ref = useRef();
    const countries = useMemo(() => countryList().getData(), []);

    /* inputに文字入力後、エンターしたとき */
    const handleSubmitByCountry = (event) => {
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
                <ListByCountry fetchDataByCountry={fetchDataByCountry}></ListByCountry>
            </div>
        </>
    )
}