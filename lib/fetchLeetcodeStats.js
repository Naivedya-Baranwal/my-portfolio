import axios from 'axios';

const fetchLeetcodeStats = async() => {

   try {
    const response = await axios.get('https://leetcode-stats-api.herokuapp.com/naivedyab198');
    const dataStats = response.data;
    return dataStats;
} catch (error) {
    console.error("Error fetching DSA stats",error);
   return [];
} 
}

export default fetchLeetcodeStats;