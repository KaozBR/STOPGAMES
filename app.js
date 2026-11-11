const catalogPages = [
  [
    ["412", "Super Nintendo"],
    ["602", "Super Mario 64"],
    ["601", "Super Luigi 64"],
    ["001", "Donkey Kong Country Returns"],
    ["039", "Crash Bandicoot: The Wrath of Cortex"],
    ["035", "Crash of the Titans"],
    ["036", "Crash Tag Team Racing"],
    ["038", "Crash Twinsanity"],
    ["037", "Crash Nitro Kart"],
    ["442", "Shrek 2"],
    ["395", "Shrek the Third"],
    ["594", "Shrek Smash n' Crash Racing"],
    ["382", "Sonic Unleashed"],
    ["002", "Sonic Riders"],
    ["274", "Sega Superstars Tennis"],
    ["470", "Ecco: Defender of the Future"]
  ],
  [
    ["011", "Bolt"],
    ["187", "Garfield 2"],
    ["064", "G-Force"],
    ["595", "Os Sem-Floresta"],
    ["417", "Ice Age: Dawn of the Dinosaurs"],
    ["534", "Ice Age 2: The Meltdown"],
    ["014", "Ice Age 2: The Meltdown"],
    ["082", "Kung Fu Panda"],
    ["423", "Toy Story 3"],
    ["436", "Madagascar: Escape 2 Africa"],
    ["418", "Meu Malvado Favorito"],
    ["495", "Woody Woodpecker"],
    ["441", "Ratatouille"],
    ["592", "WALL-E"],
    ["018", "As Crônicas de Nárnia: O Leão, a Feiticeira e o Guarda-Roupa"],
    ["464", "Tarzan: Freeride"]
  ],
  [
    ["507", "Pokémon Adventure"],
    ["012", "Spyro: A Hero's Tail"],
    ["286", "Marvel Super Hero Squad"],
    ["545", "Klonoa 2: Lunatea's Veil"],
    ["061", "Astro Boy: The Video Game"],
    ["546", "I-Ninja"],
    ["488", "Sly Raccoon"],
    ["076", "Army Men: Major Malfunction"],
    ["491", "Cars: Race-O-Rama"],
    ["531", "Cartoon Network Racing"],
    ["007", "The Secret Saturdays: Beasts of the 5th Sun"],
    ["068", "Pitfall: The Lost Expedition"],
    ["524", "Monster House"],
    ["079", "Aliens in the Attic"],
    ["017", "Ghostbusters: The Video Game"],
    ["293", "Destroy All Humans!"]
  ],
  [
    ["044", "Digimon Rumble Arena 2"],
    ["045", "Digimon World 4"],
    ["046", "Digimon World: Data Squad"],
    ["047", "Digimon World X"],
    ["428", "Scooby-Doo! The Mystery of the Swamp"],
    ["574", "Scooby-Doo! Unmasked"],
    ["248", "Scooby-Doo! Mystery Mayhem"],
    ["528", "Looney Tunes: Back in Action"],
    ["022", "Teenage Mutant Ninja Turtles: Smash-Up"],
    ["404", "Teenage Mutant Ninja Turtles 2: Battle Nexus"],
    ["065", "The Simpsons Game"],
    ["447", "The Simpsons: Hit & Run"],
    ["—", "Mega Man X Collection"],
    ["475", "Mega Man X8"],
    ["066", "Rayman 3: Hoodlum Havoc"],
    ["434", "Donald Duck: Quack Attack"]
  ],
  [
    ["027", "Ben 10: Protector of Earth"],
    ["028", "Ben 10: Alien Force"],
    ["029", "Ben 10: Alien Force — Vilgax Attacks"],
    ["421", "Ben 10 Ultimate Alien: Cosmic Destruction"],
    ["027", "SpongeBob SquarePants: Battle for Bikini Bottom"],
    ["265", "The SpongeBob SquarePants Movie"],
    ["392", "SpongeBob SquarePants Featuring Nicktoons: Globs of Doom"],
    ["481", "Scaler"],
    ["443", "Barbie as the Island Princess"],
    ["008", "Barbie in the 12 Dancing Princesses"],
    ["519", "Disney Princess: Enchanted Journey"],
    ["590", "Stuart Little 3: Big Photo Adventure"],
    ["019", "Innocent Life: A Futuristic Harvest Moon"],
    ["006", "Harvest Moon: A Wonderful Life"],
    ["549", "Harvest Moon: Save the Homeland"],
    ["016", "Worms 4: Mayhem"]
  ],
  [
    ["281", "Harry Potter and the Goblet of Fire"],
    ["232", "Harry Potter and the Order of the Phoenix"],
    ["004", "Harry Potter and the Prisoner of Azkaban"],
    ["591", "Harry Potter: Quidditch World Cup"],
    ["529", "Harry Potter and the Chamber of Secrets"],
    ["182", "Bully"],
    ["473", "Leisure Suit Larry: Magna Cum Laude — Uncut!"],
    ["467", "Playboy: The Mansion"],
    ["026", "The Sims"],
    ["437", "The Sims: Bustin' Out"],
    ["025", "The Sims 2"],
    ["023", "The Sims 2: Castaway"],
    ["024", "The Sims 2: Pets"],
    ["604", "Minecraft"],
    ["609", "Disney's Peter Pan: The Legend of Never Land"],
    ["448", "Pac-Man Power Pack"]
  ],
  [
    ["402", "Tenchu: Wrath of Heaven"],
    ["403", "Tenchu: Fatal Shadows"],
    ["502", "Beat Down: Fists of Vengeance"],
    ["245", "Onimusha: Dawn of Dreams"],
    ["288", "Dynasty Warriors 6"],
    ["566", "Dynasty Warriors 5: Empires"],
    ["567", "Warriors Orochi"],
    ["509", "Nightshade"],
    ["568", "Demon Chaos"],
    ["547", "Maximo vs. Army of Zin"],
    ["275", "The Bouncer"],
    ["09", "Power Rangers Super Legends"],
    ["500", "Masters of the Universe: He-Man — Defender of Grayskull"],
    ["501", "X-Men: The Official Game"],
    ["486", "The Punisher"],
    ["419", "Peter Jackson's King Kong: The Official Game of the Movie"]
  ],
  [
    ["186", "Star Wars: Battlefront"],
    ["185", "Star Wars: The Force Unleashed"],
    ["184", "Star Wars: The Clone Wars"],
    ["295", "Star Wars Episode III: Revenge of the Sith"],
    ["003", "Jak and Daxter: The Precursor Legacy"],
    ["547", "Jak 3"],
    ["263", "Jak X: Combat Racing"],
    ["207", "Fullmetal Alchemist and the Curse of the Crimson Elixir"],
    ["268", "Transformers: The Game"],
    ["231", "Transformers: Revenge of the Fallen"],
    ["197", "Metal Saga"],
    ["207", "Metal Slug 3"],
    ["297", "Terminator 3: Rise of the Machines"],
    ["168", "Rise to Honor"],
    ["013", "Ultraman"],
    ["087", "Diabolik: The Original Sin"]
  ],
  [
    ["600", "Spider-Man 2"],
    ["234", "Spider-Man 3"],
    ["236", "Marvel: Ultimate Alliance 2"],
    ["252", "Marvel: Ultimate Alliance"],
    ["233", "Spider-Man: Web of Shadows"],
    ["251", "Spider-Man: Friend or Foe"],
    ["232", "X-Men Origins: Wolverine"],
    ["224", "The Incredible Hulk"],
    ["276", "Spawn: Armageddon"],
    ["287", "Superman Returns"],
    ["468", "X-Men Legends II: Rise of Apocalypse"],
    ["239", "Justice League Heroes"],
    ["541", "Batman: Vengeance"],
    ["264", "Batman Begins"],
    ["221", "Batman: Rise of Sin Tzu"],
    ["210", "Iron Man"]
  ],
  [
    ["181", "God of War"],
    ["180", "God of War II"],
    ["195", "Shadow of the Colossus"],
    ["535", "Shadow of Rome"],
    ["212", "The Lord of the Rings: The Return of the King"],
    ["253", "The Lord of the Rings: The Two Towers"],
    ["270", "The Lord of the Rings: The Fellowship of the Ring"],
    ["211", "The Lord of the Rings: The Third Age"],
    ["416", "The Lord of the Rings: Aragorn's Quest"],
    ["213", "Prince of Persia: The Sands of Time"],
    ["209", "Prince of Persia: Warrior Within"],
    ["074", "Conan"],
    ["466", "The Scorpion King: Rise of the Akkadian"],
    ["381", "King Arthur"],
    ["219", "Indiana Jones and the Staff of Kings"],
    ["499", "Pirates of the Caribbean: At World's End"]
  ],
  [
    ["052", "Naruto: Ultimate Ninja"],
    ["055", "Naruto: Ultimate Ninja 2"],
    ["056", "Naruto: Ultimate Ninja 3"],
    ["057", "Naruto Shippuden: Ultimate Ninja 4"],
    ["058", "Naruto Shippuden: Ultimate Ninja 5"],
    ["053", "Naruto Shippuden: Ultimate Ninja 5"],
    ["240", "Naruto: Uzumaki Chronicles 2"],
    ["054", "Coleção Naruto — 4 Jogos"],
    ["407", "Yu Yu Hakusho: Dark Tournament"],
    ["010", "Bakugan: Battle Brawlers"],
    ["439", "Zatch Bell! Mamodo Battles"],
    ["540", "Naruto Shippuden: Ultimate Ninja 6"],
    ["048", "Yu-Gi-Oh! The Duelists of the Roses"],
    ["049", "Yu-Gi-Oh! GX: Tag Force Evolution"],
    ["050", "Yu-Gi-Oh! GX: The Beginning of Destiny"],
    ["051", "Yu-Gi-Oh! The Duelists of the Roses"]
  ],
  [
    ["543", "Dragon Ball Z: Budokai Tenkaichi"],
    ["544", "Dragon Ball Z: Budokai Tenkaichi 2"],
    ["034", "Dragon Ball Z: Budokai Tenkaichi 3"],
    ["583", "Dragon Ball Z: Budokai Tenkaichi 4"],
    ["031", "Dragon Ball Z: Budokai"],
    ["033", "Dragon Ball Z: Budokai 2"],
    ["408", "Dragon Ball Z: Budokai 3"],
    ["042", "Dragon Ball Z — coleção"],
    ["040", "Dragon Ball Z: Infinite World"],
    ["041", "Dragon Ball Z: Sparking! Meteor"],
    ["043", "Dragon Ball Z 2"],
    ["030", "Dragon Ball AF"],
    ["640", "Dragon Ball Z: Sagas"],
    ["610", "Dragon Ball Z: Budokai Tenkaichi 3"],
    ["021", "Cavaleiros do Zodíaco: The Hades"],
    ["388", "Cavaleiros do Zodíaco: A Saga do Santuário"]
  ],
  [
    ["415", "La Pucelle: Tactics"],
    ["020", "Dragon Quest VIII: Journey of the Cursed King"],
    ["449", "Odin Sphere"],
    ["179", "Zegaia 2: Duel Saga"],
    ["—", "Dirge of Cerberus: Final Fantasy VII"],
    ["116", "Final Fantasy X"],
    ["267", "Final Fantasy XII"],
    ["411", "Final Fantasy X-2"],
    ["284", "Kingdom Hearts"],
    ["489", "Kingdom Hearts II"],
    ["476", "Disgaea: Hour of Darkness"],
    ["477", "Disgaea 2: Cursed Memories"],
    ["289", "Xenosaga Episode II"],
    ["492", "Xenosaga Episode III"],
    ["554", "Shin Megami Tensei: Digital Devil Saga"],
    ["296", "Galerians: Ash"]
  ],
  [
    ["400", "Swords of Destiny"],
    ["490", "Makai Kingdom: Chronicles of the Sacred Tome"],
    ["483", "Legion: The Legend of Excalibur"],
    ["485", "Star Ocean: Till the End of Time"],
    ["405", "Stella Deus: The Gate of Eternity"],
    ["551", "Jade Cocoon 2"],
    ["465", "Dynasty Warriors: Gundam 2"],
    ["457", "Wild Arms 4"],
    ["092", "Age of Empires II: The Age of Kings"],
    ["487", "Commandos 3: Destination Berlin"],
    ["197", "Metal Saga"],
    ["612", "Gauntlet: Seven Sorrows"],
    ["503", "Eternal Poison"],
    ["514", "Champions of Norrath"],
    ["580", "Champions: Return to Arms"],
    ["608", "Shadow Hearts: Covenant"]
  ],
  [
    ["431", "Burnout"],
    ["171", "Burnout 2: Point of Impact"],
    ["144", "Burnout 3: Takedown"],
    ["146", "Burnout Revenge"],
    ["429", "Need for Speed: Hot Pursuit 2"],
    ["158", "Need for Speed: Underground"],
    ["157", "Need for Speed: Underground 2"],
    ["160", "Need for Speed: Carbon"],
    ["260", "Need for Speed: Most Wanted"],
    ["156", "Need for Speed: ProStreet"],
    ["159", "Need for Speed: Undercover"],
    ["141", "Ferrari Challenge: Trofeo Pirelli"],
    ["269", "Formula 1 2005"],
    ["244", "Formula 1 2006"],
    ["243", "Gran Turismo 3: A-Spec"],
    ["149", "Gran Turismo 4"]
  ],
  [
    ["145", "Monster 4x4: Masters of Metal"],
    ["081", "Beach King Stunt Racer"],
    ["138", "ATV Offroad Fury 2"],
    ["273", "ATV Offroad Fury 4"],
    ["249", "MX Unleashed"],
    ["132", "MX vs. ATV: Untamed"],
    ["548", "MX 2002 Featuring Ricky Carmichael"],
    ["550", "MX Rider"],
    ["277", "Nitro Bike"],
    ["135", "MotoGP 08"],
    ["136", "Kawasaki Quad Bikes"],
    ["137", "Ski-Doo Snow Racing"],
    ["134", "Jacked"],
    ["401", "Speed Kings"],
    ["537", "Harley-Davidson: Race to the Rally"],
    ["459", "SBK 09: Superbike World Championship"]
  ],
  [
    ["385", "Super Trucks Racing"],
    ["060", "Big Mutha Truckers"],
    ["148", "Hardware: Online Arena"],
    ["530", "Star Wars: Racer Revenge"],
    ["235", "Ace Combat 5: The Unsung War"],
    ["298", "Lethal Skies: Elite Pilot Team SW"],
    ["238", "Air Raid 3"],
    ["631", "Persona 4"],
    ["655", "Crossover Legends Tenkaichi"],
    ["656", "Manhunt 2"],
    ["657", "Ultimate Spider-Man"]
  ],
  [
    ["226", "Hitman: Blood Money"],
    ["271", "Hitman 2: Silent Assassin"],
    ["227", "Hitman: Contracts"],
    ["397", "Mafia"],
    ["113", "The Matrix: Path of Neo"],
    ["115", "Enter the Matrix"],
    ["098", "Mercenaries: Playground of Destruction"],
    ["096", "Mercenaries 2: World in Flames"],
    ["523", "Metal Gear Solid 2: Substance"],
    ["194", "Metal Gear Solid 3: Snake Eater"],
    ["291", "Tom Clancy's Ghost Recon: Jungle Storm"],
    ["255", "Killzone"],
    ["090", "007: Quantum of Solace"],
    ["199", "G.I. Joe: The Rise of Cobra"],
    ["202", "Psi-Ops: The Mindgate Conspiracy"],
    ["523", "Battlefield 2: Modern Combat"]
  ],
  [
    ["462", "Call of Duty: Finest Hour"],
    ["109", "Call of Duty 2: Big Red One"],
    ["110", "Call of Duty 3"],
    ["111", "Call of Duty: World at War: Final Fronts"],
    ["107", "Medal of Honor: European Assault"],
    ["106", "Medal of Honor: Frontline"],
    ["259", "Medal of Honor: Rising Sun"],
    ["108", "Medal of Honor: Vanguard"],
    ["542", "Brothers in Arms: Road to Hill 30"],
    ["067", "The History Channel: Civil War: A Nation Divided"],
    ["173", "Conflict: Vietnam"],
    ["055", "Vietcong: Purple Haze"],
    ["112", "The History Channel: Battle for the Pacific"],
    ["183", "Black"],
    ["458", "Return to Castle Wolfenstein: Operation Resurrection"],
    ["261", "Conflict: Desert Storm II: Back to Baghdad"]
  ],
  [
    ["205", "Samurai Western"],
    ["511", "Gun"],
    ["258", "Tom Clancy's Splinter Cell: Chaos Theory"],
    ["469", "Tom Clancy's Rainbow Six 3"],
    ["208", "Syphon Filter: The Omega Strain"],
    ["170", "Syphon Filter: Logan's Shadow"],
    ["200", "Sniper Elite"],
    ["482", "Soldier of Fortune: Payback"],
    ["496", "SOCOM: U.S. Navy SEALs"],
    ["497", "SOCOM II: U.S. Navy SEALs"],
    ["504", "SOCOM 3: U.S. Navy SEALs"],
    ["426", "Contra: Shattered Soldier"],
    ["299", "Delta Force: Black Hawk Down"],
    ["383", "Darkwatch"],
    ["229", "24: The Game"],
    ["204", "Dino Stalker"]
  ],
  [
    ["226", "Hitman: Blood Money"],
    ["271", "Hitman 2: Silent Assassin"],
    ["227", "Hitman: Contracts"],
    ["397", "Mafia"],
    ["113", "The Matrix: Path of Neo"],
    ["115", "Enter the Matrix"],
    ["461", "NARC"],
    ["518", "Fire Warrior"],
    ["090", "007: Quantum of Solace"],
    ["199", "G.I. Joe: The Rise of Cobra"],
    ["202", "Psi-Ops: The Mindgate Conspiracy"],
    ["204", "Dino Stalker"],
    ["285", "Cabela's Outdoor Adventures"],
    ["533", "Cabela's Monster Bass"],
    ["532", "Cabela's Bass Strike"],
    ["290", "The Godfather: The Game"]
  ],
  [
    ["155", "Grand Theft Auto: San Andreas"],
    ["152", "Grand Theft Auto: Vice City"],
    ["151", "Grand Theft Auto: Vice City Stories"],
    ["154", "Grand Theft Auto: Liberty City Stories"],
    ["153", "Grand Theft Auto IV"],
    ["572", "Grand Theft Auto V — Capítulo 1: Um Dia de Fúria"],
    ["630", "Grand Theft Auto: Vice City 2023"],
    ["438", "Grand Theft Auto: Dragon Ball"],
    ["479", "Tropa de Elite 2"],
    ["193", "True Crime: Streets of LA"],
    ["272", "True Crime: New York City"],
    ["086", "XIII"],
    ["093", "50 Cent: Bulletproof"],
    ["089", "50 Cent: Bulletproof"],
    ["494", "Reservoir Dogs"],
    ["254", "The Warriors"]
  ],
  [
    ["453", "Ghost Rider"],
    ["506", "Constantine"],
    ["440", "Buffy the Vampire Slayer: Chaos Bleeds"],
    ["075", "Serious Sam: Next Encounter"],
    ["450", "Blade II"],
    ["478", "Fatal Frame II: Crimson Butterfly"],
    ["203", "Fatal Frame III: The Tormented"],
    ["393", "Freedom Fighters"],
    ["444", "The Suffering 2: Ties That Bind"],
    ["505", "The Suffering"],
    ["204", "Dino Stalker"],
    ["205", "Jurassic: The Hunted"],
    ["201", "Alone in the Dark"],
    ["613", "Colosseum: Road to Freedom"],
    ["617", "Just Cause"]
  ],
  [
    ["118", "Resident Evil Code: Veronica X"],
    ["119", "Resident Evil 4"],
    ["253", "Resident Evil 4"],
    ["117", "Resident Evil: Dead Aim"],
    ["599", "Resident Evil Outbreak File #2"],
    ["167", "Obscure II"],
    ["175", "Manhunt 2"],
    ["399", "Silent Hill 2"],
    ["189", "Silent Hill 3"],
    ["188", "Silent Hill 4: The Room"],
    ["190", "Silent Hill: Origins"],
    ["191", "Silent Hill: Shattered Memories"],
    ["100", "Tomb Raider: The Angel of Darkness"],
    ["099", "Tomb Raider: Anniversary"],
    ["102", "Tomb Raider: Legend"],
    ["101", "Tomb Raider: Underworld"]
  ],
  [
    ["222", "The Mummy"],
    ["198", "Predator: Concrete Jungle"],
    ["247", "The Godfather: The Game"],
    ["516", "Castlevania: Curse of Darkness"],
    ["266", "Van Helsing"],
    ["223", "Soul Reaver 2"],
    ["571", "Max Payne"],
    ["177", "Max Payne 2: The Fall of Max Payne"],
    ["578", "Devil May Cry"],
    ["228", "Devil May Cry 2"],
    ["283", "Devil May Cry 3: Dante's Awakening"],
    ["502", "Forgotten Realms: Demon Stone"],
    ["094", "BloodRayne"],
    ["095", "BloodRayne 2"],
    ["584", "Clock Tower 3"],
    ["470", "Primal"]
  ],
  [
    ["216", "Fight Night 2004"],
    ["217", "Fight Night Round 3"],
    ["607", "WWE 2K22"],
    ["278", "UFC: Throwdown"],
    ["520", "UFC: Sudden Impact"],
    ["241", "WWE SmackDown vs. Raw 2010"],
    ["420", "WWE SmackDown vs. Raw 2011"],
    ["237", "WWE SmackDown: Shut Your Mouth"],
    ["455", "WWE All Stars"],
    ["435", "Fire Pro Wrestling Returns"],
    ["398", "Samurai Shodown Anthology"],
    ["391", "The King of Fighters '98 Ultimate Match"],
    ["390", "Street Fighter EX3"],
    ["080", "Hyper Street Fighter II: The Anniversary Edition"],
    ["456", "Street Fighter Alpha Anthology"],
    ["451", "Capcom vs. SNK 2: Mark of the Millennium"]
  ],
  [
    ["230", "The King of Fighters: Neowave"],
    ["193", "Virtua Fighter 4"],
    ["214", "Tekken 4"],
    ["215", "Tekken 5"],
    ["396", "Mortal Kombat: Deception"],
    ["105", "Mortal Kombat: Deadly Alliance"],
    ["104", "Mortal Kombat: Shaolin Monks"],
    ["103", "Mortal Kombat: Armageddon"],
    ["172", "Def Jam: Vendetta"],
    ["558", "Fight Night Round 2"],
    ["091", "Crime Life: Gang Wars"],
    ["480", "Rocky Legends"],
    ["611", "Urban Reign"],
    ["596", "The Warriors"],
    ["615", "God Hand"],
    ["515", "Marvel Nemesis: Rise of the Imperfects"]
  ],
  [
    ["606", "Super Bomba Patch"],
    ["603", "eFootball PES 2021"],
    ["589", "eFootball PES 2020"],
    ["581", "eFootball PES 2019"],
    ["575", "eFootball PES 2018"],
    ["570", "PES 2017"],
    ["565", "PES 2016"],
    ["564", "PES 2015"],
    ["561", "PES 2014"],
    ["586", "FIFA 18"],
    ["576", "FIFA 17"],
    ["560", "FIFA 14"],
    ["445", "FIFA 13"],
    ["452", "FIFA Soccer 12"],
    ["618", "PES 2022"],
    ["619", "Super Bomba Patch 2023"]
  ],
  [
    ["605", "Super Bomba Patch 2022"],
    ["585", "Bomba Patch Classic"],
    ["562", "Bomba Patch 2014"],
    ["176", "Bomba Patch 2013 — Musas Vol. 6"],
    ["559", "Bomba Patch 66"],
    ["563", "Bomba Patch 59"],
    ["525", "Bomba Patch Simulation"],
    ["587", "Bomba Patch União 19/20"],
    ["015", "NCAA Football 11"],
    ["512", "Madden NFL 12"],
    ["161", "NFL Street 2"],
    ["389", "NHL 2K10"],
    ["279", "NBA Live 09"],
    ["413", "NBA 2K11"],
    ["178", "NBA 2K12"],
    ["162", "NBA Street V3"]
  ],
  [
    ["633", "Super Bomba Patch 2025"],
    ["643", "FIFA World Cup 2026 — Bomba Patch"],
    ["653", "Bomba Aleatório Patch"],
    ["632", "eFootball PES 2025"],
    ["634", "EA Sports FC 25"],
    ["651", "PES 26"],
    ["654", "PES Brasileirão 2027"],
    ["641", "Side Pocket"],
    ["649", "The Hustle: Detroit Streets"]
  ],
  [
    ["166", "FIFA Street"],
    ["257", "FIFA Street 2"],
    ["169", "Pro Beach Soccer"],
    ["427", "Freestyle Soccer"],
    ["176", "Championship Manager 2007"],
    ["300", "FIVB Volleyball"],
    ["427", "Psycho Ball"],
    ["414", "Hot Shots Tennis"],
    ["454", "Monopoly"],
    ["621", "Super Bomba Patch 2024"],
    ["622", "eFootball 2024"]
  ],
  [
    ["155", "Michael Jackson: Moonwalker"],
    ["164", "Dance Dance Revolution SuperNOVA 2"],
    ["165", "Dancing with the Stars"],
    ["409", "Rock Band 2"],
    ["126", "Guitar Hero"],
    ["125", "Guitar Hero II"],
    ["120", "Guitar Hero III: Legends of Rock"],
    ["121", "Guitar Hero: Aerosmith"],
    ["122", "Guitar Hero: World Tour"],
    ["127", "Guitar Hero Encore: Rocks the 80s"],
    ["394", "Guitar Hero: Metallica"],
    ["129", "Guitar Hero III: Legião Urbana"],
    ["123", "Guitar Hero III — edição especial"],
    ["128", "Guitar Hero III: Nirvana"],
    ["513", "Guitar Hero III — edição especial"],
    ["573", "Anime Hero"]
  ],
  [
    ["556", "Tony Hawk's Pro Skater 3"],
    ["555", "Tony Hawk's Pro Skater 4"],
    ["557", "Tony Hawk's Underground"],
    ["130", "Tony Hawk's Underground 2"],
    ["386", "Tony Hawk's American Wasteland"],
    ["384", "Tony Hawk's Project 8"],
    ["387", "Tony Hawk's Proving Ground"],
    ["131", "Tony Hawk's Downhill Jam"],
    ["262", "Mat Hoffman's Pro BMX 2"],
    ["078", "SSX 3"],
    ["493", "Downhill Domination"],
    ["294", "Marc Ecko's Getting Up: Contents Under Pressure"],
    ["292", "Aggressive Inline"],
    ["474", "Jackass: The Game"],
    ["521", "Transworld Surf"],
    ["569", "Bleach: Blade Battlers 2nd"]
  ],
  [
    ["635", "Grand Theft Auto: Resident Evil"],
    ["636", "Grand Theft Auto: Bônus Brasil"],
    ["639", "Minecraft: Star Miners Edition"],
    ["647", "RoadKill"],
    ["380", "Eragon"],
    ["638", "Fantastic Four"],
    ["637", "Resident Evil: Hunk"],
    ["645", "Area 51"],
    ["642", "Mortal Kombat: Deadly Alliance"],
    ["644", "Rygar: The Legendary Adventure"],
    ["646", "The Thing"],
    ["640", "Dragon Ball Z: Xenoverse 3"],
    ["652", "Dragon Ball Z: Budokai Tenkaichi — Rare"],
    ["648", "Spawn: Armageddon"],
    ["650", "Super Mario Bros. — edição especial"]
  ],
  [
    ["552", "LEGO Star Wars: The Video Game"],
    ["246", "LEGO Star Wars II: The Original Trilogy"],
    ["432", "LEGO Batman: The Videogame"],
    ["220", "LEGO Indiana Jones: The Original Adventures"],
    ["539", "LEGO Racers 2"],
    ["085", "LEGO Island Xtreme Stunts"],
    ["538", "LEGO Soccer Mania"],
    ["286", "Marvel Super Hero Squad"],
    ["070", "Dragon's Lair 3D: Special Edition"],
    ["620", "Sonic Heroes"],
    ["623", "Samurai Warriors 2"]
  ]
];

const genreDefinitions = [
  {
    id: "corrida",
    terms: [
      "burnout", "need for speed", "ferrari challenge", "f1 ", "gran turismo",
      "monster 4x4", "beach king", "atv", "mx ", "motogp", "kawasaki",
      "ski-doo", "jacked", "speed kings", "harley-davidson", "sbk", "super trucks",
      "big mutha truckers", "hardware: online arena", "racer revenge", "jak x: combat racing",
      "tony hawk", "mat hoffman", "ssx", "downhill domination", "transworld surf"
    ]
  },
  {
    id: "terror",
    terms: [
      "fatal frame", "manhunt", "the suffering", "dino stalker", "jurassic: the hunted",
      "alone in the dark", "resident evil", "obscure", "silent hill", "the mummy",
      "predator", "van helsing", "soul reaver", "bloodrayne", "clock tower", "the thing", "darkwatch"
    ]
  },
  {
    id: "tiro",
    terms: [
      "hitman", "mafia", "the matrix", "mercenaries", "metal gear", "ghost recon", "killzone",
      "g.i. joe", "psi-ops", "battlefield", "call of duty", "medal of honor", "brothers in arms",
      "history channel", "conflict:", "vietcong", "black", "wolfenstein", "samurai western",
      "splinter cell", "rainbow six", "syphon filter", "sniper elite", "soldier of fortune", "socom",
      "contra:", "delta force", "narc", "fire warrior", "cabela", "the godfather", "true crime",
      "50 cent", "the warriors", "grand theft auto"
    ],
    exactTitles: ["Gun"]
  },
  {
    id: "luta",
    terms: [
      "naruto", "yu yu", "bakugan", "zatch bell", "dragon ball", "saint seiya", "fight night",
      "wwe", "ufc", "fire pro", "samurai shodown", "king of fighters", "street fighter",
      "capcom vs.", "virtua fighter", "tekken", "mortal kombat", "def jam", "rocky", "urban reign",
      "god hand", "marvel nemesis", "bleach", "crossover legends"
    ]
  }
];

function gameGenres(title) {
  const normalizedTitle = title.toLocaleLowerCase("pt-BR");
  return genreDefinitions.filter(function (genre) {
    const matchesTerm = genre.terms.some(function (term) {
      return normalizedTitle.includes(term);
    });
    return matchesTerm || (genre.exactTitles || []).includes(title);
  }).map(function (genre) {
    return genre.id;
  });
}

const games = catalogPages.flatMap(function (page, pageIndex) {
  return page.map(function (game, gameIndex) {
    return {
      id: pageIndex + "-" + gameIndex,
      code: game[0],
      title: game[1],
      page: pageIndex + 1,
      genres: gameGenres(game[1]),
      cover: "assets/covers/p" + (pageIndex + 1) + "-" + String(gameIndex + 1).padStart(2, "0") + ".jpg"
    };
  });
});

const physicalPageGames = catalogPages.map(function (_, pageIndex) {
  return games.filter(function (game) {
    return game.page === pageIndex + 1;
  });
});

const grid = document.querySelector("#gamesGrid");
const search = document.querySelector("#busca");
const counter = document.querySelector("#contador");
const pageInfo = document.querySelector("#pageInfo");
const emptyState = document.querySelector("#emptyState");
const pagination = document.querySelector("#pagination");
const genreFilters = document.querySelector("#genreFilters");
const dialog = document.querySelector("#gameDialog");
const dialogCover = document.querySelector("#dialogCover");
const dialogCode = document.querySelector("#dialogCode");
const dialogTitle = document.querySelector("#dialogTitle");
const dialogPlatform = document.querySelector("#dialogPlatform");
const closeDialog = document.querySelector("#fecharDialog");
const copyCode = document.querySelector("#copiarCodigo");
const copyFeedback = document.querySelector("#copyFeedback");

let currentGame = null;
let currentPage = 1;
let activeGenre = "todos";
const pageSize = 16;

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function displayCode(game) {
  return game.code === "—" ? "A confirmar" : game.code;
}

function cardTemplate(game) {
  const title = escapeHtml(game.title);
  const code = escapeHtml(displayCode(game));

  return '<article class="game-card" tabindex="0" role="button" aria-label="Ver detalhes de ' + title + '" data-id="' + game.id + '">' +
    '<div class="cover-area">' +
      '<img loading="lazy" src="' + game.cover + '" alt="Capa de catálogo de ' + title + '">' +
      '<span class="cover-fallback">' + title + '</span>' +
    '</div>' +
    '<div class="card-body">' +
      '<p class="card-code"><span>CÓDIGO</span><strong>' + code + '</strong></p>' +
      '<h3>' + title + '</h3>' +
      '<div class="card-bottom"><span>PLAYSTATION 2</span><span class="card-arrow" aria-hidden="true">↗</span></div>' +
    '</div>' +
  '</article>';
}

function visibleGames() {
  const term = search.value.trim().toLocaleLowerCase("pt-BR");
  return games.filter(function (game) {
    const matchesSearch = !term || (game.title + " " + game.code).toLocaleLowerCase("pt-BR").includes(term);
    const matchesGenre = activeGenre === "todos" || game.genres.includes(activeGenre);
    return matchesSearch && matchesGenre;
  });
}

function isFilteredView() {
  return Boolean(search.value.trim()) || activeGenre !== "todos";
}

function pagesForView(list) {
  if (!isFilteredView()) {
    return physicalPageGames;
  }

  return Array.from({ length: Math.ceil(list.length / pageSize) }, function (_, index) {
    return list.slice(index * pageSize, (index + 1) * pageSize);
  });
}

function updateGenreFilters() {
  genreFilters.querySelectorAll("button[data-genre]").forEach(function (button) {
    const isActive = button.dataset.genre === activeGenre;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function renderPagination(totalPages) {
  if (totalPages <= 1) {
    pagination.hidden = true;
    pagination.innerHTML = "";
    return;
  }

  const pageButtons = Array.from({ length: totalPages }, function (_, index) {
    const page = index + 1;
    const isCurrent = page === currentPage;
    return '<button class="page-number' + (isCurrent ? ' is-current' : '') + '" type="button" data-page="' + page + '"' + (isCurrent ? ' aria-current="page"' : '') + ' aria-label="Página ' + page + '">' + page + '</button>';
  }).join("");

  pagination.hidden = false;
  pagination.innerHTML =
    '<button class="page-nav" type="button" data-page="' + (currentPage - 1) + '"' + (currentPage === 1 ? ' disabled' : '') + '>← Anterior</button>' +
    '<div class="page-numbers">' + pageButtons + '</div>' +
    '<button class="page-nav" type="button" data-page="' + (currentPage + 1) + '"' + (currentPage === totalPages ? ' disabled' : '') + '>Próxima →</button>';
}

function renderGames() {
  const list = visibleGames();
  const pageGroups = pagesForView(list);
  const totalPages = Math.max(1, pageGroups.length);

  if (!list.length) {
    currentPage = 1;
  } else if (currentPage > totalPages) {
    currentPage = totalPages;
  }

  const currentList = pageGroups[currentPage - 1] || [];
  const filtered = isFilteredView();

  grid.innerHTML = currentList.map(cardTemplate).join("");
  counter.textContent = list.length + (list.length === 1 ? " jogo" : " jogos") + (filtered ? " encontrados" : " no catálogo");
  pageInfo.textContent = list.length ? "Página " + currentPage + " de " + totalPages + " · " + currentList.length + (currentList.length === 1 ? " jogo nesta página" : " jogos nesta página") : "";
  emptyState.hidden = list.length !== 0;
  updateGenreFilters();
  renderPagination(totalPages);

  grid.querySelectorAll(".game-card").forEach(function (card) {
    const game = games.find(function (item) { return item.id === card.dataset.id; });
    const image = card.querySelector("img");

    image.addEventListener("error", function () {
      image.classList.add("is-fallback");
      image.parentElement.classList.add("show-fallback");
    });

    card.addEventListener("click", function () {
      openDialog(game);
    });

    card.addEventListener("keydown", function (event) {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openDialog(game);
      }
    });
  });
}

function openDialog(game) {
  currentGame = game;
  copyFeedback.textContent = "";
  dialogCode.textContent = game.code === "—" ? "CÓDIGO A CONFIRMAR" : "CÓDIGO " + game.code;
  dialogTitle.textContent = game.title;
  dialogPlatform.textContent = "PlayStation 2";
  dialogCover.src = game.cover;
  dialogCover.alt = "Capa de catálogo de " + game.title;

  if (typeof dialog.showModal === "function") {
    dialog.showModal();
  }
}

function closeDetails() {
  if (dialog.open) {
    dialog.close();
  }
}

search.addEventListener("input", function () {
  currentPage = 1;
  renderGames();
});

genreFilters.addEventListener("click", function (event) {
  const button = event.target.closest("button[data-genre]");
  if (!button) {
    return;
  }

  activeGenre = button.dataset.genre;
  currentPage = 1;
  renderGames();
});

pagination.addEventListener("click", function (event) {
  const button = event.target.closest("button[data-page]");
  const page = Number(button?.dataset.page);

  if (!button || button.disabled || !Number.isInteger(page) || page < 1) {
    return;
  }

  currentPage = page;
  renderGames();
  document.querySelector("#catalogo").scrollIntoView({ behavior: "smooth", block: "start" });
});

closeDialog.addEventListener("click", closeDetails);

dialog.addEventListener("click", function (event) {
  const rectangle = dialog.getBoundingClientRect();
  const clickedOutside = event.clientX < rectangle.left || event.clientX > rectangle.right || event.clientY < rectangle.top || event.clientY > rectangle.bottom;
  if (clickedOutside) {
    closeDetails();
  }
});

copyCode.addEventListener("click", async function () {
  if (!currentGame || currentGame.code === "—") {
    copyFeedback.textContent = "O código desta capa não ficou legível na foto enviada.";
    return;
  }

  const value = currentGame.code;
  try {
    await navigator.clipboard.writeText(value);
    copyFeedback.textContent = "Código " + value + " copiado.";
  } catch (error) {
    copyFeedback.textContent = "Código do catálogo: " + value;
  }
});

renderGames();
