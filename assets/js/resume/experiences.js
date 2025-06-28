const experiences = [
    {
        company: 'WeServ Systems International, Inc.',
        location: ' 📍 Cebu City, Philippines',
        position: 'Technology Support Engineer',
        period: '🗓️ DEC 2021 - PRESENT',
        description: [
            'Project Lead and main reviewer of an Ansible automation project',
            'Developed and managed Ansible playbooks and roles to automate the setup and configuration of proprietary HA cluster applications',
            'Conducted Linux and Ansible trainings to our Service Line\'s multiple divisions and teams',
            'Created comprehensive and meticulous technical documentation detailing the logic and process flows of Ansible playbooks and roles for the consumption of our Japanese counterparts',
            'Developed and maintained VBA applications leveraging REST APIs to access OpenStack and OpenShift resources and calculate the usage',
            'Awarded The Best Performer Award for outstanding performance results within our Global Delivery Unit, spanning China, India, Malaysia, and the Philippines',
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
            'Developed solutions and countermeasures to infrastructure and application issues and downtimes',
            'Implemented security measures and notification services for application, downtimes, and virus detection',
            'Troubleshot and configured Computer Telephony Integration application (dial plan of Asterisk/VICIdial), CRM application - frontend (VueJS) and backend (PHP)',
            'Led the effort to document project processes for the consumption of new team members',
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
            'Developed Ansible playbooks that automate the provisioning of a highly available infrastructure and application using Linux KVM',
            'Experienced with various open-source software for proof-of-concepts with basic operations, issue resolution, and infrastructure automation',
            'Authored multiple detailed documentations on common AWS services and open-source software, with use-cases',
            'Conducted code and document reviews',
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