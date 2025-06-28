const education = [
    {
        school: 'Cebu Institute of Technology - University',
        location: '📍 Cebu City, Philippines',
        degree: 'Bachelor of Science in Computer Engineering',
        period: '🗓️ OCT 2017',
    },
];

const educ_timeline_list = document.createElement("ol");
educ_timeline_list.className = "timeline-list";

education.forEach(({ school, location, degree, period }) => {
  const li = document.createElement("li");
  li.className = "timeline-item";

  const h4 = document.createElement("h4");
  h4.className = "text-white-2 font-bold leading-[1.3] mb-2";
  h4.innerHTML = `${school} <span> ${location}</span>`;
  
  const p = document.createElement("p");
  p.className = "text-orange-yellow-crayola inline";
  p.innerHTML = `${degree} <span class="text-white-1 float-right">${period}</span>`;

  li.appendChild(h4);
  li.appendChild(p);
  educ_timeline_list.appendChild(li);
});

document.getElementById("education").appendChild(educ_timeline_list);