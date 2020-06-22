import moment from 'moment';

export const KEY = 'BLg6EmuofZgk2KFEmkxDDBc4QZpLRpnhEk3Dr8b2';
export const API = `https://api.nasa.gov/planetary/apod?api_key=${KEY}`;



export const START_DATE = moment().add(-10, 'days').format('YYYY-MM-DD'); //10 максимальное количество картинок от сервера