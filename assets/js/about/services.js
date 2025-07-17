const services = [
  {
    name: "Infra Automation",
    description: "I design and implement automation solutions using Ansible and Terraform to streamline the provisioning, configuration, and deployment of systems.",
    icon: "./assets/images/icon-automation.svg"
  },
  {
    name: "Scripting",
    description: "I build custom tools using Bash and VBA to automate repetitive tasks, reducing manual effort and human error.",
    icon: "./assets/images/icon-scripting.svg"
  },
  { 
    name: "DevOps Practices",
    description: "I build and maintain lightweight CI/CD pipelines using GitHub Actions, ensuring efficient code testing, integration, and delivery across development stages.",
    icon: "./assets/images/icon-devops.svg"
  },
  {
    name: "Documentation & Knowledge Sharing",
    description: "I create clear, concise internal documentation to ensure effective knowledge transfer and smoother onboarding of team members.",
    icon: "./assets/images/icon-documentation.svg"
  },
];

const service_list = document.createElement("ul");
service_list.className = "service-list";

services.forEach(({ name, description, icon }) => {
  const li = document.createElement("li");
  li.className = "service-item";

  const service_icon_box = document.createElement("div");
  service_icon_box.className = "service-icon-box";

  fetch(icon)
    .then(res => res.text())
    .then(svg => {
      service_icon_box.innerHTML = svg;
    })

  const service_content_box = document.createElement("div");
  service_content_box.className = "service-content-box";

  const h4 = document.createElement("h4");
  h4.className = "h4 service-item-title";
  h4.textContent = name;

  const p = document.createElement("p");
  p.className = "service-item-text";
  p.textContent = description;

  service_content_box.appendChild(h4);
  service_content_box.appendChild(p);

  li.appendChild(service_icon_box);
  li.appendChild(service_content_box);
  service_list.appendChild(li);
});

document.querySelector(".service").appendChild(service_list)