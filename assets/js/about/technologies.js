const categories = [
  { label: 'Cloud & Infra', tooltip: 'Cloud Platforms, Virtualization, and Provisioning' },
  { label: 'Containers & Orchestration', tooltip: 'Containerization, Orchestration, and Platform Services' },
  { label: 'Languages & Runtime', tooltip: 'Programming Languages, Runtime, and Scripting' },
  { label: 'Databases & Storage', tooltip: 'Relational and Non-Relational Data Stores' },
  { label: 'CI/CD & Automation', tooltip: 'Pipelines, IaC, Build Tools, and Automation' },
  { label: 'Source & Project Management', tooltip: 'Version Control, Issue Tracking, and Planning' },
  { label: 'Monitoring & Communication', tooltip: 'ChatOps, Alerts, Telephony, and Messaging' },
  { label: 'asoloa.com Stack', tooltip: 'Tech Stack of asoloa.com' }
];
const tools = [
  // 0: 'Cloud & Infra' >> 'Cloud Platforms, Virtualization, and Provisioning'
  // 1: 'Containers & Orchestration' >> 'Containerization, Orchestration, and Platform Services'
  // 2: 'Languages & Runtime' >> 'Programming Languages, Runtime, and Scripting'
  // 3: 'Databases & Storage' >> 'Relational and Non-Relational Data Stores'
  // 4: 'CI/CD & Automation' >> 'Pipelines, IaC, Build Tools, and Automation'
  // 5: 'Source & Project Management' >> 'Version Control, Issue Tracking, and Planning'
  // 6: 'Monitoring & Communication' >> 'ChatOps, Alerts, Telephony, and Messaging'

  // AWS Services
  { category: [0, 1], logo: './assets/images/tech/aws_apigateway.svg', name: 'Amazon API Gateway' },
  { category: [0, 7], logo: './assets/images/tech/aws_cloudfront.svg', name: 'Amazon CloudFront' },
  { category: [4, 6], logo: './assets/images/tech/aws_cloudwatch.svg', name: 'Amazon CloudWatch' },
  { category: [3, 7], logo: './assets/images/tech/aws_dynamodb.svg', name: 'Amazon DynamoDB' },
  { category: [0], logo: './assets/images/tech/aws_ec2.svg', name: 'Amazon EC2' },
  { category: [6], logo: './assets/images/tech/aws_guardduty.svg', name: 'Amazon GuardDuty' },
  { category: [3, 4], logo: './assets/images/tech/aws_rds.svg', name: 'Amazon RDS' },
  { category: [0, 3, 7], logo: './assets/images/tech/aws_s3.svg', name: 'Amazon S3' },
  { category: [0], logo: './assets/images/tech/aws_vpc.svg', name: 'Amazon VPC' },
  { category: [0, 4, 7], logo: './assets/images/tech/aws_acm.svg', name: 'AWS Cert Manager' },
  { category: [3, 4], logo: './assets/images/tech/aws_dms.svg', name: 'AWS DMS' },
  { category: [0, 7], logo: './assets/images/tech/aws_iam.svg', name: 'AWS IAM' },
  { category: [0, 2, 4, 7], logo: './assets/images/tech/aws_lambda.svg', name: 'AWS Lambda' },

  // Cloud & Infra
  { category: [0, 4, 7], logo: './assets/images/tech/ansible.svg', name: 'Ansible' },
  { category: [0, 2, 4, 7], logo: './assets/images/tech/bash.svg', name: 'Bash' },
  { category: [0, 7], logo: './assets/images/tech/linux.svg', name: 'Linux' },
  { category: [0], logo: './assets/images/tech/linode.svg', name: 'Linode' },
  { category: [0], logo: './assets/images/tech/openstack.svg', name: 'OpenStack' },
  { category: [0, 1, 4], logo: './assets/images/tech/openshift.svg', name: 'OpenShift' },
  { category: [0], logo: './assets/images/tech/vagrant.svg', name: 'Vagrant' },
  { category: [0, 4, 7], logo: './assets/images/tech/terraform.svg', name: 'Terraform' },

  // Containers & Orchestration
  { category: [1, 2, 4], logo: './assets/images/tech/docker.svg', name: 'Docker' },
  { category: [1, 4], logo: './assets/images/tech/kubernetes.svg', name: 'Kubernetes' },

  // Languages & Runtime
  { category: [2], logo: './assets/images/tech/excel.svg', name: 'Excel VBA' },
  { category: [2], logo: './assets/images/tech/java.svg', name: 'Java' },
  { category: [2], logo: './assets/images/tech/php.svg', name: 'PHP' },
  { category: [2], logo: './assets/images/tech/vuejs.svg', name: 'VueJS' },

  // Databases & Storage
  { category: [2, 3], logo: './assets/images/tech/mysql.svg', name: 'MySQL' },

  // CI/CD & Automation
  { category: [4, 5, 0, 7], logo: './assets/images/tech/git.svg', name: 'Git' },
  { category: [4, 5, 0, 7], logo: './assets/images/tech/github.svg', name: 'GitHub' },
  { category: [4, 7], logo: './assets/images/tech/gh-actions.svg', name: 'GitHub Actions' },
  { category: [4, 5, 0], logo: './assets/images/tech/gitlab.svg', name: 'GitLab' },

  // Source & Project Management
  { category: [5], logo: './assets/images/tech/jira.svg', name: 'Jira' },
  { category: [5], logo: './assets/images/tech/redmine.svg', name: 'Redmine' },

  // Monitoring & Communication
  { category: [6], logo: './assets/images/tech/asterisk.svg', name: 'Asterisk' },
  { category: [6, 2], logo: './assets/images/tech/sendgrid.svg', name: 'SendGrid' },
  { category: [6, 5], logo: './assets/images/tech/slack.svg', name: 'Slack' }
];

const ANIMATION_CONFIG = {
  STAGGER_DELAY: 100, // Delay between each tool's animation in milliseconds
  TOOLTIP_DURATION: 1500, // Tooltip duration in milliseconds
  INTERSECTION_THRESHOLD: 0.2 // Intersection threshold for tool visibility in percentage
};

const tabsContainer = document.querySelector('.tools-tabs');
const gridContainer = document.querySelector('.tools-grid');

let activeTab = 0;
const svgCache = new Map();

// Preload SVGs once to prevent fetch delay
function preloadSVGs() {
  const fetchPromises = tools.map(({ logo }) => {
    if (!svgCache.has(logo)) {
      return fetch(logo)
        .then(res => res.text())
        .then(svg => svgCache.set(logo, svg))
        .catch(err => {
          console.error(`Failed to load SVG: ${logo}`, err)
        });
    }
    return Promise.resolve(); // SVG already cached
  });

  return Promise.all(fetchPromises);
}

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
      if (activeTab === index) return;  // Skip if active tab is clicked again
      activeTab = index;

      // Re-render tabs and tools
      renderTabs();
      renderTools();

      setTimeout(() => {
        const currentBtn = tabsContainer.querySelectorAll('button')[index];
        currentBtn.classList.add('show-tooltip');
        setTimeout(() => {
          currentBtn.classList.remove('show-tooltip');
        }, ANIMATION_CONFIG.TOOLTIP_DURATION);
      }, 0);
    });
  });
}

// Render filtered tools
function renderTools() {
  gridContainer.innerHTML = '';
  const frag = document.createDocumentFragment();
  const filtered = tools.filter(t => t.category.includes(activeTab));

  filtered.forEach(({ name, logo }) => {
    const div = document.createElement("div");
    div.className = "tools-icon";

    const injectSVG = svg => {
      div.innerHTML = svg;
      const p = document.createElement("p");
      p.textContent = name;
      div.appendChild(p);
    };

    const svg = svgCache.get(logo);
    if (svg) {
      injectSVG(svg);
    } else {
      console.warn(`Missing SVG for ${logo}`);
    }

    frag.appendChild(div);
  });

  gridContainer.appendChild(frag);
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
        }, index * ANIMATION_CONFIG.STAGGER_DELAY);
      });
      observer.unobserve(entry.target);
    }
  });
}, { threshold: ANIMATION_CONFIG.INTERSECTION_THRESHOLD });

// Initial render
renderTabs();
preloadSVGs().then(() => {
  // Wait for all SVGs to be preloaded before calling renderTools()
  renderTools();
});