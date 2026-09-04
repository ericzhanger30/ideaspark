const generatorData = {

  school: {
    icon: "📚",

    topics: [
      "a smart recycling system",
      "a study experiment",
      "a miniature eco-friendly city",
      "a school improvement project",
      "an interactive science display",
      "a student productivity experiment",
      "a future classroom concept",
      "an environmental awareness project",
      "a creative history experience",
      "a technology demonstration"
    ],

    actions: [
      "design",
      "build",
      "investigate",
      "compare",
      "test",
      "create",
      "research",
      "prototype"
    ],

    twists: [
      "turn it into an interactive challenge",
      "let students vote on the results",
      "include a surprising real-world experiment",
      "present it like a futuristic invention",
      "add a competition between classmates",
      "include an interactive quiz",
      "use everyday objects instead of expensive equipment",
      "connect the project to something happening in everyday life"
    ],

    goals: [
      "teach people something useful",
      "solve a small problem at school",
      "make a difficult topic easier to understand",
      "show how an idea works in real life",
      "encourage students to think creatively"
    ]
  },


  business: {
    icon: "🚀",

    topics: [
      "a homework organization service",
      "a local activity discovery platform",
      "a personalized gift service",
      "a student marketplace",
      "a hobby discovery service",
      "a smart planning tool",
      "a community skill-sharing platform",
      "a sustainable product",
      "a simple organization service",
      "a creative event business"
    ],

    actions: [
      "launch",
      "design",
      "prototype",
      "create",
      "develop",
      "test",
      "build",
      "imagine"
    ],

    twists: [
      "make the service personalized for every user",
      "add a points and rewards system",
      "focus on solving the problem in under five minutes",
      "let users challenge their friends",
      "use AI to personalize suggestions",
      "make sustainability part of the idea",
      "allow the community to contribute ideas",
      "turn normal tasks into a game"
    ],

    goals: [
      "save people time",
      "make an annoying task easier",
      "help people discover something new",
      "connect people with similar interests",
      "turn a common problem into a useful service"
    ]
  },


  game: {
    icon: "🎮",

    topics: [
      "a floating city",
      "a mysterious abandoned school",
      "a future version of Earth",
      "a tiny civilization",
      "a hidden underground world",
      "a planet nobody has explored",
      "a magical sports tournament",
      "a time-travel adventure",
      "a robot society",
      "a world controlled by music"
    ],

    actions: [
      "explore",
      "survive",
      "protect",
      "build",
      "escape",
      "discover",
      "restore",
      "transform"
    ],

    twists: [
      "the rules change every five minutes",
      "every choice changes the world",
      "players can invent their own abilities",
      "the map is different every time you play",
      "players must cooperate to win",
      "the strongest player isn't always the winner",
      "time moves differently in different areas",
      "players slowly discover that the world isn't what it seems"
    ],

    goals: [
      "encourage creative problem solving",
      "reward exploration",
      "make every playthrough different",
      "give players difficult choices",
      "make teamwork important"
    ]
  },


  story: {
    icon: "✍️",

    topics: [
      "a student who receives messages from the future",
      "a town where nobody can lie",
      "a forgotten room inside a school",
      "a person who discovers a strange map",
      "a mysterious new student",
      "a world where dreams can be recorded",
      "a city that disappears every night",
      "a robot trying to understand humans",
      "a competition with a hidden secret",
      "a normal school trip that goes completely wrong"
    ],

    actions: [
      "follow",
      "discover",
      "investigate",
      "escape",
      "protect",
      "uncover",
      "search for",
      "solve"
    ],

    twists: [
      "the person they trust most is hiding something",
      "the mystery connects to something from years ago",
      "the answer creates an even bigger question",
      "two enemies must work together",
      "a normal object turns out to be extremely important",
      "the main character has misunderstood everything",
      "the problem must be solved before sunrise",
      "the ending changes the meaning of everything that happened before"
    ],

    goals: [
      "create a strong mystery",
      "make readers question what they believe",
      "explore friendship and trust",
      "combine everyday life with something impossible",
      "build suspense while revealing clues"
    ]
  },


  website: {
    icon: "💻",

    topics: [
      "a homework planner",
      "an idea generator",
      "a hobby discovery website",
      "a learning challenge website",
      "a local event finder",
      "a student productivity dashboard",
      "a creative writing helper",
      "a goal tracker",
      "a skill-sharing website",
      "a useful everyday calculator hub"
    ],

    actions: [
      "build",
      "design",
      "create",
      "prototype",
      "develop",
      "reimagine",
      "simplify",
      "upgrade"
    ],

    twists: [
      "give each user personalized recommendations",
      "turn progress into a game",
      "add daily challenges",
      "make the interface extremely simple",
      "allow users to save their favorite results",
      "include smart suggestions",
      "add achievements and streaks",
      "let users customize the experience"
    ],

    goals: [
      "help people save time",
      "solve one annoying everyday problem",
      "make learning more enjoyable",
      "help users stay organized",
      "help people discover useful new things"
    ]
  }

};


const styles = [
  "simple and modern",
  "fun and colorful",
  "futuristic",
  "minimalist",
  "interactive",
  "community-focused",
  "creative and playful",
  "smart and practical"
];


function randomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}


function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}


function generateIdea() {

  const category =
    document.getElementById("category").value;

  const difficulty =
    document.getElementById("difficulty").value;

  const time =
    document.getElementById("time").value;

  const interestInput =
    document.getElementById("interest").value.trim();

  const data = generatorData[category];

  const topic = randomItem(data.topics);
  const action = randomItem(data.actions);
  const twist = randomItem(data.twists);
  const goal = randomItem(data.goals);
  const style = randomItem(styles);


  let interestText = "";

  if (interestInput !== "") {
    interestText =
      ` Connect the idea with your interest in ${interestInput}.`;
  }


  const title =
    capitalize(`${action} ${topic}`);


  const description =
    `Create a ${style} project where you ${action} ${topic}. ` +
    `${capitalize(twist)}.${interestText}`;


  const firstSteps = [
    `Write down the three most important things your idea needs.`,
    `Spend 10 minutes sketching what the finished idea could look like.`,
    `Find three examples related to the idea and write down what you like about them.`,
    `Make the smallest possible version first instead of trying to build everything.`,
    `Ask someone what they would expect from this idea before you begin.`,
    `Create a simple plan with a beginning, middle and final result.`
  ];


  const whyIdeas = [
    `It combines creativity with a problem people can understand.`,
    `It can start simple but become much more advanced later.`,
    `There are many different ways to personalize the final result.`,
    `It gives you something that can actually be demonstrated or shared.`,
    `It encourages you to experiment instead of following one fixed answer.`,
    `The idea can change depending on your interests and creativity.`
  ];


  document.getElementById("resultIcon").textContent =
    data.icon;

  document.getElementById("ideaTitle").textContent =
    title;

  document.getElementById("ideaDescription").textContent =
    description;

  document.getElementById("ideaGoal").textContent =
    capitalize(goal) + ".";

  document.getElementById("ideaStep").textContent =
    randomItem(firstSteps);

  document.getElementById("ideaTwist").textContent =
    capitalize(twist) + ".";

  document.getElementById("ideaWhy").textContent =
    randomItem(whyIdeas);

  document.getElementById("difficultyBadge").textContent =
    "⚡ " + difficulty;

  document.getElementById("timeBadge").textContent =
    "⏱ " + time;


  const resultCard =
    document.getElementById("resultCard");

  resultCard.classList.remove("hidden");


  setTimeout(() => {
    resultCard.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  }, 100);
}


function surpriseMe() {

  const categories =
    Object.keys(generatorData);

  const randomCategory =
    randomItem(categories);

  document.getElementById("category").value =
    randomCategory;


  const interests = [
    "AI",
    "space",
    "football",
    "music",
    "animals",
    "technology",
    "travel",
    "gaming",
    "nature",
    "movies",
    "science",
    "sports"
  ];

  document.getElementById("interest").value =
    randomItem(interests);


  generateIdea();
}


function copyIdea() {

  const title =
    document.getElementById("ideaTitle").textContent;

  const description =
    document.getElementById("ideaDescription").textContent;

  const goal =
    document.getElementById("ideaGoal").textContent;

  const step =
    document.getElementById("ideaStep").textContent;

  const twist =
    document.getElementById("ideaTwist").textContent;


  const text =
`💡 ${title}

${description}

🎯 Goal:
${goal}

🚀 First Step:
${step}

✨ Creative Twist:
${twist}`;


  navigator.clipboard.writeText(text);


  const button =
    document.getElementById("copyButton");

  button.textContent =
    "✅ Copied!";


  setTimeout(() => {

    button.textContent =
      "📋 Copy Idea";

  }, 1500);

}


document
  .getElementById("generateButton")
  .addEventListener("click", generateIdea);


document
  .getElementById("anotherButton")
  .addEventListener("click", generateIdea);


document
  .getElementById("surpriseButton")
  .addEventListener("click", surpriseMe);


document
  .getElementById("copyButton")
  .addEventListener("click", copyIdea);


document
  .querySelectorAll(".category-card")
  .forEach(card => {

    card.addEventListener("click", () => {

      const category =
        card.dataset.category;

      document.getElementById("category").value =
        category;

      document
        .getElementById("generator")
        .scrollIntoView({
          behavior: "smooth"
        });

    });

  });
