var andrew_theme = new Audio('andrew.mp3');
var errorHandel = 0;


document.querySelector(".my-dp").addEventListener("click", function()
{
  if (errorHandel === 0)
  {
    errorHandel = 1;
    andrew_theme.play();
    setTimeout(function()
    {
      document.querySelector(".my-dp").setAttribute("src", "https://media.tenor.com/wejEY_dJqOgAAAAd/walk-andrew-tate-walk.gif");
    }, 2000);

    setTimeout(function()
    {
      document.querySelector(".my-dp").setAttribute("src", "images/profile-pic.jpg");
      errorHandel = 0;
    }, 30000);
  }
})
