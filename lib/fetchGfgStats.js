import axios from 'axios';

const fetchGfgStats = async() => {
    try {
         const response = await axios.get('https://geeks-for-geeks-stats-api.vercel.app/?raw=y&userName=naivedya');
         return response.data;
        } catch (error) {
        console.error("Error Fetching DSA Stats",error);
        return [];
    } 
}

export default fetchGfgStats