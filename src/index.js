import './styles/main.css';

const initTheme = () => {
  const theme = localStorage.getItem('theme') || 'light';
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
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

const triviaFacts = [
  "JavaScript byl vytvořen za pouhých 10 dní v roce 1995 Brendanem Eichem.",
  "První počítačový \"bug\" byl skutečný brouk nalezený v počítači Mark II v roce 1947.",
  "Programovací jazyk Python je pojmenován po Monty Pythonovi.",
  "HTML není programovací jazyk, jedná se o značkovací jazyk.",
  "C++ byl původně nazván 'C with Classes'.",
  "Java a JavaScript nemají nic společného, JavaScript byl původně nazván Mocha a LiveScript.",
  "První počítačová hra byla Spacewar, byla vyvynuta roku 1962 a měla jen 9 KB",
  "Linux byl vytvořen roku 1991 Linusem Torvaldsem.",
  "První webová stránka byla vytvořena v roce 1991, jedná se o stránku CERNu.",
  "Algoritmus Google PageRank byl pojmenován po Larrym Pageovi.",
  "MySQL, MariaDB a MaxDB jsou pojmenovány po dětech jejich tvůrce Michaela Wideniuse. (My, Maria a Max).",
  "První verze Windows byla 1.0 a vydána v roce 1985 jako grafické rozhraní pro jeho předchůdce, MS-DOS.",
  "ASCII kód pro velké písmeno 'A' je 65.",
  "První zkompilovaný programovací jazyk byl Autocode vyvynutý v 50. letech.",
  "První e-mail byl odeslán Rayem Tomlinsonem v roce 1971 a také zavedl znak '@' k oddělení uživatelského jména od názvu počítače.",
  "První počítačový program byl napsán Ada Lovelace už v 19. století.",
  "ASCII znamená American Standard Code for Information Interchange.",
  "CAPTCHA je zkratka pro 'Completely Automated Public Turing test to tell Computers and Humans Apart'.",
  "Turingův stroj je abstraktní stroj, který upravuje symboly na nekonečném pásu podle sady pravidel.",
  "Programovací jazyk C má v originální implementaci názvy funkcí omezené na 8 znaků.",
  "Čte toto vůbec někdo?",
  "Moje dosud nevydané osobní protfolio je tvořeno v HTML, CSS, JS a PHP bez použití frameworků a má akuálně přes 20 000 řádků kódu.",
];

triviaFacts.push(`Aktuální epocha Unix času je <b>${Math.floor(Date.now() / 1000)}</b> sekund od 1. ledna 1970.`);
triviaFacts.push(`Šance vidět tento fakt je <b>1:${triviaFacts.length + 1}</b>!`);

const randomTrivia = triviaFacts[Math.floor(Math.random() * triviaFacts.length)];

const app = document.createElement('div');
app.className = 'min-h-screen';

app.innerHTML = /* html */`
  <nav class="fixed top-0 w-full bg-gray-100 dark:bg-gray-800 border-b border-gray-300 dark:border-gray-700 z-50 transition-colors backdrop-blur-sm bg-opacity-90">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-14">
        <div class="flex items-center space-x-2">
          <span class="text-blue-600 dark:text-blue-400 text-xl">▶</span>
          <span class="code-font text-lg font-semibold text-gray-800 dark:text-gray-100">ZIT/index.js</span>
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

  <main class="pt-14">
    <section id="home" class="min-h-screen flex items-center bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100 dark:from-gray-900 dark:via-blue-950 dark:to-gray-800 transition-colors relative overflow-hidden">
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-20 left-10 w-64 h-64 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div class="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse" style="animation-delay: 2s;"></div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div class="mb-8 bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-600 dark:border-blue-400 p-4 rounded-r-lg shadow-md animate-slide-in-top">
          <div class="flex items-start space-x-3">
            <svg class="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9 9a1 1 0 012 0v4a1 1 0 11-2 0V9zm1-5a1 1 0 100 2 1 1 0 000-2z"/>
            </svg>
            <div>
              <p class="text-sm font-semibold text-blue-800 dark:text-blue-300">Programátorská zajímavost dne</p>
              <p class="text-sm text-blue-700 dark:text-blue-400 mt-1">${randomTrivia}</p>
            </div>
          </div>
        </div>

        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div class="code-font text-sm text-blue-600 dark:text-blue-400 mb-4">
              <span class="text-gray-500 dark:text-gray-400">1</span> // Ahoj, jmenuji se
            </div>
            <h1 class="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              <span id="typed-name"></span><span class="animate-pulse">|</span>
            </h1>
            <div class="code-font text-xl text-gray-600 dark:text-gray-300 mb-6">
              <span class="text-purple-600 dark:text-purple-400">const</span> 
              <span class="text-blue-600 dark:text-blue-400"> role</span> = 
              <span class="text-green-600 dark:text-green-400">"Full Stack Developer"</span>;
            </div>
            <p class="code-font text-lg text-green-600 dark:text-green-400 mb-8 leading-relaxed">
              /*<br>Jsem student informatiky na VŠB a full stack vývojář primárně zaměřený na čisté PHP a JavaScript. Kromě programování a technologice obecně mě také zajímá historie.<br>*/
            </p>
            
            <div class="flex items-center space-x-4 mb-8">
              <div class="flex items-center space-x-2">
                <div class="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span class="text-sm text-gray-600 dark:text-gray-400">K dispozici pro projekty</span>
              </div>
            </div>

            <div class="flex flex-wrap gap-4">
              <a href="./projects.html" class="px-6 py-3 bg-blue-600 hover:bg-blue-750 text-white rounded-lg transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Zobrazit projekty
              </a>
              <a href="./cv.html" class="px-6 py-3 bg-gray-400 dark:bg-gray-700 hover:bg-gray-500 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-lg transition transform hover:-translate-y-0.5">
                Životopis
              </a>
              <a href="https://github.com/JirkaUlbricht" target="_blank" class="px-6 py-3 bg-gray-400 dark:bg-gray-700 hover:bg-[#0d1117] dark:hover:bg-[#0d1117] text-gray-800 dark:text-gray-200 hover:text-white rounded-lg transition transform hover:-translate-y-0.5 flex items-center space-x-2">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"/>
                </svg>
                <span>Můj Github</span>
              </a>
            </div>
          </div>
          
          <div class="hidden md:block">
            <div class="bg-white dark:bg-gray-900 rounded-lg shadow-2xl overflow-hidden border border-gray-300 dark:border-gray-700">
              <div class="bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-800 dark:to-blue-900 h-8 flex items-center px-3 space-x-2">
                <div class="flex space-x-1.5">
                  <img src="./img/vsc.png" alt="VS Code" class="w-4 h-4" />
                </div>
                <div class="flex-1 flex justify-center">
                  <span class="code-font text-xs text-white font-medium">index.js</span>
                </div>
                <div class="flex space-x-1">
                  <button class="w-6 h-6 flex items-center justify-center hover:bg-blue-800 dark:hover:bg-blue-700 transition rounded">
                    <span class="text-white text-xs">─</span>
                  </button>
                  <button class="w-6 h-6 flex items-center justify-center hover:bg-blue-800 dark:hover:bg-blue-700 transition rounded">
                    <span class="text-white text-xs">□</span>
                  </button>
                  <button class="w-6 h-6 flex items-center justify-center hover:bg-red-600 transition rounded">
                    <span class="text-white text-xs">✕</span>
                  </button>
                </div>
              </div>
              
              <div class="flex">
                <div class="w-12 bg-gray-800 dark:bg-gray-950 flex flex-col items-center py-2 space-y-4 border-r border-gray-700">
                  <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                  </svg>
                  <svg class="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                    <path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"/>
                  </svg>
                </div>
                
                <div class="flex-1 bg-gray-900 dark:bg-black p-6">
                  <div class="code-font text-sm space-y-1">
                    <div class="flex">
                      <span class="text-gray-500 w-8 text-right mr-4 select-none">1</span>
                      <div class="flex-1">
                        <span class="text-purple-400">class</span> 
                        <span class="text-yellow-400"> Developer</span> 
                        <span class="text-gray-400"> {</span>
                      </div>
                    </div>
                    <div class="flex">
                      <span class="text-gray-500 w-8 text-right mr-4 select-none">2</span>
                      <div class="flex-1 ml-4">
                        <span class="text-blue-400">constructor</span>
                        <span class="text-gray-400">() {</span>
                      </div>
                    </div>
                    <div class="flex">
                      <span class="text-gray-500 w-8 text-right mr-4 select-none">3</span>
                      <div class="flex-1 ml-8">
                        <span class="text-gray-400">this</span>
                        <span class="text-gray-400">.</span>
                        <span class="text-blue-300">name</span>
                        <span class="text-gray-400"> = </span>
                        <span class="text-green-400">"Jirka"</span>
                        <span class="text-gray-400">;</span>
                      </div>
                    </div>
                    <div class="flex">
                      <span class="text-gray-500 w-8 text-right mr-4 select-none">4</span>
                      <div class="flex-1 ml-8">
                        <span class="text-gray-400">this</span>
                        <span class="text-gray-400">.</span>
                        <span class="text-blue-300">skills</span>
                        <span class="text-gray-400"> = [</span>
                      </div>
                    </div>
                    <div class="flex">
                      <span class="text-gray-500 w-8 text-right mr-4 select-none">5</span>
                      <div class="flex-1 ml-12">
                        <span class="text-green-400">"JavaScript"</span>
                        <span class="text-gray-400">,</span>
                      </div>
                    </div>
                    <div class="flex">
                      <span class="text-gray-500 w-8 text-right mr-4 select-none">6</span>
                      <div class="flex-1 ml-12">
                        <span class="text-green-400">"PHP"</span>
                        <span class="text-gray-400">,</span>
                      </div>
                    </div>
                    <div class="flex">
                      <span class="text-gray-500 w-8 text-right mr-4 select-none">7</span>
                      <div class="flex-1 ml-12">
                        <span class="text-green-400">"C"</span>
                      </div>
                    </div>
                    <div class="flex">
                      <span class="text-gray-500 w-8 text-right mr-4 select-none">8</span>
                      <div class="flex-1 ml-8">
                        <span class="text-gray-400">];</span>
                      </div>
                    </div>
                    <div class="flex">
                      <span class="text-gray-500 w-8 text-right mr-4 select-none">9</span>
                      <div class="flex-1 ml-4">
                        <span class="text-gray-400">}</span>
                      </div>
                    </div>
                    <div class="flex">
                      <span class="text-gray-500 w-8 text-right mr-4 select-none">10</span>
                      <div class="flex-1">
                        <span class="text-gray-400">}</span>
                      </div>
                    </div>
                    <div class="flex">
                      <span class="text-gray-500 w-8 text-right mr-4 select-none">11</span>
                      <div class="flex-1"></div>
                    </div>
                    <div class="flex items-center">
                      <span class="text-gray-500 w-8 text-right mr-4 select-none">12</span>
                      <div class="flex-1 flex items-center">
                        <span class="text-gray-400">|</span>
                        <span class="w-2 h-4 bg-white animate-pulse ml-0.5"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="bg-blue-600 dark:bg-blue-800 h-6 flex items-center justify-between px-3 text-xs text-white">
                <div class="flex items-center space-x-4">
                  <span>UTF-8</span>
                  <span>JavaScript</span>
                  <span>Ln 12, Col 1</span>
                </div>
                <div class="flex items-center space-x-2">
                  <span>✓ Prettier</span>
                  <span>⚡ Live</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
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
}, 100);

const typeText = (element, text, baseSpeed = 80) => {
  let i = 0;
  element.textContent = '';
  const cursor = element.nextElementSibling;
  
  const type = () => {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      const randomDelay = baseSpeed + Math.random() * 150 - 50;
      setTimeout(type, randomDelay);
    } else {
      setTimeout(() => {
        if (cursor) {
          cursor.style.display = 'none';
        }
      }, 1000);
    }
  };
  
  type();
};


const deleteText = (element, baseSpeed = 30, callback) => {
  let text = element.innerHTML;
  let i = text.length;
  
  const deleteChar = () => {
    if (i > 0) {
      element.innerHTML = text.substring(0, i - 1);
      i--;
      const randomDelay = baseSpeed + Math.random() * 20 - 10;
      setTimeout(deleteChar, randomDelay);
    } else {
      element.innerHTML = '&nbsp;';
      if (callback) callback();
    }
  };
  
  deleteChar();
};

setTimeout(() => {
  const nameElement = document.getElementById('typed-name');
  if (nameElement) {
    typeText(nameElement, 'Jiří Ulbricht', 100);
  }
}, 600);

const updateTrivia = () => {
  const triviaElement = document.querySelector('.text-sm.text-blue-700.dark\\:text-blue-400.mt-1');
  if (triviaElement) {
    deleteText(triviaElement, 12, () => {
      const newTrivia = triviaFacts[Math.floor(Math.random() * triviaFacts.length)];
      let i = 0;
      const type = () => {
        if (i < newTrivia.length) {
          if (newTrivia.charAt(i) === '<') {
            const closingTag = newTrivia.indexOf('>', i);
            triviaElement.innerHTML += newTrivia.substring(i, closingTag + 1);
            i = closingTag + 1;
          } else {
            triviaElement.innerHTML += newTrivia.charAt(i);
            i++;
          }
          const randomDelay = 30 + Math.random() * 20 - 10;
          setTimeout(type, randomDelay);
        }
      };
      type();
    });
  }
};

setInterval(updateTrivia, 12000);