const stacks = [
  { name: 'Linux', logo: './assets/images/avatar-1.png' },
  { name: 'Ansible', logo: './assets/images/avatar-2.png' },
  { name: 'OpenStack', logo: './assets/images/avatar-3.png' },
  { name: 'OpenShift', logo: './assets/images/avatar-4.png' },
  { name: 'AWS', logo: './assets/images/avatar-1.png' },
  { name: 'Linux KVM', logo: './assets/images/avatar-2.png' },
  { name: 'Git', logo: './assets/images/avatar-3.png' },
  { name: 'Github', logo: './assets/images/avatar-4.png' },
  { name: 'Gitlab', logo: './assets/images/avatar-1.png' },
  { name: 'Docker', logo: './assets/images/avatar-2.png' },
  { name: 'Kubernetes', logo: './assets/images/avatar-3.png' },
  { name: 'Vagrant', logo: './assets/images/avatar-4.png' },
  { name: 'Terraform', logo: './assets/images/avatar-1.png' },
  { name: 'Excel VBA', logo: './assets/images/avatar-2.png' },
  { name: 'PHP', logo: './assets/images/avatar-3.png' },
  { name: 'MySQL', logo: './assets/images/avatar-4.png' },
];

stacks.forEach(({ name, logo }) => {
  const div = document.createElement("div");
  div.className = "stack-icon";

  const img = document.createElement("img");
  img.src = logo;
  img.alt = name;

  const p = document.createElement("p");
  p.textContent = name;

  div.appendChild(img);
  div.appendChild(p);
  document.querySelector(".stack-grid").appendChild(div)
});