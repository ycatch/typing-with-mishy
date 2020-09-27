// # DIFFICULTY MODES #
// English Version

// ## CARD SYNTAX ##
/*
{
  // TEXTS
   words : 'Morning', // words/phrases you want the player to type
  helper : '', // [OPTIONAL] helper texts, primarily for romaji IMEs and things similar to them
  
  // IMAGES
     img : '067', // [OPTIONAL] image you want to display
  folder : 'mishy-emoji', // [OPTIONAL] changes the folder where the image is taken from (defaults to mishy_sticker; see images/game for options)
  custom : 'LINK_TO_IMAGE', // [OPTIONAL] custom link of the image you want to show (recommended to use getPaths() as the base, if a local image. Example: getPaths() + 'resources/images/mishy-thumb.png'; this is required for other languages, such as the English ver.)
  
  // TIME
    time : 30, // [OPTIONAL] sets a custom time for the card in seconds (ignored in Infinity mode)
   pause : true // [OPTIONAL] pauses the time for the card until the player types (ignored in Infinity mode)
},
*/
(function (window, document) {
  'use strict';
  
  if (!window.Mishy) return;
  
  Mishy.mode = new Object();
  Mishy.mode.ja = true;
  
  
  // Easy Mode - "Mishy's Daily Life"
  Mishy.mode.easy = [
    {
      words : 'Morning',
      img : '067',
      pause : true // pause the first card for easy mode, so the player can read the hint and warm up
    },
    
    {
      words : 'Good morning',
      img : '105'
    },
    
    {
      words : 'breakfast',
      img : '003',
      folder : 'mishy-anime'
    },
    
    {
      words : 'bathroom',
      img : '087'
    },
    
    {
      words : 'phone',
      img : '088'
    },
    
    {
      words : "I'm heading out",
      img : '045'
    },
    
    {
      words : 'Have a good day!!',
      img : '101'
    },
    
    {
      words : 'sunny',
      img : '258'
    },
    
    {
      words : 'walking',
      img : '004',
      folder : 'mishy-anime'
    },
    
    {
      words : 'animals',
      img : '238'
    },
    
    {
      words : 'watch',
      img : '049'
    },
    
    {
      words : 'I gotta hurry',
      img : '046'
    },
    
    {
      words : 'car',
      img : '093'
    },
    
    {
      words : 'train',
      img : '047'
    },
    
    {
      words : 'Where am I??',
      img : '050'
    },
    
    {
      words : 'wrong way',
      img : '051'
    },
    
    {
      words : 'Help!',
      img : '084'
    },
    
    {
      words : "It's okay",
      img : '112'
    },
    
    {
      words : 'Thanks',
      img : '065'
    },
    
    {
      words : 'Thank you',
      img : '115'
    },
    
    {
      words : "You're welcome",
      img : '066'
    },
    
    {
      words : 'Hello',
      img : '106'
    },
    
    {
      words : "I'm Mishy!",
      img : '236'
    },
    
    {
      words : 'Nice to meet you',
      img : '119'
    },
    
    {
      words : 'Likewise',
      img : '117'
    },
    
    {
      words : "I'll do my best",
      img : '130'
    },
    
    {
      words : "I'm hungry",
      img : '055'
    },
    
    {
      words : 'embarrassing',
      img : '080'
    },
    
    {
      words : 'lunch',
      img : '244'
    },
    
    {
      words : "I'm stuffed",
      img : '056'
    },
    
    {
      words : 'strolling',
      img : '085'
    },
    
    {
      words : 'standing in line',
      img : '086'
    },
    
    {
      words : "Let's go together",
      img : '134'
    },
    
    {
      words : "It's getting late",
      img : '211'
    },
    
    {
      words : 'Time to hurry up!',
      img : '135'
    },
    
    {
      words : 'phew',
      img : '229'
    },
    
    {
      words : 'hot',
      img : '260'
    },
    
    {
      words : 'drink',
      img : '005',
      folder : 'mishy-anime'
    },
    
    {
      words : 'idea',
      img : '027'
    },
    
    {
      words : 'airplane',
      img : '262'
    },
    
    {
      words : 'goal',
      img : '069'
    },
    
    {
      words : 'Yaaay!!',
      img : '029'
    },
    
    {
      words : 'WHAM',
      img : '076'
    },
    
    {
      words : 'HAHAHA',
      img : '077'
    },
    
    {
      words : 'mad',
      img : '075'
    },
    
    {
      words : "I'm sorry",
      img : '052'
    },
    
    {
      words : 'Evil Mishy',
      img : '103'
    },
    
    {
      words : 'computer',
      img : '095'
    },
    
    {
      words : '*stare*',
      img : '081'
    },
    
    {
      words : 'difficult',
      img : '079'
    },
    
    {
      words : 'Please wait a moment...',
      img : '096'
    },
    
    {
      words : 'Good work',
      img : '043'
    },
    
    {
      words : "I'm looking forward to tonight",
      img : '133'
    },
    
    {
      words : '*excited noises*',
      img : '015',
      folder : 'mishy-anime'
    },
    
    {
      words : 'bow tie',
      img : '167'
    },
    
    {
      words : 'Good evening',
      img : '107'
    },
    
    {
      words : 'siblings',
      img : '054'
    },
    
    {
      words : "Mishy's little sister",
      img : '002',
      folder : 'mishy-emoji'
    },
    
    {
      words : "Mee hee hee, I'm Mishette!",
      img : '255'
    },
    
    {
      words : "Let's do our best!!",
      img : '166'
    },
    
    {
      words : 'smile',
      img : '219'
    },
    
    {
      words : 'shopping',
      img : '090'
    },
    
    {
      words : 'Happy Birthday!!',
      img : '210'
    },
    
    {
      words : 'cake',
      img : '022',
      folder : 'mishy-anime'
    },
    
    {
      words : 'karaoke',
      img : '252'
    },
    
    {
      words : 'dance',
      img : '078'
    },
    
    {
      words : 'movie',
      img : '263'
    },
    
    {
      words : 'popcorn',
      img : '291'
    },
    
    {
      words : '*clapping*',
      img : '020',
      folder : 'mishy-anime'
    },
    
    {
      words : 'dinner',
      img : '207'
    },
    
    {
      words : 'Cheers!!',
      img : '016',
      folder : 'mishy-anime'
    },
    
    {
      words : 'rain',
      img : '259'
    },
    
    {
      words : 'lightning',
      img : '300'
    },
    
    {
      words : "I don't feel too good..",
      img : '097'
    },
    
    {
      words : 'Go to the hospital, Mishy.',
      img : '165'
    },
    
    {
      words : '*siblings fighting*',
      img : '230'
    },
    
    {
      words : "Fine.. I'll go.",
      img : '161'
    },
    
    {
      words : 'doctor',
      img : '223'
    },
    
    {
      words : 'Please get well soon',
      img : '141'
    },
    
    {
      words : 'NOOOO!!',
      img : '222'
    },
    
    {
      words : 'run',
      img : '196'
    },
    
    {
      words : 'fear',
      img : '201'
    },
    
    {
      words : "I'm home",
      img : '102'
    },
    
    {
      words : 'hand washing',
      img : '002',
      folder : 'mishy-anime'
    },
    
    {
      words : 'free time',
      img : '226'
    },
    
    {
      words : 'poking shoji',
      img : '010',
      folder : 'mishy-anime'
    },
    
    {
      words : 'fight!',
      img : '246'
    },
    
    {
      words : 'Mishy News Network',
      img : '277'
    },
    
    {
      words : "9 o'clock",
      img : '174'
    },
    
    {
      words : 'bath',
      img : '091'
    },
    
    {
      words : 'sleepy',
      img : '058'
    },
    
    {
      words : 'bed time',
      img : '059'
    },
    
    {
      words : 'shooting star',
      img : '290'
    },
    
    {
      words : "good night",
      img : '024',
      folder : 'mishy-anime'
    },
    
    {
      words : 'sleeping...',
      img : '221'
    },
    
    {
      words : 'dream',
      img : '224'
    },
    
    {
      words : 'sick day',
      img : '057'
    },
    
    {
      words : 'bye bye',
      img : '184'
    },
    
    {
      words : 'See you again!',
      img : '061'
    },
    
    {
      words : "Let's enjoy Mishy!",
      img : '253'
    }
  ];
  
  
  // Normal Mode - "Mishy's Dream"
  Mishy.mode.normal = [
    {
      words : 'Mishy is sleeping',
      img : '004',
      pause : true // pause the first card for normal mode, so the player can read the hint and warm up
    },
    
    {
      words : 'dreaming of snowboarding',
      img : '012'
    },
    
    {
      words : 'after that he took a dip in the hot springs',
      img : '013'
    },
    
    {
      words : 'drinking milk',
      img : '014'
    },
    
    {
      words : 'very yummy',
      img : '010'
    },
    
    {
      words : "What's that?",
      img : '100'
    },
    
    {
      words : "Wah hee hee, I'll be taking Mishette.",
      img : '103-abduction'
    },
    
    {
      words : 'NOOO!!',
      img : '222'
    },
    
    {
      words : 'wake up',
      img : '001',
      folder : 'mishy-anime'
    },
    
    {
      words : 'That was scary!',
      img : '034'
    },
    
    {
      words : 'I want breakfast..',
      img : '024'
    },
    
    {
      words : 'Misheeette!',
      img : '025-clean'
    },
    
    {
      words : 'Huh?',
      img : '026'
    },
    
    {
      words : 'Where is Mishette!?',
      img : '050'
    },
    
    {
      words : 'That dream...',
      img : '053-dream'
    },
    
    {
      words : "I'll try looking for her.",
      img : '131'
    },
    
    {
      words : "Let's save Mishette!!",
      img : '068'
    },
    
    {
      words : 'driving a car',
      img : '093'
    },
    
    {
      words : 'Excuse me, have you seen Mishette?',
      img : '106-clean'
    },
    
    {
      words : 'AH, MISHY!!',
      img : 'tio-01',
      folder : 'kiseki'
    },
    
    {
      words : 'WOAH!',
      img : '034',
    },
    
    {
      words : '*cough* excuse me.',
      img : 'tio-kao-05',
      folder : 'kiseki'
    },
    
    {
      words : 'I am Tio Plato. Nice to meet you.',
      img : 'tio-03',
      folder : 'kiseki'
    },
    
    {
      words : "(Tio is Mishy's biggest fan)",
      img : '020'
    },
    
    {
      words : "You're searching for Mishette?",
      img : 'tio-kao-01',
      folder : 'kiseki'
    },
    
    {
      words : "Yes! Evil Mishy took her!",
      img : '114'
    },
    
    {
      words : 'Understood. Leave it to me.',
      img : 'tio-kao-02',
      folder : 'kiseki'
    },
    
    {
      words : 'Aeon System, activate!',
      img : 'tio-kao-08',
      folder : 'kiseki'
    },
    
    {
      words : 'amazing',
      img : '124'
    },
    
    {
      words : 'phew',
      img : 'tio-kao-07',
      folder : 'kiseki'
    },
    
    {
      words : 'I sensed two individuals in Mishelam Wonderland.',
      img : 'tio-kao-04',
      folder : 'kiseki'
    },
    
    {
      words : "They're at theme park!?",
      img : '122'
    },
    
    {
      words : "Yes, let's go!",
      img : 'tio-kao-02',
      folder : 'kiseki'
    },
    
    {
      words : 'roger',
      img : '032'
    },
    
    {
      words : 'Mishelam Wonderland',
      img : 'mwl-01',
      folder : 'kiseki'
    },
    
    {
      words : 'Where are they?',
      img : '071'
    },
    
    {
      words : 'Inside the Horror Coaster.',
      img : 'tio-kao-01',
      folder : 'kiseki'
    },
    
    {
      words : 'Horror..?',
      img : '079'
    },
    
    {
      words : 'Horror Coaster',
      img : 'horror-coaster',
      folder : 'kiseki'
    },
    
    {
      words : '*shivering*',
      img : '209'
    },
    
    {
      words : 'Look over there, Mishy!',
      img : 'tio-kao-08',
      folder : 'kiseki'
    },
    
    {
      words : 'EEK',
      img : '154'
    },
    
    {
      words : "Oh, it's Evil Mishy and Mishette!",
      img : '103-found'
    },
    
    {
      words : 'Let Mishette go!',
      img : '075'
    },
    
    {
      words : 'Wah hee hee',
      img : '103'
    },
    
    {
      words : 'Be careful!',
      img : 'tio-kao-08',
      folder : 'kiseki'
    },
    
    {
      words : 'WHAM!',
      img : '076'
    },
    
    {
      words : 'Please help meee!',
      img : '129'
    },
    
    {
      words : '...I told you to be careful.',
      img : 'tio-04',
      folder : 'kiseki'
    },
    
    {
      words : 'Ether Buster!',
      img : 'tio-scraft-01',
      folder : 'kiseki'
    },
    
    {
      words : 'Thanks for saving me!',
      img : '153-clean'
    },
    
    {
      words : "Let's do our best, Mishy!",
      img : 'tio-to-mishy',
      folder : 'kiseki'
    },
    
    {
      words : 'Zero Field',
      img : 'tio-scraft-02',
      folder : 'kiseki'
    },
    
    {
      words : 'Thanks, Tio!',
      img : '186-zero-field'
    },
    
    {
      words : 'Leave it to me!',
      img : '042-clean'
    },
    
    {
      words : '*moving quickly*',
      img : '170'
    },
    
    {
      words : '*spinning*',
      img : '303-clean'
    },
    
    {
      words : 'Mishy Rocket!',
      img : '303-rocket'
    },
    
    {
      words : 'Mishette Punch!',
      img : '103-finisher'
    },
    
    {
      words : 'Wha!?',
      img : '188'
    },
    
    {
      words : 'K.O.',
      img : '103-ko'
    },
    
    {
      words : 'Status, all green.',
      img : 'tio-kao-05',
      folder : 'kiseki'
    },
    
    {
      words : 'Yay!',
      img : '255-clean'
    },
    
    {
      words : 'Nice punch, Mishette!',
      img : '157'
    },
    
    {
      words : 'Thank goodness...',
      img : 'tio-kao-10',
      folder : 'kiseki'
    },
    
    {
      words : 'Congrats!!',
      img : '182'
    },
    
    {
      words : 'Wa',
      img : '257-o'
    },
    
    {
      words : 'ke',
      img : '257-ki'
    },
    
    {
      words : 'up',
      img : '257-te'
    },
    
    {
      words : 'Wake up, Mishy.',
      img : '257-clean'
    },
    
    {
      words : 'Huh?',
      img : '067-clean'
    },
    
    {
      words : 'It was just a dream...',
      img : '072-clean'
    },
    
    {
      words : 'eating breakfast',
      img : '003',
      folder : 'mishy-anime'
    },
    
    {
      words : 'I wonder where Tio is..?',
      img : '030',
    },
    
    {
      words : 'See you later!',
      img : '101-clean'
    },
    
    {
      words : 'Take care!',
      img : '044-clean'
    },
    
    {
      words : 'Please wait!',
      img : 'tio-05-hidden',
      folder : 'kiseki'
    },
    
    {
      words : 'You forgot your lunch.',
      img : 'tio-05',
      folder : 'kiseki'
    },
    
    {
      words : "It wasn't a dream!?",
      img : '188-clean'
    },
    
    {
      words : 'Happy Ending',
      img : '021'
    }
  ];
  
  
  // Hard Mode
  Mishy.mode.hard = [
    
  ];
  
  
  // Nightmare Mode
  Mishy.mode.nightmare = [
    
  ];
  
  
  // Infinity Mode
  // contains exclusive infinity mode cards + all cards from prior modes (order is completely randomized)
  Mishy.mode.infinity = [
    
  ].concat(Mishy.mode.easy, Mishy.mode.normal, Mishy.mode.hard, Mishy.mode.nightmare);
  
  
}(window, document));