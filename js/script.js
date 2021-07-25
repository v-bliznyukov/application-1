'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('How many films have you watched?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('How many films have you watched?', '');
    }
}



const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function showMyDB () {
    if (personalMovieDB.privat == false){
         console.log(personalMovieDB);
         return;
    }
    return;
}

function writeYourGenres () {
    for (let i=1; i<=3; i++){
        /* const a = prompt(`You favorite genre number ${i}?`, '');
        personalMovieDB.genres[i-1]=a; */
        personalMovieDB.genres[i-1] = prompt(`You favorite genre number ${i}?`, '');
        
    }
}



/* const a = prompt('The last film you watched', ''),
      b = prompt('How would you rate it?', ''),
      c = prompt('The last film you watched', ''),
      d = prompt('How would you rate it?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB); */

//Practice 2

/* for (let i=0; i<2; i++){
    const a = prompt('The last film you watched', ''),
          b = prompt('How would you rate it?', '');
    if (a == '' || b == '' || a.length > 50 || a == null || b == null){
        console.log('error');
       i--;
    } else {
       personalMovieDB.movies[a] = b;
    }
    
} */
function rememberMyFilms () {
    for (let i=0; i<2; i++){
        const a = prompt('The last film you watched', ''),
              b = prompt('How would you rate it?', '');
        if (a == '' || b == '' || a.length > 50 || a == null || b == null){
            console.log('error');
           i--;
        } else {
           personalMovieDB.movies[a] = b;
        }
        
    }
}

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Not that many movies!");
    } else if (10 <= personalMovieDB.count <= 30) {
        console.log("Not that many movies!");
    } else {
        console.log("Not that many movies!");
    } 
}

start();
writeYourGenres();
rememberMyFilms();
detectPersonalLevel();
showMyDB();



