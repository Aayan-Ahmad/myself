function test()
{
  if (check === 0)
  {
    var andrew = new Audio("andrew.mp3");
    document.querySelector(".my-dp").setAttribute("src", "https://i.guim.co.uk/img/media/59c1b14b1677cc33e27967cf6b11c8fd99a93761/0_105_1080_648/master/1080.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=655a8ae5af42857c3b3b576d8e922139");
    andrew.play();
    check += 1;
  }
};
document.querySelector(".my-dp").addEventListener("click", test);
var check = 0;
