import { Song } from "./Song";
export const Songs = ({allsongs,fn})=>{
    return(<>
        {allsongs.map((currentSong,index)=>{return(<Song fn={fn}key={index} song={currentSong}/>)})}   
        </>)
}