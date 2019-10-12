/* global monogatari */

// Define the messages used in the game.
monogatari.action ('message').messages ({
	'Help': {
		title: 'Help',
		subtitle: 'Some useful Links',
		body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`
	}
});

// Define the notifications used in the game
monogatari.action ('notification').notifications ({
	'Welcome': {
		title: 'Welcome',
		body: 'This is the Monogatari VN Engine',
		icon: ''
	}
});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration ('credits', {

});

// Define the Particles JS Configurations used in the game
monogatari.action ('particles').particles ({
	snow: {
		'particles': {
			'number': {
				'value': 400,
				'density': {
					'enable': true,
					'value_area': 800
				}
			},
			'color': {
				'value': '#fff'
			},
			'shape': {
				'type': 'circle',
				'stroke': {
					'width': 0,
					'color': '#000000'
				},
				'polygon': {
					'nb_sides': 5
				},
				'image': {
					'src': 'img\/github.svg',
					'width': 100,
					'height': 100
				}
			},
			'opacity': {
				'value': 0.5,
				'random': true,
				'anim': {
					'enable': false,
					'speed': 1,
					'opacity_min': 0.1,
					'sync': false
				}
			},
			'size': {
				'value': 10,
				'random': true,
				'anim': {
					'enable': false,
					'speed': 40,
					'size_min': 0.1,
					'sync': false
				}
			},
			'line_linked': {
				'enable': false,
				'distance': 500,
				'color': '#ffffff',
				'opacity': 0.4,
				'width': 2
			},
			'move': {
				'enable': true,
				'speed': 6,
				'direction': 'bottom',
				'random': false,
				'straight': false,
				'out_mode': 'out',
				'bounce': false,
				'attract': {
					'enable': false,
					'rotateX': 600,
					'rotateY': 1200
				}
			}
		},
		'interactivity': {
			'detect_on': 'canvas',
			'events': {
				'onhover': {
					'enable': true,
					'mode': 'bubble'
				},
				'onclick': {
					'enable': true,
					'mode': 'repulse'
				},
				'resize': true
			},
			'modes': {
				'grab': {
					'distance': 400,
					'line_linked': {
						'opacity': 0.5
					}
				},
				'bubble': {
					'distance': 400,
					'size': 4,
					'duration': 0.3,
					'opacity': 1,
					'speed': 3
				},
				'repulse': {
					'distance': 0,
					'duration': 0.4
				},
				'push': {
					'particles_nb': 4
				},
				'remove': {
					'particles_nb': 2
				}
			}
		},
		'retina_detect': true
	}
});

// Define the images that will be available on your game's image gallery
monogatari.assets ('gallery', {

});

// Define the music used in the game.
monogatari.assets ('music', {
	casual: 'casual.ogg'
});

// Define the voice files used in the game.
monogatari.assets ('voices', {
	dialog_0: 'dialog_0.ogg'
});

// Define the sounds used in the game.
monogatari.assets ('sounds', {
	higurashi: 'higurashi.ogg',
	bells: 'bells.ogg',
	bad: 'bad.ogg'
});

// Define the videos used in the game.
monogatari.assets ('videos', {

});

// Define the images used in the game.
monogatari.assets ('images', {

});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {
	forest: 'forest.png'
});


// Define the Characters
monogatari.characters ({
	'y': {
		name: 'Yui',
		color: '#5bcaff'
	},
	'm': {
		name: 'Mion',
		color: '#006b23',
		directory: 'mion',
		sprites: {
			normal: 'normal.png',
			annoyed: 'annoyed.png',
			shocked: 'shocked.png'
		}
	},
	'r': {
		name: 'Rena',
		color: '#1515f0',
		directory: 'rena',
		sprites: {
			normal: 'normal.png',
			kyute: 'kyute.png',
			angry: 'angry.png',
			crazy: 'crazy.png',
			serious: 'serious.png'
		}
	}
});

monogatari.script ({
	// The game starts here.
	'Start': [
		'show scene forest',
		'play music casual',
		'show character m normal',
		'm Salut salut !',
		'show character r normal right',
		'r Owww~~~ Un nouveau joueur~',
		'show character r normal left',
		'r Ah nan je suis là en fait ^^',
		'play sound higurashi',
		'm Hey Kei-chan ! Tu entends les cigales ?',
		'r Dis, Mii-chan ?',
		'm Hmm ?',
		'show particles snow',
		'show character r kyute left',
		'r Il commence à neiger...',
		'show character m shocked',
		'm Woooah mais on est en Juin !!',
		'show character m annoyed',
		'm Bon arrêtons ces conneries.',
		'hide particles snow',
		'r Mais neige-san est trop meugnone~~ Je veux l\'emmener chez moi ~~~',
		'm Mais Rena tu ne peux pas emmener de la neige chez toi...',
		'show character r crazy left',
		'show character m shocked',
		'stop music',
		'stop sound higurashi',
		'play sound bells',
		'r Tu es sûre ?',
		'm Oui, elle va fondre.',
		'show character r angry left',
		'play sound bad',
		'r MENSONGES !!',
		'end',
		{
			'Input': {
				'Text': 'What is your name?',
				'Validation': function (input) {
					return input.trim ().length > 0;
				},
				'Save': function (input) {
					this.storage ({
						player: {
							name: input
						}
					});
					return true;
				},
				'Revert': function () {
					this.storage ({
						player: {
							name: ''
						}
					});
				},
				'Warning': 'You must enter a name!'
			}
		},
		'y Hi {{player.name}} Welcome to Monogatari!',
		{
			'Choice': {
				'Dialog': 'y Have you already read some documentation?',
				'Yes': {
					'Text': 'Yes',
					'Do': 'jump Yes'
				},
				'No': {
					'Text': 'No',
					'Do': 'jump No'
				}
			}
		}
	],

	'Yes': [
		'y Thats awesome!',
		'y Then you are ready to go ahead and create an amazing Game!',
		'y I can’t wait to see what story you’ll tell!',
		'end'
	],

	'No': [

		'y You can do it now.',

		'show message Help',

		'y Go ahead and create an amazing Game!',
		'y I can’t wait to see what story you’ll tell!',
		'end'
	]
});