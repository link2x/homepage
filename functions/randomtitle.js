export function randomTitle() {

  let randomTitles = [
    "the islands awaken for her alone",
    "Where's my cake?",
    "I lost the game.",
    "Hooray for random sites!",
    "What's that? Something new from me? Never!",
    "Meh.",
    "Oh cool!",
    ":D",
    "Well isn't that something...",
    "Ha; I have magic!",
    "Ayo!",
    "New song! Oh look, there's another! And another!",
    "*complain complain complain*",
    ":|",
    ">:D",
    "O.o",
    ">.<'",
    "Random title dance! *raves*",
    "Some random girl that thinks she's cool.",
    "Eden Simmons",
    "That musician girl.",
    "Sparsely bringing you music since 2006.",
    "Isn't it grand?",
    "Wow!",
    "Releasing an Able-TON of music.",
    "Awesomeness!",
    "You gave up on me.",
    "I will not once give in.",
    "And in the end of night...",
    "Tonight we're on fire.",
    "1,000 Years"
  ];

  let randomNumber = Math.floor(Math.random() * (randomTitles.length - 1));

  return randomTitles[randomNumber];
}
