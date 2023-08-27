// export const Search = ()=>{
//     return (
//      <>  
//     <input className='form-control' type='text' placeholder="What do you want to listen to?" style={{fontWeight:'bolder',width:'220px',height:'30px'}}/>
//     <button className='btn btn-primary-info' style={{height:'35px',cursor:'pointer'}}>Search</button>
//     </> 
//     );
// }
import { useRef } from "react"

export const Search=({fn})=>{
    const artist=useRef()
    return (
    <>
    <input ref={artist} type="text" className="Searchbar" size="40" placeholder="What do you want to listen to?" style={{fontSize:'1.2rem',fontWeight:'bolder',height:'50px',borderRadius:'.8rem',color:'black',backgroundColor: 'rgb(228, 226, 226)'}}/>
    <button className="btn btn-success" style={{height:'49px',width:'100px',fontSize:'1.2rem'}} onClick={()=>{
        fn(artist.current.value)
    }}>Search</button>
    </>)
}