const certifications = [
    {
        certification: 'Microsoft Azure Fundamentals',
        period: '🗓️ SEP 2024',
        credential: '5C8BCF4D13DED222',
    },
    {
        certification: 'AWS Certified Solutions Architect - Associate',
        period: '🗓️ DEC 2019 - DEC 2022',
        credential: 'NW06RPW1F2BEQ4GZ',
    },
    {
        certification: 'AWS Certified Cloud Practioner',
        period: '🗓️ JUN 2019 - JUN 2022',
        credential: '450Y3S02B14E1J3W',
    },
    {
        certification: 'ITPEC/PhilNITS Fundamental Information Technology Engineer',
        period: '🗓️ OCT 2019',
        credential: '',
    },
    {
        certification: 'Japanese Language Proficiency Test - N5 Level',
        period: '🗓️ JUL 2019',
        credential: '',
    },
];

const cert_timeline_list = document.createElement("ol");
cert_timeline_list.className = "timeline-list";

certifications.forEach(({ certification, period, credential }) => {
  const li = document.createElement("li");
  li.className = "timeline-item";

  const h4 = document.createElement("h4");
  h4.className = "text-white-2 font-bold leading-[1.3] mb-2";
  h4.innerHTML = `${certification} <span> ${period}</span>`;

  li.appendChild(h4);

  if (!credential == '') {
    const p = document.createElement("p");
    p.className = "text-orange-yellow-crayola inline";
    p.innerHTML = `${credential}`;
    li.appendChild(p);
  }
  
  cert_timeline_list.appendChild(li);
});

document.getElementById("certification").appendChild(cert_timeline_list);