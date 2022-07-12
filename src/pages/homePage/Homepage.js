import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react';
import Mytable from '../../components/Mytable';
import { Spin } from 'antd';

const Homepage = () => {
    const [getData, setGetData] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios.post('https://demo1779595.mockable.io/companies')
            .then(res => {
                setIsLoading(true);
                setGetData(res.data)

            }).then(() => {
                setIsLoading(false);
            })
            .catch(err => {
                console.log("error caught", err)
            })

    }, [])

    return (
        <>
            {isLoading ? <><div align="center" style={{marginTop:"50vh"}}><Spin /></div></> : (
                <>
                    <Mytable getData={getData} />
                    {/* {console.log(getData)} */}

                </>
            )}
        </>
    )
}

export default Homepage