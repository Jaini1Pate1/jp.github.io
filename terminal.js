/* ═══════════════════════════════════════════
   terminal.js — Cyan CRT Terminal Logic
   ═══════════════════════════════════════════ */

/* ── ASCII banner ── */
document.getElementById('banner').textContent =
`
       ░█████ ░█████████  
        ░██  ░██     ░██ 
       ░██  ░██     ░██ 
        ░██  ░█████████  
 ░██   ░██  ░██         
░██   ░██  ░██         
  ░██████   ░██       
                                                                                                                                                                 
`;


/* ════════════════════════════════════════════════════════════
   ✏️  PORTFOLIO DATA — edit everything in this section
   ════════════════════════════════════════════════════════════ */
 
const ME = {
  name:     'Alex Rivera',
  title:    'Full-Stack Developer & UI Engineer',
  location: 'San Francisco, CA',
  email:    'alex@example.com',
  github:   'github.com/alexrivera',
  linkedin: 'linkedin.com/in/alexrivera',
  website:  'alexrivera.dev',
  summary:
    'Passionate full-stack developer with 5+ years building performant web ' +
    'applications. I love crafting clean UIs, solving hard backend problems, ' +
    'and shipping things that actually work. Open-source contributor and ' +
    'occasional conference speaker.',
};
 
const EXPERIENCE = [
  {
    role:    'Senior Frontend Engineer',
    company: 'Acme Corp',
    period:  '2022 – present',
    bullets: [
      'Led migration of legacy jQuery app to React 18, cutting bundle size by 42%',
      'Built a real-time dashboard serving 50k+ concurrent users with WebSockets',
      'Mentored 3 junior devs and introduced a component design system',
    ],
  },
  {
    role:    'Full-Stack Developer',
    company: 'Startup XYZ',
    period:  '2020 – 2022',
    bullets: [
      'Designed and shipped a Node.js / PostgreSQL REST API from scratch',
      'Integrated Stripe payments and reduced checkout drop-off by 18%',
      'Automated CI/CD pipelines with GitHub Actions and Docker',
    ],
  },
  {
    role:    'Junior Web Developer',
    company: 'Freelance',
    period:  '2018 – 2020',
    bullets: [
      'Delivered 12+ client websites using HTML, CSS, vanilla JS, and WordPress',
      'Built a custom CMS with PHP + MySQL for a local news outlet',
    ],
  },
];
 
const PROJECTS = [
  {
    name:  'CyberShell',
    tech:  'React · Node.js · WebSockets',
    year:  '2024',
    desc:  'A browser-based collaborative terminal emulator with real-time session sharing.',
    link:  'github.com/alexrivera/cybershell',
  },
  {
    name:  'PulseDB',
    tech:  'Go · PostgreSQL · gRPC',
    year:  '2023',
    desc:  'High-performance time-series database wrapper with automatic query optimisation.',
    link:  'github.com/alexrivera/pulsedb',
  },
  {
    name:  'NeonUI',
    tech:  'TypeScript · CSS · Storybook',
    year:  '2023',
    desc:  'Open-source component library with 40+ accessible, theme-able components.',
    link:  'github.com/alexrivera/neonui',
  },
  {
    name:  'Mapify',
    tech:  'Next.js · Mapbox · Prisma',
    year:  '2022',
    desc:  'Location-based event discovery platform with real-time attendee tracking.',
    link:  'github.com/alexrivera/mapify',
  },
  {
    name:  'DevLog',
    tech:  'Svelte · SQLite · Electron',
    year:  '2022',
    desc:  'Offline-first developer journal and code snippet manager for the desktop.',
    link:  'github.com/alexrivera/devlog',
  },
];
 
const SKILLS = {
  'Languages':   ['JavaScript (ES2024)', 'TypeScript', 'Python', 'Go', 'SQL', 'Bash'],
  'Frontend':    ['React', 'Next.js', 'Svelte', 'HTML5', 'CSS3 / Tailwind', 'WebSockets'],
  'Backend':     ['Node.js', 'Express', 'FastAPI', 'gRPC', 'REST', 'GraphQL'],
  'Databases':   ['PostgreSQL', 'MongoDB', 'Redis', 'SQLite', 'Prisma'],
  'DevOps':      ['Docker', 'GitHub Actions', 'Vercel', 'AWS (EC2, S3, Lambda)', 'Linux'],
  'Tools':       ['Git', 'Vim', 'Figma', 'Storybook', 'Jest', 'Playwright'],
};
 
const EDUCATION = [
  {
    degree:  'B.Sc. Computer Science',
    school:  'University of California, Berkeley',
    year:    '2018',
    note:    'Focus: Systems & Human-Computer Interaction',
  },
  {
    degree:  'Full-Stack Certification',
    school:  'freeCodeCamp',
    year:    '2017',
    note:    '300+ hours — JavaScript, React, Node, Databases',
  },
];
 
const CONTACT = {
  email:    ME.email,
  github:   ME.github,
  linkedin: ME.linkedin,
  website:  ME.website,
  note:     'Happily open to interesting full-time roles and freelance projects.',
};
 
/* ════════════════════════════════════════════════════════════
   COMMAND DEFINITIONS (shown in help)
   ════════════════════════════════════════════════════════════ */
 
const cmdDefs = [
  { group: 'portfolio',  cmd: 'whoami',              desc: 'About me — who I am and what I do'       },
  { group: 'portfolio',  cmd: 'cat resume.txt',       desc: 'View my full résumé summary'             },
  { group: 'portfolio',  cmd: 'find projects',        desc: 'Browse all my projects'                  },
  { group: 'portfolio',  cmd: 'ls skills',            desc: 'List my technical skills by category'    },
  { group: 'portfolio',  cmd: 'history experience',   desc: 'My work experience & career timeline'    },
  { group: 'portfolio',  cmd: 'cat education.txt',    desc: 'Education & certifications'              },
  { group: 'portfolio',  cmd: 'contact',              desc: 'How to get in touch with me'             },
  { group: 'terminal',   cmd: 'help',                 desc: 'Show this command reference'             },
  { group: 'terminal',   cmd: 'clear',                desc: 'Clear the terminal output'               },
  { group: 'terminal',   cmd: 'date',                 desc: 'Print current date and time'             },
];
 
const groupLabels = {
  portfolio: 'portfolio',
  terminal:  'terminal',
};
 
/* ════════════════════════════════════════════════════════════
   DOM REFERENCES
   ════════════════════════════════════════════════════════════ */
const historyEl    = document.getElementById('history');
const typedDisplay = document.getElementById('typed-display');
const chipsEl      = document.getElementById('chips');
const clockEl      = document.getElementById('clock');
 
/* ════════════════════════════════════════════════════════════
   UTILITY
   ════════════════════════════════════════════════════════════ */
function esc(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g,  '&lt;')
    .replace(/>/g,  '&gt;');
}
 
function scrollBottom() {
  historyEl.scrollTop = historyEl.scrollHeight;
}
 
function appendRaw(node) {
  historyEl.appendChild(node);
  scrollBottom();
}
 
function appendLine(html, extraStyle) {
  const d = document.createElement('div');
  d.className = 'tline';
  if (extraStyle) d.style.cssText = extraStyle;
  d.innerHTML = html;
  appendRaw(d);
}
 
function appendBlank() { appendLine('&nbsp;'); }
 
function promptHTML(cmd) {
  return (
    `<span class="prompt">${esc(ME.name.split(' ')[0].toLowerCase())}@portfolio</span>` +
    `<span class="dim">:</span>` +
    `<span class="tilde">~</span>` +
    `<span class="dollar">$&nbsp;</span>` +
    `<span style="color:#00ffee">${esc(cmd)}</span>`
  );
}
 
/* Section header helper */
function sectionHeader(title) {
  appendLine(
    `<span style="color:#00eedd">┌─[</span>` +
    `<span style="color:#00ffee"> ${esc(title)} </span>` +
    `<span style="color:#00eedd">]</span>`,
    'margin-top:4px'
  );
}
 
/* Divider */
function divider() {
  appendLine('<span style="color:#004d44">────────────────────────────────────────────────────</span>');
}
 
/* ════════════════════════════════════════════════════════════
   RENDERERS
   ════════════════════════════════════════════════════════════ */
 
/* help */
function renderHelp() {
  const wrap = document.createElement('div');
  wrap.className = 'help-table';
 
  const groups = [...new Set(cmdDefs.map(c => c.group))];
  groups.forEach(g => {
    const cat = document.createElement('div');
    cat.className = 'help-cat';
    cat.textContent = '─── ' + (groupLabels[g] || g) + ' ───────────────────';
    wrap.appendChild(cat);
 
    cmdDefs.filter(c => c.group === g).forEach(c => {
      const row = document.createElement('div');
      row.className = 'help-row';
      row.innerHTML =
        `<span class="help-cmd">${esc(c.cmd)}</span>` +
        `<span style="color:#004d44;margin-right:8px">│</span>` +
        `<span class="help-desc">${esc(c.desc)}</span>`;
      row.style.cursor = 'pointer';
      row.addEventListener('mouseenter', () => row.querySelector('.help-cmd').style.textDecoration = 'underline');
      row.addEventListener('mouseleave', () => row.querySelector('.help-cmd').style.textDecoration = '');
      row.addEventListener('click', () => runCommand(c.cmd));
      wrap.appendChild(row);
    });
  });
 
  const footer = document.createElement('div');
  footer.style.cssText = 'font-family:Share Tech Mono,monospace;font-size:11px;color:#004d44;margin-top:6px';
  footer.textContent = '▶  Click any command above to run it, or type it manually below.';
  wrap.appendChild(footer);
 
  appendRaw(wrap);
}
 
/* whoami */
function renderWhoami() {
  sectionHeader('whoami');
  appendLine(`<span style="color:#00eedd;font-size:15px">${esc(ME.name)}</span>`);
  appendLine(`<span style="color:#009988">${esc(ME.title)}</span>`);
  appendBlank();
  appendLine(`<span style="color:#006655">📍</span> <span style="color:#00ccbb">${esc(ME.location)}</span>`);
  appendBlank();
 
  /* Word-wrap summary at ~70 chars */
  const words  = ME.summary.split(' ');
  let   line   = '';
  words.forEach((w, i) => {
    if ((line + w).length > 70) {
      appendLine(esc(line.trim()), 'color:#009988');
      line = '';
    }
    line += w + ' ';
    if (i === words.length - 1) appendLine(esc(line.trim()), 'color:#009988');
  });
 
  appendBlank();
  appendLine(`<span style="color:#004d44">tip: run </span><span style="color:#00eedd">cat resume.txt</span><span style="color:#004d44"> for full résumé, or </span><span style="color:#00eedd">contact</span><span style="color:#004d44"> to reach me.</span>`);
}
 
/* cat resume.txt */
function renderResume() {
  sectionHeader('resume.txt');
 
  /* Name + title block */
  appendLine(`<span style="color:#00ffee">${esc(ME.name)}</span>  <span style="color:#006655">─</span>  <span style="color:#009988">${esc(ME.title)}</span>`);
  appendLine(
    `<span style="color:#005544">${esc(ME.email)}</span>  ` +
    `<span style="color:#004d44">·</span>  ` +
    `<span style="color:#005544">${esc(ME.website)}</span>  ` +
    `<span style="color:#004d44">·</span>  ` +
    `<span style="color:#005544">${esc(ME.github)}</span>`
  );
  divider();
 
  /* Experience summary */
  appendLine('<span style="color:#00eedd">EXPERIENCE</span>');
  EXPERIENCE.forEach(job => {
    appendBlank();
    appendLine(
      `<span style="color:#00ffcc">${esc(job.role)}</span>  ` +
      `<span style="color:#004d44">@</span>  ` +
      `<span style="color:#00ccbb">${esc(job.company)}</span>  ` +
      `<span style="color:#004d44">[${esc(job.period)}]</span>`
    );
    job.bullets.forEach(b => {
      appendLine(`<span style="color:#004d44">  ▸ </span><span style="color:#007766">${esc(b)}</span>`);
    });
  });
 
  divider();
 
  /* Skills summary */
  appendLine('<span style="color:#00eedd">SKILLS</span>');
  appendBlank();
  Object.entries(SKILLS).forEach(([cat, items]) => {
    appendLine(
      `<span style="color:#009988;min-width:100px;display:inline-block">${esc(cat.padEnd(12))}</span>` +
      `<span style="color:#006655">${esc(items.join('  ·  '))}</span>`
    );
  });
 
  divider();
 
  /* Education */
  appendLine('<span style="color:#00eedd">EDUCATION</span>');
  appendBlank();
  EDUCATION.forEach(e => {
    appendLine(
      `<span style="color:#00ffcc">${esc(e.degree)}</span>  ` +
      `<span style="color:#004d44">·</span>  ` +
      `<span style="color:#00ccbb">${esc(e.school)}</span>  ` +
      `<span style="color:#004d44">[${esc(e.year)}]</span>`
    );
    appendLine(`<span style="color:#005544">  ${esc(e.note)}</span>`);
  });
}
 
/* find projects */
function renderProjects() {
  sectionHeader('find projects');
  appendLine(
    `<span style="color:#004d44">Found </span>` +
    `<span style="color:#00eedd">${PROJECTS.length}</span>` +
    `<span style="color:#004d44"> projects in </span>` +
    `<span style="color:#00ffee">~/projects/</span>`
  );
  appendBlank();
 
  PROJECTS.forEach((p, i) => {
    const num = String(i + 1).padStart(2, '0');
    appendLine(
      `<span style="color:#004d44">${num}/</span>` +
      `<span style="color:#00ffcc"> ${esc(p.name)}</span>` +
      `<span style="color:#004d44">  [${esc(p.year)}]</span>`
    );
    appendLine(`<span style="color:#004d44">    tech  ▸ </span><span style="color:#44ffee">${esc(p.tech)}</span>`);
    appendLine(`<span style="color:#004d44">    desc  ▸ </span><span style="color:#007766">${esc(p.desc)}</span>`);
    appendLine(`<span style="color:#004d44">    link  ▸ </span><span style="color:#005f7a">${esc(p.link)}</span>`);
    if (i < PROJECTS.length - 1) appendBlank();
  });
}
 
/* ls skills */
function renderSkills() {
  sectionHeader('ls skills/');
  appendBlank();
 
  Object.entries(SKILLS).forEach(([cat, items]) => {
    appendLine(
      `<span style="color:#00eedd">┌─ </span>` +
      `<span style="color:#00ffee">${esc(cat)}/</span>`
    );
    items.forEach(item => {
      appendLine(
        `<span style="color:#004d44">│  ▸ </span>` +
        `<span style="color:#00ccbb">${esc(item)}</span>`
      );
    });
    appendLine(`<span style="color:#004d44">│</span>`);
  });
}
 
/* history experience */
function renderExperience() {
  sectionHeader('history experience');
  appendBlank();
 
  EXPERIENCE.forEach((job, i) => {
    /* Timeline marker */
    appendLine(
      `<span style="color:#00eedd">◉</span>` +
      `<span style="color:#004d44"> ─── </span>` +
      `<span style="color:#004d44">[${esc(job.period)}]</span>`
    );
    appendLine(
      `<span style="color:#004d44">│    </span>` +
      `<span style="color:#00ffcc">${esc(job.role)}</span>` +
      `<span style="color:#004d44">  @  </span>` +
      `<span style="color:#00ccbb">${esc(job.company)}</span>`
    );
    job.bullets.forEach(b => {
      appendLine(`<span style="color:#004d44">│      ▸ </span><span style="color:#007766">${esc(b)}</span>`);
    });
    if (i < EXPERIENCE.length - 1) {
      appendLine(`<span style="color:#004d44">│</span>`);
    } else {
      appendLine(`<span style="color:#004d44">╵</span>`);
    }
  });
}
 
/* cat education.txt */
function renderEducation() {
  sectionHeader('education.txt');
  appendBlank();
 
  EDUCATION.forEach((e, i) => {
    appendLine(
      `<span style="color:#00ffcc">${esc(e.degree)}</span>  ` +
      `<span style="color:#004d44">[${esc(e.year)}]</span>`
    );
    appendLine(`<span style="color:#004d44">  school  ▸ </span><span style="color:#00ccbb">${esc(e.school)}</span>`);
    appendLine(`<span style="color:#004d44">  note    ▸ </span><span style="color:#007766">${esc(e.note)}</span>`);
    if (i < EDUCATION.length - 1) appendBlank();
  });
}
 
/* contact */
function renderContact() {
  sectionHeader('contact');
  appendBlank();
  appendLine(`<span style="color:#004d44">  email    ▸ </span><span style="color:#44ffee">${esc(CONTACT.email)}</span>`);
  appendLine(`<span style="color:#004d44">  github   ▸ </span><span style="color:#44ffee">${esc(CONTACT.github)}</span>`);
  appendLine(`<span style="color:#004d44">  linkedin ▸ </span><span style="color:#44ffee">${esc(CONTACT.linkedin)}</span>`);
  appendLine(`<span style="color:#004d44">  website  ▸ </span><span style="color:#44ffee">${esc(CONTACT.website)}</span>`);
  appendBlank();
  appendLine(`<span style="color:#005544">${esc(CONTACT.note)}</span>`);
}
 
 
/* ════════════════════════════════════════════════════════════
   COMMAND MAP
   ════════════════════════════════════════════════════════════ */
const cmdMap = {
  'help':              () => renderHelp(),
  'whoami':            () => renderWhoami(),
  'cat resume.txt':    () => renderResume(),
  'find projects':     () => renderProjects(),
  'ls skills':         () => renderSkills(),
  'history experience':() => renderExperience(),
  'cat education.txt': () => renderEducation(),
  'contact':           () => renderContact(),
  'date':              () => appendLine(esc(new Date().toString()), 'color:#009988'),
  'clear':             () => { historyEl.innerHTML = ''; },
 
  /* Friendly aliases */
  'projects':  () => renderProjects(),
  'skills':    () => renderSkills(),
  'experience':() => renderExperience(),
  'education': () => renderEducation(),
  'resume':    () => renderResume(),
  'about':     () => renderWhoami(),
};
 
 
/* ════════════════════════════════════════════════════════════
   COMMAND RUNNER
   ════════════════════════════════════════════════════════════ */
function runCommand(raw) {
  const k = raw.trim().toLowerCase();
  appendLine(promptHTML(raw));
 
  if (k === 'clear') { historyEl.innerHTML = ''; return; }
 
  const fn = cmdMap[k];
  if (fn) {
    fn();
  } else if (k) {
    appendLine(
      `<span style="color:#cc4433">command not found: ${esc(k)}</span>` +
      `<span style="color:#004d44"> — type </span><span style="color:#00eedd">help</span><span style="color:#004d44"> to see available commands</span>`
    );
  }
 
  appendBlank();
}
 
 
/* ════════════════════════════════════════════════════════════
   QUICK-RUN CHIPS
   ════════════════════════════════════════════════════════════ */
const chipCmds = [
  'whoami', 'find projects', 'ls skills',
  'history experience', 'cat resume.txt',
  'cat education.txt', 'contact',
];
 
chipCmds.forEach(c => {
  const chip = document.createElement('span');
  chip.className = 'chip';
  chip.textContent = '[ ' + c + ' ]';
  chip.addEventListener('click', () => runCommand(c));
  chipsEl.appendChild(chip);
});
 
 
/* ════════════════════════════════════════════════════════════
   BOOT — welcome message on load
   ════════════════════════════════════════════════════════════ */
(function boot() {
  appendLine(
    `<span style="color:#004d44">Welcome to </span>` +
    `<span style="color:#00eedd">${esc(ME.name)}'s</span>` +
    `<span style="color:#004d44"> portfolio terminal. Type </span>` +
    `<span style="color:#00ffee">help</span>` +
    `<span style="color:#004d44"> to get started.</span>`
  );
  appendBlank();
  appendLine(promptHTML('help'));
  renderHelp();
  appendBlank();
})();
 
 
/* ════════════════════════════════════════════════════════════
   CLOCK
   ════════════════════════════════════════════════════════════ */
function tick() {
  const n = new Date();
  clockEl.textContent =
    String(n.getHours()).padStart(2, '0') + ':' +
    String(n.getMinutes()).padStart(2, '0') + ':' +
    String(n.getSeconds()).padStart(2, '0');
}
setInterval(tick, 1000);
tick();
 
 
/* ════════════════════════════════════════════════════════════
   KEYBOARD INPUT
   ════════════════════════════════════════════════════════════ */
let typed        = '';
const cmdHistory = [];
let histIdx      = -1;
 
document.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    const raw = typed.trim();
    runCommand(raw);
    if (raw) { cmdHistory.unshift(raw); histIdx = -1; }
    typed = '';
    typedDisplay.textContent = '';
 
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    if (histIdx < cmdHistory.length - 1) {
      histIdx++;
      typed = cmdHistory[histIdx];
      typedDisplay.textContent = typed;
    }
 
  } else if (e.key === 'ArrowDown') {
    e.preventDefault();
    if (histIdx > 0) {
      histIdx--;
      typed = cmdHistory[histIdx];
      typedDisplay.textContent = typed;
    } else {
      histIdx = -1;
      typed = '';
      typedDisplay.textContent = '';
    }
 
  } else if (e.key === 'Backspace') {
    typed = typed.slice(0, -1);
    typedDisplay.textContent = typed;
 
  } else if (e.key.length === 1 && !e.ctrlKey && !e.metaKey) {
    typed += e.key;
    typedDisplay.textContent = typed;
  }
});
 