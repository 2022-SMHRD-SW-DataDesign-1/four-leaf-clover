import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import ApiService from '../ApiService'

const TestInfo = () => {

    const [loadingImg, setLoadingImg] = useState()
    
    useEffect(() => {
        ApiService.loading()
        .then(res => {
            setLoadingImg(res.data)
        })
        .catch(err => {
            console.log('axios 에러', err)
        })
    },[])

    return (
        <div>
           <img src={loadingImg}/>
        </div>
        
    )
}

export default TestInfo