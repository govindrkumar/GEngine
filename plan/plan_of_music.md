## so, plan is :
1. I will first create a div for main window
2. then, I will create buttons
3. then, I will define that in js

window -> button design -> css -> functionality design

for pause :
player.pause();

for volume:
player.volume = 0.5;

for playtime:
player.currentTime = 30;

to mere dimag mein ek feature hai jo implement karne wala hu...

main music window ko bada karunga...

aur file select to multiple allow karta hai...aise file jaise hi select hoga...main append karte jaunga files ko...loop se karu ki normal...ye hi samajh n aa rha hai. 



phir. 
jaise hi user play karega....to audio play hoga...jaise hi user next button par dabayega to next index wala song click ho jayega.....

proper music system I guess....


# architecture of playlist system
1. you click on Playlist
2. ye 100px height aur width auto yani jitna iske parent element ka hai utna touch karega
3. it will be scrollable
4. now, jaise hi click karoge ispe to iske parent ki height badhegi, aur grandparent ki v height badhegi
5. ab main yaha par us time jitne files add hue hain sabki list rakhunga jo yaha print karunga....
6. It's the architecture here. 
7. we getting cooked with this music system inside fake webos only....