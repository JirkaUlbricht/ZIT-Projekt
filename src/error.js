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

const errorMessages = [
    "404 - Stránka nenalezena",
    "Oops! Tato stránka neexistuje",
    "Chyba - Stránka se ztratila v kódu",
    "Error 404 - Page Not Found"
];

const errorTips = [
    "Zkuste zkontrolovat URL adresu.",
    "Možná jste se přepsali v adrese.",
    "Stránka mohla být přesunuta nebo odstraněna.",
    "Použijte navigaci pro návrat na hlavní stránku."
];

const randomError = errorMessages[Math.floor(Math.random() * errorMessages.length)];
const randomTip = errorTips[Math.floor(Math.random() * errorTips.length)];

const app = document.createElement('div');
app.className = 'min-h-screen';

app.innerHTML = /* html */`
    <nav class="fixed top-0 w-full bg-gray-100 dark:bg-gray-800 border-b border-gray-300 dark:border-gray-700 z-50 transition-colors backdrop-blur-sm bg-opacity-90">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-14">
                <div class="flex items-center space-x-2">
                    <span class="text-red-600 dark:text-red-400 text-xl">✕</span>
                    <span class="code-font text-lg font-semibold text-gray-800 dark:text-gray-100">ZIT/error.js</span>
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
        <section class="min-h-screen flex items-center bg-gradient-to-br from-gray-50 via-red-50 to-gray-100 dark:from-gray-900 dark:via-red-950 dark:to-gray-800 transition-colors relative overflow-hidden">
            <div class="absolute inset-0 opacity-10">
                <div class="absolute top-20 left-10 w-64 h-64 bg-red-500 rounded-full blur-3xl animate-pulse"></div>
                <div class="absolute bottom-20 right-10 w-96 h-96 bg-orange-500 rounded-full blur-3xl animate-pulse" style="animation-delay: 2s;"></div>
            </div>

            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 text-center">
                <div class="mb-8">
                    <div class="inline-block bg-red-100 dark:bg-red-900 border-2 border-red-600 dark:border-red-400 p-6 rounded-lg shadow-xl">
                        <svg class="w-24 h-24 text-red-600 dark:text-red-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                        </svg>
                    </div>
                </div>

                <div class="code-font text-sm text-red-600 dark:text-red-400 mb-4">
                    <span class="text-gray-500 dark:text-gray-400">1</span> // Nastala chyba
                </div>

                <h1 class="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                    <span id="typed-error"></span><span class="animate-pulse">|</span>
                </h1>

                <div class="code-font text-xl text-gray-600 dark:text-gray-300 mb-6">
                    <span class="text-purple-600 dark:text-purple-400">throw</span> 
                    <span class="text-purple-600 dark:text-purple-400"> new</span>
                    <span class="text-yellow-400"> Error</span>
                    <span class="text-gray-400">(</span>
                    <span class="text-green-600 dark:text-green-400">"${randomError}"</span>
                    <span class="text-gray-400">);</span>
                </div>

                <div class="bg-yellow-100 dark:bg-yellow-900 border-l-4 border-yellow-600 dark:border-yellow-400 p-4 rounded-r-lg shadow-md mb-8 max-w-2xl mx-auto">
                    <div class="flex items-start space-x-3">
                        <svg class="w-5 h-5 text-yellow-600 dark:text-yellow-400 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
                        </svg>
                        <div class="text-left">
                            <p class="text-sm font-semibold text-yellow-800 dark:text-yellow-300">Tip</p>
                            <p class="text-sm text-yellow-700 dark:text-yellow-400 mt-1">${randomTip}</p>
                        </div>
                    </div>
                </div>

                <div class="bg-white dark:bg-gray-900 rounded-lg shadow-2xl overflow-hidden border border-gray-300 dark:border-gray-700 mb-8 max-w-2xl mx-auto">
                    <div class="bg-gradient-to-r from-red-600 to-red-700 dark:from-red-800 dark:to-red-900 h-8 flex items-center px-3 space-x-2">
                        <div class="flex space-x-1.5">
                            <img src="./img/vsc.png" alt="VS Code" class="w-4 h-4" />
                        </div>
                        <div class="flex-1 flex justify-center">
                            <span class="code-font text-xs text-white font-medium">error.js</span>
                        </div>
                    </div>
                    
                    <div class="bg-gray-900 dark:bg-black p-6">
                        <div class="code-font text-sm space-y-1 text-left">
                            <div class="flex">
                                <span class="text-gray-500 w-8 text-right mr-4 select-none">1</span>
                                <div class="flex-1">
                                    <span class="text-purple-400">try</span> 
                                    <span class="text-gray-400"> {</span>
                                </div>
                            </div>
                            <div class="flex">
                                <span class="text-gray-500 w-8 text-right mr-4 select-none">2</span>
                                <div class="flex-1 ml-4">
                                    <span class="text-blue-400">loadPage</span>
                                    <span class="text-gray-400">();</span>
                                </div>
                            </div>
                            <div class="flex">
                                <span class="text-gray-500 w-8 text-right mr-4 select-none">3</span>
                                <div class="flex-1">
                                    <span class="text-gray-400">}</span>
                                    <span class="text-purple-400"> catch</span>
                                    <span class="text-gray-400"> (</span>
                                    <span class="text-orange-400">error</span>
                                    <span class="text-gray-400">) {</span>
                                </div>
                            </div>
                            <div class="flex bg-red-900 bg-opacity-30">
                                <span class="text-gray-500 w-8 text-right mr-4 select-none">4</span>
                                <div class="flex-1 ml-4">
                                    <span class="text-red-400">// Stránka nenalezena!</span>
                                </div>
                            </div>
                            <div class="flex">
                                <span class="text-gray-500 w-8 text-right mr-4 select-none">5</span>
                                <div class="flex-1 ml-4">
                                    <span class="text-blue-300">console</span>
                                    <span class="text-gray-400">.</span>
                                    <span class="text-yellow-400">error</span>
                                    <span class="text-gray-400">(</span>
                                    <span class="text-orange-400">error</span>
                                    <span class="text-gray-400">);</span>
                                </div>
                            </div>
                            <div class="flex">
                                <span class="text-gray-500 w-8 text-right mr-4 select-none">6</span>
                                <div class="flex-1">
                                    <span class="text-gray-400">}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex flex-wrap justify-center gap-4">
                    <a href="./index.html" class="px-6 py-3 bg-blue-600 hover:bg-blue-750 text-white rounded-lg transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center space-x-2">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                        </svg>
                        <span>Zpět na hlavní stránku</span>
                    </a>
                    <button onclick="window.history.back()" class="px-6 py-3 bg-gray-400 dark:bg-gray-700 hover:bg-gray-500 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-lg transition transform hover:-translate-y-0.5">
                        Zpět
                    </button>
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

setTimeout(() => {
    const errorElement = document.getElementById('typed-error');
    if (errorElement) {
        typeText(errorElement, '404', 100);
    }
}, 600);
