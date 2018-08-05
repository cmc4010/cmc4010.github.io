
function updateTimeDifference(){
  var start = document.getElementById("start-time").value;
  start = new Date(start);
  var end = document.getElementById("end-time").value
  end = new Date(end);
  var timeDifference = ( (end - start ) / 1000 / 60 / 60 );
  document.getElementById("result").innerHTML = timeDifference;
}

window.addEventListener('load', () => {
  document.getElementById("subButton").addEventListener('click', () => {
    updateTimeDifference();
  });
});
