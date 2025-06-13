const stacks = [
  { name: 'Linux', logo: './assets/images/tech/linux.svg' },
  { name: 'Ansible', logo: './assets/images/tech/ansible.svg' },
  { name: 'OpenStack', logo: './assets/images/tech/openstack.svg' },
  { name: 'OpenShift', logo: './assets/images/tech/openshift.svg' },
  { name: 'AWS', logo: './assets/images/tech/aws.svg' },
  { name: 'Git', logo: './assets/images/tech/git.svg' },
  { name: 'GitHub', logo: './assets/images/tech/github.svg' },
  { name: 'GitLab', logo: './assets/images/tech/gitlab.svg' },
  { name: 'Docker', logo: './assets/images/tech/docker.svg' },
  { name: 'Kubernetes', logo: './assets/images/tech/kubernetes.svg' },
  { name: 'Vagrant', logo: './assets/images/tech/vagrant.svg' },
  { name: 'Terraform', logo: './assets/images/tech/terraform.svg' },
  { name: 'Excel VBA', logo: './assets/images/tech/excel.svg' },
  { name: 'PHP', logo: './assets/images/tech/php.svg' },
  { name: 'MySQL', logo: './assets/images/tech/mysql.svg' },
  { name: 'VueJS', logo: './assets/images/tech/vuejs.svg' },
  { name: 'Asterisk', logo: './assets/images/tech/asterisk.svg' },
];

stacks.forEach(({ name, logo }) => {
  const div = document.createElement("div");
  div.className = "stack-icon";
  
  fetch(logo)
    .then(res => res.text())
    .then(svg => {
      div.innerHTML = svg;
      const p = document.createElement("p");
      p.textContent = name;
      div.appendChild(p);
    })

  document.querySelector(".stack-grid").appendChild(div)
});