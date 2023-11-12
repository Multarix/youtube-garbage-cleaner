// ==UserScript==
// @name         Hide Youtube Garbage
// @version      1.1
// @description  Removes shorts or other garbage from youtube Tabs
// @author       Multarix
// @match        http://*.youtube.com/*
// @match        https://*.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        none
// @run-at       document-idle
// ==/UserScript==

let garbageCleanerinterval;

const garbagePile = ["YouTube Premium", "Shorts", "Trending", "Music", "News", "Sport", "Learning", "Fashion & beauty", "Youtube Kids"];

const garbageCleaner = () => {
	console.log("Attempting disposal of garbage...");
	if(document.querySelectorAll(`[title='${garbagePile[2]}']`).length > 0){
		clearInterval(garbageCleanerinterval);
		console.log("Garbage disposed of successfully!");
	}


	for(const garbage of garbagePile){
		document.querySelectorAll(`[title='${garbage}']`).forEach(x => x.remove());
		document.querySelectorAll(`[href*='premium']`).forEach(x => x.remove());
		document.querySelectorAll(`[href*='youtubekids']`).forEach(x => x.remove());
	}
};


window.addEventListener('load', function(){
	garbageCleanerinterval = setInterval(garbageCleaner, 1000);
}, false);