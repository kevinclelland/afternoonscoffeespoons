 // Bank some good vibe options
 const vibes = [
  "'...Cause when I see you, it's like I'm staring down the sun...'",
  "'...It's too late to repent, don't bother with the rent...'",
  "'...Someday I'll wear pyjamas in the daytime...'",
  "'...And I'm here, to remind you, of the mess you left when you went away...'",
  "'...I just want to be who I want to be. Guess that's hard for others to see...'",
  "'...I can't take my eyes off you...'",
  "'...You're calling too late. Too late to be gracious. You do not warrant long goodbyes...'",
  "'...I want to have the same last dream again. The one where I wake up and I'm alive...'",
  "'...be the change you want to see, revolutions don't come easily...'",
  "'...Young Boy, Shoreline, Big World and he's not done...'",
  "'...So this is the verse where I'll say goodbye, and let you fade away. And this is the song that I'll give to you...'",
  "'...and there's still love and that's enough, that's enough, that's enough, that's enough grace...'",
  "'...I'm waiting for blood, to flow to my fingers. I'll be all right when my hands get warm...'",
  "'...I, I'm a new day rising. I'm a brand new sky, to hang the stars upon tonight...'"
];

 // choose a random good vibe

 const interval = setInterval(function() {
  var vibe = vibes[Math.floor(Math.random() * Math.floor(vibes.length))];

// display a good vibe

//document.querySelector(".vibe").append(vibe);
document.querySelector(".vibe").innerHTML = vibe;

}, 5000);
