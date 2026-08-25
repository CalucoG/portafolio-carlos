import './CodeGlitchBackground.css'

const codeFragments = [
  {
    text: 'const app = express()',
    top: '8%',
    left: '4%',
    delay: '0s',
    duration: '6s',
    size: '0.82rem',
  },
  {
    text: 'router.get("/api/products")',
    top: '15%',
    left: '56%',
    delay: '1.3s',
    duration: '7s',
    size: '0.76rem',
  },
  {
    text: 'const [data, setData] = useState([])',
    top: '24%',
    left: '18%',
    delay: '2.1s',
    duration: '8s',
    size: '0.78rem',
  },
  {
    text: 'SELECT * FROM products;',
    top: '30%',
    left: '69%',
    delay: '0.7s',
    duration: '6.5s',
    size: '0.74rem',
  },
  {
    text: 'app.use(express.json())',
    top: '39%',
    left: '6%',
    delay: '3s',
    duration: '7.4s',
    size: '0.8rem',
  },
  {
    text: 'POST /api/products',
    top: '47%',
    left: '73%',
    delay: '1.8s',
    duration: '6.2s',
    size: '0.72rem',
  },
  {
    text: 'const response = await fetch(api)',
    top: '56%',
    left: '12%',
    delay: '0.4s',
    duration: '8.2s',
    size: '0.76rem',
  },
  {
    text: 'git commit -m "feature"',
    top: '66%',
    left: '61%',
    delay: '2.7s',
    duration: '7.2s',
    size: '0.76rem',
  },
  {
    text: 'UPDATE products SET stock = ?',
    top: '74%',
    left: '3%',
    delay: '1.1s',
    duration: '6.8s',
    size: '0.72rem',
  },
  {
    text: 'module.exports = router',
    top: '83%',
    left: '70%',
    delay: '3.4s',
    duration: '7.8s',
    size: '0.75rem',
  },
  {
    text: '<Route path="/projects" />',
    top: '11%',
    left: '80%',
    delay: '4s',
    duration: '8.5s',
    size: '0.7rem',
  },
  {
    text: 'npm run build',
    top: '88%',
    left: '35%',
    delay: '2.2s',
    duration: '6.3s',
    size: '0.76rem',
  },
  {
    text: 'HTTP 200 OK',
    top: '61%',
    left: '84%',
    delay: '0.9s',
    duration: '7.1s',
    size: '0.68rem',
  },
  {
    text: 'CREATE TABLE users (...)',
    top: '20%',
    left: '38%',
    delay: '3.7s',
    duration: '8.3s',
    size: '0.68rem',
  },
]

const glitchBlocks = [
  { top: '12%', left: '14%', width: '70px', height: '15px', delay: '0s' },
  { top: '21%', left: '74%', width: '42px', height: '30px', delay: '1.2s' },
  { top: '29%', left: '43%', width: '88px', height: '12px', delay: '2.6s' },
  { top: '37%', left: '86%', width: '55px', height: '38px', delay: '0.8s' },
  { top: '44%', left: '24%', width: '48px', height: '18px', delay: '3.2s' },
  { top: '53%', left: '63%', width: '105px', height: '14px', delay: '1.7s' },
  { top: '62%', left: '8%', width: '76px', height: '24px', delay: '2.1s' },
  { top: '69%', left: '79%', width: '64px', height: '16px', delay: '3.8s' },
  { top: '78%', left: '47%', width: '52px', height: '32px', delay: '0.4s' },
  { top: '86%', left: '16%', width: '90px', height: '13px', delay: '2.9s' },
]

const panelLines = [
  'GET /api/products',
  'SELECT * FROM products',
  'POST /api/products',
  'HTTP 200 OK',
  'git commit -m "feature"',
  'npm run build',
]

function CodeGlitchBackground() {
  return (
    <div className="code-glitch-background" aria-hidden="true">
      <div className="code-glitch-grid"></div>

      <div className="code-fragments">
        {codeFragments.map((fragment, index) => (
          <span
            className="code-fragment"
            key={`${fragment.text}-${index}`}
            style={{
              '--fragment-top': fragment.top,
              '--fragment-left': fragment.left,
              '--fragment-delay': fragment.delay,
              '--fragment-duration': fragment.duration,
              '--fragment-size': fragment.size,
            }}
          >
            {fragment.text}
          </span>
        ))}
      </div>

      <div className="glitch-blocks">
        {glitchBlocks.map((block, index) => (
          <span
            className="glitch-block"
            key={index}
            style={{
              '--block-top': block.top,
              '--block-left': block.left,
              '--block-width': block.width,
              '--block-height': block.height,
              '--block-delay': block.delay,
            }}
          ></span>
        ))}
      </div>

      <div className="hero-code-panel">
        <div className="hero-code-panel-header">
          <span className="hero-code-panel-title">live_code_feed</span>
          <span className="hero-code-panel-status">ACTIVE</span>
        </div>

        <div className="hero-code-panel-body">
          {panelLines.map((line, index) => (
            <div
              className="hero-code-line"
              key={line}
              style={{ '--panel-line-delay': `${index * 0.18}s` }}
            >
              <span className="hero-code-line-number">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="hero-code-line-text">{line}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="code-glitch-vignette"></div>
    </div>
  )
}

export default CodeGlitchBackground