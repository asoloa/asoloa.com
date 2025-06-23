const categories = [
  { label: 'Infrastructure', tooltip: 'Infrastructure & DevOps' },
  { label: 'Containers', tooltip: 'Containers & Orchestration' },
  { label: 'Development', tooltip: 'Dev & Scripting' },
  { label: 'Collaboration', tooltip: 'Collaboration & Lifecycle' },
  { label: 'Messaging', tooltip: 'Messaging & Telephony' }
]
const tools = [
  // 0 - Infra & DevOps
  { category: [0], logo: './assets/images/tech/ansible.svg', name: 'Ansible' },
  { category: [0], logo: './assets/images/tech/aws.svg', name: 'AWS' },
  { category: [0], logo: './assets/images/tech/linux.svg', name: 'Linux' },
  { category: [0], logo: './assets/images/tech/linode.svg', name: 'Linode' },
  { category: [0], logo: './assets/images/tech/openstack.svg', name: 'OpenStack' },
  { category: [0, 1], logo: './assets/images/tech/openshift.svg', name: 'OpenShift' },
  { category: [0], logo: './assets/images/tech/vagrant.svg', name: 'Vagrant' },
  { category: [0], logo: './assets/images/tech/terraform.svg', name: 'Terraform' },
  // 1 - Containers
  { category: [1, 2], logo: './assets/images/tech/docker.svg', name: 'Docker' },
  { category: [1, 2], logo: './assets/images/tech/kubernetes.svg', name: 'Kubernetes' },
  // 2 - Development
  { category: [2], logo: './assets/images/tech/excel.svg', name: 'Excel VBA' },
  { category: [2], logo: './assets/images/tech/java.svg', name: 'Java' },
  { category: [2], logo: './assets/images/tech/mysql.svg', name: 'MySQL' },
  { category: [2], logo: './assets/images/tech/php.svg', name: 'PHP' },
  { category: [2], logo: './assets/images/tech/vuejs.svg', name: 'VueJS' },
  // 3 - Version Control & Collab
  { category: [3, 2, 0], logo: './assets/images/tech/git.svg', name: 'Git' },
  { category: [3, 2, 0], logo: './assets/images/tech/github.svg', name: 'GitHub' },
  { category: [3, 2, 0], logo: './assets/images/tech/gitlab.svg', name: 'GitLab' },
  { category: [3, 2], logo: './assets/images/tech/jira.svg', name: 'Jira' },
  { category: [3, 2], logo: './assets/images/tech/redmine.svg', name: 'Redmine' },
  // 4 - Comms & Messaging
  { category: [4], logo: './assets/images/tech/asterisk.svg', name: 'Asterisk' },
  { category: [4, 2], logo: './assets/images/tech/sendgrid.svg', name: 'SendGrid' },
  { category: [4, 3], logo: './assets/images/tech/slack.svg', name: 'Slack' },
];

const tabsContainer = document.querySelector('.tools-tabs');
const gridContainer = document.querySelector('.tools-grid');

let activeTab = 0;

// Render category buttons
function renderTabs() {
  tabsContainer.innerHTML = '';

  categories.forEach((cat, index) => {
    const btn = document.createElement('button');
    btn.className = index === activeTab ? 'active' : '';

    // Label
    const label = document.createElement('span');
    label.textContent = cat.label;

    // Tooltip
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.textContent = cat.tooltip;

    btn.appendChild(tooltip);
    btn.appendChild(label);
    tabsContainer.appendChild(btn);

    btn.addEventListener('click', () => {
      activeTab = index;

      // Re-render tabs and tools
      renderTabs();
      renderTools();

      setTimeout(() => {
        const currentBtn = tabsContainer.querySelectorAll('button')[index];
        currentBtn.classList.add('show-tooltip');
        setTimeout(() => {
          currentBtn.classList.remove('show-tooltip');
        }, 2000);
      }, 0);
    });
  });
}

// Render tools into the grid
function renderTools() {
  gridContainer.innerHTML = '';
  const filtered = tools.filter(t => t.category.includes(activeTab));
  
  filtered.forEach(({ name, logo }) => {
    const div = document.createElement("div");
    div.className = "tools-icon";

    fetch(logo)
      .then(res => res.text())
      .then(svg => {
        div.innerHTML = svg;
        const p = document.createElement("p");
        p.textContent = name;
        div.appendChild(p);
      });

    gridContainer.appendChild(div);
  });

  observer.observe(gridContainer);
}

// Reveal animation with IntersectionObserver
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const items = entry.target.querySelectorAll('.tools-icon');
      items.forEach((item, index) => {
        setTimeout(() => {
          item.classList.add('visible');
        }, index * 100);
      });
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

// Initial render
renderTabs();
renderTools();