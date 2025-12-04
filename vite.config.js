import { defineConfig } from 'vite'
import { resolve } from 'path'
import { copyFileSync, mkdirSync, existsSync } from 'fs'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/~ulb0010/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        cv: resolve(__dirname, 'cv.html'),
        projects: resolve(__dirname, 'projects.html'),
        error: resolve(__dirname, 'error.html')
      }
    },
    assetsDir: 'assets'
  },
  plugins: [
    tailwindcss(),
    {
      name: 'copy-files',
      closeBundle() {
        try {
          copyFileSync('.htaccess', 'dist/.htaccess')
          console.log('.htaccess copied')
        } catch (e) {
          console.log('.htaccess not found, skipping...')
        }
        try {
          if (!existsSync('dist/img')) {
            mkdirSync('dist/img', { recursive: true })
          }
          copyFileSync('src/img/vsc.png', 'dist/img/vsc.png')
          console.log('vsc.png copied')
        } catch (e) {
          console.log('src/img/vsc.png not found, skipping...', e.message)
        }
      }
    }
  ]
})