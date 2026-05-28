const { spawn } = require('node:child_process')
const { existsSync } = require('node:fs')
const { resolve } = require('node:path')

const root = resolve(__dirname, '..')
const distDir = resolve(root, 'dist')

if (!existsSync(resolve(distDir, 'index.html'))) {
  console.error('dist/index.html not found. Run npm run build before npm start.')
  process.exit(1)
}

const candidates = process.platform === 'win32' ? ['python', 'py'] : ['python3', 'python']
let server = null

function start(index) {
  if (index >= candidates.length) {
    console.error('Python was not found. Install Python 3, then run npm start again.')
    process.exit(1)
  }

  const command = candidates[index]
  const args = command === 'py' ? ['-3', 'server/server.py'] : ['server/server.py']
  server = spawn(command, args, {
    cwd: root,
    env: {
      ...process.env,
      IMAGE_TOOLS_STATIC_DIR: distDir,
    },
    stdio: 'inherit',
  })

  server.on('error', () => start(index + 1))
  server.on('exit', (code, signal) => {
    if (signal) process.exit(0)
    process.exit(code || 0)
  })
}

process.on('SIGINT', () => {
  if (server) server.kill('SIGINT')
})

process.on('SIGTERM', () => {
  if (server) server.kill('SIGTERM')
})

start(0)
