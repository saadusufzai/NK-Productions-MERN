import React,{useState,useEffect} from 'react'
import styles from './Blog.module.css'
import axios from 'axios'

const Blog = () => {
    let [data,setData]= useState();


    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res)=> setData(res.data))
        .catch((err)=> console.log(err))

    },[])


   
   
    return (
        <div className={styles.blog}>
            {
                data?.map((e,key)=>
                <div key={key} className={styles.box}>
                <h1>{e.title}</h1>
                <p>{e.body}</p>
                </div>
                )
            }
        

        </div>
    )
}

export default Blog
