

// get data from api
var AllMovies = [];
getMovies("movie/now_playing");
async function getMovies(category) {
  let response = await fetch(
    `https://api.themoviedb.org/3/${category}?api_key=6561cb2930d16b56c3b86696d0405426`
  );
  let moviesDetails = await response.json();
  AllMovies = moviesDetails.results;
  displayMovies();
}

function displayMovies() {
  var temp = "";
  for (var i = 0; i < AllMovies.length; i++) {
    temp += `
                <div class="col-md-6 col-lg-4 my-3 px-3">
                    <div class="category position-relative overflow-hidden">
                        <img src="https://image.tmdb.org/t/p/w500${AllMovies[i].poster_path}" class="img-fluid" alt="${AllMovies[i].title}">
                        <div class="layer p-3 text-center d-flex justify-content-center align-items-center flex-column ">
                            <h2 class="my-2">${AllMovies[i].title}</h2>
                            <p class="my-2">${AllMovies[i].overview}</p>
                            <p>${AllMovies[i].vote_average}</p>
                            <p>${AllMovies[i].release_date}</p>
                        </div>
                    </div>
                </div>
                `;
  }
  document.getElementById("rowData").innerHTML = temp;
}

/* search api */
let search = document.getElementById("movies");
$("#movies").keyup(function () {
  getMoviesByWord();
});

async function getMoviesByWord() {
  movieName = search.value;
  let response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=6561cb2930d16b56c3b86696d0405426&query=${movieName}`
  );
  let moviesDetails = await response.json();
  AllMovies = moviesDetails.results;
  displayMovies();
}


 // contact us validation
$(".name").keyup(function validateName(){
    let val = $(this).val()
    let RegexName =/^[a-zA-Z ]{2,30}$/
    if (!RegexName.test(val) || val==""){
    $(this).next().removeClass("d-none")
   }
   else 
   {
     $(this).next().addClass("d-none")  
    }

})

$(".email").keyup(function  validateEmail(){
    let val = $(this).val()
    let regexEmail =/@[a-z]{5,10}(\.com)$/


    if (!regexEmail.test(val)|| val==""){
        $(this).next().removeClass("d-none")  
        }
        else
         {
        $(this).next().addClass("d-none")  
    }
        
})

$(".phone").keyup(function validatePhone(){
    let val = $(this).val()
    let regexPhone = /^(01)[2,5,1,0][0-9]{8}$/

    if (!regexPhone.test(val)|| val==""){
        $(this).next().removeClass("d-none")  
        }
        else 
        {
        $(this).next().addClass("d-none") 
    }
})

$(".age").keyup(function  validateAge(){
    let val = $(this).val()
    let RegexAge =/^[1-7][0-9]|(80)$/
    if (!RegexAge.test(val)|| val==""){
        $(this).next().removeClass("d-none")
        }
        else
         {
          $(this).next().addClass("d-none")  
    }
    
})

$(".password").keyup(function validatePassword(){
    let val = $(this).val()
    let RegexPassword =/^[0-9]{6,15}$/
    if (!RegexPassword.test(val)|| val==""){
        $(this).next().removeClass("d-none")

    }else {
        $(this).next().addClass("d-none")
    }
})

$(".repassword").keyup(function validateRepassword(){

  if (repassword.value==paswored.value){
    
      $(this).next().addClass("d-none")

  }else {
    $(this).next().removeClass("d-none")
  }
})
