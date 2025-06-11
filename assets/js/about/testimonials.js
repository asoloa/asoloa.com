const testimonials = [
  {
    name: "Chanandler Bong",
    feedback: "Like what she saw, huh? Dug my action, did she? Checking out the Chan Chan Man!",
    feedbackDate: "28 April, 2018"
  },
  { 
    name: "Ken Adams",
    feedback: "Years ago, when I was backpacking across Western Europe, I was just outside Barcelona, hiking in the foothills of mount Tibidabo. I was at the end of this path, and I came to a clearing, and there was a lake, very secluded, and there were tall trees all around. It was dead silent. Gorgeous. And across the lake I saw, a beautiful woman, bathing herself. but she was crying...",
    feedbackDate: "14 June, 2021"
  },
  { 
    name: "Rossatron Geller, PhD",
    feedback: "Unagi is a state of total awareness. Only by achieving true unagi can you be prepared for any danger that may befall you.",
    feedbackDate: "19 July, 2021"
  },
  {
    name: "Ray-ray Green",
    feedback: "Oh oh... he's a trans... a transponster!",
    feedbackDate: "2 August, 2022"
  },
  {
    name: "Monana Geller",
    feedback: "THAT'S NOT EVEN A WORD!",
    feedbackDate: "28 December, 2024"
  },
  {
    name: "Princess Consuela Bananahammock",
    feedback: "Crap Bag: *** not impressed ***",
    feedbackDate: "12 November, 2019"
  },
];

const ul = document.createElement("ul");
ul.className = "splide__list testimonials-list";

testimonials.forEach(({ name, feedback, feedbackDate }) => {
  const li = document.createElement("li");
  li.className = "splide__slide testimonials-item";

  const card = document.createElement("div");
  card.className = "content-card";
  card.setAttribute("data-testimonials-item", "");

  const figure = document.createElement("figure");
  figure.className = "testimonials-avatar-box";

  const img = document.createElement("img");
  img.src = "";
  img.alt = name;
  img.width = 60;
  img.setAttribute("data-testimonials-avatar", "");

  figure.appendChild(img);

  const h4 = document.createElement("h4");
  h4.className = "h4 testimonials-item-title";
  h4.setAttribute("data-testimonials-title", "");
  h4.textContent = name;

  const time = document.createElement("time");
  time.setAttribute("data-testimonials-date", "");
  time.setAttribute("style", "display: none;");
  time.textContent = feedbackDate;

  const textDiv = document.createElement("div");
  textDiv.className = "testimonials-text";
  textDiv.setAttribute("data-testimonials-text", "");

  const p = document.createElement("p");
  p.setAttribute("style", "white-space: pre-wrap;");
  p.textContent = feedback;

  textDiv.appendChild(p);

  card.appendChild(figure);
  card.appendChild(h4);
  card.appendChild(time);
  card.appendChild(textDiv);

  li.appendChild(card);
  ul.appendChild(li);
});

document.querySelector(".testimonials-marquee").appendChild(ul)