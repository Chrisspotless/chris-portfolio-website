import { ArrowDown, ArrowRight, ArrowUpRight, ExternalLink, Mail, Phone, Sparkles } from 'lucide-react'
import profileImage from './assets/profile.png'
import './App.css'

const skills = ['React', 'Express.js', 'React Native', 'WordPress development', 'JavaScript', 'HTML & CSS', 'Responsive design']

const projects = [
  { name: 'Gifted Hands Massage', mark: 'GHM', url: 'https://giftedhandsmassage.ca/', domain: 'giftedhandsmassage.ca' },
  { name: 'Teemuo', mark: 'TM', url: 'https://teemuo.com/', domain: 'teemuo.com' },
  { name: 'Neptune Charts & Navigational Ventures', mark: 'NCV', url: 'https://neptunechartsnavigationalventures.store/', domain: 'neptunechartsnavigationalventures.store' },
]

function App() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Chris, back to top">
          chris<span>.</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a className="nav-contact" href="#contact">
            Contact <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </nav>
      </header>

      <section className="hero section-wrap" id="top" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> Full Stack Software Engineer</p>
          <h1 id="hero-title">Hey, I’m Chris.<br />I build <span>for the web.</span></h1>
          <p className="hero-description">
            Full stack software engineer passionate about React and creating thoughtful,
            easy-to-use digital experiences.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              Explore my work <ArrowRight size={17} aria-hidden="true" />
            </a>
            <a className="text-link" href="#contact">Let’s talk <ArrowUpRight size={16} aria-hidden="true" /></a>
          </div>
          <a className="scroll-cue" href="#about">
            <ArrowDown size={15} aria-hidden="true" /> Scroll to discover
          </a>
        </div>
        <div className="hero-visual">
          <div className="portrait-frame">
            <img src={profileImage} alt="Portrait of Chris wearing glasses" />
            <div className="portrait-label"><span>CHRIS</span><span>FULL STACK ENGINEER</span></div>
          </div>
          <div className="orbit orbit-one" aria-hidden="true" />
          <div className="orbit orbit-two" aria-hidden="true" />
          <div className="floating-note"><Sparkles size={16} aria-hidden="true" /> Building something good</div>
          <span className="hero-index" aria-hidden="true">01 / 04</span>
        </div>
      </section>

      <section className="about-section section-wrap" id="about" aria-labelledby="about-title">
        <div className="section-heading">
          <p className="eyebrow">A little about me <span className="heading-line" /></p>
          <span className="section-number">01 — INTRO</span>
        </div>
        <div className="about-content">
          <h2 id="about-title">Good websites do more than look nice. <span>They make things feel simple.</span></h2>
          <div className="about-details">
            <p>
              I’m Chris, a full stack software engineer who enjoys turning ideas into clean,
              responsive experiences. I’m especially passionate about React and
              the small details that make a site feel polished and intuitive.
            </p>
            <div className="skills-block">
              <h3>Things I work with</h3>
              <ul className="skill-list">
                {skills.map((skill) => <li key={skill}>{skill}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="work-section section-wrap" id="work" aria-labelledby="work-title">
        <div className="section-heading">
          <p className="eyebrow">Client websites <span className="heading-line" /></p>
          <span className="section-number">02 — SELECTED WORK</span>
        </div>
        <div className="work-intro">
          <h2 id="work-title">Selected work<span>.</span></h2>
          <p>Built and managed for clients.</p>
        </div>
        <p className="work-privacy">
          These live client websites are shared as examples of my work. Some project details and updates
          aren’t available to publish because of client privacy restrictions.
        </p>
        <div className="project-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={project.url}>
              <div className={`project-art project-art-${index + 1}`} aria-hidden="true">
                <span className="project-art-index">0{index + 1}</span>
                <span className="project-art-mark">{project.mark}</span>
                <span className="project-art-caption">CLIENT WEBSITE</span>
              </div>
              <div className="project-card-info">
                <div>
                  <h3>{project.name}</h3>
                  <p>{project.domain}</p>
                </div>
                <a
                  className="project-link"
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Visit ${project.name} website (opens in a new tab)`}
                >
                  <ExternalLink size={17} aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section section-wrap" id="contact" aria-labelledby="contact-title">
        <div className="section-heading">
          <p className="eyebrow">Have a good one in mind? <span className="heading-line" /></p>
          <span className="section-number">03 — SAY HELLO</span>
        </div>
        <div className="contact-content">
          <div>
            <p className="contact-kicker">Let’s make it happen</p>
            <h2 id="contact-title">Have a project?<br /><span>Let’s talk.</span></h2>
          </div>
          <div className="contact-note">
            <p>I’m always happy to chat about ideas, collaborations, or new opportunities.</p>
            <a className="button button-light" href="mailto:chrisenoghase@gmail.com">
              <Mail size={17} aria-hidden="true" /> Email me <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <a className="contact-phone" href="tel:+2349032795146">
              <Phone size={15} aria-hidden="true" /> 0903 279 5146
            </a>
          </div>
        </div>
      </section>

      <footer className="site-footer section-wrap">
        <a className="wordmark" href="#top" aria-label="Chris, back to top">chris<span>.</span></a>
        <p>Made with care, one pixel at a time.</p>
        <div className="footer-socials">
          <a href="https://github.com/Chrisspotless/" target="_blank" rel="noreferrer" aria-label="GitHub profile (opens in a new tab)">
            GitHub <ArrowUpRight size={13} aria-hidden="true" />
          </a>
          <a href="https://www.linkedin.com/in/chris-enoghase-83793825b/" target="_blank" rel="noreferrer" aria-label="LinkedIn profile (opens in a new tab)">
            LinkedIn <ArrowUpRight size={13} aria-hidden="true" />
          </a>
        </div>
        <span className="copyright">© {new Date().getFullYear()} Chris</span>
      </footer>
    </main>
  )
}

export default App
