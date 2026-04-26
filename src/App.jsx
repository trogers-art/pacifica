import { useState } from 'react'

// ─── DATA ──────────────────────────────────────────────
const ROOMS = [
  {
    id: 'standard',
    type: 'Standard',
    name: 'Standard King',
    desc: 'Clean, comfortable, and well-appointed. King bed, blackout curtains, and a private patio. Everything you need, nothing you don\'t.',
    amenities: ['King Bed', 'Free WiFi', 'Smart TV', 'Mini Fridge', 'Private Patio', 'Free Parking'],
    rate: 129,
  },
  {
    id: 'deluxe',
    type: 'Deluxe',
    name: 'Deluxe Queen Suite',
    desc: 'Two queen beds and a separate sitting area. Ideal for families or longer stays. Faces the courtyard with a view of the palms.',
    amenities: ['2 Queen Beds', 'Sitting Area', 'Free WiFi', 'Smart TV', 'Mini Fridge', 'Microwave', 'Free Parking'],
    rate: 159,
  },
  {
    id: 'ocean',
    type: 'Premium',
    name: 'Ocean View Room',
    desc: 'Our best room. King bed, full bathroom with walk-in shower, and a private balcony with an unobstructed view of the Pacific.',
    amenities: ['King Bed', 'Ocean View Balcony', 'Walk-in Shower', 'Free WiFi', 'Smart TV', 'Coffee Bar', 'Free Parking'],
    rate: 219,
  },
]

const NEARBY = [
  { name: 'Huntington City Beach', dist: '0.3 mi' },
  { name: 'Huntington Beach Pier', dist: '0.5 mi' },
  { name: 'Pacific City Shopping', dist: '0.8 mi' },
  { name: 'Downtown HB', dist: '1.1 mi' },
  { name: 'John Wayne Airport (SNA)', dist: '14 mi' },
  { name: 'Disneyland', dist: '22 mi' },
]

const PERKS = [
  {
    label: 'Free Parking',
    icon: (
      <svg viewBox="0 0 24 24">
        <rect x="3" y="3" width="18" height="18" rx="1" />
        <path d="M9 17V7h4a3 3 0 0 1 0 6H9" />
      </svg>
    ),
  },
  {
    label: 'Free WiFi',
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M5 12.55a11 11 0 0 1 14.08 0" />
        <path d="M1.42 9a16 16 0 0 1 21.16 0" />
        <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
        <circle cx="12" cy="20" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'No Resort Fees',
    icon: (
      <svg viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
      </svg>
    ),
  },
  {
    label: 'Best Rate Direct',
    icon: (
      <svg viewBox="0 0 24 24">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
  },
  {
    label: 'Steps to Beach',
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M2 18c3.5-3 6.5-3 9 0s5.5 3 9 0" />
        <path d="M2 13c3.5-3 6.5-3 9 0s5.5 3 9 0" />
      </svg>
    ),
  },
  {
    label: 'Flexible Check-in',
    icon: (
      <svg viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
]

// ─── NAV ───────────────────────────────────────────────
function Nav() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <nav>
      <div className="nav-inner">
        <div className="nav-logo">
          <div className="nav-logo-name">Pacifica Motor Lodge</div>
          <div className="nav-logo-loc">Huntington Beach, California</div>
        </div>
        <ul className="nav-links">
          {[['rooms', 'Rooms'], ['location', 'Location'], ['book', 'Book']].map(([id, label]) => (
            <li key={id}>
              <a href={`#${id}`} onClick={(e) => { e.preventDefault(); scrollTo(id) }}>
                {label}
              </a>
            </li>
          ))}
        </ul>
        <div className="nav-direct-tag">Book direct. Best rate guaranteed.</div>
        <button className="nav-book-btn" onClick={() => scrollTo('book')}>
          Book Direct
        </button>
      </div>
    </nav>
  )
}

// ─── HERO ──────────────────────────────────────────────
function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  const today = new Date().toISOString().split('T')[0]
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0]

  return (
    <>
      <section className="hero">
        <div className="hero-photo-grid">
          <div className="hero-photo hero-photo-main">
            <span className="hero-photo-label">Property exterior photo</span>
          </div>
          <div className="hero-photo">
            <span className="hero-photo-label">Ocean view room</span>
          </div>
          <div className="hero-photo">
            <span className="hero-photo-label">Courtyard / pool area</span>
          </div>
        </div>

        <div className="hero-booking-bar">
          <div className="hero-booking-bar-inner">
            <div className="booking-field">
              <label>Check-in</label>
              <input type="date" defaultValue={today} />
            </div>
            <div className="booking-field">
              <label>Check-out</label>
              <input type="date" defaultValue={tomorrow} />
            </div>
            <div className="booking-field">
              <label>Room Type</label>
              <select>
                <option value="">Any room</option>
                {ROOMS.map(r => (
                  <option key={r.id} value={r.id}>{r.name} — from ${r.rate}/night</option>
                ))}
              </select>
            </div>
            <button className="booking-submit" onClick={() => scrollTo('book')}>
              Check Availability
            </button>
          </div>
          <div className="booking-direct-note">
            Booking direct guarantees our <strong>lowest rate</strong> — no OTA markups, no hidden fees.
          </div>
        </div>
      </section>

      <div className="perks-strip">
        <div className="perks-strip-inner">
          {PERKS.map((p) => (
            <div className="perk-item" key={p.label}>
              <div className="perk-icon">{p.icon}</div>
              <div className="perk-text">{p.label}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

// ─── INTRO ─────────────────────────────────────────────
function Intro() {
  return (
    <section className="intro" id="about">
      <div className="container">
        <div className="intro-inner">
          <div className="intro-photo">
            <span className="intro-photo-label">Lobby / common area photo</span>
          </div>
          <div>
            <div className="section-eyebrow">About the Lodge</div>
            <h2 className="section-title">
              An <em>independent</em> motel worth staying at.
            </h2>
            <div className="intro-body">
              <p>
                Pacifica Motor Lodge has been a fixture on PCH since 1968. Family-owned and independently operated, we've been welcoming surfers, road-trippers, and coastal travelers for over fifty years.
              </p>
              <p>
                We're not a chain. We don't outsource our service or pad your bill with resort fees. What you see is what you pay — and you'll pay less booking directly through us than anywhere else online.
              </p>
            </div>
            <div className="intro-stats">
              {[
                { num: '50+', label: 'Years in business' },
                { num: '24', label: 'Rooms on property' },
                { num: '0.3mi', label: 'From the beach' },
                { num: '$0', label: 'Resort fees' },
              ].map((s) => (
                <div className="intro-stat" key={s.label}>
                  <div className="intro-stat-num">{s.num}</div>
                  <div className="intro-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── ROOMS ─────────────────────────────────────────────
function Rooms() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="rooms" id="rooms">
      <div className="container">
        <div className="rooms-header">
          <div>
            <div className="section-eyebrow">Accommodations</div>
            <h2 className="section-title">Choose Your Room</h2>
          </div>
          <div className="direct-badge">
            Book direct for our best rate.
            <strong>Rates below are direct-only.</strong>
          </div>
        </div>
        <div className="rooms-grid">
          {ROOMS.map((room) => (
            <div className="room-card" key={room.id}>
              <div className="room-photo">
                <span className="room-photo-label">{room.name} photo</span>
              </div>
              <div className="room-body">
                <div className="room-type">{room.type}</div>
                <div className="room-name">{room.name}</div>
                <div className="room-desc">{room.desc}</div>
                <div className="room-amenities">
                  {room.amenities.map((a) => (
                    <span className="room-amenity" key={a}>{a}</span>
                  ))}
                </div>
                <div className="room-footer">
                  <div className="room-rate">
                    <div className="room-rate-from">From</div>
                    <div className="room-rate-price">
                      ${room.rate}
                      <span className="room-rate-night">/night</span>
                    </div>
                  </div>
                  <button className="room-book-btn" onClick={() => scrollTo('book')}>
                    Book This Room
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── LOCATION ──────────────────────────────────────────
function Location() {
  return (
    <section className="location" id="location">
      <div className="container">
        <div className="location-inner">
          <div>
            <div className="section-eyebrow">Where We Are</div>
            <h2 className="section-title" style={{ color: 'var(--white)' }}>
              Pacific Coast Highway, Huntington Beach
            </h2>
            <div className="location-body">
              Three blocks from the sand, walking distance to the pier, and easy access north to LA or south to San Diego.
              Free parking on-site — no daily rate, no ticket.
            </div>
            <div className="nearby-list">
              {NEARBY.map((n) => (
                <div className="nearby-item" key={n.name}>
                  <div className="nearby-name">{n.name}</div>
                  <div className="nearby-dist">{n.dist}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="map-placeholder">
            <div className="map-pin" />
            <div className="map-label">Replace with Google Maps embed</div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── BOOKING SECTION ───────────────────────────────────
function BookingSection() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', checkin: '', checkout: '', room: '', guests: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = () => { if (form.name && form.checkin && form.checkout) setSubmitted(true) }

  return (
    <section className="booking-section" id="book">
      <div className="container">
        <div className="booking-inner">
          <div className="booking-pitch">
            <div className="section-eyebrow">Reserve Direct</div>
            <h2 className="section-title">
              Book with us. <em>Skip the middleman.</em>
            </h2>
            <p className="section-sub">
              OTAs like Booking.com and Expedia charge us 15–25% per reservation. That cost gets baked into the rates you see on those platforms. Book direct and we pass the savings to you.
            </p>
            <div className="savings-block">
              <div className="savings-block-title">Why Book Direct</div>
              <ul className="savings-list">
                {[
                  'Lowest rate guaranteed — we match any direct rate request',
                  'No OTA markup baked into your nightly rate',
                  'Direct cancellation rates run 3x lower than OTA bookings',
                  'Early check-in and late check-out when available',
                  'Your reservation confirmed by a real person within the hour',
                ].map((item) => (
                  <li key={item}>
                    <div className="savings-check">
                      <svg viewBox="0 0 24 24">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="booking-form-wrap">
            {submitted ? (
              <div className="form-success">
                <div className="form-success-box">
                  <svg viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div className="form-success-title">Reservation Request Received</div>
                <div className="form-success-sub">
                  We'll confirm your booking by phone or email within the hour. No charge until confirmed.
                </div>
              </div>
            ) : (
              <>
                <div className="booking-form-title">Check Availability</div>
                <div className="booking-form-sub">
                  Fill out the form and we'll confirm availability and your rate directly.
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Check-in Date</label>
                    <input type="date" name="checkin" value={form.checkin} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label>Check-out Date</label>
                    <input type="date" name="checkout" value={form.checkout} onChange={handleChange} />
                  </div>
                </div>

                <div className="form-group">
                  <label>Room Type</label>
                  <select name="room" value={form.room} onChange={handleChange}>
                    <option value="">Any room / not sure yet</option>
                    {ROOMS.map((r) => (
                      <option key={r.id} value={r.id}>{r.name} — from ${r.rate}/night</option>
                    ))}
                  </select>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Guests</label>
                    <select name="guests" value={form.guests} onChange={handleChange}>
                      <option value="">Select</option>
                      {[1, 2, 3, 4].map((n) => (
                        <option key={n} value={n}>{n} {n === 1 ? 'guest' : 'guests'}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Your Name</label>
                    <input type="text" name="name" placeholder="Jane Smith" value={form.name} onChange={handleChange} />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" name="email" placeholder="you@email.com" value={form.email} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label>Phone</label>
                    <input type="tel" name="phone" placeholder="(714) 555-0000" value={form.phone} onChange={handleChange} />
                  </div>
                </div>

                <button className="form-submit" onClick={handleSubmit}>
                  Request Reservation
                </button>
                <div className="form-guarantee">
                  No credit card required to request. Confirmed within the hour.
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── FOOTER ────────────────────────────────────────────
function Footer() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <div>
            <div className="footer-brand-name">Pacifica Motor Lodge</div>
            <div className="footer-brand-loc">Huntington Beach, California</div>
            <div className="footer-brand-desc">
              Independent and family-owned since 1968. Book direct for our lowest rate, guaranteed.
            </div>
          </div>
          <div>
            <div className="footer-col-title">Navigate</div>
            <ul className="footer-links">
              {[['rooms', 'Rooms'], ['about', 'About'], ['location', 'Location'], ['book', 'Book Direct']].map(([id, label]) => (
                <li key={id}>
                  <a href={`#${id}`} onClick={(e) => { e.preventDefault(); scrollTo(id) }}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="footer-col-title">Contact</div>
            <div className="footer-contact-item">
              <a href="tel:7145550144">(714) 555-0144</a>
            </div>
            <div className="footer-contact-item">
              <a href="mailto:reservations@pacificamotorlodge.com">
                reservations@pacificamotorlodge.com
              </a>
            </div>
            <div className="footer-contact-item">Pacific Coast Hwy, Huntington Beach, CA 92648</div>
            <div className="footer-contact-item">Check-in: 3pm · Check-out: 11am</div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-copy">
            © {new Date().getFullYear()} Pacifica Motor Lodge. All rights reserved.
          </div>
          <div className="footer-credit">
            Site by{' '}
            <a href="https://rogers-websolutions.com" target="_blank" rel="noopener noreferrer">
              Rogers Web Solutions
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

// ─── APP ───────────────────────────────────────────────
export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Intro />
      <Rooms />
      <Location />
      <BookingSection />
      <Footer />
    </>
  )
}
