import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import ApiService from '../ApiService'
import Header from '../component/Header'
import Footer from '../component/Footer'

const TestInfo = () => {

    const [loadingImg, setLoadingImg] = useState()
    
    useEffect(() => {
        ApiService.imageLoad("clover_loading.gif")
        .then(res => {
            setLoadingImg(res.data)
        })
        .catch(err => {
            console.log('axios 에러', err)
        })
    },[])

    return (
        <>
            <Header></Header>
            <div style={{display:'flex', justifyContent: 'center', alignItems: 'center', width:'100%', height:'700px', marginBottom:'1vh',marginTop: '4vh'}}>
                <img src={`data:image/;base64,${loadingImg}`} style={{width: '700px', height:'700px'}}/>
            </div>
            <Footer></Footer>
        </>
    )
}

export default TestInfo