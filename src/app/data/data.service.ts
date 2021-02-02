import {Injectable} from '@angular/core';

export interface Game {
  alias: string;
  name: string;
  developer: Developer;
  genre: string[];
  description: string;
  control: Control[];
  screenshots: number[];
  links: { android: string, ios: string };
  style: string;
}


export interface Prototype {
  genre: string;
  description: string;
  link: string;
}

export interface Developer {
  name: string;
  link: string;
  icon: string;
  background: string;
}

export enum Control {
  Tap,
  Swipe,
  Swerve,
  Timing
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  games: Game[];
  prototypes: Prototype[];

  constructor() {
    const altplay = {
      name: 'Altplay',
      link: 'https://altplay.ma/',
      icon: 'social/altplay.png',
      background: '#eee',
    };
    const saadawigames = {
      name: 'Saadawi Games',
      link: '',
      icon: 'saadawi.png',
      background: '#333',
    };
    this.games = [
      {
        alias: 'cursivity',
        name: 'Cursivity',
        developer: saadawigames,
        genre: ['Puzzle', 'Programming'],
        description: 'Solve challenging puzzles using your programming skills.',
        control: null,
        screenshots: [1, 2, 3],
        links: {
          android: 'https://play.google.com/store/apps/details?id=com.saadawigames.cursivity',
          ios: null
        },
        style: 'linear-gradient(45deg, #a4d, #529)'
      },
      {
        alias: 'blast-cube',
        name: 'Blast Cube',
        developer: altplay,
        genre: ['Hyper Casual'],
        description: 'Throw the ball to destroy matching blocks!',
        control: [Control.Tap, Control.Swipe],
        screenshots: [1, 2, 3, 4, 5],
        links: {
          android: null,
          ios: null
        },
        style: 'linear-gradient(-45deg, #4dc, #26c)'
      },
      {
        alias: 'vacuum',
        name: 'Vacuum Shooter',
        developer: altplay,
        genre: ['Hyper Casual', 'Runner'],
        description: 'Absorb everything in your way',
        control: [Control.Tap, Control.Swerve],
        screenshots: [1, 5, 4, 6, 3],
        links: {
          android: null,
          ios: null
        },
        style: 'linear-gradient(-45deg, #dbb366, #402ccc)'
      },
      {
        alias: 'love-date',
        name: 'Love Date',
        developer: altplay,
        genre: ['Puzzle'],
        description: 'Build a path and find your love',
        control: [Control.Swipe],
        screenshots: [1, 2, 3, 4],
        links: {
          android: null,
          ios: null
        },
        style: 'linear-gradient(-45deg, #55e, #f3b)'
      },
      {
        alias: 'bouncy-ball',
        name: 'Bouncy Ball',
        developer: altplay,
        genre: ['Puzzle', 'Sport'],
        description: 'Find your creative way to score a goal',
        control: [Control.Swipe],
        screenshots: [1, 2, 3, 4],
        links: {
          android: null,
          ios: null
        },
        style: 'linear-gradient(-45deg, #42626f, #b3e160)'
      },
      {
        alias: 'samurai-master',
        name: 'Samurai Master',
        developer: altplay,
        genre: ['Duel', 'Fight', 'Combat'],
        description: 'Show off your fighting skills in awesome duels between different warriors',
        control: [Control.Swipe, Control.Timing],
        screenshots: [1, 2, 3, 4, 5, 6],
        links: {
          android: null,
          ios: null
        },
        style: 'linear-gradient(-45deg, #ee9d55, #4faac6)'
      },
      {
        alias: 'guess-it',
        name: 'Guess It',
        developer: saadawigames,
        genre: ['Drawing', 'Words', 'Puzzle'],
        description: 'Guess the word while you draw it',
        control: [Control.Tap],
        screenshots: [1, 2, 3],
        links: {
          android: null,
          ios: null
        },
        style: 'linear-gradient(45deg, #779955, #88ddc5)'
      },
      {
        alias: 'chatxter',
        name: 'Chatxter',
        developer: altplay,
        genre: ['Text-Based', 'Story', 'Casual'],
        description: 'Text your way through different scenarios',
        control: null,
        screenshots: [1, 2, 3, 4, 5],
        links: {
          android: null,
          ios: null
        },
        style: 'linear-gradient(45deg, #26c, #4dc)'
      },
      {
        alias: 'infinite-rush',
        name: 'Infinite Rush',
        developer: saadawigames,
        genre: ['Hyper Casual', 'Runner'],
        description: 'Keep moving and avoid traps and falling off.',
        control: [Control.Tap],
        screenshots: [1, 2, 3],
        links: {
          android: null,
          ios: null
        },
        style: 'linear-gradient(-45deg, #4dc, #26c)'
      },
      {
        alias: 'wormish',
        name: 'Wormish',
        developer: altplay,
        genre: ['Hyper Casual'],
        description: 'Stretch the worm to reach your target',
        control: [Control.Swerve],
        screenshots: [1, 2, 3, 4],
        links: {
          android: null,
          ios: null
        },
        style: 'linear-gradient(-45deg, #58f, #b0f)'
      },
      {
        alias: 'glorious',
        name: 'Glorious',
        developer: altplay,
        genre: ['Hyper Casual', 'Runner', 'Fighting'],
        description: 'Build your army and pursue your glorious battles!',
        control: [Control.Swerve],
        screenshots: [1, 2, 3, 4, 5],
        links: {
          android: null,
          ios: null
        },
        style: 'linear-gradient(-45deg, #4dc, #26c)'
      },
      {
        alias: 'food-truck',
        name: 'Food Truck',
        developer: altplay,
        genre: ['Hyper Casual', 'Simulation', 'Cooking'],
        description: 'Make food and complete the orders from your clients',
        control: [Control.Tap, Control.Timing],
        screenshots: [2, 3, 1],
        links: {
          android: null,
          ios: null
        },
        style: 'linear-gradient(-45deg, #4d9, #2bc)'
      },
      {
        alias: 'oh-my-garden',
        name: 'Oh My Garden!',
        developer: altplay,
        genre: ['Hyper Casual', 'Simulation', 'Cleaning'],
        description: 'Garden dead plants and restore them to life',
        control: [Control.Swerve],
        screenshots: [1, 2, 3, 5],
        links: {
          android: null,
          ios: null
        },
        style: 'linear-gradient(-45deg, #d49, #53c)'
      },
      {
        alias: 'icecream',
        name: 'Ice Cream Dipping',
        developer: altplay,
        genre: ['Hyper Casual', 'Simulation'],
        description: 'Customize Ice cream and satisfy your client!',
        control: [Control.Tap, Control.Swerve],
        screenshots: [1, 2, 3, 4],
        links: {
          android: null,
          ios: null
        },
        style: 'linear-gradient(-45deg, #6dc, #55c)'
      },
      {
        alias: 'epoxy',
        name: 'Epoxy',
        developer: altplay,
        genre: ['Hyper Casual', 'Simulation'],
        description: 'Customize your decorations using epoxy resin',
        control: [Control.Tap, Control.Swipe, Control.Swerve],
        screenshots: [1, 2, 3, 4, 5, 6, 7],
        links: {
          android: null,
          ios: null
        },
        style: 'linear-gradient(-45deg, #4dc, #26c)'
      },
      {
        alias: 'spooky',
        name: 'Spooky',
        developer: altplay,
        genre: ['Puzzle', 'Hyper Casual'],
        description: 'Scare your host and make them scream',
        control: [Control.Tap],
        screenshots: [1, 2, 3, 4, 5, 6],
        links: {
          android: null,
          ios: null
        },
        style: 'linear-gradient(-45deg, #dbb366, #402ccc)'
      },
      /*
      {
        alias: 'climb-hill',
        name: 'Climb Hill 3D',
        developer: altplay,
        genre: ['Hyper Casual'],
        description: 'Climb the hill and avoid to get crashed by the balls',
        control: null,
        screenshots: [1, 2, 3],
        links: {
          android: null,
          ios: null
        },
        style: 'linear-gradient(-45deg, #89a, #123)'
      },
      {
        alias: 'thrift-flip',
        name: 'Thrift Flip',
        developer: altplay,
        genre: ['Hyper Casual', 'Simulation'],
        description: 'Flip unused or old cloths into fashionable style',
        control: null,
        screenshots: [1, 2, 3],
        links: {
          android: null,
          ios: null
        },
        style: 'linear-gradient(-45deg, #36b, #f5b)'
      },
      */
      /*
      {
        alias: 'spa-asmr',
        name: 'SPA ASMR',
        developer: altplay,
        genre: ['Hyper Casual', 'Simulation', 'ASMR'],
        description: 'Take care of your clients by providing them the best Spa experience.',
        control: null,
        screenshots: [1, 2, 3],
        links: {
          android: null,
          ios: null
        },
        style: 'linear-gradient(-45deg, #4dc, #26c)'
      },
      */
      {
        alias: 'skate',
        name: 'Figure Skate',
        developer: altplay,
        genre: ['Hyper Casual', 'Skating', 'Dancing'],
        description: 'Perfect your ice skating moves with your dream partner',
        control: [Control.Tap, Control.Timing],
        screenshots: [1, 2, 3],
        links: {
          android: null,
          ios: null
        },
        style: 'linear-gradient(-45deg, #36b, #f5b)'
      },
      {
        alias: 'herraf',
        name: '7erraf',
        developer: saadawigames,
        genre: ['Card', 'Multiplayer'],
        description: 'An online ronda card game with a new mnemonic rule.',
        control: null,
        screenshots: [1, 2, 3],
        links: {
          android: null,
          ios: null
        },
        style: 'linear-gradient(45deg, #759, #d89)'
      }
      ];

    this.prototypes = [{
      genre: 'Turn Based, Strategy',
      description: '',
      link: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6608455557735038976?compact=1'
    }, {
      genre: 'Adventure, Casual',
      description: '',
      link: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6615679344410935297?compact=1'
    }, {
      genre: 'Water, Shader',
      description: '',
      link: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6569916576181559296?compact=1'
    }, {
      genre: 'Turn Based, Strategy',
      description: '',
      link: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6572815287966539776?compact=1'
    }, {
      genre: '3rd Person, Archery',
      description: '',
      link: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6603729552051064832?compact=1'
    }, {
      genre: 'Hyper Casual, Cars',
      description: '',
      link: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6593108286365544448?compact=1'
    }, {
      genre: 'Hyper Casual, Drawing',
      description: '',
      link: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6741090048361422848?compact=1'
    }, {
      genre: 'Hyper Casual',
      description: '',
      link: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6588713535482671104?compact=1'
    }];
  }

  public getGame(id: string) {
    return this.games.find(game => game.alias === id);
  }

  public getGames(id: string) {
    return this.games.filter(game => game.genre.filter(value => value.toLowerCase() === id.toLowerCase()).length > 0);
  }
}
