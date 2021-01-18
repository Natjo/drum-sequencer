const kick = new Audio("assets/mp3/alfaia-d.mp3");
const tom = new Audio("assets/mp3/alfaia-g.mp3");

const alfaia_virada_l = new Audio("assets/mp3/alfaia-virada-left.mp3");
const alfaia_virada_r = new Audio("assets/mp3/alfaia-virada-r-0.mp3");
const alfaia_virada_r_loud = new Audio("assets/mp3/alfaia-virada-right.mp3");

const alfaia_meio_l = new Audio("assets/mp3/alfaia-meio-left.mp3");
const alfaia_meio_r = new Audio("assets/mp3/alfaia-meio-right.mp3");

const agbe_l = new Audio("assets/mp3/agbe-left.mp3");
agbe_l.volume = .5;
const agbe_r = new Audio("assets/mp3/agbe-right.mp3");
agbe_r.volume = .5;

const gongue1 = new Audio("assets/mp3/gongue1.mp3");
gongue1.volume = .15;
const gongue2 = new Audio("assets/mp3/gongue2.mp3");
gongue2.volume = .2;

const btn_play = document.querySelector('.btn-play');
var raf = window.requestAnimationFrame;
var caf = window.cancelAnimationFrame;
var req;
var lis;
const tracks = document.querySelector('.tracks');
const btn_type = document.querySelectorAll('.sidebar button');
btn_type.forEach(btn => btn.onclick = () => change(btn.value));
var type = 0;


const arr = [
	{
		name: 'baque 1',
		tempo: 120,
		tracks: [
			{
				name: "Alfaia",
				left: {
					audio: tom,
					timeline: [
						0,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0,
						0,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0,
						0,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0,
						0,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0,
					]
				},
				right: {
					audio: kick,
					timeline: [
						1,0,0,0, 0,0,1,0, 0,1,0,0, 0,1,0,0,
						1,0,0,0, 0,0,1,0, 0,1,0,0, 0,1,0,0,
						1,0,0,0, 0,0,1,0, 0,1,0,0, 0,1,0,0,
						1,0,0,0, 0,0,1,0, 0,1,0,0, 0,1,0,0
					],
				}
			},
			{
				name: "Gongué",
				left: {
					audio: gongue1,
					timeline: [
						0,1,0,0, 1,0,1,0, 0,1,0,0, 1,0,1,0,
						0,1,0,0, 1,0,1,0, 0,1,0,0, 1,0,1,0,
						0,1,0,0, 1,0,1,0, 0,1,0,0, 1,0,1,0,
						0,1,0,0, 1,0,1,0, 0,1,0,0, 1,0,1,0
					]
				}
			},
			{
				name: "Agbé",
				left: {
					audio: agbe_l,
					timeline: [
						1,0,0,1, 0,0,1,0, 1,0,0,1, 0,0,1,0,
						1,0,0,1, 0,0,1,0, 1,0,0,1, 0,0,1,0,
						1,0,0,1, 0,0,1,0, 1,0,0,1, 0,0,1,0,
						1,0,0,1, 0,0,1,0, 1,0,0,1, 0,0,1,0
					]
				},
				right: {
					audio: agbe_r,
					timeline: [
						0,0,1,0, 1,0,0,1, 0,0,1,0, 1,0,0,1,
						0,0,1,0, 1,0,0,1, 0,0,1,0, 1,0,0,1,
						0,0,1,0, 1,0,0,1, 0,0,1,0, 1,0,0,1,
						0,0,1,0, 1,0,0,1, 0,0,1,0, 1,0,0,1
					]
				}
			}

		]
	},
	{
		name: 'baque 2',
		tempo: 120,
		tracks: [
			{
				name: "Alfaia",
				left: {
					audio: tom,
					timeline: [
						0,0,0,0, 0,0,0,0, 1,0,0,0, 1,0,0,0,
						0,0,0,0, 0,0,0,0, 1,0,0,0, 1,0,0,0,
						0,0,0,0, 0,0,0,0, 1,0,0,0, 1,0,0,0,
						0,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,1
					]
				},
				right: {
					audio: kick,
					timeline: [
						1,0,0,0, 0,0,0,0, 0,1,0,0, 0,1,0,0,
						1,0,0,0, 0,0,0,0, 0,1,0,0, 0,1,0,0,
						1,0,0,0, 0,0,0,0, 0,1,0,0, 0,1,0,0,
						0,0,1,0, 0,0,1,0, 0,1,0,1, 0,0,1,0
					]
				}
			},
			{
				name: "Gongué",
				left: {
					audio: gongue1,
					timeline: [
						1,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0,
						1,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0,
						1,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0,
						1,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0
					],
				},
				right: {
					audio: gongue2,
					timeline: [
						0,0,1,0, 0,0,1,0, 0,1,0,1, 0,0,1,0,
						0,0,1,0, 0,0,1,0, 0,1,0,1, 0,0,1,0,
						0,0,1,0, 0,0,1,0, 0,1,0,1, 0,0,1,0,
						0,0,1,0, 0,0,1,0, 0,1,0,1, 0,0,1,0,
					],
				}
			},
			{
				name: "agbe",
				left: {
					audio: agbe_l,
					timeline: [
						1,0,0,1, 0,0,1,0, 1,0,0,1, 0,0,1,0,
						1,0,0,1, 0,0,1,0, 1,0,0,1, 0,0,1,0,
						1,0,0,1, 0,0,1,0, 1,0,0,1, 0,0,1,0,
						1,0,0,1, 0,0,1,0, 1,0,0,1, 0,0,1,0
					]
				},
				right: {
					audio: agbe_r,
					timeline: [
						0,0,1,0, 1,0,0,1, 0,0,1,0, 1,0,0,1,
						0,0,1,0, 1,0,0,1, 0,0,1,0, 1,0,0,1,
						0,0,1,0, 1,0,0,1, 0,0,1,0, 1,0,0,1,
						0,0,1,0, 1,0,0,1, 0,0,1,0, 1,0,0,1
					]
				}
			},
			{
				name: "Alfaia virada",
				left:{
					audio: alfaia_virada_l,
					timeline: [
						0,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0,
						1,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0,
						1,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0,
						1,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,1
					]
				},
				right: {
					audio: alfaia_virada_r,
					audio_low: alfaia_virada_r_loud,
					timeline: [
						1,0,0,1, 0,2,0,1, 0,2,0,1, 0,2,0,1,
						0,0,0,1, 0,2,0,1, 0,2,0,1, 0,2,0,1,
						0,0,0,1, 0,2,0,1, 0,2,0,1, 0,2,0,1,
						0,0,1,0, 0,0,1,0, 0,1,0,1, 0,0,1,0
					]
				}

			}
		]
	},
	{
		name: 'Arasto',
		tempo: 120,
		tracks: [
			{
				name: "Alfaia",
				left: {
					audio: tom,
					timeline: [
						0,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0,
						0,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0,
						0,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0,
						0,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0
					]
				},
				right: {
					audio: kick,
					timeline: [
						1,0,0,0, 0,1,0,0, 0,1,0,0, 0,1,0,0,
						1,0,0,0, 0,1,0,0, 0,1,0,0, 0,1,0,0,
						1,0,0,0, 0,1,0,0, 0,1,0,0, 0,1,0,0,
						1,0,0,0, 0,1,0,0, 0,1,0,0, 0,1,0,0
					]
				}
			},

			{
				name: "gongue1",
				left: {
					audio: gongue1,
					timeline: [
						1,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0,
						1,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0,
						1,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0,
						1,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0
					]
				},
				right: {
					audio: gongue2,
					timeline: [
						0,0,1,0, 0,0,1,0, 0,1,0,1, 0,0,1,0,
						0,0,1,0, 0,0,1,0, 0,1,0,1, 0,0,1,0,
						0,0,1,0, 0,0,1,0, 0,1,0,1, 0,0,1,0,
						0,0,1,0, 0,0,1,0, 0,1,0,1, 0,0,1,0
					]	
				}
				
			}
		]
	},
	{
		name: 'test',
		tempo: 120,
		tracks: [
			{
				name: "Alfaia",
				left: {
					audio: tom,
					timeline: [
						0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0,
						0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0,
						0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0,
						0,0,1,0, 0,0,1,0, 0,0,0,0, 1,0,0,0
					]
				},
				right: {
					audio: kick,
					timeline: [
						1,0,0,1, 0,0,0,0, 0,1,0,1, 0,0,0,0,
						1,0,0,1, 0,0,0,0, 0,1,0,1, 0,0,0,0,
						1,0,0,1, 0,0,0,0, 0,1,0,1, 0,0,0,0,
						1,0,0,0, 1,0,0,0, 0,1,0,1, 0,0,0,0
					]	
				}
			},
	
			{
				name: "gongue2",
				left: {
					audio: gongue2,
					timeline: [
						0,1,0,0, 1,0,1,0, 0,1,0,0, 1,0,1,0,
						0,1,0,0, 1,0,1,0, 0,1,0,0, 1,0,1,0,
						0,1,0,0, 1,0,1,0, 0,1,0,0, 1,0,1,0,
						0,1,0,0, 1,0,1,0, 0,1,0,0, 1,0,1,0
					]
				}

			}

		]
	},
	{
		name: 'baque 3',
		tempo: 120,
		tracks: [
			{
				name: "tom",
				left: {
					audio: tom,
					timeline: [
						0,1,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0,
						0,1,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0,
						0,0,1,0, 0,0,1,0, 0,0,0,0, 1,0,0,0,
						0,0,1,0, 0,0,1,0, 0,0,0,0, 1,0,0,0
					]
				},
				right: {
					audio: kick,
					timeline: [
						1,0,0,1, 0,0,1,0, 0,1,0,1, 0,0,0,0,
						1,0,0,1, 0,0,1,0, 0,1,0,1, 0,0,0,0,
						1,0,0,0, 1,0,0,0, 0,1,0,1, 0,0,0,0,
						1,0,0,0, 1,0,0,0, 0,1,0,1, 0,0,0,0
					]
				}
			},

			{
				name: "Gongue",
				left: {
					audio: gongue1,
					timeline: [
						1,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0,
						1,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0,
						1,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0,
						1,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0
					]
				},
				right: {
					audio: gongue2,
					timeline: [
						0,0,1,0, 0,0,1,0, 0,1,0,1, 0,0,1,0,
						0,0,1,0, 0,0,1,0, 0,1,0,1, 0,0,1,0,
						0,0,1,0, 0,0,1,0, 0,1,0,1, 0,0,1,0,
						0,0,1,0, 0,0,1,0, 0,1,0,1, 0,0,1,0
					]
				}
			}
		]
	},
	{
		name: 'Coco virado',
		tempo: 120,
		tracks: [
			{
				name: "Alfaia",
				left: {
					audio: tom,
					timeline: [
						0,0,0,1, 0,0,0,0, 0,0,0,1, 0,0,0,0,
						0,0,0,1, 0,0,0,0, 0,0,0,1, 0,1,0,1,
						0,0,0,1, 0,0,0,0, 0,0,0,1, 0,0,0,0,
						0,0,0,1, 0,0,0,0, 0,0,0,1, 0,1,0,1,
					]
				},
				right: {
					audio: kick,
					timeline: [
						1,0,0,0, 0,0,0,0, 1,1,0,0, 0,0,0,0,
						1,0,0,0, 0,0,0,0, 1,1,0,0, 0,0,1,0,
						1,0,0,0, 0,0,0,0, 1,1,0,0, 0,0,0,0,
						1,0,0,0, 0,0,0,0, 1,1,0,0, 0,0,1,0,
					]	
				}
			},

			{
				name: "Gongué",
				left: {
					audio: gongue2,
					timeline: [
						1,0,0,1, 0,0,1,0, 1,0,0,1, 0,0,1,0,
						1,0,0,1, 0,0,1,0, 1,0,0,1, 0,0,1,0,
						1,0,0,1, 0,0,1,0, 1,0,0,1, 0,0,1,0,
						1,0,0,1, 0,0,1,0, 1,0,0,1, 0,0,1,0,
					]
				}
			}

		]
	},
	{
		name: 'Baque de parada',
		tempo: 120,
		tracks: [
			{
				name: "Alfaia",
				left: {
					audio: tom,
					timeline: [
						0,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,1,
						0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0,
						0,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,1,
						0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0,
					]
				},
				right: {
					audio: kick,
					timeline: [
						1,0,0,1, 0,1,0,1, 0,1,0,1, 0,0,1,0,
						1,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0,
						1,0,0,1, 0,0,1,0, 0,1,0,1, 0,0,1,0,
						1,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0,
					]
				}
			},
			{
				name: "Gongué",
				left: {
					audio: gongue1,
					timeline: [
						1,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0,
						1,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0,
						1,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0,
						1,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0,
					]
				},
				right: {
					audio: gongue2,
					timeline: [
						0,0,1,0, 0,0,1,0, 0,1,0,1, 0,0,1,0,
						0,0,1,0, 0,0,1,0, 0,1,0,1, 0,0,1,0,
						0,0,1,0, 0,0,1,0, 0,1,0,1, 0,0,1,0,
						0,0,1,0, 0,0,1,0, 0,1,0,1, 0,0,1,0,
					]
				}
			}
		]
	},
	{
		name: 'pere',
		tempo: 120,
		tracks: [
			{
				name: "Alfaia",
				left: {
					audio: tom,
					timeline: [
						0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0,
						0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0,
						0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0,
						0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0,
					]	
				},
				right: {
					audio: kick,
					timeline: [
						1,0,0,1, 0,0,0,0, 1,0,0,1, 0,0,0,0,
						1,0,0,1, 0,1,0,0, 1,0,0,1, 0,0,0,0,
						1,0,0,1, 0,0,0,0, 1,0,0,1, 0,0,0,0,
						1,0,0,1, 0,1,0,0, 1,0,0,1, 0,0,0,0,
					]
				}
			},
			{
				name: "Gongué",
				left: {
					audio: gongue2,
					timeline: [
						1,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0,
						1,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0,
						1,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0,
						1,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0,
					]
				}
			}
		]
	},
	
]


const change = value => {
	type = value;
	display();
} 

const tempo = document.querySelector('.tempo');

const display = () => {
	tracks.innerHTML = `<h1>${arr[type].name}</h1>`;
	
	const tempo = document.createElement('div');
	tempo.className = 'tempo';
	var bb = "<ol>";
	var num = 1;
	for(let i = 0; i<64; i++){
		if(i % 4 === 0) {
			bb += `<li>${num}</li>`;
			num++;
			if(num > 4) num = 1;
		}
		else  bb += `<li></li>`;
		
	}
	bb += "</ol>";
	tempo.innerHTML = bb;
	tracks.append(tempo);
	lis = document.querySelectorAll('.tempo li');

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
	}	
}

var inc = 0;
var time = 0;
const timer = () => {
	inc = inc + 0.1;
	if (inc >= 0.8) {
		lis.forEach(li => li.classList.remove('active'));
		lis[time].classList.add('active');
		for(let track of arr[type].tracks){
			if(track.left.timeline[time] == 1) {
				track.left.audio.currentTime = 0;
				track.left.audio.play();
			}
			if(track.left.timeline[time] == 2) {
				track.left.audio_low.currentTime = 0;
				track.left.audio_low.play();
			}
			if(track.right && track.right.timeline[time] == 1) {
				track.right.audio.currentTime = 0;
				track.right.audio.play();
			}
			if(track.right && track.right.timeline[time] == 2) {
				track.right.audio_low.currentTime = 0;
				track.right.audio_low.play();
			}
		}
		time++;
		if(time >= 64) time = 0;
		inc = 0;
	}
	 req = raf(timer);
}

const play = () => req = raf(timer);

const stop = () => caf(req);

btn_play.onclick = () => {
	btn_play.classList.toggle('play');
	btn_play.classList.contains('play') ? play() : stop();
}

display();