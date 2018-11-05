var audioElement = document.createElement('audio');
audioElement.setAttribute('autoplay','autoplay');
var imgs = ['gma.jpg', '20.jpg', 'kanye.gif', 'girls.jpg'];
function playmusic(){
    console.log("here");
    audioElement.setAttribute('src','sound/relax.mp3');
    audioElement.play();
}

function right () {
    
}
var index = 0;
$('#rightButton').click(function(){
    index = index + 1;
    if(index == 4){
        index = 0;
    }
    $('#myImage').attr('src',"image/" + imgs[index]);
    // $('#myImage').css('width', '100px');
});


$('#leftButton').click(function(){
    index = index - 1;
    if(index == -1){
        index = 3;
    }
    $('#myImage').attr('src',"image/" + imgs[index]);
    // $('#myImage').css('width', '100px');
});


$('a').click(function() {

    $(this).toggleClass("active");
    $('p').toggleClass("hide");
  
    if ( $(this).hasClass( "active" ) ) {
      $(this).text( "YOU LOOK GREAT!" );
    } else {
      $(this).text( "click me for a compliment" );
    }
  
  });