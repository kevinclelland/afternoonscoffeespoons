 // Bank some good vibe options
 const vibes = [
  "'...Cause when I see you, it's like I'm staring down the sun...'",
  "'...It's too late to repent, don't bother with the rent...'",
  "'...Someday I'll wear pyjamas in the daytime...'",
  "'...And I'm here, to remind you Of the mess you left when you went away...'",
  "'...I just want to be who I want to be Guess that's hard for others to see...'",
  "'...I can't take my eyes off you...'",
  "'...You're calling too late too late to be gracious you do not warrant long goodbyes...'",
  "'...I want to have the same last dream again, The one where I wake up and I'm alive...'"
];

 // choose a random good vibe
var vibe = vibes[Math.floor(Math.random() * Math.floor(vibes.length))];

// display a good vibe
document.querySelector(".vibe").append(vibe);