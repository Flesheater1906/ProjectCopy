(function () {

    angular.module('myApp')
        .service('characterService', characterService);



    function characterService() {
        var vm = this;
        vm.evilDwelers = undefined;
        console.log(vm.evilDwelers);

        vm.evilDwelers = [
            //group 1
            {
                "name": "Nemo",
                "moveOne": " Nemo uses Foreshortened Fin",
                "moveOneDmg": Math.floor(Math.random() * 9) +1,
                "moveTwo": 'Nemo gets mad that you are makeing fun of him for his size',
                "moveTwoDmg":  Math.floor(Math.random() * 3) + 5,
                "moveThree": 'Nemo and dory both come together and body slam you',
                "moveThreeDmg":  Math.floor(Math.random() * 5) +4,
                "diffuclty": "1",
                "icon": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ0tQB64olTKAK6ccG8u9S788IvD8x1lw231w6tYy0FZOYcZoDkzg"
            },
            {
                "name": "Harry Potter",
                "moveOne": " Harry uses Bombarda Maxima he explodes the next to you the wall falls on you",
                "moveOneDmg": Math.floor(Math.random() * 5) + 6,
                "moveTwo": 'Harry uses Expelliarmus and disarms you ',
                "moveTwoDmg":  Math.floor(Math.random() * 4) + 2,
                "moveThree": 'Harry uses Stupefy and knocks you out ',
                "moveThreeDmg":  Math.floor(Math.random() * 6) + 5,
                "diffuclty": "2",
                "icon": "https://a.wattpad.com/useravatar/HxrryPxttxrGxrl.128.129214.jpg"
            },
            {
                "name": "Homer Simpson",
                "moveOne": " Homer eats the last bite of his doenut and gets mad that its gone and kicks you in the shins",
                "moveOneDmg": Math.floor(Math.random() * 5) +4,
                "moveTwo": 'Homer gets mad at his kids and takes out his anger on you!!!',
                "moveTwoDmg":  Math.floor(Math.random() * 4) + 5,
                "moveThree": 'bart is skateboarding and falls and his skate board hits you ',
                "moveThreeDmg":  Math.floor(Math.random() * 5) + 5,
                "diffuclty": "3",
                "icon": "https://pbs.twimg.com/profile_images/690947936537153536/InAIb-GE_reasonably_small.jpg"
            },

            {
                "name": "Mario",
                "moveOne": "Mario jumps on you head ",
                "moveOneDmg": Math.floor(Math.random() * 9) + 5,
                "moveTwo": 'Mario finds a fire flower and the shoots you with a fireball',
                "moveTwoDmg":  Math.floor(Math.random() * 6) + 3,
                "moveThree": 'Mario gravbs his F.U.D.D watter backpack and blasts you with it',
                "moveThreeDmg":  Math.floor(Math.random() * 5) + 4,
                "diffuclty": "4",
                "icon": "https://cdn2.scratch.mit.edu/get_image/gallery/2094822_200x130.png?v=1464715501.04"
            },


      {
                "name": "Aragorn",
              "moveOne": "Aragorn slashes at you with his sword ",
              "moveOneDmg": Math.floor(Math.random() * 5) + 5,
              //move two
              "moveTwo": 'Aragorn takes a shot at you with his bow',
              "moveTwoDmg":  Math.floor(Math.random() * 8) + 3,
              //move three
              "moveThree": 'Aragorn strikes you with a warriors blow',
              "moveThreeDmg":  Math.floor(Math.random() * 17) + 1 ,
                "diffuclty": "5",
                "icon": "http://66.media.tumblr.com/avatar_b28b89b7e15d_128.png"
            },
            {
                "name": "Bruce",
                "moveOne": "Bruce say im having fish tonight and charges and snags you leg for a sec before you get away ",
                "moveOneDmg": Math.floor(Math.random() * 5) + 5,
                //move two
                "moveTwo": 'Bruce trys to hug you and says fish are freinds, not food and squishis you to hard',
                "moveTwoDmg":  Math.floor(Math.random() * 7) +3,
                //move three
                "moveThree": 'Bruce smacks you with his tail fin',
                "moveThreeDmg":  Math.floor(Math.random() * 5) + 4,
                "diffuclty": "6",
                "icon": "https://a15.t26.net/avatares/2/3/1/0/120x120_nr_23102687.jpg?458290"
            },


      {
                "name": "Little Jimmy Raynor",
          "moveOne": "Jimmy and his group of raiders ambush you",
          "moveOneDmg": Math.floor(Math.random() * 14) + 4,
          //move two
          "moveTwo": 'jimmy is a little drunk on whisky and trys to shoot you',
          "moveTwoDmg":  Math.floor(Math.random() * 4) + 1,
          //move three
          "moveThree": 'Raynor uses his slight of hands and quickly draw his pistol and shoots',
          "moveThreeDmg":  Math.floor(Math.random() * 7) + 4,
                "diffuclty": "7",
                "icon": "data:image/jpeg;base64,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"
            },
      {
                "name": "Dora the Explorer",
          "moveOne": "Dora starts to try to teach you freindly helpfull lesson ",
          "moveOneDmg": Math.floor(Math.random() * 9) + 2,
          //move two
          "moveTwo": 'dora pulls something out of her backpack and smacks you with it ',
          "moveTwoDmg":  Math.floor(Math.random() * 11) +2,
          //move three
          "moveThree": 'dora say swiper no swiping and spots you sneaking',
          "moveThreeDmg":  Math.floor(Math.random() * 5) +5,
                "diffuclty": "8",
                "icon": "http://66.media.tumblr.com/avatar_59e708da7e84_128.png"
            },
            {
                "name": "Inigo Montoya",
                "moveOne": "My name is Inigo Montoya you killed my family now prepair to die! then thrust at you.",
                "moveOneDmg": Math.floor(Math.random() * 6) + 5,
                //move two
                "moveTwo": 'Inigo Montoya does a flip and dashes to the side and strikes',
                "moveTwoDmg":  Math.floor(Math.random() * 14) + 3,
                //move three
                "moveThree": 'Inigo Montoya had to much to drink and is trying to hit you but hes strikes are obvious',
                "moveThreeDmg":  Math.floor(Math.random() * 5) + 1,
                "diffuclty": "9",
                "icon": "https://a07.t26.net/taringa/avatares/3/5/B/C/2/E/Inigo_Montoya/120x120_A95.jpg"
            },


      {
                "name": "Yoshi",
          "moveOne": "Yoshi Streches out his tung and licks you up then poops you out in a egg shell",
          "moveOneDmg": Math.floor(Math.random() * 6) + 5,
          //move two
          "moveTwo": 'Yoshi start sprinting away from mario from past events and run you over ',
          "moveTwoDmg":  Math.floor(Math.random() * 6) +7,
          //move three
          "moveThree": 'yoshi picks up a big green polka dotted egg and throws it at you who knows whats inside',
          "moveThreeDmg":  Math.floor(Math.random() * 11) + 2,
                "diffuclty": "10",
                "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_z5nGlvp_p3SFcSifc9OzujFtRSxbeDHcKCwVikebCT2jfoey"
            },
            {
                "name": "Joker",
                "moveOne": "Joker wants to show you a magic trick",
                "moveOneDmg": Math.floor(Math.random() * 5) +5,
                //move two
                "moveTwo": 'Joker has 3 guns laid out he grabs one of them and shoots you BANG!',
                "moveTwoDmg":  Math.floor(Math.random() * 10) +1,
                //move three
                "moveThree": 'Joker try to feel you lungs with laughing gas',
                "moveThreeDmg": Math.floor(Math.random() * 4) +3,
                "diffuclty": "11",
                "icon": "http://i0.wp.com/fc03.deviantart.net/fs70/i/2013/049/4/f/the_joker__work_in_progress__by_rorysart-d5vd2dr.jpg?w=145&h=145"
            },
      {
          //change random function
                "name": "Pikachu",
          "moveOne": "Pikachu uses ThunderShock and shocks you",
          "moveOneDmg": Math.floor(Math.random() * 5) +5,
          //move two
          "moveTwo": 'Pikachu uses slam and jumps into you',
          "moveTwoDmg":  Math.floor(Math.random() * 3) +6,
          //move three
          "moveThree": 'Pikachu has his ketchup bottle and someone breaks it open and Pikachu thinks you did it and vigorously attacks you ',
          "moveThreeDmg":  Math.floor(Math.random() * 7) + 6,
                "diffuclty": "12",
                "icon": "http://images2.memedroid.com/avatars/AVATAR12/55c34737e3ac5_thumb_s.jpeg"
            },

            {
                "name": "Nacho Libre",
                "moveOne": "Nacho trys to make you a good meal but their is no CHIPS!",
                "moveOneDmg": Math.floor(Math.random() * 5) +1,
                //move two
                "moveTwo": 'Nacho clims to the highest spot he can see and jumps at you flying like a eagle ',
                "moveTwoDmg":  Math.floor(Math.random() * 5) +7,
                //move three
                "moveThree": 'you take Nachos mask off in battle and you quickly relize that was a mistake he then puts you in moves you have never seen before.',
                "moveThreeDmg":  Math.floor(Math.random() * 5) +10,
                "diffuclty": "13",
                "icon": "http://static.fmanager.com.br/uploads/monthly_2016_08/NachoLibreJackBlackPt.jpg.53cd4553a0e7244ad26bd864653ede29.thumb.jpg.b74ea465cf5a379688cc5f2026e09939.jpg"
            },
            {
                "name": "Stewie",
                "moveOne": "Stewie makes a device to kill you! ",
                "moveOneDmg": Math.floor(Math.random() * 7) +5,
                //move two
                "moveTwo": 'Stewie thinks his bear is cheating on him with you and he vigorusly smacks you with his baby hands',
                "moveTwoDmg":  Math.floor(Math.random() * 7) +2,
                //move three
                "moveThree": 'Stewie shoots you with his blaster',
                "moveThreeDmg":  Math.floor(Math.random() * 6) +5,
                "diffuclty": "14",
                "icon": "http://t09.deviantart.net/INaUb8Z3gBMoKBo2wPqQZTwklPk=/fit-in/150x150/filters:no_upscale():origin()/pre04/b1c6/th/pre/i/2006/306/8/6/stewie_by_m1llah.jpg"
            },
      {
                "name": "Batman",
          "moveOne": "Batman gravbs a random tool from his belt and throws it at you",
          "moveOneDmg": Math.floor(Math.random() * 12) +3,
          //move two
          "moveTwo": 'Batman jumps from the roof glides down with his cape and kicks you mid air',
          "moveTwoDmg":  Math.floor(Math.random() * 5) +5,
          //move three
          "moveThree": 'Batman plans out a sneak up on you and attack you ',
          "moveThreeDmg":  Math.floor(Math.random() * 7) +1,
                "diffuclty": "15",
                "icon": "https://lh3.googleusercontent.com/-1mg9Wps67ms/VzagzZumoPI/AAAAAAAAD6g/hNW-ZhAGGg0BdIYmpMP_T4PjVsLGke_LA/w126-h126-p/images-40.jpeg"
            },


      {
                "name": "Macho Man Randy Savage",
          "moveOne": "Macho puts on his sunglasses say Ohhhhh yeaHHH BROTHeRR The tower of power , too sweet to be sour, and body slams you ",
          "moveOneDmg":Math.floor(Math.random() * 5) +8,
          //move two
          "moveTwo": 'Macho say im a funky monkey.skys the limit and space is the place!. his fans scream his name and he puts you in a suplex till you beg for mercy.',
          "moveTwoDmg":  Math.floor(Math.random() * 4) +10,
          //move three
          "moveThree": 'Randy Savage spends his time trying to hype up the crowd and totally forgets he is in a battle.',
          "moveThreeDmg": Math.floor(Math.random() * 2) + 1,
                "diffuclty": "16",
                "icon": "https://assets.change.org/photos/0/ng/fg/wynGFgZCDgcZvfU-128x128-noPad.jpg?1437796958"
            },
      {
                "name": "Hulk",
          "moveOne": "Hulk get enrages and jumps at you causing the earth to shake",
          "moveOneDmg": Math.floor(Math.random() * 4) +7,
          //move two
          "moveTwo": 'Hulk spills coffey and is getting angry you try to calm him down',
          "moveTwoDmg":  Math.floor(Math.random() * 11) + 1,
          //move three
          "moveThree": 'Hulk is angry that you are attacking him so smacks you ',
          "moveThreeDmg":  Math.floor(Math.random() * 6) +5,
                "diffuclty": "17",
                "icon": "http://gsimages-a.akamaihd.net/hulkvs/medium_icon.jpg"
            },

      // {
      //           "name": "Chilly Willy",
      //     "moveOne": "",
      //     "moveOneDmg": Math.floor(Math.random() * 5) +7,
      //     //move two
      //     "moveTwo": '',
      //     "moveTwoDmg":  Math.floor(Math.random() * 5) +7,
      //     //move three
      //     "moveThree": '',
      //     "moveThreeDmg":  Math.floor(Math.random() * 5) +7,
      //           "diffuclty": "2",
      //           "icon": "http://bbs-sk.ru/uploads/profile/photo-3576.jpg"
      //       },
      {
                "name": "Big Boss",
          "moveOne": "Snake sneaks up on you and trys to choke you out",
          "moveOneDmg": Math.floor(Math.random() * 8) +4,
          //move two
          "moveTwo": 'Snake pulls out a random gun in his backpack and shoot it at you',
          "moveTwoDmg":  Math.floor(Math.random() * 16) +3,
          //move three
          "moveThree": 'snake is takeing a break and starts smokeing his cigar time flies by',
          "moveThreeDmg":  Math.floor(Math.random() * 2) +1,
                "diffuclty": "18",
                "icon": "http://m2-ch.ru/fag/big/thumb/2678096/14722490298571s.jpg"
            },
      {
                "name": "bruce Lee",
          "moveOne": "Bruce Lee hits you with a one inch punch",
          "moveOneDmg": Math.floor(Math.random() * 9) +4,
          //move two
          "moveTwo": 'Bruce Lee wips out his nunhuks spining them ablazing and then hits you with them',
          "moveTwoDmg":  Math.floor(Math.random() * 8) +7,
          //move three
          "moveThree": 'Bruce Lee taunts you to come at him you run at him and fall in to his trap',
          "moveThreeDmg":  Math.floor(Math.random() * 5) +7,
                "diffuclty": "19",
                "icon": "http://i259.photobucket.com/albums/hh310/hayward45/th_Bruce-Lee-1.jpg"
            },
      {
                "name": "Uther",
          "moveOne": "Uther say for the holy light then smacks you with his holy hammer",
          "moveOneDmg": Math.floor(Math.random() * 5) +7,
          //move two
          "moveTwo": 'Uther cast a holy beam of light apon you',
          "moveTwoDmg":  Math.floor(Math.random() * 9) +6,
          //move three
          "moveThree": 'Uther trys preaching the holy light to you',
          "moveThreeDmg":  Math.floor(Math.random() * 5) +1,
                "diffuclty": "20",
                "icon": "https://hydra-media.cursecdn.com/heroesofthestorm-es.gamepedia.com/thumb/a/a2/UtherArt.jpg/120px-UtherArt.jpg?version=eb2415fa600e727cf70d0fcffdc13e16"
            }

            //\
        ];

        // init();
    }

})();
