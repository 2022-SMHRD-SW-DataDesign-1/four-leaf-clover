import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import ApiService from '../ApiService'

const TestInfo = () => {

    const[info, setInfo] = useState({
        webtoon_info: []
        // num: '',
        // title: '',
        // writer: '',
        // tag: '',
        // synopsis: '',
        // like: '',
        // comment: '',
        // rating: ''
    })

    useEffect(() => {
        ApiService.test()
        .then( res => {
            console.log(res.data);
            setInfo({
                ...info,
                webtoon_info: res.data
            })
        })
        .catch( err => {
            console.log('error!!', err);
        })

        ApiService.test2()
        .then( res => {
            console.log(res.data);
        })
        .catch( err => {
            console.log('error!!', err);
        })
    },[])
    
    return (
        <div>
            TestInfo<br/>
            {/* <textarea value={info.num}></textarea><br/>
            <textarea value={info.title}></textarea><br/>
            <textarea value={info.writer}></textarea><br/>
            <textarea value={info.tag}></textarea><br/>
            <textarea value={info.synopsis}></textarea><br/>
            <textarea value={info.like}></textarea><br/>
            <textarea value={info.comment}></textarea><br/>
            <textarea value={info.rating}></textarea> */}
        </div>
        
    )
}

export default TestInfo