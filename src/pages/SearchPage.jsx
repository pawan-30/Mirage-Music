import { useEffect, useState } from "react";
import { Search } from "../components/Search"
import { Songs } from "../components/Songs"
import { apiClient} from "../services/api-client";
import { Player } from "../components/Player";

export const SearchPage=()=>{
    const [allSongs,setSongs]=useState([]);
    const [flag,setFlag]=useState(false);
    const [song,setSong]=useState(null);
    const togglePlayer=(flag,songarg)=>{
setSong(songarg);
setFlag(flag);
    }
    const loadSongs=async()=>{
        setSongs(await apiClient.getSongs('Latest Songs'))
    }
    useEffect(()=>{
        loadSongs()
    },[])
    const getArtistName=async(ArtistName)=>{
        console.log('Rec artist name: ',ArtistName);
        setSongs(await apiClient.getSongs(ArtistName))
    }
    const jsx=<>
    <Search fn={getArtistName}/>
        <Songs fn={togglePlayer} allsongs={allSongs}/>
    </>
    return (
        <div className="container">
           <h1 className="Heading" style={{marginTop:'10px', height: '70px', textAlign: 'center', backgroundColor: 'rgb(37, 36, 36)', color: 'white',fontSize:'3.5rem',fontFamily:'Poppins' }}>        
  Melodic Mirage
</h1>
            <br/>
            
            <br/>
            {flag?<Player fn={togglePlayer} song={song}/>:jsx}
            
            

        </div>
    )
}