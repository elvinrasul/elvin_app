const key = '51d33bfc69be5f269277f2fa5e3db615';

// const baseURL = 'http://api.openweathermap.org/data/2.5/weather?q=Portland&appid=51d33bfc69be5f269277f2fa5e3db615';

// fetch(baseURL)
//     .then((data) => { console.log('response', data.json()) })
//     .catch((error) => {
//         console.log(error);
//     });

const requestCity = async (city) => {
    const baseURL = 'http://api.openweathermap.org/data/2.5/weather';
    
    const query = '?q='+city+'&appid'+key;
    

    //make fetch call (promise call)
    const response = await fetch(baseURL + query);

    //promise data
    const data = await response.json();
    return data;

}