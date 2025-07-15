import axios from 'axios';

const fetchLeetcodeStats = async() => {

   try {
    const response = await axios.get('https://leetcode-api-faisalshohag.vercel.app/naivedyab198');
    const dataStats = response.data;
    return dataStats;
} catch (error) {
    console.error("Error fetching DSA stats",error);
   return [];
} 
}

export default fetchLeetcodeStats;