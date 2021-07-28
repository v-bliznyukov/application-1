'use strict';


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('How many films have you watched?', '');

       while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
        personalMovieDB.count = +prompt('How many films have you watched?', '');
    }
    },
    writeYourGenres: function() {
        for (let i=1; i<=3; i++){
            /* const a = prompt(`You favorite genre number ${i}?`, '');
            personalMovieDB.genres[i-1]=a; */
            personalMovieDB.genres[i-1] = prompt(`You favorite genre number ${i}?`, '');
            if (personalMovieDB.genres[i-1] == null || personalMovieDB.genres[i-1] == '') {
                i--;
            }
            
        }
        personalMovieDB.genres.forEach( (item, i) => {
            console.log(`Favorite genre #${i+1} - is ${item}`);
        });
    },
    writeYourGenresAlt: function() {
        for (let i = 1; i<2; i++) {
            let genre = prompt(`You favorite genres number comma separated`, '');  
            if (genre == null || genre == ''){
                i--;
            }
            else {
                personalMovieDB.genres = genre.split(', ');
            }
        } 
        personalMovieDB.genres.forEach( (item, i) => {
            console.log(`Favorite genre #${i+1} - is ${item}`);
        });
    },
    forEach: function() {
      for (let i = 0; i < personalMovieDB.genres.length; i++) {
         console.log(`Favorite genre #${i+1} - is ${personalMovieDB.genres[i]}`);
      }
    },
    rememberMyFilms: function() {
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
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log("Not that many movies!");
        } else if (10 <= personalMovieDB.count <= 30) {
            console.log("Not that many movies!");
        } else {
            console.log("Not that many movies!");
        } 
    },
    showMyDB: function() {
        if (personalMovieDB.privat == false){
            console.log(personalMovieDB);
            return;
       }
       return;
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat == false){
            personalMovieDB.privat = true;
        }
        else {
            personalMovieDB.privat = false;
        }
    }
};


