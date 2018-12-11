//runs after all content is loaded on page 
window.onload = function() {
    document.querySelector(".loader").style.display = 'none';
    $("#purple").hover(function(){
        $("#purpletext").text("IA fosters vibrant networks of graduate and undergraduate students from our member institutions. We aim for these networks to be a collaborative, sustainable, and action-oriented conduit for changing academic cultures and practices and strengthening civic life.");
    },function(){
        $("#purpletext").text("");
    });
};

  // .on('exit', el => {
  //   el.style.opacity = 0.5;
  // });

const doSomething = function() {
    cosole.log('did something');
};



