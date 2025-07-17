const experiences = [
    {
        company: 'WeServ Systems International, Inc.',
        location: ' 📍 Cebu City, Philippines',
        position: 'Technology Support Engineer',
        period: '🗓️ DEC 2021 - PRESENT',
        description: [
            'Project Lead and main reviewer of an Ansible automation project',
            'Developed and maintained Ansible roles to automate the setup and configuration of proprietary HA cluster applications',
            'Conducted Ansible trainings to our Service Line\'s multiple divisions and teams to raise overall technical maturity',
            'Created comprehensive and meticulous technical documentation detailing the logic and process flows of Ansible playbooks and roles for the consumption of our Japanese counterparts',
            'Built Excel VBA tools integrated with REST APIs to query OpenStack/OpenShift usage, enabling usage-based billing and audit tracking',
            'Built a self-initiated Excel VBA solution that transformed SAP-exported timesheets into a calendar format, improving managerial oversight and increasing trust in reported work hours',
            'Awarded The Best Performer Award for outstanding technical execution and delivery results within our Global Delivery Unit, spanning China, India, Malaysia, and the Philippines',
            'Consistently received high ratings on Partner Performance Reviews for exemplary project performance and customer satisfaction'
        ],
        tools: 'Ansible, Linux, Git, Bash, RegEx, Excel VBA, OpenStack, OpenShift',
    },
    {
        company: 'Nexus Corporation',
        location: ' 📍 Cebu City, Philippines',
        position: 'DevOps Engineer',
        period: '🗓️ APR 2021 - DEC 2021',
        description: [
            'Resolved infrastructure and application downtime issues by identifying the gaps in the configuration; implementing automated monitoring, alerting, and security countermeasures',
            'Configured and maintained Asterisk/VICIdial dial plans (CTI), integrating with CRM built on VueJS (frontend) and PHP (backend) for call center operations',
            'Led the effort to document project processes to accelerate the onboarding and knowledge acquisition of new team members',
            'Onboarded and provisioned accounts and access of new employees to company resources using Google Admin',
        ],
        tools: 'Asterisk, VICIdial, Ansible, Linode, Amazon EC2, Linux, Git, Bash, VueJS, PHP, MySQL, RegEx, cron, iptables, fail2ban, SendGrid, UptimeRobot, Jira, Google Admin',
    },
    {
        company: 'NEC Telecom Software Philippines, Inc.',
        location: ' 📍 Cebu City, Philippines',
        position: 'Software Design Engineer I-III',
        period: '🗓️ FEB 2018 - APR 2021',
        description: [
            'Developed Ansible playbooks that automate the provisioning of a highly available infrastructure and application on Linux KVM',
            'Explored and deployed various open-source tools for proof-of-concepts with basic operations, issue resolution, and infrastructure automation',
            'Authored multiple detailed documentations on common AWS services and open-source software, with use-cases',
            'Conducted peer reviews of automation code (Ansible & Jenkins) and contributed to CICD improvements',
            'Recognized with multiple Presidential Awards',
            'Passed multiple certifications',
        ],
        tools: 'Ansible, AWS, Linux KVM and Networking, Bash, Git, Gitlab, OpenStack, Docker, Kubernetes, Vagrant, Robot Framework, Excel VBA, RegEx, OpenvSwitch, Calico CNI, Samba, LDAP',
    },
];

const exp_timeline_list = document.createElement("ol");
exp_timeline_list.className = "timeline-list";

experiences.forEach(({ company, location, position, period, description, tools }) => {
  const li = document.createElement("li");
  li.className = "timeline-item";

  const h4 = document.createElement("h4");
  h4.className = "text-white-2 font-bold leading-[1.3] mb-2";
  h4.innerHTML = `${company} <span> ${location}</span>`;

  const p = document.createElement("p");
  p.className = "text-orange-yellow-crayola inline";
  p.innerHTML = `${position} <span class="text-white-1">${period}</span>`;

  const ul = document.createElement("ul");
  ul.style = "padding-left: 1.0rem; margin-bottom: 1rem";

  description.forEach((desc) => {
    const li = document.createElement("li");
    li.style = "margin-bottom: 0.15rem";
    li.textContent = desc;
    ul.appendChild(li);
  });

  const pTech = document.createElement("p");
  pTech.style = "font-size: var(--fs-8);";
  pTech.innerHTML = `<strong class="font-bold">TECHNOLOGIES:</strong> ${tools}`;

  const div = document.createElement("div");
  div.className = "timeline-text";
  div.style = "margin-top: 0.75rem";
  
  div.appendChild(ul);
  div.appendChild(pTech);

  li.appendChild(h4);
  li.appendChild(p);
  li.appendChild(div);
  li.appendChild(document.createElement("br"));
  exp_timeline_list.appendChild(li);
});

document.getElementById("experience").appendChild(exp_timeline_list);