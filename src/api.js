const base_url = "https://api.rawg.io/api/games";


const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1;
    return month < 10 ? `0${month}` : `${month}`;
};


const getCurrentDay = () => {
    const day = new Date().getDate();
    return day < 10 ? `0${day}` : `${day}`;
};

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

const apiKey = "your-api-key";


const popular_games = `?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10&key=${apiKey}`;
const upcoming_games = `?dates=${currentDate},${nextYear}&ordering=-added&page_size=10&key=${apiKey}`;
const newGames = `?dates=${currentDate},${nextYear}&ordering=-released&page_size=10&key=${apiKey}`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${newGames}`;
export const gameDetailsURL=(id)=> `${base_url}/${id}?key=${apiKey}`;
export const screenShotURL=(id)=> `${base_url}/${id}/screenshots?key=${apiKey}`;
export const searchGameURL=(game_name)=>`${base_url}?search=${game_name}&page_size=9&key=${apiKey}`;

