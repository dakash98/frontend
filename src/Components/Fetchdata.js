import React, { useState, useEffect } from 'react'

function Fetchdata() {

    const API1 = 'https://padhaiplanet-backend.onrender.com/v1/config';

    const [agayaData, setAgayaData] = useState([])

    const fetchdata = async (url) => {
        try{
            const res = await fetch(url);
            const data = await res.json();
            console.log(data.data);
            setAgayaData(data.data.standard)
        }catch (e){
            console.log(e)
        }
    }

    useEffect(() => {
        fetchdata(API1);
    }, [])

    return (
        <>
            <ul>
                {agayaData.map((subjects, index) => (
                    <li key={index}>{subjects.value}</li>
                ))}
            </ul>
        </>
    )

}

export default Fetchdata
