$(document).ready(function(){
  let timer_seconds = 0;
  let interval;

  $("#start").click(function(){
      start_timer();
  });

  $("#stop").click(function(){
      stop_timer();
  });

  function start_timer() {
    alert("I start the timer.");
  }

  function stop_timer() {
    alert("I stop the timer.");
  }
})
