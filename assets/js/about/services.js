const services = [
  {
    name: "Infra Automation",
    description: "I design and implement automation solutions using Ansible and Terraform to streamline the provisioning, configuration, and deployment of systems — from simple landing sites to complex, highly available infrastructure.",
    icon: "./assets/images/icon-automation.svg"
  },
  {
    name: "Scripting",
    description: "I build custom tools using Bash, VBA, and Python to automate repetitive tasks while reducing manual effort and human error.",
    icon: "./assets/images/icon-scripting.svg"
  },
  { 
    name: "Linux Systems Engineering",
    description: "I configure, maintain, and optimize Linux-based environments, ensuring secure, stable, and efficient operations across development and production systems.",
    icon: "./assets/images/icon-linux.svg"
  },
  { 
    name: "DevOps Practices",
    description: "I build and maintain lightweight CI/CD pipelines using GitHub Actions, ensuring efficient code testing, integration, and delivery across development stages.",
    icon: "./assets/images/icon-devops.svg"
  },
  {
    name: "Web Applications Support",
    description: "I manage and troubleshoot multi-stack client environments, including CRMs built on VueJS, Laravel, and MySQL, ensuring high availability and performance.",
    icon: "./assets/images/icon-support.svg"
  },
  {
    name: "Documentation & Knowledge Sharing",
    description: "I create clear, concise internal documentation to ensure knowledge transfer, maintainability, and smoother onboarding for team members.",
    icon: "./assets/images/icon-documentation.svg"
  },
  {
    name: "Security & Reliability Engineering",
    description: "I implement guardrails and hardening measures (e.g. firewall & iptables rules, monitoring alerts, automated scans) that enhance system reliability and ensure secure operations.",
    icon: "./assets/images/icon-support.svg"
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