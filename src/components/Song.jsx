import { useState } from "react";
export const Song=({fn,song})=>{
    const [playerFlag,setPlayerFlag]=useState(false);
    const showPlayer=()=>{
        fn(true,song)
    }
    
    return(
        <div class="card" style={{borderRadius:'1.6rem',backgroundColor:'rgb(37, 36, 36)'}}>
        <div class="card-body">
        <div className="row" >
            <div className="col-4">
                <img src={song.artworkUrl100} alt="i"></img>
            </div>
            <div className="col-4" style={{marginTop:'30px',fontSize:'18px',color:'white'}}><b>
            {song.artistName}
            {song.trackName}
            </b>
            </div>
            <div className="col-4" >
                <button className="btn btn-success" style={{marginTop:'30px',marginLeft:'150px'}} onClick={showPlayer}>Play Now</button>
            </div>
        </div>
        </div>
        </div>
    )
}