// Network Call (HTTP/ HTTPS)
import axios from 'axios';
// HTTP Call (HTTP Methods)
// GET - Read
// POST - Write (Insert/ Create)
// PUT - Update
// Delete - Remove
// CRUD Operations
export const apiClient = {
   async getSongs(artistName){
    const URL = `https://itunes.apple.com/search?term=${artistName}&country=in`;
    const response = await axios.get(URL);
    console.log(response.data);
    return response.data.results;
    },
    async get(URL) {
        try {
          const response = await axios.get(URL);
          return response.data;
        } catch (err) {
          throw err;
        }
      },
    async post(URL, data){
        try{
        const response = await axios.post(URL, data);
        console.log(response);
        return response;
        }
        catch(err){
            throw err;
        }
    },
    put(){

    },
    remove(){

    }
}