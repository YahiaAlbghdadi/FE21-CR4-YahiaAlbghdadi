// movies arrey of objects start
var movies = [{
        name: "Movie Name",
        description: "A short description",
        image: "https://tse4.mm.bing.net/th?id=OIP.gL0LcBOnar7-MoqG3t5eGgAAAA&pid=Api&P=0&w=300&h=300",
        like: 0
    }, {
        name: "Movie Name",
        description: "A short description",
        image: "https://tse1.mm.bing.net/th?id=OIP.VpwOMmG9vZyJ2s9N8mKASwHaKD&pid=Api&P=0&w=300&h=300",
        like: 0
    }, {
        name: "Movie Name",
        description: "A short description",
        image: "https://tse1.mm.bing.net/th?id=OIP.PjgdCU9jlgwFE31i7jlTcgHaKI&pid=Api&P=0&w=300&h=300",
        like: 0
    }, {
        name: "Movie Name",
        description: "A short description",
        image: "https://tse3.mm.bing.net/th?id=OIP.vr1BwYYu2S1POiYYO9_sowHaK9&pid=Api&P=0&w=300&h=300",
        like: 0
    }, {
        name: "Movie Name",
        description: "A short description",
        image: "https://tse4.mm.bing.net/th?id=OIP.1AG1Du0AAM-DUoNROwh-oAHaOG&pid=Api&P=0&w=300&h=300",
        like: 0
    }, {
        name: "Movie Name",
        description: "A short description",
        image: "https://cdn.pixabay.com/photo/2017/08/27/23/59/marvel-2688068__340.jpg",
        like: 0
    }]
    // movies arrey of objects end

// print movies in html -
function printMovies() {
    for (let movie of movies) {
        document.getElementById("movies").innerHTML += `
    <div class="coverDiv m-4 row col-sm-12 col-md-8 col-lg-4 ">
                <div class="col-5">
                    <img src=${movie.image} 
                    class="movieImg " alt="...">
                </div>

                <div class="desDiv position-relative col-7">
                    <h3 class="">${movie.name}</h3>
                    <p class="fs-6">${movie.description}</p>
                    <div class="row offset-5 text-center likeSection  position-absolute bottom-0 me-1 align-items-center">
                    
                        <p class="h3 col-5 text-success">like </p>
                        <h2 class="btn lButton col-4 ">&#128077;&#127996</h2>
                        <p class="rounded-circle likeCircle bg-success p-2 h4 text-white col-3 text-center">${movie.like}</p>
                    </div>
                </div>
            </div>
        </div>`
    }
}
printMovies()
    // print movies in html 



// like function -
var likeButton = document.getElementsByClassName("lButton");

function likeMe() {
    for (let i = 0; i < likeButton.length; i++) {
        likeButton[i].addEventListener("click", function() {
            likeNr(i)
        })
    }
}
likeMe()

function likeNr(i) {
    movies[i].like += 1;
    document.getElementsByClassName("likeCircle")[i].innerHTML = movies[i].like;

}
// like function -
// sorting functions -
document.getElementsByClassName("mostL")[0].addEventListener("click", mostLiked);
document.getElementsByClassName("lessL")[0].addEventListener("click", lessLiked)


function mostLiked() {
    movies.sort((a, b) => {
        return b.like - a.like;

    })
    document.getElementById("movies").innerHTML = "";
    printMovies()
    likeMe()

    return
}

function lessLiked() {
    movies.sort((a, b) => {
        return a.like - b.like;

    })
    document.getElementById("movies").innerHTML = "";
    printMovies()
    likeMe()
    return
}

// sorting functions