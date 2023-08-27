
export const Player = ({ fn, song }) => {
    return (<div className='pBody'>

        <button onClick={() => {
            fn(false, null);
        }} className="btn btn-dark">Back </button>
        <br/>
        <br/>
        <br/>
         <div className="BackCard">
                <center>
                <div class="card" style={{backgroundColor:'black'}}>
                <div class="card-body" style={{backgroundColor:'black',color:'white',width:'100%',height:'350px'}} >
                    <img src = {song?.artworkUrl100}></img>
                   
                <p>
                    <br/>
                <b>Singer Name :</b> {song?.artistName}
                <br/>
               
                <b>Track Name :</b> {song?.trackName}
            </p>
            <br/>
        <audio controls>
            <source src={song?.previewUrl} type="audio/mp4"/>
        </audio>
            
        </div>
        </div>
        </center>
        </div>
    </div>
    )
}