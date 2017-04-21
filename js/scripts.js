// var previousResults = [];
//
//
// // Defined our selectors and grabbed key elements from the page
// var form     = document.querySelector("#searchForm");
// var result   = document.querySelector("#result");
// var sort     = document.querySelector("#sort");
// var previous = document.querySelector("#previousResults");
//
// form.addEventListener("submit", function (event) {
//   // Stop the page from performing the
//   //  default behavior for form submission
//   event.preventDefault();
//
//   var title = form.querySelector("#searchTitle").value;
//
//   createSearch(title)
//     .then(updateResult) // Separated updating concern
//     .then(updatePrevious); // Separated updating saved searches
// });
//
//
// sort.addEventListener("change", function () {
//   var strategy = sort.value;
//   var length = previousResults.length;
//
//   var sorted = sortResults(
//     previousResults.slice(1, length),
//     strategy
//   );
//
//   renderPrevious(sorted);
// });
//
// function sortResults(results, strategy){
//   switch(strategy){
//     case 'default':
//       return results;
//     case 'title':
//       return results.sort(sortByTitle);
//     case 'rating':
//       return results.sort(sortByRating);
//     }
// }
//
// function sortByTitle(a, b){
//   return a.Title > b.Title;
// }
//
// function sortByRating(a, b){
//   return Math.floor((Number(a.Rating) - Number(b.Rating))*10);
// }
//
// // Create a search for title
//
// function createSearch(title) {
//   // does url encoding for us, i.e. for the title
//   return $.get('https://www.omdbapi.com/', { t: title });
// }
//
// // Updating Current Result
// function updateResult(newResult) {
//   var resultHTML = buildResult(newResult);
//   displayResult(resultHTML);
//
//   return newResult;
// }
//
// function addResult(newResult) {
//   previousResults.unshift(newResult);
// }
//
// function displayResult(resultHTML) {
//   result.innerHTML = resultHTML;
// }
//
//
// // Updating List of Previous Results
// function updatePrevious(newResult) {
//   renderPrevious(previousResults);
//   addResult(newResult);
// }
//
// function renderPrevious(prev) {
//   previous.innerHTML = prev.map(buildResult).join("");
// }
//
//
// // BUILD A RESULT FOR DISPLAY
// function buildResult(result) {
//   return '<div class="result">' +
//             buildTitle(result.Title) +
//             buildPlot(result.Plot) +
//             buildRating(result.imdbRating) +
//          '</div>';
// }
//
//
// // How could we clean up these build functions?
//   // Don't they all kind of look the same?
//   // Could you use that to improve your buildResult?
// function buildTitle(title) {
//   return ('<h2 class="title">' + title  + '</h2>');
// }
//
// function buildPlot(plot) {
//   return ('<p class="description">' + plot  + '</p>');
// }
//
// function buildRating(rating) {
//   return ('<p class="rating">' +  rating  + '</p>');
// }

var input=document.querySelector("#form1");

input.addEventListener("submit", function(){
  event.preventDefault();

  var title = document.querySelector("#searchTitle").value;
  console.log("title:", title);
  document.querySelector("#searchTitle").value="";

  fetch('https://www.omdbapi.com/?t='+title).then(function(response) {
    return response.json();
  }).then(function(data) {
    console.log(data);
    //update the container
    updateMovieContainer(data);

  }).catch(function(data) {
    console.log("data not received: ", data);
  });

});
//end of add listener

function updateMovieContainer(data){

//clearMovieContainer();
console.log("updating movie:",data);
var movies= buildFoundMovies(data);
var mc=document.querySelector("#movieContainer");
mc.innerHTML=movies;
  return ;
}//end of function

function clearMovieContainer(){
  var mCon=document.querySelector("#movieContainer");
  mc.innerHTML="";
  return ;
}//end of function

//builds html elements
function buildFoundMovies(data){

var d="<div class='column   ' > <div class='movie-pos teal-bg small-pad   ' ><h1 class='white'>"+ data.Title+" </h1> <p class='white'> "+data.Plot+"</p> <p class='white'>Ratings: "+data.Ratings[0].Value+"</p> <p class='white'>Source: "+data.Ratings[0].Source+"</p> </div>  </div> ";
// d+= "<div class='column   ' > <div class='movie-pos yellow-bg small-pad   ' ><h1 class='white'>"+ data.Title+" </h1> <p class='white'> "+data.Plot+"</p> </div>  </div> "
// d+= "<div class='column   ' > <div class='movie-pos teal-bg small-pad   ' ><h1 class='white'>"+ data.Title+" </h1> <p class='white'> "+data.Plot+"</p> </div>  </div> ";
 return d;
}//
