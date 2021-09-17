const express = require("express");
const cors = require("cors");


const app = express();

app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = [
    "Gee, you're a smart cookie!",
    "Cool shirt!",
    "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
});

app.listen(4000, () => console.log("Server running on 4000"));

app.get("/api/fortune", (req, res) => {
  const fortunes = [
    "A faithful friend is a strong defense.",
    "A gambler not only will lose what he has, but also will lose what he doesn’t have.",
    "A hunch is creativity trying to tell you something.",
    "All your hard work will soon pay off.",
    "Curiosity kills boredom. Nothing can kill curiosity.",
    "Distance yourself from the vain.",
    "Don’t just spend time. Invest it.",
    "Fear and desire – two sides of the same coin.",
    "Love truth, but pardon error.",
  ];
  let randInd = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[randInd];

  res.status(200).send(randomFortune);
});

app.get("/api/sound", (req, res) => {
  res.sendStatus(200);
});

app.get("/api/motivate/", (req, res) => {
  const speakers = [
    "Eric Thomas",
    "Tony Robbins",
    "Les Brown",
    "Jim Rohn",
    "Arnold Schwarzenegger",
    "Zig Ziglar",
    "Dr. Wayne Dyer",
    "Robin Sharma",
    "Brian Tracy",
    "Nick Vujicic",
  ];
  let randomInd = Math.floor(Math.random() * speakers.length);
  let randomSpeaker = speakers[randomInd];

  res.status(200).send(randomSpeaker);
});
