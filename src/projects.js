import './styles/main.css';

const initTheme = () => {
  const theme = localStorage.getItem('theme') || 'light';
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};

const setTheme = (theme) => {
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  localStorage.setItem('theme', theme);
};

initTheme();

const projects = [
  {
    id: 'logic-gates',
    title: 'De Morganovy zákony',
    course: 'ZDS - Základy digitálních systémů',
    description: 'Zapojování logických hradel za účelem ověření správnosti řešení De Morganových zákonů. Projekt zahrnuje implementaci základních logických hradel (NAND a NOT) a testování jejich kombinací pro různé vstupy.',
    technologies: ['Logické hradla', 'Boolean algebra', 'De Morganovy zákony'],
    features: [
      'Implementace AND, OR, NOT hradel',
      'Aplikace De Morganových zákonů',
      'Testování kombinací vstupů'
    ],
    icon: '⚡',
    color: 'blue',
    status: 'completed',
    demo: null,
    github: null
  },
  {
    id: 'tetris',
    title: 'Tetris v C',
    course: 'UPR - Úvod do programování',
    description: 'Hra Tetris naprogramovaná v jazyce C s využitím knihovny SDL3 pro grafické zobrazení. Hráč může ovládat padající bloky, otáčet je a snažit se vytvořit kompletní řady pro získání bodů.',
    technologies: ['C', 'SDL3', 'Vývoj her', 'Tetris'],
    features: [
      'Plně funkční herní mechanika Tetrisu',
      'Grafické rozhraní pomocí SDL3',
      'Systém skóre a úrovní',
      'Ovládání klávesnicí'
    ],
    icon: '🎮',
    color: 'purple',
    status: 'in-progress',
    demo: null,
    github: null
  },
  {
    id: 'portfolio',
    title: 'Osobní Portfolio & CV',
    course: 'ZIT - Základy informačních technologií',
    description: 'Osobní vebové portfolio obsahující hlavní stránku, životopis a sekci projektů. Vytvořeno s využitím moderních webových technologií pro zajištění responzivního designu a optimalizovaného výkonu.',
    technologies: ['JavaScript', 'HTML', 'CSS', 'Tailwind', 'Vite'],
    features: [
      'Responzivní design',
      'Tmavý režim',
      'Interaktivní animace',
      'Dynamické načítání obsahu',
      'Optimalizovaný výkon'
    ],
    icon: '🌐',
    color: 'green',
    status: 'completed',
    demo: './index.html',
    github: null
  }
];

const app = document.createElement('div');
app.className = 'min-h-screen';

const getStatusBadge = (status) => {
  const badges = {
    'completed': '<span class="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-xs font-semibold rounded-full">Dokončeno</span>',
    'in-progress': '<span class="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300 text-xs font-semibold rounded-full">Nedokončené</span>',
    'planned': '<span class="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-semibold rounded-full">Plánováno</span>'
  };
  return badges[status] || '';
};

const getColorClasses = (color) => {
  const colors = {
    'blue': {
      gradient: 'from-blue-500 to-blue-600',
      border: 'border-blue-500 dark:border-blue-400',
      bg: 'bg-blue-50 dark:bg-blue-950',
      text: 'text-blue-600 dark:text-blue-400',
      hover: 'hover:border-blue-600 dark:hover:border-blue-300'
    },
    'purple': {
      gradient: 'from-purple-500 to-purple-600',
      border: 'border-purple-500 dark:border-purple-400',
      bg: 'bg-purple-50 dark:bg-purple-950',
      text: 'text-purple-600 dark:text-purple-400',
      hover: 'hover:border-purple-600 dark:hover:border-purple-300'
    },
    'green': {
      gradient: 'from-green-500 to-green-600',
      border: 'border-green-500 dark:border-green-400',
      bg: 'bg-green-50 dark:bg-green-950',
      text: 'text-green-600 dark:text-green-400',
      hover: 'hover:border-green-600 dark:hover:border-green-300'
    }
  };
  return colors[color] || colors.blue;
};

app.innerHTML = /* html */`
  <nav class="fixed top-0 w-full bg-gray-100 dark:bg-gray-800 border-b border-gray-300 dark:border-gray-700 z-50 transition-colors backdrop-blur-sm bg-opacity-90">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-14">
        <div class="flex items-center space-x-2">
          <a href="./" class="flex items-center space-x-2">
            <span class="text-blue-600 dark:text-blue-400 text-xl">▶</span>
            <span class="code-font text-lg font-semibold text-gray-800 dark:text-gray-100">ZIT/projects.js</span>
          </a>
        </div>

        <div class="relative">
          <button id="theme-dropdown-btn" class="px-4 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition flex items-center space-x-2 text-sm text-gray-700 dark:text-gray-300">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
            </svg>
            <span>Vzhled</span>
            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          
          <div id="theme-dropdown" class="hidden absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
            <button data-theme="light" class="w-full px-4 py-3 text-left hover:bg-gray-100 dark:hover:bg-gray-700 transition flex items-center space-x-3 text-gray-700 dark:text-gray-300">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
              </svg>
              <span>Světlý</span>
            </button>
            <button data-theme="dark" class="w-full px-4 py-3 text-left hover:bg-gray-100 dark:hover:bg-gray-700 transition flex items-center space-x-3 text-gray-700 dark:text-gray-300">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
              </svg>
              <span>Tmavý</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>

  <main class="pt-14 bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100 dark:from-gray-900 dark:via-blue-950 dark:to-gray-800 transition-colors min-h-screen relative overflow-hidden">
    <div class="absolute inset-0 opacity-5">
      <div class="absolute top-20 left-10 w-64 h-64 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse" style="animation-delay: 2s;"></div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-green-500 rounded-full blur-3xl animate-pulse" style="animation-delay: 4s;"></div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
      <div class="mb-12 text-center">
        <div class="code-font text-sm text-blue-600 dark:text-blue-400 mb-4">
          <span class="text-gray-500 dark:text-gray-400">// </span>Moje práce a projekty
        </div>
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 code-font">
          Projekty <span class="text-blue-600 dark:text-blue-400">2025/2026</span>
        </h1>
        <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Přehled projektů vytvořených během prvního semestru studia na VŠB-TUO
        </p>
        
        <div class="flex justify-center gap-4 mt-8">
          <button data-filter="all" class="filter-btn bg-blue-600 dark:bg-blue-500 text-white px-6 py-2 rounded-lg transition code-font text-sm">
            Všechny
          </button>
          <button data-filter="completed" class="filter-btn bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-6 py-2 rounded-lg transition code-font text-sm">
            Dokončené
          </button>
          <button data-filter="in-progress" class="filter-btn bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-6 py-2 rounded-lg transition code-font text-sm">
            Nedokončené
          </button>
        </div>
      </div>

      <div id="projects-grid" class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        ${projects.map((project, index) => {
          const colors = getColorClasses(project.color);
          return `
            <div class="project-card bg-white dark:bg-gray-800 rounded-xl shadow-lg border-2 ${colors.border} ${colors.hover} transition-all duration-300 overflow-hidden transform hover:-translate-y-2 hover:shadow-2xl opacity-0 animate-fade-in flex flex-col" style="animation-delay: ${index * 150}ms" data-status="${project.status}">
              <div class="h-2 bg-gradient-to-r ${colors.gradient}"></div>
              
              <div class="p-6 flex flex-col flex-grow">
                <div class="flex items-start justify-between mb-4">
                  <div class="text-5xl ${colors.text}">${project.icon}</div>
                  ${getStatusBadge(project.status)}
                </div>

                <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2 code-font">
                  ${project.title}
                </h3>
                
                <div class="code-font text-xs ${colors.text} mb-4 flex items-center">
                  ${project.course}
                </div>

                <p class="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                  ${project.description}
                </p>

                <div class="mb-4 flex-grow">
                  <div class="flex flex-wrap gap-2">
                    ${project.technologies.map(tech => `
                      <span class="px-3 py-1 ${colors.bg} ${colors.text} text-xs rounded-full code-font">
                        ${tech}
                      </span>
                    `).join('')}
                  </div>
                </div>

                <button class="show-details w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg transition text-sm font-semibold flex items-center justify-center space-x-2 mt-auto" data-project="${project.id}">
                  <span>Zobrazit detaily</span>
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
              </div>
            </div>
          `;
        }).join('')}
      </div>

      <div class="text-center">
        <div class="inline-block bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 border border-gray-200 dark:border-gray-700">
          <div class="text-6xl mb-4">🚀</div>
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2 code-font">Více projektů brzy!</h3>
          <p class="text-gray-600 dark:text-gray-400">
            Pracuji nejen na školních projektech, ale také na vlastních nápadech a open-source nástrojích.
          </p>
        </div>
      </div>
    </div>
  </main>

  <div id="project-modal" class="hidden fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
    <div class="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border-2 border-gray-200 dark:border-gray-700 animate-slide-in-top">
      <div id="modal-content"></div>
    </div>
  </div>
`;

document.body.appendChild(app);

setTimeout(() => {
  const dropdownBtn = document.getElementById('theme-dropdown-btn');
  const dropdown = document.getElementById('theme-dropdown');
  const themeButtons = dropdown.querySelectorAll('[data-theme]');

  dropdownBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdown.classList.toggle('hidden');
  });

  document.addEventListener('click', () => {
    if (!dropdown.classList.contains('hidden')) {
      dropdown.classList.add('hidden');
    }
  });

  dropdown.addEventListener('click', (e) => {
    e.stopPropagation();
  });

  themeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const theme = btn.getAttribute('data-theme');
      setTheme(theme);
      dropdown.classList.add('hidden');
    });
  });

  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  projectCards.forEach(card => {
    card.style.display = 'flex';
    card.style.opacity = '1';
    card.style.transform = 'translateY(0)';
  });

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => {
        b.classList.remove('bg-blue-600', 'dark:bg-blue-500', 'text-white');
        b.classList.add('bg-gray-200', 'dark:bg-gray-700', 'text-gray-700', 'dark:text-gray-300');
      });

      btn.classList.add('bg-blue-600', 'dark:bg-blue-500', 'text-white');
      btn.classList.remove('bg-gray-200', 'dark:bg-gray-700', 'text-gray-700', 'dark:text-gray-300');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-status') === filter) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });

  const showDetailsButtons = document.querySelectorAll('.show-details');
  const modal = document.getElementById('project-modal');
  const modalContent = document.getElementById('modal-content');

  showDetailsButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const projectId = btn.getAttribute('data-project');
      const project = projects.find(p => p.id === projectId);
      
      if (project) {
        const colors = getColorClasses(project.color);
        
        modalContent.innerHTML = `
          <div class="h-3 bg-gradient-to-r ${colors.gradient}"></div>
          <div class="p-8">
            <div class="flex items-start justify-between mb-6">
              <div>
                <div class="text-6xl ${colors.text} mb-4">${project.icon}</div>
                <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-2 code-font">
                  ${project.title}
                </h2>
                <div class="code-font text-sm ${colors.text} flex items-center">               
                  ${project.course}
                </div>
              </div>
              <button id="close-modal" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>

            <div class="mb-6">
              ${getStatusBadge(project.status)}
            </div>

            <div class="mb-6">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3 code-font">Popis projektu</h3>
              <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
                ${project.description}
              </p>
            </div>
            <div class="mb-6">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3 code-font">Technologie</h3>
              <div class="flex flex-wrap gap-2">
                ${project.technologies.map(tech => `
                  <span class="px-4 py-2 ${colors.bg} ${colors.text} rounded-lg code-font font-semibold">
                    ${tech}
                  </span>
                `).join('')}
              </div>
            </div>

            <div class="mb-6">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3 code-font">Klíčové funkce</h3>
              <ul class="space-y-2">
                ${project.features.map(feature => `
                  <li class="flex items-start space-x-2 text-gray-600 dark:text-gray-400">
                    <svg class="w-5 h-5 ${colors.text} mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                    <span>${feature}</span>
                  </li>
                `).join('')}
              </ul>
            </div>

            ${project.demo || project.github ? `
              <div class="flex flex-wrap gap-4 pt-6 border-t border-gray-200 dark:border-gray-700">
                ${project.demo ? `
                  <a href="${project.demo}" class="px-6 py-3 bg-gradient-to-r ${colors.gradient} text-white rounded-lg transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center space-x-2 font-semibold">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                    </svg>
                    <span>Zobrazit demo</span>
                  </a>
                ` : ''}
                ${project.github ? `
                  <a href="${project.github}" target="_blank" class="px-6 py-3 bg-gray-800 dark:bg-gray-700 hover:bg-gray-900 dark:hover:bg-gray-600 text-white rounded-lg transition transform hover:-translate-y-0.5 flex items-center space-x-2 font-semibold">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"/>
                    </svg>
                    <span>Zobrazit na GitHubu</span>
                  </a>
                ` : ''}
              </div>
            ` : ''}
          </div>
        `;

        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';

        const closeModalBtn = document.getElementById('close-modal');
        closeModalBtn.addEventListener('click', () => {
          modal.classList.add('hidden');
          document.body.style.overflow = 'auto';
        });

        modal.addEventListener('click', (e) => {
          if (e.target === modal) {
            modal.classList.add('hidden');
            document.body.style.overflow = 'auto';
          }
        });
      }
    });
  });
}, 100);
