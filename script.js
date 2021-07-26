const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const image = document.getElementById("image");
const job = document.getElementById("job");
const review = document.getElementById("review");
let reviewCounter = 0;

const reviews = [
  {
    id: 1,
    job: "Back End Developer",
    img: "url('./images/vin-diesel.jpeg')",
    reviewText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus neque ab vitae consectetur quidem molestiae, iusto placeat, eveniet sint sapiente iste ea nam accusantium, aspernatur natus! Odio nemo sunt voluptatum.",
  },
  {
    id: 2,
    img: "url('./images/chris-rock.jpeg')",
    job: "Front End Developer",
    reviewText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus neque ab vitae consectetur quidem molestiae, iusto placeat, eveniet sint sapiente iste ea nam accusantium, aspernatur natus! Odio nemo sunt voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus neque ab vitae consectetur quidem molestiae, iusto placeat, eveniet sint sapiente iste ea nam accusantium, aspernatur natus! Odio nemo sunt voluptatum.",
  },
  {
    id: 3,
    img: "url('./images/seth-rogen.jpeg')",
    job: "Designer",
    reviewText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus neque ab vitae consectetur quidem molestiae, iusto placeat, eveniet sint sapiente iste ea nam accusantium, aspernatur natus! Odio nemo sunt voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 4,
    img: "url('./images/the-rock.jpeg')",
    job: "The Boss",
    reviewText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus neque ab vitae consectetur quidem molestiae, iusto placeat, eveniet sint sapiente iste ea nam accusantium, aspernatur natus! Odio nemo sunt voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus neque ab vitae consectetur quidem molestiae, iusto placeat, eveniet sint sapiente iste ea nam accusantium.",
  },
];

if (reviewCounter === 0) {
  image.setAttribute(
    `style`,
    `background-image: ${reviews[reviewCounter].img}`
  );
  job.textContent = reviews[reviewCounter].job;
  review.textContent = reviews[reviewCounter].reviewText;
}

nextBtn.addEventListener("click", function () {
  if (reviewCounter === reviews.lengths - 1) {
    reviewCounter = 0;
    image.setAttribute(
      `style`,
      `background-image: ${reviews[reviewCounter].img}`
    );
    job.textContent = reviews[reviewCounter].job;
    review.textContent = reviews[reviewCounter].reviewText;
  } else if (reviewCounter >= 0) {
    console.log("clicked");
    reviewCounter++;
    image.setAttribute(
      `style`,
      `background-image: ${reviews[reviewCounter].img}`
    );
    job.textContent = reviews[reviewCounter].job;
    review.textContent = reviews[reviewCounter].reviewText;
  }
});

prevBtn.addEventListener("click", function () {
  if (reviewCounter === 0) {
    reviewCounter = reviews.length - 1;
    image.setAttribute(
      `style`,
      `background-image: ${reviews[reviewCounter].img}`
    );
    job.textContent = reviews[reviewCounter].job;
    review.textContent = reviews[reviewCounter].reviewText;
  } else if (reviewCounter > 0) {
    reviewCounter--;
    image.setAttribute(
      `style`,
      `background-image: ${reviews[reviewCounter].img}`
    );
    job.textContent = reviews[reviewCounter].job;
    review.textContent = reviews[reviewCounter].reviewText;
  }
});
