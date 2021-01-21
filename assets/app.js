const btn_play = document.querySelector('.btn-play');
const btn_type = document.querySelectorAll('.sidebar button');
const content = document.querySelector('.content');
const tempo = content.querySelector('.tempo');
const header = content.querySelector('header');
const tracks = content.querySelector('.tracks');
var raf = requestAnimationFrame;
var caf = cancelAnimationFrame;
var req;
var lis;
var type = 0;
/*
const context = new AudioContext();
var loaded = 0;
for(let key in datas){
	window.fetch(datas[key].src)
	.then(response => response.arrayBuffer())
	.then(arrayBuffer => context.decodeAudioData(arrayBuffer))
	.then(audioBuffer => {
		datas[key].audio = audioBuffer;
		loaded++;
		if(loaded == datas.length) init();
	});
}*/

btn_type.forEach(btn => btn.onclick = () => change(btn.value));

const change = value => {
	type = value;
	display();
} 


const display = () => {
    header.innerHTML = `<h1>${arr[type].name}</h1>`;

	var bb = "<ol>";
	var num = 1;
	for(let i = 0; i<64; i++){
		if(i % 4 === 0) {
			bb += `<li>${num}</li>`;
			num++;
			if(num > 4) num = 1;
        }
        else if(i % 2 === 0) {
			bb += `<li>.</li>`;
		}
		else  bb += `<li></li>`;
	}
	bb += "</ol>";
	tempo.innerHTML = bb;
	lis = document.querySelectorAll('.tempo li');

    tracks.innerHTML = '';
	for(let track of arr[type].tracks){
		var po = "";
		for(let i = 0; i<64; i++){
			if(track.right) po += `<li class="double">`;
			else po += `<li>`;
			
			po += `<div class="left">`;
			if(track.left.timeline[i] == 1) po += `<div class="point"></div>`;
			else if(track.left.timeline[i] == 2) po += `<div class="point loud"></div>`;
			po += `</div>`;
			if(track.right){
				po += `<div class="right">`;
				if( track.right.timeline[i] == 1) po += `<div class="point"></div>`;
				else if(track.right.timeline[i] == 2) po += `<div class="point loud"></div>`;
				po += `</div>`;
			}
			
			po += `</li>`;
		}
		const el = document.createElement('div');
		el.className = 'track';
		el.innerHTML = `<div class="name"><button>${track.name}</button></div><ol>${po}</ol>`;
        tracks.append(el);
        const btn = el.querySelector('button');
        if(track.mute) el.classList.add('mute');
        btn.onclick = () => {
            el.classList.toggle('mute');
            if(el.classList.contains('mute')){
                track.mute = true;
            }else{
                track.mute = false;
            }
        }
	}	
}



var speed = 100;
var time = 0;
var inc = 0;
var bpm = 100;

const frame = () =>{
	lis.forEach(li => li.classList.remove('active'));
	lis[time].classList.add('active');
	
	for(let track of arr[type].tracks){
		if(track.left.timeline[time] == 1 && !track.mute) {
			track.left.audio.currentTime = 0;
			track.left.audio.play();
			//play(track.left.audio ,track)
		}
		if(track.left.timeline[time] == 2 && !track.mute) {
			track.left.audio_low.currentTime = 0;
			track.left.audio_low.play();
		}
		if(track.right && track.right.timeline[time] == 1 && !track.mute) {
			track.right.audio.currentTime = 0;
			track.right.audio.play();
		}
		if(track.right && track.right.timeline[time] == 2 && !track.mute) {
			track.right.audio_low.currentTime = 0;
			track.right.audio_low.play();
		}
	}
}

const bpmChange = () => {
	//bpm = input.value;
	speed = Math.round((60*1000 / (bpm*4)) / 16.66);
}
bpmChange();
/*
const timer = () => {
	inc++;
	if (inc >= speed) {
		frame();
		time++;
		if(time >= 64) time = 0;
		inc = 0;
	}
	req = raf(timer);
}*/
let prevTick = 0;  
const timer = () => {
	req = raf(timer);
	let now = Math.round(4*bpm / 60 * Date.now() / 1000);
   	if (now == prevTick) return;
	prevTick = now;
	frame();
	time++;
	if(time >= 64) time = 0;
}
const play = () => {
	req = raf(timer)
};

const stop = () => {
	caf(req)
};

btn_play.onclick = () => {
	btn_play.classList.toggle('play');
	btn_play.classList.contains('play') ? play() : stop();
}

display();