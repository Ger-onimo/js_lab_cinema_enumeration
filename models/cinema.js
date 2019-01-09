const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.listOfTitles = function () {
  const result = this.films.map((film) => {
    return film.title;
  });
  return result;
};

Cinema.prototype.findByTitle = function (filmTitle) {
  const result = this.films.filter(function(film) {
    return film.title === filmTitle;
  })
  return result[0]
};

Cinema.prototype.filterByGenre = function (filmGenre) {
  const result = this.films.filter(function(film) {
    return film.genre === filmGenre;
  })
  return result;
};

Cinema.prototype.yearCheck = function (year) {
  const result = this.films.some(function(film){
      return film.year === year
    })
    return result;
  };

Cinema.prototype.minLength = function (length) {
  const result = this.films.every(function(film){
    return film.length > length;
  })
  return result;
};

Cinema.prototype.totalRunTime = function () {
  const result = this.films.reduce((runningTotal, film) => {
    return runningTotal + film.length
  }, 0)
  return result;
};

// Cinema.prototype.filterByProperty = function (propertyName, value) {
//   const result = this.films.filter(function(film) {
//     return film['propertyName'] === value;
//   })
//   return result;
// };

module.exports = Cinema;
