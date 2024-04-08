const express = require("express");

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

app.use(express.static("public"));
app.use(express.static("photo"));
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about/:participant", (req, res) => {
  const participant = req.params.participant;

  let photo, username, text;
  switch (participant) {
    case "Arsenych":
      username = "Nataliia Arsenych";
      photo = "/arsenych_photo.jpg";
      text =
        "My name is Natalia Arsenych, and I'm a passionate student currently pursuing a degree in programming at KPI (Kyiv Polytechnic Institute). I have always been fascinated by the endless possibilities of technology and its ability to solve complex problems. As a programmer in training, I thrive on challenges and enjoy delving into the intricacies of coding languages to create innovative solutions. I am excited about the endless possibilities that the field of programming offers and am eager to make meaningful contributions to the ever-evolving tech industry.";
      break;
    case "Pirozhenko":
      username = "Daria Pirozhenko";
      photo = "/pirozhenko_photo.jpg";
      text =
        "I'm Daria Pirozhenko, a student at KPI, delving into the fascinating world of software engineering. I thrive on challenges, using them as stepping stones to enhance my coding, problem-solving, and software design skills. My passion for technology fuels my academic journey, propelling me to excel in the dynamic field of software engineering.";
      break;
    case "Shepel":
      username = "Nataliia Shepel";
      photo = "/shepel_photo.jpg";
      text =
        "I was born on the 27th of October in 2004 in the town of Kropyvnytskyi. My mum used to say that I was independent and purposeful as a child, although I don't know if I have these qualities now. However, this ambitious girl would never have thought that she would study programming. My thoughts about a career varied from teacher to lawyer. But one thing I knew for sure was that I never wanted to be a doctor. I don't like biology and chemistry... Now I realise that entering Igor Sikorsky Kyiv Polytechnic Institute was one of the best choices I have made in my life. Yes, studying here is difficult, you have to find lots of new information yourself... But there is no comparison with how many wonderful people you can meet here, how many cool teachers you can learn from, how much fun it is to be a student here. I think this is where I fit in.";
      break;
    default:
      username = "Unknown";
      photo = "/unknown_photo.jpg";
      text = "Information not available";
      break;
  }

  const data = {
    username: username,
    text: text,
    photo: photo,
  };

  res.render("about", data);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server started: http://localhost:${PORT}`);
});
