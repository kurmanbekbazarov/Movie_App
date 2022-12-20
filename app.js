
// Get all the images
image_array = [
    'aladin.jpg', 
    'aquaman.jpg', 
    'avengers.jpg', 
    'black-panther.jpg', 
    'captain-marvel.jpg', 
    'fast-furious9.jpg', 
    'godzilla-vs-king-kong.jpg', 
    'IT-2.jpg', 
    'john-wick.jpg', 
    'joker.jpg', 
    'jumanji.jpg', 
    'maleficent.jpg', 
    'once-upon-time-in-hollywood.jpg', 
    'parasite.jpg', 
    'pikachu.jpg',
    'rampage.jpg', 
    'shazam.jpg', 
    'spider-man.jpg', 
    'terminator.jpg', 
    'venom.jpg',
]

// Select the name 
const namex = document.querySelector(".name"); 

// Select the description 
const description = document.querySelector(".description");

// Select the genre 
const genre = document.querySelector(".genre");

// Select the year 
const year = document.querySelector(".year"); 

// Data of names, descriptions, genres and year of release. 

const names = [
    'Aladdin', 
    'Aquaman', 
    'Avengers: Endgame', 
    "Black Panther", 
    'Captain Marvel',
    'Fast and Furious 9: The Fast Saga', 
    'Godzilla vs. Kong', 
    'It Chapter Two', 
    'John Wick: Chapter 3 – Parabellum', 
    'Joker',
    'Jumanji: The Next Level',  
    'Maleficent: Mistress of Evil', 
    'Once Upon a Time... in Hollywood', 
    'Parasite', 
    'Pokémon Detective Pikachu', 
    'Rampage', 
    'Shazam', 
    'Spider-Man: No Way Home', 
    'Terminator: Dark Fate', 
    'Venom: Let There Be Carnage',
]

const descriptions = [
    "A kind-hearted street urchin Aladdin vies for the love of the beautiful princess Jasmine, the princess of Agrabah. When he finds a magic lamp, he uses the genie's magic power to make himself a prince in order to marry her. He's also on a mission to stop the powerful Jafar who plots to steal the magic lamp that could make his deepest wishes come true.", 
    "Arthur Curry (Jason Momoa) has always been different. His mother was an honorable Queen of Atlantean descent, while his father, a simple human lighthouse keeper. They met after she fled to land, running from her forced fiancée. A few years later, Arthur is a toddler, when his mother was forcefully and reluctantly taken back to Atlantis, where she was believed to be executed. Fast forward and Arthur is now an adult. After learning the truth about his destiny, he sets out to find a King's lost trident and stop an entire war before it even starts.", 
    "After half of all life is snapped away by Thanos, the Avengers are left scattered and divided. Now with a way to reverse the damage, the Avengers and their allies must assemble once more and learn to put differences aside in order to work together and set things right. Along the way, the Avengers realize that sacrifices must be made as they prepare for the ultimate final showdown with Thanos, which will result in the heroes fighting the biggest battle they have ever faced.", 
    "After the events of Captain America: Civil War, Prince T'Challa returns home to the reclusive, technologically advanced African nation of Wakanda to serve as his country's new king. However, T'Challa soon finds that he is challenged for the throne from factions within his own country. When two foes conspire to destroy Wakanda, the hero known as Black Panther must team up with C.I.A. agent Everett K. Ross and members of the Dora Milaje, Wakandan special forces, to prevent Wakanda from being dragged into a world war.", 
    "After crashing an experimental aircraft, Air Force pilot Carol Danvers is discovered by the Kree and trained as a member of the elite Starforce Military under the command of her mentor Yon-Rogg. Six years later, after escaping to Earth while under attack by the Skrulls, Danvers begins to discover there's more to her past. With help from S.H.I.E.L.D. agent Nick Fury, they set out to unravel the truth.",
    "Dom Toretto is living the quiet life off the grid with Letty and his son, but they know that danger always lurks just over the peaceful horizon. This time, that threat forces Dom to confront the sins of his past to save those he loves most. His crew soon comes together to stop a world-shattering plot by the most skilled assassin and high-performance driver they've ever encountered -- Dom's forsaken brother.", 
    "Legends collide as Godzilla and Kong, the two most powerful forces of nature, clash on the big screen in a spectacular battle for the ages. As a squadron embarks on a perilous mission into fantastic uncharted terrain, unearthing clues to the Titans' very origins and mankind's survival, a conspiracy threatens to wipe the creatures, both good and bad, from the face of the earth forever.", 
    "Defeated by members of the Losers' Club, the evil clown Pennywise returns 27 years later to terrorize the town of Derry, Maine, once again. Now adults, the childhood friends have long since gone their separate ways. But when people start disappearing, Mike Hanlon calls the others home for one final stand. Damaged by scars from the past, the united Losers must conquer their deepest fears to destroy the shape-shifting Pennywise -- now more powerful than ever.", 
    "In this third installment of the adrenaline-fueled action franchise, skilled assassin John Wick (Keanu Reeves) returns with a $14 million price tag on his head and an army of bounty-hunting killers on his trail. After killing a member of the shadowy international assassin's guild, the High Table, John Wick is excommunicado, but the world's most ruthless hit men and women await his every turn.", 
    "Arthur Fleck works as a clown and is an aspiring stand-up comic. He has mental health issues, part of which involves uncontrollable laughter. Times are tough and, due to his issues and occupation, Arthur has an even worse time than most. Over time these issues bear down on him, shaping his actions, making him ultimately take on the persona he is more known as...Joker.", 
    "Four teens are transported into the video game Jumanji. They now have new bodies, complete with unique strengths and weaknesses. They also have a mission: retrieve a precious gem from an evil warlord and return it to the statue from which it came. If they can't do this, they'll never leave the game.", 
    "Maleficent and her goddaughter Aurora begin to question the complex family ties that bind them as they are pulled in different directions by impending nuptials, unexpected allies, and dark new forces at play.", 
    "Quentin Tarantino's Once Upon a Time... in Hollywood visits 1969 Los Angeles, where everything is changing, as TV star Rick Dalton (Leonardo DiCaprio) and his longtime stunt double Cliff Booth (Brad Pitt) make their way around an industry they hardly recognize anymore. The ninth film from the writer-director features a large ensemble cast and multiple storylines in a tribute to the final moments of Hollywood's golden age.", 
    "Jobless, penniless, and, above all, hopeless, the unmotivated patriarch, Ki-taek, and his equally unambitious family--his supportive wife, Chung-sook; his cynical twentysomething daughter, Ki-jung, and his college-age son, Ki-woo--occupy themselves by working for peanuts in their squalid basement-level apartment. Then, by sheer luck, a lucrative business proposition will pave the way for an ingeniously insidious scheme, as Ki-woo summons up the courage to pose as an English tutor for the teenage daughter of the affluent Park family. Now, the stage seems set for an unceasing winner-take-all class war. How does one get rid of a parasite?", 
    "The Pokémon World is an amazing place filled with hundreds of unique creatures - Pokémon. In Ryme City, Kanto, one of the few English speaking Pokémon in the world, Detective Pikachu, teams up with the son of a missing detective (Tim) to find Tim's dad.", 
    "Primatologist Davis (Dwayne Johnson) shares an unshakable bond with George, the extraordinarily intelligent silverback gorilla who has been in his care since he was young. When a greed-fueled corporation's genetic experiment goes awry, George and other animals across the country are mutated into aggressive supercreatures who destroy everything in their path. In this adrenaline-filled ride, Davis tries to find an antidote, not only to halt a global catastrophe but also to save the fearsome creature who was once his friend.", 
    "Shazam. explores Billy Batson's life; an abandoned 14-year-old looking for his parents; isolating himself from anyone willing to give him anything until he is given a final chance to settle in with a new foster family (themselves orphans) hoping they can help him see sense. Billy finds himself out of his depth quickly and it ends as so many had before; him running away. But this time; he runs into a powerful wizard and must take the mantle of Shazam. Leaving him with a confusing face, a confusing body, confusing powers, and no-one to turn to, but his foster family.", 
    "With Spider-Man's identity now revealed, our friendly neighborhood web-slinger is unmasked and no longer able to separate his normal life as Peter Parker from the high stakes of being a superhero. When Peter asks for help from Doctor Strange, the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.", 
    "A young female Mexican worker, Dani Ramos, is hunted down by a virtually indestructible terminator from the future called a REV-9. However, she is protected by an enhanced human named Grace who is also from the future. They flee from the unstoppable terminator and, out of the blue, Sarah Connor helps them on the road. All three head to Laredo, Texas, where Grace has the coordinates of a possible support and where they meet a T-800 who is living in an isolated location with his family. The group teams up to try to destroy the REV-9.", 
    "Eddie Brock struggles to adjust to his new life as the host of the alien symbiote Venom, which grants him super-human abilities in order to be a lethal vigilante. Brock attempts to reignite his career by interviewing serial killer Cletus Kasady, who becomes the host of the symbiote Carnage and escapes prison after a failed execution.",
]

const genres = [
    'Romance Adventure Fantasy Family Comedy Musical', 
    'Action Superhero Science fiction Adventure', 
    'Action Adventure Superhero Science fiction Fantasy', 
    'Fantasy Adventure Superhero Science fiction Action', 
    'Fantasy Adventure Superhero Science fiction Action',
    'Crime Thriller Adventure Action', 
    'Drama Action Monster Thriller Science fiction', 
    'Horror Thriller Mystery Supernatural', 
    'Crime Thriller Neo-noir Action', 
    'Thriller Crime Drama Psychological thriller',
    'Adventure Fantasy Family Comedy',  
    "Fairy tale Action Children's film", 
    'Comedy Drama', 
    'Thriller Comedy Drama Dark comedy Mystery', 
    "Action Comedy Children's film Fantasy Mystery Animation", 
    'Monster Adventure Science fiction Action', 
    'Action Comedy Adventure Superhero', 
    'Action Superhero Science fiction Adventure Fantasy', 
    'Action Science fiction Adventure Fantasy', 
    'Action Science fiction Superhero Thriller',
]

const years = [
    '2019', 
    '2018', 
    '2019', 
    '2018', 
    '2019',
    '2021', 
    '2021', 
    '2019', 
    '2019', 
    '2019',
    '2019',  
    '2019', 
    '2019', 
    '2019', 
    '2019', 
    '2018', 
    '2019', 
    '2021', 
    '2019', 
    '2021',
]

  
function get_random_image(){
    // Get a random index
    random_index = Math.floor(Math.random() * image_array.length);

    // Get an image at the random_index
    selected_image = image_array[random_index]

    // Display the image
    document.getElementById('image_shower').src = `./images/${selected_image}`

    // Display the name 
    namex.textContent = names[random_index];

    // Display the description 
    description.textContent = descriptions[random_index];

    // Display the genre 
    genre.textContent = genres[random_index];

    // Display the year of release 
    year.textContent = years[random_index];
}
