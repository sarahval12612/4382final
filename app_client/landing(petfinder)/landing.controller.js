/*$(document).ready(function(){

    var petfinderAPI = "http://api.petfinder.com/pet.getRandom?format=json&key=b6ba5a567c1e4f543b3c8a4b7ae0cf76&callback?";

    var petfinderOPT ={

        animal:"dog",
        shelterid:"KY305",
        output:"basic",
        //format:"json"

    };


    function displayInfo(data){

        var infoHTML = '<ul>';
        $.each(data.pet,function(i, pets){
        infoHTML += '<p> ' +  pets.description + ' <p>';
        //infoHTML += '<img src = " ' + photo.options.media.photos.photo + '"></a><li>';
        });
        infoHTML += '</ul>';

        $('#petfinderInfo').html(infoHTML);

        }

    $.getJSON(petfinderAPI,petfinderOPT,displayInfo)
  .done(function(petApiData) { alert('Data retrieved!'); })
  .error(function(err) { alert('Error retrieving data!'); 
});


});

//got from https://stackoverflow.com/questions/31738177/petfinder-api-and-jquery