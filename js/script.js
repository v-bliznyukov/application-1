'use strict';

const numberOfFilms = +prompt('How many films have you watched?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    privat: false
};

/* const a = prompt('The last film you watched', ''),
      b = prompt('How would you rate it?', ''),
      c = prompt('The last film you watched', ''),
      d = prompt('How would you rate it?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB); */

//Practice 2

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

console.log(personalMovieDB);

if (personalMovieDB.count < 10) {
    console.log("Not that many movies!");
} else if (10 <= personalMovieDB.count <= 30) {
    console.log("Not that many movies!");
} else {
    console.log("Not that many movies!");
} 