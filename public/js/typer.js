var i = 0;
var txt = 'I am Aniket Prasad a backend developer and android app Developer.';
var speed = 90;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("greet").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter()


/*Collapse Navbar*/
$('.navbar-nav>li>a').on('click', function(){
  $('.navbar-collapse').collapse('hide');
});