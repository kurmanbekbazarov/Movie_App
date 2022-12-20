
// Get all the images
image_array = [
    'attack-on-titan.jpg',
    'bleach_thousand_year_blood_war.jpg',
    'chainsaw-man.jpg',
    'death-note.jpg',
    'jujutsu-kaisen.jpg',
    'my-hero-academia.jpg',
    'naruto.jpg',
    'one-piece.jpg',
    'spy-family.jpg',
    'your-april-lie.jpg',
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
    'Attack on Titan',
    'BLEACH: Thousand-Year Blood War',
    'Chainsaw Man',
    'Death Note',
    'Jujutsu Kaisen',
    'My Hero Academia',
    'Naruto',
    'One-piece',
    'Spy Family',
    'Your lie in April',
]

const descriptions = [
    'Centuries ago, mankind was slaughtered to near extinction by monstrous humanoid creatures called Titans, forcing humans to hide in fear behind enormous concentric walls. What makes these giants truly terrifying is that their taste for human flesh is not born out of hunger but what appears to be out of pleasure.',
    "Substitute Soul Reaper Ichigo Kurosaki spends his days fighting against Hollows, dangerous evil spirits that threaten Karakura Town. Ichigo carries out his quest with his closest allies: Orihime Inoue, his childhood friend with a talent for healing; Yasutora Sado, his high school classmate with superhuman strength; and Uryuu Ishida, Ichigo's Quincy rival.",
    "Denji is robbed of a normal teenage life, left with nothing but his deadbeat father's overwhelming debt. His only companion is his pet, the chainsaw devil Pochita, with whom he slays devils for money that inevitably ends up in the yakuza's pockets. All Denji can do is dream of a good, simple life: one with delicious food and a beautiful girlfriend by his side.",
    'Brutal murders, petty thefts, and senseless violence pollute the human world. In contrast, the realm of death gods is a humdrum, unchanging gambling den. The ingenious 17-year-old Japanese student Light Yagami and sadistic god of death Ryuk share one belief: their worlds are rotten.',
    'Idly indulging in baseless paranormal activities with the Occult Club, high schooler Yuuji Itadori spends his days at either the clubroom or the hospital, where he visits his bedridden grandfather. However, this leisurely lifestyle soon takes a turn for the strange when he unknowingly encounters a cursed item.',
    'The appearance of "quirks," newly discovered super powers, has been steadily increasing over the years, with 80 percent of humanity possessing various abilities from manipulation of elements to shapeshifting. This leaves the remainder of the world completely powerless, and Izuku Midoriya is one such individual.',
    "Moments prior to Naruto Uzumaki's birth, a huge demon known as the Kyuubi, the Nine-Tailed Fox, attacked Konohagakure, the Hidden Leaf Village, and wreaked havoc. In order to put an end to the Kyuubi's rampage, the leader of the village, the Fourth Hokage, sacrificed his life and sealed the monstrous beast inside the newborn Naruto.",
    'Gol D. Roger was known as the "Pirate King," the strongest and most infamous being to have sailed the Grand Line. The capture and execution of Roger by the World Government brought a change throughout the world. His last words before his death revealed the existence of the greatest treasure in the world, One Piece.',
    'Corrupt politicians, frenzied nationalists, and other warmongering forces constantly jeopardize the thin veneer of peace between neighboring countries Ostania and Westalis. In spite of their plots, renowned spy and master of disguise "Twilight" fulfills dangerous missions one after another in the hope that no child will have to experience the horrors of war.',
    'Kousei Arima is a child prodigy known as the "Human Metronome" for playing the piano with precision and perfection. Guided by a strict mother and rigorous training, Kousei dominates every competition he enters, earning the admiration of his musical peers and praise from audiences. When his mother suddenly passes away, the subsequent trauma makes him unable to hear the sound of a piano, and he never takes the stage thereafter.',
]

const genres = [
    "Action Drama Fantasy Military Mystery Shounen Super Power Suspense",
    "Action Adventure Fantasy Shounen Super Power Supernatural",
    "Action Comedy Drama Fantasy Horror Shounen Supernatural Demons",
    "Psychological Shounen Supernatural Suspense", 
    "Action Drama Fantasy Martial Arts School Shounen Super Power Supernatural Demons Magic",
    "Action Adventure Comedy School Shounen Super Power",
    "Action Adventure Fantasy Martial Arts Shounen",
    "Action Adventure Fantasy Shounen",
    "Action Comedy Shounen", 
    "Drama Music Romance School Shounen Slice of life",
]

const years = [
    '2013',
    '2022',
    '2022',
    '2006', 
    '2020', 
    '2016',
    '2002', 
    '1999', 
    '2022', 
    '2014',
]

  
function get_random_image(){
    // Get a random index
    random_index = Math.floor(Math.random() * image_array.length);

    // Get an image at the random_index
    selected_image = image_array[random_index]

    // Display the image
    document.getElementById('image_shower').src = `./images_anime/${selected_image}`

    // Display the name 
    namex.textContent = names[random_index];

    // Display the description 
    description.textContent = descriptions[random_index];

    // Display the genre 
    genre.textContent = genres[random_index];

    // Display the year of release 
    year.textContent = years[random_index];
}
