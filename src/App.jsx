import { SpeedInsights } from '@vercel/speed-insights/react'
import './App.css'

function App() {
  return (
    <>
      <div className="container">
        <header>
          <h1>Mitlman Marketing</h1>
          <p>Welcome to Mitlman Marketing 2026</p>
        </header>
        <main>
          <section>
            <h2>About Us</h2>
            <p>
              Professional marketing services to help your business grow and succeed.
            </p>
          </section>
          <section>
            <h2>Our Services</h2>
            <ul>
              <li>Digital Marketing</li>
              <li>SEO Optimization</li>
              <li>Content Creation</li>
              <li>Social Media Management</li>
            </ul>
          </section>
        </main>
        <footer>
          <p>&copy; 2026 Mitlman Marketing. All rights reserved.</p>
        </footer>
      </div>
      <SpeedInsights />
    </>
  )
}

export default App
