const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const image = document.getElementById("image");
const reviewname = document.getElementById("name");
const job = document.getElementById("job");
const review = document.getElementById("review");
let reviewCounter = 0;

const reviews = [
  {
    id: 1,
    name: "Vin Diesel",
    job: "Back End Developer",
    img: "url('./images/vin-diesel.jpeg')",
    reviewText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus neque ab vitae consectetur quidem molestiae, iusto placeat, eveniet sint sapiente iste ea nam accusantium, aspernatur natus! Odio nemo sunt voluptatum.",
  },
  {
    id: 2,
    name: "Chris Rock",
    img: "url('./images/chris-rock.jpeg')",
    job: "Front End Developer",
    reviewText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus neque ab vitae consectetur quidem molestiae, iusto placeat, eveniet sint sapiente iste ea nam accusantium, aspernatur natus! Odio nemo sunt voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus neque ab vitae consectetur quidem molestiae, iusto placeat, eveniet sint sapiente iste ea nam accusantium, aspernatur natus! Odio nemo sunt voluptatum.",
  },
  {
    id: 3,
    img: "url('./images/seth-rogen.jpeg')",
    name: "Seth Rogan",
    job: "Designer",
    reviewText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus neque ab vitae consectetur quidem molestiae, iusto placeat, eveniet sint sapiente iste ea nam accusantium, aspernatur natus! Odio nemo sunt voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 4,
    img: "url('./images/the-rock.jpeg')",
    name: "The Rock",
    job: "The Boss",
    reviewText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus neque ab vitae consectetur quidem molestiae, iusto placeat, eveniet sint sapiente iste ea nam accusantium, aspernatur natus! Odio nemo sunt voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus neque ab vitae consectetur quidem molestiae, iusto placeat, eveniet sint sapiente iste ea nam accusantium.",
  },
  {
    id: 5,
    img: "url('./images/me.jpg')",
    name: "Chris Lutch",
    job: "Full Stack Developer",
    reviewText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus neque ab vitae consectetur quidem molestiae, iusto placeat, eveniet sint sapiente iste ea nam accusantium, aspernatur natus! Odio nemo sunt voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus neque ab vitae consectetur quidem molestiae, iusto placeat, eveniet sint sapiente iste ea nam accusantium.Accusamus neque ab vitae consectetur quidem molestiae, iusto placeat, eveniet sint sapiente iste ea nam accusantium.",
  },
];

if (reviewCounter === 0) {
  renderReview();
}

nextBtn.addEventListener("click", function () {
  if (reviewCounter === reviews.length - 1) {
    reviewCounter = 0;
    renderReview();
  } else if (reviewCounter < reviews.length) {
    reviewCounter++;
    renderReview();
  }
});

prevBtn.addEventListener("click", function () {
  if (reviewCounter === 0) {
    reviewCounter = reviews.length - 1;
    renderReview();
  } else if (reviewCounter > 0) {
    reviewCounter--;
    renderReview();
  }
});

function renderReview() {
  image.setAttribute(
    `style`,
    `background-image: ${reviews[reviewCounter].img}`
  );
  reviewname.textContent = reviews[reviewCounter].name;
  job.textContent = reviews[reviewCounter].job;
  review.textContent = reviews[reviewCounter].reviewText;
}
