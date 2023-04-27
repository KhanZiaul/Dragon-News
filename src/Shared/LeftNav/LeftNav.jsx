import React, { useEffect, useState } from 'react';

const LeftNav = () => {
    const[categories,setCategories] = useState([])

    useEffect(()=>{
        fetch('http://localhost:3000/datas')
        .then(res => res.json())
        .then(datas => console.log(datas))
        .catch(error => console.error(error))
    },[])
    return (
        <div>
            <h2>This is left Nav</h2>
        </div>
    );
};

export default LeftNav;