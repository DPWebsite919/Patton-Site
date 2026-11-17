import { ArrowUpRight, BookOpenText, Mail, MapPin } from 'lucide-react'
import { CopyEmailButton } from '@/components/copy-email-button'

const typewriterImage =
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/typewriter-Fv79ifAvm4FxL5HF3qNKc2g3oRSM0g.jpg'

const signatureImage =
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hed-SNJQPYASsAesg2cLWfXJYclJQ7GR8H.gif'

function Masthead() {
  return (
    <header className="masthead">
      <a className="brand" href="#home" aria-label="Deborah E. Patton, home">
        <img
          className="signature"
          src={signatureImage}
          alt="Deborah E. Patton — Professional Indexing"
        />
      </a>
      <span className="masthead-note">A life among words</span>
    </header>
  )
}

function ContactCard() {
  return (
    <aside className="contact-card" aria-labelledby="contact-heading">
      <p className="eyebrow">A note from Deborah</p>
      <div className="contact-title-row">
        <span className="icon-stamp" aria-hidden="true"><Mail /></span>
        <h2 id="contact-heading">Keep in touch</h2>
      </div>
      <p className="contact-intro">
        For a note about a past project or just to say hello, you can reach me here.
      </p>
      <div className="email-actions">
        <a className="email-link" href="mailto: dpatton919@pm.me">
           dpatton919@pm.me
          <span aria-hidden="true">↗</span>
        </a>
        <CopyEmailButton email="dpatton919@pm.me" />
      </div>
      <div className="contact-rule" />
      <div className="address-row">
        <MapPin className="address-icon" aria-hidden="true" />
        <address>
          919 Mount Elliot Ave.
          <br />
          Staunton, VA 24401
        </address>
      </div>
    </aside>
  )
}

export default function Page() {
  return (
    <main id="home" className="site-shell" style={{ '--typewriter-image': `url("${typewriterImage}")` } as React.CSSProperties}>
      <div className="page-frame">
        <Masthead />
        <div className="content-grid">
          <article className="story-card">
            <div className="retirement-banner">
              <span className="status-dot" aria-hidden="true" />
              <span>Retired, with gratitude</span>
            </div>
            <p className="chapter-label">A few words before you go</p>
            <h1>
              Indexing has been
              <br className="desktop-break" /> a wonderful career.
            </h1>
            <p className="lead-copy">
              I&apos;ve loved helping readers find their way through books and ideas. After many rewarding years, I have retired from professional indexing—mostly—and am no longer taking on new projects.
            </p>
            <figure className="desk-figure">
              <img
                src="/images/indexing-desk.png"
                alt="An open book, index cards, pencil, and magnifier on a softly lit desk"
                loading="lazy"
              />
              <figcaption>
                <BookOpenText aria-hidden="true" />
                <span>A few familiar tools from a life among words.</span>
              </figcaption>
            </figure>
            <div className="type-rule" aria-hidden="true">
              <span>✳</span>
            </div>
            <section className="referral-note" aria-labelledby="referral-heading">
              <p className="eyebrow">Looking for an indexer?</p>
              <h2 id="referral-heading">The right person is still out there.</h2>
              <p>
                The American Society for Indexing can help you find a qualified professional. Visit their directory to get started.
              </p>
              <a
                className="text-link"
                href="https://www.asindexing.org/find-an-indexer/"
                target="_blank"
                rel="noreferrer"
              >
                Find an indexer <ArrowUpRight aria-hidden="true" />
              </a>
            </section>
            <p className="signoff">With thanks for a wonderful chapter.</p>
          </article>
          <ContactCard />
        </div>
        <footer className="site-footer">
          <span>Deborah E. Patton</span>
          <span className="footer-divider" aria-hidden="true">·</span>
          <span>Professional Indexing</span>
          <span className="footer-year">Staunton, Virginia</span>
        </footer>
      </div>
    </main>
  )
}
