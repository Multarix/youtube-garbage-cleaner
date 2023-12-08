// ==UserScript==
// @name         Hide Youtube Garbage
// @version      1.2
// @description  Removes shorts or other absolute garbage that youtube thinks we care about.
// @author       Multarix
// @supportURL   https://github.com/Multarix/youtube-garbage-cleaner/issues
// @homepageURL  https://github.com/Multarix/youtube-garbage-cleaner/
// @match        http://*.youtube.com/*
// @match        https://*.youtube.com/*
// @match        *youtube*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        none
// @downloadURL  https://github.com/Multarix/youtube-garbage-cleaner/raw/master/script.user.js
// @updateURL     https://github.com/Multarix/youtube-garbage-cleaner/raw/master/script.user.js
// ==/UserScript==

let garbageCleanerinterval;
let count = 0;

const garbagePile = ["YouTube Premium", "Shorts", "Trending", "Music", "News", "Sport", "Learning", "Fashion & beauty", "Youtube Kids", "Gaming"];

const garbageCleaner = async () => {
	console.log("Attempting disposal of garbage...");
    count++;

    for(const garbage of garbagePile){
		document.querySelectorAll(`[title='${garbage}']`).forEach(x => x.remove());
		document.querySelectorAll(`[href*='premium']`).forEach(x => x.remove());
		document.querySelectorAll(`[href*='youtubekids']`).forEach(x => x.remove());
	}


	if(document.querySelectorAll(`[title='${garbagePile[1]}']`).length > 0){
		clearInterval(garbageCleanerinterval);
		console.log("Garbage disposed of successfully!");
	}


    if(count >= 20){
		clearInterval(garbageCleanerinterval);
        console.error("GARBAGE WAS UNABLE TO BE DISPOSED OF");
    }
};


window.addEventListener('load', function(){
	garbageCleanerinterval = setInterval(garbageCleaner, 1000);
}, false);
