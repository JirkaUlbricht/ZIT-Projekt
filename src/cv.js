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

const calculateAge = (birthDate) => {
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
};


const app = document.createElement('div');
app.className = 'min-h-screen';

app.innerHTML = /* html */`
  <nav class="fixed top-0 w-full bg-gray-100 dark:bg-gray-800 border-b border-gray-300 dark:border-gray-700 z-50 transition-colors backdrop-blur-sm bg-opacity-90">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-14">
        <div class="flex items-center space-x-2">
          <a href="./" class="flex items-center space-x-2">
            <span class="text-blue-600 dark:text-blue-400 text-xl">▶</span>
            <span class="code-font text-lg font-semibold text-gray-800 dark:text-gray-100">ZIT/cv.js</span>
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

  <main class="pt-14 bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100 dark:from-gray-900 dark:via-blue-950 dark:to-gray-800 transition-colors">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="mb-8 flex justify-between items-center">
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white code-font">Životopis (CV)</h1>
      </div>

      <section class="mb-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 code-font flex items-center">
          <svg class="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"/>
          </svg>
          Trochu o mně
        </h2>
        <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
          Jsem Jirka, je mi ${calculateAge(new Date(2004, 5, 27))} let. Jsem studentem informatiky na VŠB-TUO se zaměřením na full stack vývoj webových stránek a aplikací. Primárně pracuji s čistým PHP a JavaScriptem. Kromě programování mě zajímá historie a technologie obecně. Dále mě třeba baví fotografie a procházky v přírodě.
        </p>
      </section>

      <section class="mb-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 code-font flex items-center">
          <svg class="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd"/>
            <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"/>
          </svg>
          Co dokážu nabídnout?
        </h2>
        <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
          Jsem spolehlivý a pečlivý člověk, který si zakládá na kvalitě své práce a rád se učí novým věcem. Rád pracuji v týmu, ale také si dokážu poradit samostatně. Mým cílem je neustále se zlepšovat a rozšiřovat své dovednosti v oblasti informatiky a programování.
        </p>
      </section>

      <section class="mb-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6 code-font flex items-center">
          <svg class="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
          </svg>
          Vzdělání
        </h2>
        <div class="space-y-4">
          <div class="border-l-4 border-blue-600 dark:border-blue-400 pl-4 mb-5">
            <h3 class="font-semibold text-lg text-gray-900 dark:text-white">VŠB - Technická univerzita Ostrava</h3>
            <p class="text-gray-600 dark:text-gray-400">Bakalářské studium - Informatika</p>
            <p class="text-sm text-gray-500 dark:text-gray-500">2025 - současnost</p>
          </div>
        </div>
        <div class="space-y-4">
          <div class="border-l-4 border-blue-600 dark:border-blue-400 pl-4">
            <h3 class="font-semibold text-lg text-gray-900 dark:text-white">Obchodní Akademie a Střední Odborná Škola Logistická, Opava</h3>
            <p class="text-gray-600 dark:text-gray-400">Studijní obor Informatika</p>
            <p class="text-sm text-gray-500 dark:text-gray-500">2020 - 2024</p>
          </div>
        </div>
      </section>

      <section class="mb-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6 code-font flex items-center">
          <svg class="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd"/>
            <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"/>
          </svg>
          Mé dovednosti
        </h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="space-y-4">
            <div>
              <h3 class="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.121l1.027 1.027a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z"/>
                </svg>
                Jazyky
              </h3>
              <div class="space-y-3">
                <div>
                  <div class="flex justify-between mb-1">
                    <span class="text-sm text-gray-700 dark:text-gray-300">🇨🇿 Čeština</span>
                    <span class="text-sm font-semibold text-gray-700 dark:text-gray-300">100%</span>
                  </div>
                  <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div class="bg-blue-600 dark:bg-blue-400 h-2 rounded-full" style="width: 100%"></div>
                  </div>
                </div>
                <div>
                  <div class="flex justify-between mb-1">
                    <span class="text-sm text-gray-700 dark:text-gray-300">🇬🇧 Angličtina</span>
                    <span class="text-sm font-semibold text-gray-700 dark:text-gray-300">95%</span>
                  </div>
                  <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div class="bg-blue-600 dark:bg-blue-400 h-2 rounded-full" style="width: 95%"></div>
                  </div>
                </div>
                <div>
                  <div class="flex justify-between mb-1">
                    <span class="text-sm text-gray-700 dark:text-gray-300">🇩🇪 Němčina</span>
                    <span class="text-sm font-semibold text-gray-700 dark:text-gray-300">35%</span>
                  </div>
                  <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div class="bg-blue-600 dark:bg-blue-400 h-2 rounded-full" style="width: 35%"></div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 class="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
                </svg>
                Web Development
              </h3>
              <div class="space-y-3">
                <div>
                  <div class="flex justify-between mb-1">
                    <span class="text-sm text-gray-700 dark:text-gray-300">HTML & CSS</span>
                    <span class="text-sm font-semibold text-gray-700 dark:text-gray-300">90%</span>
                  </div>
                  <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div class="bg-green-600 dark:bg-green-400 h-2 rounded-full" style="width: 90%"></div>
                  </div>
                </div>
                <div>
                  <div class="flex justify-between mb-1">
                    <span class="text-sm text-gray-700 dark:text-gray-300">PHP</span>
                    <span class="text-sm font-semibold text-gray-700 dark:text-gray-300">75%</span>
                  </div>
                  <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div class="bg-green-600 dark:bg-green-400 h-2 rounded-full" style="width: 75%"></div>
                  </div>
                </div>
                <div>
                  <div class="flex justify-between mb-1">
                    <span class="text-sm text-gray-700 dark:text-gray-300">JavaScript</span>
                    <span class="text-sm font-semibold text-gray-700 dark:text-gray-300">70%</span>
                  </div>
                  <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div class="bg-green-600 dark:bg-green-400 h-2 rounded-full" style="width: 70%"></div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 class="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z"/>
                  <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z"/>
                  <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z"/>
                </svg>
                Databáze a nástroje
              </h3>
              <div class="space-y-3">
                <div>
                  <div class="flex justify-between mb-1">
                    <span class="text-sm text-gray-700 dark:text-gray-300">MySQL</span>
                    <span class="text-sm font-semibold text-gray-700 dark:text-gray-300">65%</span>
                  </div>
                  <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div class="bg-purple-600 dark:bg-purple-400 h-2 rounded-full" style="width: 65%"></div>
                  </div>
                </div>
                <div>
                  <div class="flex justify-between mb-1">
                    <span class="text-sm text-gray-700 dark:text-gray-300">PHPMyAdmin</span>
                    <span class="text-sm font-semibold text-gray-700 dark:text-gray-300">75%</span>
                  </div>
                  <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div class="bg-purple-600 dark:bg-purple-400 h-2 rounded-full" style="width: 75%"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="space-y-4">
            <div>
              <h3 class="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
                </svg>
                Programovací jazyky
              </h3>
              <div class="space-y-3">
                <div>
                  <div class="flex justify-between mb-1">
                    <span class="text-sm text-gray-700 dark:text-gray-300">C</span>
                    <span class="text-sm font-semibold text-gray-700 dark:text-gray-300">40%</span>
                  </div>
                  <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div class="bg-yellow-600 dark:bg-yellow-400 h-2 rounded-full" style="width: 40%"></div>
                  </div>
                </div>
                <div>
                  <div class="flex justify-between mb-1">
                    <span class="text-sm text-gray-700 dark:text-gray-300">Python</span>
                    <span class="text-sm font-semibold text-gray-700 dark:text-gray-300">35%</span>
                  </div>
                  <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div class="bg-yellow-600 dark:bg-yellow-400 h-2 rounded-full" style="width: 35%"></div>
                  </div>
                </div>
                <div>
                  <div class="flex justify-between mb-1">
                    <span class="text-sm text-gray-700 dark:text-gray-300">C#</span>
                    <span class="text-sm font-semibold text-gray-700 dark:text-gray-300">25%</span>
                  </div>
                  <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div class="bg-yellow-600 dark:bg-yellow-400 h-2 rounded-full" style="width: 25%"></div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 class="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"/>
                </svg>
                Software a ostatní
              </h3>
              <div class="space-y-3">
                <div>
                  <div class="flex justify-between mb-1">
                    <span class="text-sm text-gray-700 dark:text-gray-300">WordPress</span>
                    <span class="text-sm font-semibold text-gray-700 dark:text-gray-300">70%</span>
                  </div>
                  <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div class="bg-red-600 dark:bg-red-400 h-2 rounded-full" style="width: 70%"></div>
                  </div>
                </div>
                <div>
                  <div class="flex justify-between mb-1">
                    <span class="text-sm text-gray-700 dark:text-gray-300">Office 365</span>
                    <span class="text-sm font-semibold text-gray-700 dark:text-gray-300">80%</span>
                  </div>
                  <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div class="bg-red-600 dark:bg-red-400 h-2 rounded-full" style="width: 80%"></div>
                  </div>
                </div>
                <div>
                    <div class="flex justify-between mb-1">
                        <span class="text-sm text-gray-700 dark:text-gray-300">Adobe Photoshop & Premiere</span>
                        <span class="text-sm font-semibold text-gray-700 dark:text-gray-300">50%</span>
                    </div>
                    <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div class="bg-red-600 dark:bg-red-400 h-2 rounded-full" style="width: 50%"></div>
                    </div>
                </div>
              </div>
            </div>

            <div>
              <h3 class="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clip-rule="evenodd"/>
                </svg>
                Operační systémy
              </h3>
              <div class="space-y-3">
                <div>
                  <div class="flex justify-between mb-1">
                    <span class="text-sm text-gray-700 dark:text-gray-300">Windows</span>
                    <span class="text-sm font-semibold text-gray-700 dark:text-gray-300">95%</span>
                  </div>
                  <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div class="bg-indigo-600 dark:bg-indigo-400 h-2 rounded-full" style="width: 95%"></div>
                  </div>
                </div>
                <div>
                  <div class="flex justify-between mb-1">
                    <span class="text-sm text-gray-700 dark:text-gray-300">Linux</span>
                    <span class="text-sm font-semibold text-gray-700 dark:text-gray-300">35%</span>
                  </div>
                  <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div class="bg-indigo-600 dark:bg-indigo-400 h-2 rounded-full" style="width: 35%"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="mb-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6 code-font flex items-center">
          <svg class="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"/>
          </svg>
          Koníčky
        </h2>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="flex items-start space-x-3 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <svg class="w-5 h-5 text-blue-600 dark:text-blue-400 mt-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"/>
            </svg>
            <div>
              <h3 class="font-semibold text-gray-900 dark:text-white">Historie</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">Zájem o historii, zejména 18. až 20. století</p>
            </div>
          </div>
          <div class="flex items-start space-x-3 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <svg class="w-5 h-5 text-blue-600 dark:text-blue-400 mt-1" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clip-rule="evenodd"/>
            </svg>
            <div>
              <h3 class="font-semibold text-gray-900 dark:text-white">Technologie</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">Sledování nových technologií a trendů</p>
            </div>
          </div>
          <div class="flex items-start space-x-3 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <svg class="w-5 h-5 text-blue-600 dark:text-blue-400 mt-1" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clip-rule="evenodd"/>
            </svg>
            <div>
              <h3 class="font-semibold text-gray-900 dark:text-white">Programování</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">Práce na osobních projektech pro zlepšení dovedností</p>
            </div>
          </div>
          <div class="flex items-start space-x-3 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <svg class="w-5 h-5 text-blue-600 dark:text-blue-400 mt-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
            </svg>
            <div>
              <h3 class="font-semibold text-gray-900 dark:text-white">Učení se</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">Neustálé vzdělávání v oblasti informatiky a programování</p>
            </div>
          </div>
        </div>
      </section>

      <section class="mb-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6 code-font flex items-center">
          <svg class="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
          </svg>
          Kontakt
        </h2>
        <div class="space-y-4">
          <div class="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <svg class="w-6 h-6 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
            </svg>
            <div>
              <p class="text-sm text-gray-500 dark:text-gray-400">Email</p>
              <a href="mailto:example@mail.com" class="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 font-medium">example@mail.com</a>
            </div>
          </div>
          
          <div class="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <svg class="w-6 h-6 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clip-rule="evenodd"/>
            </svg>
            <div>
              <p class="text-sm text-gray-500 dark:text-gray-400">Web</p>
              <a href="https://jupdev.com" target="_blank" rel="noopener noreferrer" class="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 font-medium">https://jupdev.com</a>
            </div>
          </div>

          <div class="mt-6 p-4 bg-blue-50 dark:bg-blue-950 rounded-lg border border-blue-200 dark:border-blue-800">
            <p class="text-sm text-gray-700 dark:text-gray-300">
              <svg class="w-5 h-5 inline mr-2 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
              </svg>
              Pro zaslání zprávy použijte prosím výše uvedený email nebo mě kontaktujte přes můj web.
            </p>
          </div>
        </div>
      </section>
    </div>
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

  const downloadBtn = document.getElementById('download-btn');
  const downloadDropdown = document.getElementById('download-dropdown');
  const downloadButtons = downloadDropdown.querySelectorAll('[data-format]');

  downloadBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    downloadDropdown.classList.toggle('hidden');
  });

  document.addEventListener('click', () => {
    if (!downloadDropdown.classList.contains('hidden')) {
      downloadDropdown.classList.add('hidden');
    }
  });

  downloadDropdown.addEventListener('click', (e) => {
    e.stopPropagation();
  });

  downloadButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const format = btn.getAttribute('data-format');
      
      if (format === 'styled') {
        generateStyledCV();
      } else {
        generateSimpleCV();
      }
      
      downloadDropdown.classList.add('hidden');
    });
  });
}, 100);
