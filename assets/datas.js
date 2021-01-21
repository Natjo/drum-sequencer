const alfaia_left_1 = new Audio("assets/mp3/alfaia-left-1.mp3");
const alfaia_right_1 = new Audio("assets/mp3/alfaia-right-2.mp3");
const alfaia_right_2 = new Audio("assets/mp3/alfaia-right-2.mp3");

const alfaia_virada_left_1 = new Audio("assets/mp3/alfaia-virada-left-1.mp3");
const alfaia_virada_right_1 = new Audio("assets/mp3/alfaia-virada-right-1.mp3");
const alfaia_virada_right_2 = new Audio("assets/mp3/alfaia-virada-right-2.mp3");

const alfaia_meio_left_1 = new Audio("assets/mp3/alfaia-meio-left-1.mp3");
const alfaia_meio_right_1 = new Audio("assets/mp3/alfaia-meio-right-1.mp3");
const alfaia_meio_right_2 = new Audio("assets/mp3/alfaia-meio-right-2.mp3");
alfaia_meio_left_1.volume = .4;
alfaia_meio_right_1.volume = .4;
alfaia_meio_right_2.volume = .4;

const agbe_l = new Audio("assets/mp3/agbe-left-1.mp3");
agbe_l.volume = .4;
const agbe_r = new Audio("assets/mp3/agbe-right-1.mp3");
agbe_r.volume = .4;

const gongue1 = new Audio("assets/mp3/gongue-top-1.mp3");
gongue1.volume = .15;
const gongue2 = new Audio("assets/mp3/gongue-bottom-1.mp3");
gongue2.volume = .2;

const percu = {
	alfaia: {
		active: null,
		left_1: {
			buffer: null,
			src: 'assets/mp3/alfaia-left-1.mp3'
		},
		right_1:{
			buffer: null,
			src: 'assets/mp3/alfaia-right-1.mp3'
		},
		right_2:{
			buffer: null,
			src: 'assets/mp3/alfaia-right-2.mp3'
		}
	},
	alfaia_medium:{
		left_1: {
			buffer: null,
			src: 'assets/mp3/alfaia-meio-left-1.mp3'
		},
		right_1:{
			buffer: null,
			src: 'assets/mp3/alfaia-meio-right-1.mp3'
		},
		right_2:{
			buffer: null,
			src: 'assets/mp3/alfaia-meio-right-2.mp3'
		}
	},
	alfaia_small:{
		left_1: {
			buffer: null,
			src: 'assets/mp3/alfaia-virada-left-1.mp3'
		},
		right_1:{
			buffer: null,
			src: 'assets/mp3/alfaia-virada-right-1.mp3'
		},
		right_2:{
			buffer: null,
			src: 'assets/mp3/alfaia-virada-right-2.mp3'
		}
	},
	agbe:{
		left: {
			buffer: null,
			src: 'assets/mp3/agbe-left-1.mp3'
		},
		right:{
			buffer: null,
			src: 'assets/mp3/agbe-right-1.mp3'
		}
	},
	gongue:{
		left: {
			buffer: null,
			src: 'assets/mp3/gongue-top-1.mp3'
		},
		right:{
			buffer: null,
			src: 'assets/mp3/gongue-bottom-1.mp3'
		}
	}
}

const arr = [
	{
		name: 'baque 1',
		tempo: 120,
		tracks: [
			{
                name: "Alfaia",
                mute: false,
				left: {
					audio: alfaia_left_1,
					timeline: [
						0,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0,
						0,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0,
						0,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0,
						0,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0,
					]
				},
				right: {
					audio: alfaia_right_1,
					audio_low: alfaia_right_2,
					timeline: [
						2,0,0,0, 0,0,2,0, 0,2,0,0, 0,2,0,0,
						2,0,0,0, 0,0,2,0, 0,2,0,0, 0,2,0,0,
						2,0,0,0, 0,0,2,0, 0,2,0,0, 0,2,0,0,
						2,0,0,0, 0,0,2,0, 0,2,0,0, 0,2,0,0
					],
				}
			},
			{
                name: "Gongué",
                mute: false,
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
                mute: false,
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
				mute: false,
				left: {
					audio: alfaia_left_1,
					timeline: [
						0,0,0,0, 0,0,0,0, 1,0,0,0, 1,0,0,0,
						0,0,0,0, 0,0,0,0, 1,0,0,0, 1,0,0,0,
						0,0,0,0, 0,0,0,0, 1,0,0,0, 1,0,0,0,
						0,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,1
					]
				},
				right: {
					audio: alfaia_right_1,
					audio_low: alfaia_right_2,
					timeline: [
						2,0,0,0, 0,0,0,0, 0,2,0,0, 0,2,0,0,
						2,0,0,0, 0,0,0,0, 0,2,0,0, 0,2,0,0,
						2,0,0,0, 0,0,0,0, 0,2,0,0, 0,2,0,0,
						0,0,2,0, 0,0,2,0, 0,2,0,2, 0,0,2,0
					]
				}
			},
			{
				name: "Gongué",
				mute: false,
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
				mute: false,
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
				mute: true,
				left:{
					audio: alfaia_virada_left_1,
					timeline: [
						0,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0,
						1,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0,
						1,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0,
						1,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,1
					]
				},
				right: {
					audio: alfaia_virada_right_1,
					audio_low: alfaia_virada_right_2,
					timeline: [
						1,0,0,1, 0,2,0,1, 0,2,0,1, 0,2,0,1,
						0,0,0,1, 0,2,0,1, 0,2,0,1, 0,2,0,1,
						0,0,0,1, 0,2,0,1, 0,2,0,1, 0,2,0,1,
						0,0,1,0, 0,0,1,0, 0,1,0,1, 0,0,1,0
					]
				}

			},
			{
				name: "Alfaia meiao",
				mute: true,
				left:{
					audio: alfaia_meio_left_1,
					timeline: [
						0,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0,
						1,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0,
						1,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0,
						1,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,1
					]
				},
				right: {
					audio: alfaia_meio_right_1,
					audio_low: alfaia_meio_right_2,
					timeline: [
						0,0,0,2, 0,0,0,2, 0,0,0,2, 0,2,0,2,
						0,0,0,2, 0,0,0,2, 0,0,0,2, 0,2,0,2,
						0,0,0,2, 0,0,0,2, 0,0,0,2, 0,2,0,2,
						0,0,2,0, 0,0,2,0, 0,2,0,2, 0,0,2,0
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
					audio: alfaia_left_1,
					timeline: [
						0,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0,
						0,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0,
						0,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0,
						0,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0
					]
				},
				right: {
					audio: alfaia_right_1,
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
					audio: alfaia_left_1,
					timeline: [
						0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0,
						0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0,
						0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0,
						0,0,1,0, 0,0,1,0, 0,0,0,0, 1,0,0,0
					]
				},
				right: {
					audio: alfaia_right_1,
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
				name: "alfaia_left_1",
				left: {
					audio: alfaia_left_1,
					timeline: [
						0,1,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0,
						0,1,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0,
						0,0,1,0, 0,0,1,0, 0,0,0,0, 1,0,0,0,
						0,0,1,0, 0,0,1,0, 0,0,0,0, 1,0,0,0
					]
				},
				right: {
					audio: alfaia_right_1,
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
					audio: alfaia_left_1,
					timeline: [
						0,0,0,1, 0,0,0,0, 0,0,0,1, 0,0,0,0,
						0,0,0,1, 0,0,0,0, 0,0,0,1, 0,1,0,1,
						0,0,0,1, 0,0,0,0, 0,0,0,1, 0,0,0,0,
						0,0,0,1, 0,0,0,0, 0,0,0,1, 0,1,0,1,
					]
				},
				right: {
					audio: alfaia_right_1,
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
					audio: alfaia_left_1,
					timeline: [
						0,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,1,
						0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0,
						0,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,1,
						0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0,
					]
				},
				right: {
					audio: alfaia_right_1,
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
					audio: alfaia_left_1,
					timeline: [
						0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0,
						0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0,
						0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0,
						0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0,
					]	
				},
				right: {
					audio: alfaia_right_1,
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