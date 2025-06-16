const tools = [
  { logo: './assets/images/tech/linux.svg', name: 'Linux' },
  { logo: './assets/images/tech/ansible.svg', name: 'Ansible' },
  { logo: './assets/images/tech/openstack.svg', name: 'OpenStack' },
  { logo: './assets/images/tech/openshift.svg', name: 'OpenShift' },
  { logo: './assets/images/tech/aws.svg', name: 'AWS' },
  { logo: './assets/images/tech/git.svg', name: 'Git' },
  { logo: './assets/images/tech/github.svg', name: 'GitHub' },
  { logo: './assets/images/tech/gitlab.svg', name: 'GitLab' },
  { logo: './assets/images/tech/docker.svg', name: 'Docker' },
  { logo: './assets/images/tech/kubernetes.svg', name: 'Kubernetes' },
  { logo: './assets/images/tech/vagrant.svg', name: 'Vagrant' },
  { logo: './assets/images/tech/terraform.svg', name: 'Terraform' },
  { logo: './assets/images/tech/excel.svg', name: 'Excel VBA' },
  { logo: './assets/images/tech/php.svg', name: 'PHP' },
  { logo: './assets/images/tech/java.svg', name: 'Java' },
  { logo: './assets/images/tech/mysql.svg', name: 'MySQL' },
  { logo: './assets/images/tech/vuejs.svg', name: 'VueJS' },
  { logo: './assets/images/tech/asterisk.svg', name: 'Asterisk' },
  { logo: './assets/images/tech/jira.svg', name: 'Jira' },
  { logo: './assets/images/tech/linode.svg', name: 'Linode' },
  { logo: './assets/images/tech/sendgrid.svg', name: 'SendGrid' },
];

tools.forEach(({ name, logo }) => {
  const div = document.createElement("div");
  div.className = "tools-icon";
  
  fetch(logo)
    .then(res => res.text())
    .then(svg => {
      div.innerHTML = svg;
      const p = document.createElement("p");
      p.textContent = name;
      div.appendChild(p);
    })

  document.querySelector(".tools-grid").appendChild(div)
});

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const items = entry.target.querySelectorAll('.tools-icon'); // Target all tools-icon elements
      items.forEach((item, index) => {
        setTimeout(() => {
          item.classList.add('visible');
        }, index * 100); // 150ms delay between items
      });
      observer.unobserve(entry.target); // Only trigger once
    }
  });
}, {
  threshold: 0.2 // Trigger when 20% of tools-grid is visible
});

// Start observing the section
observer.observe(document.querySelector('.tools-grid'));