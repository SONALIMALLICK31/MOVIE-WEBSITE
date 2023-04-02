$(document).ready(function(){

  var apikey = "251aecb1"

  $("#mvform").submit(function(event){
    event.preventDefault()

    var movie =$("#movie").val()

    var result=""

    var url  ="http://www.omdbapi.com/?apikey=" +apikey

    $.ajax({
      method:'GET',
      url:url+"&t="+movie,
      success:function(data){
        console.log(data)


        result= `
        
        <div class="movieposter">
        <img style = width="300" height="300"  src="${data.Poster}" >
        </div>

        <div class="moviedetails">
        <h2>Movie Name:${data.Title}</h2>
        <h2>Released Date:${data.Released}</h2>
        <h2>Runtime:${data.Runtime}</h2>
        <h2>Genre:${data.Genre}</h2>
        <h2>Director:${data.Director}</h2>
        <h2>Actors:${data.Actors}</h2>

        </div>
        `;
        $("#result").html(result);
        
      }
    })
  })
})