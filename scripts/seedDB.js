const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/codersroadmap"
);

const unitSeed = [
  {
    name: "HTML5",
    description: "HTML is the standard markup language for Web pages.",
    image: "https://www.tutorialrepublic.com/lib/images/html-illustration.png",
    link: "https://www.w3schools.com/html/default.asp",
    activityLinks: "/html",
  },
  {
    name: "CSS",
    description:
      "CSS is a language that describes the style of an HTML document.",
    image: "https://www.tutorialrepublic.com/lib/images/css-illustration.png",
    link: "https://www.w3schools.com/css/default.asp",
    activityLinks: "/css-activites",
  },
  {
    name: "Javascript",
    description: "Javascript is the programming language of HTML and the Web.",
    image:
      "https://www.tutorialrepublic.com/lib/images/javascript-illustration.png",
    link: "https://www.w3schools.com/js/default.asp",
    activityLinks: "/js-activites",
  },
];

const activitySeed = [
  {
    name: "Activity 1",
    helperLink: "https://www.youtube.com/watch?v=UB1O30fR-EE",
    activityLinks: "/html/1",
  },
  {
    name: "Activity 2",
    helperLink: "https://www.youtube.com/watch?v=UB1O30fR-EE",
    activityLinks: "/html/2",
  },
  {
    name: "Activity 3",
    helperLink: "https://www.youtube.com/watch?v=UB1O30fR-EE",
    activityLinks: "/html/3",
  },
];

const coursesSeed = [
  {
    name: "HTML for Beginners",
    description:
      "Intro class to HTML for people with little to no coding experience.",
    units: [
      {
        name: "Unit 1 - HTML Basics",
        description: "HTML basics",
        links: "https://www.w3schools.com/html/",
        activites: [
          {
            name: "Activity 1",
            videos: "https://www.youtube.com/watch?v=UB1O30fR-EE",
            resources: "https://www.w3schools.com/html/html_basic.asp",
          },
          {
            name: "Activity 1",
            videos: "https://www.youtube.com/watch?v=UB1O30fR-EE",
            resources: "https://www.w3schools.com/html/html_basic.asp",
          },
        ],
      },
      {
        name: "Unit 2 - CSS Basics",
        description: "CSS basics",
        links: "https://www.w3schools.com/css/",
        activites: {
          name: "Activity 1",
          videos: "https://www.youtube.com/watch?v=UB1O30fR-EE",
          resources: "https://www.w3schools.com/html/html_basic.asp",
        },
      },
    ],
    enrolled: [],
  },
];

const userSeed = {
  firstName: "Trevor",
  lastName: "Handley",
  email: "test@gmail.com",
  password: "0215",
  course: [],
};

db.User.remove({})
  .then(() => db.User.collection.insertOne(userSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
