import sampleSize from 'lodash/sampleSize';

export const getRandomNames = async (number = 25) => {
  try {
    const controller = new AbortController();
    const { signal } = controller;
    let cancelTimer = setTimeout(() => controller.abort(), 5e3);
    const namesIndexCount = names.length - 1;
    const randomOrgUrl = `https://www.random.org/integers/?num=100&min=0&max=${namesIndexCount}&col=1&base=10&format=plain&rnd=new`;

    const response = await fetch(randomOrgUrl, { signal });

    clearTimeout(cancelTimer);

    const body = await response.blob();
    const rawNumbersList = await body.text();
    const numbers = rawNumbersList
      .split('\n')
      .filter((n) => n !== '')
      .filter(onlyUnique)
      .slice(0, number)
      .map((i) => parseInt(i, 10));

    if (numbers.length !== number) {
      throw new Error(`Falling back to Lodash. We didn't get enough unique numbers`);
    }

    return numbers.map((i) => names[i]);
  } catch (e) {
    // Problem with Random.org or they took too long so we cancelled,
    // we fall back to our own sampleSize from Lodash
    return sampleSize(names, number);
  }
};

function onlyUnique<T>(value: T, index: number, self: T[]) {
  return self.indexOf(value) === index;
}

const names = [
  'acne',
  'acre',
  'addendum',
  'advertise',
  'aircraft',
  'aisle',
  'alligator',
  'alphabetize',
  'america',
  'ankle',
  'apathy',
  'applause',
  'applesauce',
  'application',
  'archaeologist',
  'aristocrat',
  'arm',
  'armada',
  'asleep',
  'astronaut',
  'athlete',
  'atlantis',
  'aunt',
  'avocado',
  'babysitter',
  'backbone',
  'bag',
  'baguette',
  'bald',
  'balloon',
  'banana',
  'banister',
  'baseball',
  'baseboards',
  'basketball',
  'bat',
  'battery',
  'beach',
  'beanstalk',
  'bedbug',
  'beer',
  'beethoven',
  'belt',
  'bib',
  'bicycle',
  'big',
  'bike',
  'billboard',
  'bird',
  'birthday',
  'bite',
  'blacksmith',
  'blanket',
  'bleach',
  'blimp',
  'blossom',
  'blueprint',
  'blunt',
  'blur',
  'boa',
  'boat',
  'bob',
  'bobsled',
  'body',
  'bomb',
  'bonnet',
  'book',
  'booth',
  'bowtie',
  'box',
  'boy',
  'brainstorm',
  'brand',
  'brave',
  'bride',
  'bridge',
  'broccoli',
  'broken',
  'broom',
  'bruise',
  'brunette',
  'bubble',
  'buddy',
  'buffalo',
  'bulb',
  'bunny',
  'bus',
  'buy',
  'cabin',
  'cafeteria',
  'cake',
  'calculator',
  'campsite',
  'can',
  'canada',
  'candle',
  'candy',
  'cape',
  'capitalism',
  'car',
  'cardboard',
  'cartography',
  'cat',
  'ceiling',
  'cell',
  'century',
  'chair',
  'chalk',
  'champion',
  'charger',
  'cheerleader',
  'chef',
  'chess',
  'chew',
  'chicken',
  'chime',
  'china',
  'chocolate',
  'church',
  'circus',
  'clay',
  'cliff',
  'cloak',
  'clockwork',
  'clown',
  'clue',
  'coach',
  'coal',
  'coaster',
  'cog',
  'cold',
  'college',
  'comfort',
  'computer',
  'cone',
  'constrictor',
  'continuum',
  'conversation',
  'cook',
  'coop',
  'cord',
  'corduroy',
  'cot',
  'cough',
  'cow',
  'cowboy',
  'crayon',
  'cream',
  'crisp',
  'criticize',
  'crow',
  'cruise',
  'crumb',
  'crust',
  'cuff',
  'curtain',
  'cuticle',
  'czar',
  'dad',
  'dart',
  'dawn',
  'day',
  'deep',
  'defect',
  'dent',
  'dentist',
  'desk',
  'dictionary',
  'dimple',
  'dirty',
  'dismantle',
  'ditch',
  'diver',
  'doctor',
  'dog',
  'doghouse',
  'doll',
  'dominoes',
  'door',
  'dot',
  'drain',
  'draw',
  'dream',
  'dress',
  'drink',
  'drip',
  'drums',
  'dryer',
  'duck',
  'dump',
  'dunk',
  'dust',
  'ear',
  'eat',
  'ebony',
  'elbow',
  'electricity',
  'elephant',
  'elevator',
  'elf',
  'elm',
  'engine',
  'england',
  'ergonomic',
  'escalator',
  'eureka',
  'europe',
  'evolution',
  'extension',
  'eyebrow',
  'fan',
  'fancy',
  'fast',
  'feast',
  'fence',
  'feudalism',
  'fiddle',
  'figment',
  'finger',
  'fire',
  'first',
  'fishing',
  'fix',
  'fizz',
  'flagpole',
  'flannel',
  'flashlight',
  'flock',
  'flotsam',
  'flower',
  'flu',
  'flush',
  'flutter',
  'fog',
  'foil',
  'football',
  'forehead',
  'forever',
  'fortnight',
  'france',
  'freckle',
  'freight',
  'fringe',
  'frog',
  'frown',
  'gallop',
  'game',
  'garbage',
  'garden',
  'gasoline',
  'gem',
  'ginger',
  'gingerbread',
  'girl',
  'glasses',
  'goblin',
  'gold',
  'goodbye',
  'grandpa',
  'grape',
  'grass',
  'gratitude',
  'gray',
  'green',
  'guitar',
  'gum',
  'gumball',
  'hair',
  'half',
  'handle',
  'handwriting',
  'hang',
  'happy',
  'hat',
  'hatch',
  'headache',
  'heart',
  'hedge',
  'helicopter',
  'hem',
  'hide',
  'hill',
  'hockey',
  'homework',
  'honk',
  'hopscotch',
  'horse',
  'hose',
  'hot',
  'house',
  'houseboat',
  'hug',
  'humidifier',
  'hungry',
  'hurdle',
  'hurt',
  'hut',
  'ice',
  'implode',
  'inn',
  'inquisition',
  'intern',
  'internet',
  'invitation',
  'ironic',
  'ivory',
  'ivy',
  'jade',
  'japan',
  'jeans',
  'jelly',
  'jet',
  'jig',
  'jog',
  'journal',
  'jump',
  'key',
  'killer',
  'kilogram',
  'king',
  'kitchen',
  'kite',
  'knee',
  'kneel',
  'knife',
  'knight',
  'koala',
  'lace',
  'ladder',
  'ladybug',
  'lag',
  'landfill',
  'lap',
  'laugh',
  'laundry',
  'law',
  'lawn',
  'lawnmower',
  'leak',
  'leg',
  'letter',
  'level',
  'lifestyle',
  'ligament',
  'light',
  'lightsaber',
  'lime',
  'lion',
  'lizard',
  'log',
  'loiterer',
  'lollipop',
  'loveseat',
  'loyalty',
  'lunch',
  'lunchbox',
  'lyrics',
  'machine',
  'macho',
  'mailbox',
  'mammoth',
  'mark',
  'mars',
  'mascot',
  'mast',
  'matchstick',
  'mate',
  'mattress',
  'mess',
  'mexico',
  'midsummer',
  'mine',
  'mistake',
  'modern',
  'mold',
  'mom',
  'monday',
  'money',
  'monitor',
  'monster',
  'mooch',
  'moon',
  'mop',
  'moth',
  'motorcycle',
  'mountain',
  'mouse',
  'mower',
  'mud',
  'music',
  'mute',
  'nature',
  'negotiate',
  'neighbor',
  'nest',
  'neutron',
  'niece',
  'night',
  'nightmare',
  'nose',
  'oar',
  'observatory',
  'office',
  'oil',
  'old',
  'olympian',
  'opaque',
  'opener',
  'orbit',
  'organ',
  'organize',
  'outer',
  'outside',
  'ovation',
  'overture',
  'pail',
  'paint',
  'pajamas',
  'palace',
  'pants',
  'paper',
  'park',
  'parody',
  'party',
  'password',
  'pastry',
  'pawn',
  'pear',
  'pen',
  'pencil',
  'pendulum',
  'penis',
  'penny',
  'pepper',
  'personal',
  'philosopher',
  'phone',
  'photograph',
  'piano',
  'picnic',
  'pigpen',
  'pillow',
  'pilot',
  'pinch',
  'ping',
  'pinwheel',
  'pirate',
  'plaid',
  'plan',
  'plank',
  'plate',
  'platypus',
  'playground',
  'plow',
  'plumber',
  'pocket',
  'poem',
  'point',
  'pole',
  'pomp',
  'pong',
  'pool',
  'popsicle',
  'population',
  'portfolio',
  'positive',
  'post',
  'princess',
  'procrastinate',
  'protestant',
  'psychologist',
  'publisher',
  'punk',
  'puppet',
  'puppy',
  'push',
  'puzzle',
  'quarantine',
  'queen',
  'quicksand',
  'quiet',
  'race',
  'radio',
  'raft',
  'rag',
  'rainbow',
  'rainwater',
  'random',
  'ray',
  'recycle',
  'red',
  'regret',
  'reimbursement',
  'retaliate',
  'rib',
  'riddle',
  'rim',
  'rink',
  'roller',
  'room',
  'rose',
  'round',
  'roundabout',
  'rung',
  'runt',
  'rut',
  'sad',
  'safe',
  'salmon',
  'salt',
  'sandbox',
  'sandcastle',
  'sandwich',
  'sash',
  'satellite',
  'scar',
  'scared',
  'school',
  'scoundrel',
  'scramble',
  'scuff',
  'seashell',
  'season',
  'sentence',
  'sequins',
  'set',
  'shaft',
  'shallow',
  'shampoo',
  'shark',
  'sheep',
  'sheets',
  'sheriff',
  'shipwreck',
  'shirt',
  'shoelace',
  'short',
  'shower',
  'shrink',
  'sick',
  'siesta',
  'silhouette',
  'singer',
  'sip',
  'skate',
  'skating',
  'ski',
  'slam',
  'sleep',
  'sling',
  'slow',
  'slump',
  'smith',
  'sneeze',
  'snow',
  'snuggle',
  'song',
  'space',
  'spare',
  'speakers',
  'spider',
  'spit',
  'sponge',
  'spool',
  'spoon',
  'spring',
  'sprinkler',
  'spy',
  'square',
  'squint',
  'stairs',
  'standing',
  'star',
  'state',
  'stick',
  'stockholder',
  'stoplight',
  'stout',
  'stove',
  'stowaway',
  'straw',
  'stream',
  'streamline',
  'stripe',
  'student',
  'sun',
  'sunburn',
  'sushi',
  'swamp',
  'swarm',
  'sweater',
  'swimming',
  'swing',
  'tachometer',
  'talk',
  'taxi',
  'teacher',
  'teapot',
  'teenager',
  'telephone',
  'television',
  'ten',
  'tennis',
  'thief',
  'think',
  'throne',
  'through',
  'thunder',
  'tide',
  'tiger',
  'time',
  'tinting',
  'tiptoe',
  'tiptop',
  'tired',
  'tissue',
  'toast',
  'toilet',
  'tool',
  'toothbrush',
  'tornado',
  'tournament',
  'tractor',
  'train',
  'trash',
  'treasure',
  'tree',
  'triangle',
  'trip',
  'truck',
  'tub',
  'tuba',
  'tutor',
  'twang',
  'twig',
  'twitterpated',
  'type',
  'unemployed',
  'upgrade',
  'vest',
  'vision',
  'wag',
  'water',
  'watermelon',
  'wax',
  'wedding',
  'weed',
  'welder',
  'whatever',
  'wheelchair',
  'whiplash',
  'whisk',
  'whistle',
  'white',
  'wig',
  'will',
  'windmill',
  'winter',
  'wish',
  'wolf',
  'wool',
  'world',
  'worm',
  'wristwatch',
  'yardstick',
  'zamboni',
  'zen',
  'zero',
  'zipper',
  'zone',
  'zoo',
  'africa',
  'agent',
  'air',
  'alien',
  'alps',
  'amazon',
  'ambulance',
  'america',
  'angel',
  'antarctica',
  'apple',
  'arm',
  'atlantis',
  'australia',
  'aztec',
  'back',
  'ball',
  'band',
  'bank',
  'bar',
  'bark',
  'bat',
  'battery',
  'beach',
  'bear',
  'beat',
  'bed',
  'beijing',
  'bell',
  'belt',
  'berlin',
  'bermuda',
  'berry',
  'bill',
  'block',
  'board',
  'bolt',
  'bomb',
  'bond',
  'boom',
  'boot',
  'bottle',
  'bow',
  'box',
  'bridge',
  'brush',
  'buck',
  'buffalo',
  'bug',
  'bugle',
  'button',
  'calf',
  'canada',
  'cap',
  'capital',
  'car',
  'card',
  'carrot',
  'casino',
  'cast',
  'cat',
  'cell',
  'centaur',
  'center',
  'chair',
  'change',
  'charge',
  'check',
  'chest',
  'chick',
  'china',
  'chocolate',
  'church',
  'circle',
  'cliff',
  'cloak',
  'club',
  'code',
  'cold',
  'comic',
  'compound',
  'concert',
  'conductor',
  'contract',
  'cook',
  'copper',
  'cotton',
  'court',
  'cover',
  'crane',
  'crash',
  'cricket',
  'cross',
  'crown',
  'cycle',
  'czech',
  'dance',
  'date',
  'day',
  'death',
  'deck',
  'degree',
  'diamond',
  'dice',
  'dinosaur',
  'disease',
  'doctor',
  'dog',
  'dove',
  'draft',
  'dragon',
  'dress',
  'drill',
  'drop',
  'duck',
  'dwarf',
  'eagle',
  'egypt',
  'embassy',
  'engine',
  'england',
  'europe',
  'eye',
  'face',
  'fair',
  'fall',
  'fan',
  'fence',
  'field',
  'fighter',
  'figure',
  'file',
  'film',
  'fire',
  'fish',
  'flute',
  'fly',
  'foot',
  'force',
  'forest',
  'fork',
  'france',
  'game',
  'gas',
  'genius',
  'germany',
  'ghost',
  'giant',
  'glass',
  'gold',
  'grace',
  'grass',
  'greece',
  'green',
  'ground',
  'ham',
  'hand',
  'hawk',
  'head',
  'heart',
  'helicopter',
  'himalayas',
  'hole',
  'hollywood',
  'honey',
  'hood',
  'hook',
  'horn',
  'horse',
  'horseshoe',
  'hospital',
  'hotel',
  'ice',
  'ice cream',
  'india',
  'iron',
  'ivory',
  'jack',
  'jam',
  'jet',
  'jupiter',
  'kangaroo',
  'ketchup',
  'key',
  'kid',
  'king',
  'kiwi',
  'knife',
  'knight',
  'lab',
  'lap',
  'laser',
  'lead',
  'lemon',
  'leprechaun',
  'life',
  'light',
  'limousine',
  'line',
  'link',
  'lion',
  'litter',
  'loch ness',
  'lock',
  'log',
  'london',
  'luck',
  'mail',
  'mammoth',
  'maple',
  'marble',
  'march',
  'mass',
  'match',
  'mercury',
  'mexico',
  'microscope',
  'millionaire',
  'mine',
  'mint',
  'missile',
  'model',
  'mole',
  'moon',
  'moscow',
  'mount',
  'mouse',
  'mouth',
  'mug',
  'nail',
  'needle',
  'net',
  'new york',
  'night',
  'ninja',
  'note',
  'novel',
  'nurse',
  'nut',
  'octopus',
  'oil',
  'olive',
  'olympus',
  'opera',
  'orange',
  'organ',
  'palm',
  'pan',
  'pants',
  'paper',
  'parachute',
  'park',
  'part',
  'pass',
  'paste',
  'penguin',
  'phoenix',
  'piano',
  'pie',
  'pilot',
  'pin',
  'pipe',
  'pirate',
  'pistol',
  'pit',
  'pitch',
  'plane',
  'plastic',
  'plate',
  'platypus',
  'play',
  'plot',
  'point',
  'poison',
  'pole',
  'police',
  'pool',
  'port',
  'post',
  'pound',
  'press',
  'princess',
  'pumpkin',
  'pupil',
  'pyramid',
  'queen',
  'rabbit',
  'racket',
  'ray',
  'revolution',
  'ring',
  'robin',
  'robot',
  'rock',
  'rome',
  'root',
  'rose',
  'roulette',
  'round',
  'row',
  'ruler',
  'satellite',
  'saturn',
  'scale',
  'school',
  'scientist',
  'scorpion',
  'screen',
  'scuba diver',
  'seal',
  'server',
  'shadow',
  'shakespeare',
  'shark',
  'ship',
  'shoe',
  'shop',
  'shot',
  'sink',
  'skyscraper',
  'slip',
  'slug',
  'smuggler',
  'snow',
  'snowman',
  'sock',
  'soldier',
  'soul',
  'sound',
  'space',
  'spell',
  'spider',
  'spike',
  'spine',
  'spot',
  'spring',
  'spy',
  'square',
  'stadium',
  'staff',
  'star',
  'state',
  'stick',
  'stock',
  'straw',
  'stream',
  'strike',
  'string',
  'sub',
  'suit',
  'superhero',
  'swing',
  'switch',
  'table',
  'tablet',
  'tag',
  'tail',
  'tap',
  'teacher',
  'telescope',
  'temple',
  'theater',
  'thief',
  'thumb',
  'tick',
  'tie',
  'time',
  'tokyo',
  'tooth',
  'torch',
  'tower',
  'track',
  'train',
  'triangle',
  'trip',
  'truck',
  'tube',
  'turkey',
  'undertaker',
  'unicorn',
  'vacuum',
  'van',
  'vet',
  'wake',
  'wall',
  'war',
  'washer',
  'washington',
  'watch',
  'water',
  'wave',
  'web',
  'well',
  'whale',
  'whip',
  'wind',
  'witch',
  'worm',
  'yard',
];
