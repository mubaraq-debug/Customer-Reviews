// reviews
const reviews = [
  {
    id: 1,
    name: "John Billings",
    job: "Investment Banker",
    image: "/assets/user1.jpeg",
    text: "Absolutely love this app! The user interface is so intuitive and easy to navigate. I ordered groceries, and they arrived fresh and on time. The tracking feature is fantastic as it keeps me updated on my delivery status. Highly recommend!",
  },
  {
    id: 2,
    name: "Mark Longman",
    job: "CEO, LampStand",
    image: "/assets/user2.webp",
    text: "This app has made my life so much easier. I can order anything I need without leaving my house. The delivery times are usually spot on, though there was one instance where my order was delayed. Customer service was quick to resolve the issue. Overall, a great experience.",
  },
  {
    id: 3,
    name: "Petr Dmitr",
    job: "Mechanic",
    image: "/assets/user3.webp",
    text: "The app works well and the deliveries are usually on time. However, I had a couple of experiences where the items I wanted were out of stock, which was frustrating. The customer support team was helpful but I hope they improve their inventory management.",
  },
  {
    id: 4,
    name: "Emily Carter",
    job: "Product Manager",
    image: "/assets/user4.jpeg",
    text: "A very reliable delivery service with friendly drivers. The app is pretty straightforward, though I think it could use a few more filtering options for products. The real-time tracking is a great feature, and my orders have always been accurate.",
  },
  {
    id: 5,
    name: "Lisa Kostas",
    job: "Realtor",
    image: "/assets/user5.webp",
    text: "Fantastic app! I’ve used it for both groceries and restaurant deliveries, and it has never let me down. The variety of options available is impressive and the delivery fees are reasonable. Plus, the drivers are always polite and professional. Keep up the good work!",
  },
];

// select items
const image = document.getElementById("user-img");
const name = document.getElementById("user-name");
const job = document.getElementById("user-job");
const text = document.getElementById("user-text");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

//creating a function to display different user
function displayPerson(person) {
  const item = reviews[person];

  image.src = item.image;
  name.textContent = item.name;
  job.textContent = item.job;
  text.textContent = item.text;
}

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {
  displayPerson(currentItem);
});

//next button functionality
nextBtn.addEventListener("click", function () {
  currentItem++;

  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }

  displayPerson(currentItem);
});

//previous button functionality
prevBtn.addEventListener("click", function () {
  currentItem--;

  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }

  displayPerson(currentItem);
});
