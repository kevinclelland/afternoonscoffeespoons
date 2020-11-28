 // Bank some good vibe options
 const vibes = [
  "...Cause when I see you, it's like I'm staring down the sun...",
  "...It's too late to repent, don't bother with the rent...",
  "...Someday I'll wear pyjamas in the daytime...",
  "...I want to have the same last dream again, The one where I wake up and I'm alive..."
];

 // choose a random good vibe
var vibe = vibes[Math.floor(Math.random() * Math.floor(vibes.length))];

// display a good vibe
document.querySelector(".vibe").append(vibe);