import { useState } from "react";
import { MdOutlineTrackChanges } from "react-icons/md";
import { AiOutlineMessage } from "react-icons/ai";
import "./App.css";
import profile from "./assets/resume2x2.jpeg";
import profileDark from "./assets/resume2x2.jpeg";
import { CiLocationOn } from "react-icons/ci";
import { MdVerified } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { PiFlask } from "react-icons/pi";
import { IoBriefcaseOutline } from "react-icons/io5";
import { FaSun, FaMoon } from "react-icons/fa";
import { FaGithub, FaFacebookMessenger, FaInstagram } from "react-icons/fa";
import { GoPaperclip } from "react-icons/go";
import { MdPhoneInTalk } from "react-icons/md";

import { PiHandWaving } from "react-icons/pi";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "container dark-mode" : "container"}>
      <header className="profile-header">
        <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
          <div className={`toggle-circle ${darkMode ? "active" : ""}`}>
            {darkMode ? (
              <FaMoon className="theme-icon" />
            ) : (
              <FaSun className="theme-icon" />
            )}
          </div>
        </button>

        <img
          src={darkMode ? profileDark : profile}
          alt="Profile"
          className="profile-photo"
        />
        <div className="profile-details">
          <div className="name-badge">
            <h1>Michael Buensalido</h1>
            <MdVerified className="verified-badge" />
          </div>
          <p className="location">
            <CiLocationOn className="location-icon" />
            Upper East Coast, Singapore
          </p>

          <div className="job-title">
            BSCS Student / Aspiring Web Developer & Software Engineer
          </div>

          <div className="action-buttons">
            <a className="btn btn-black" href="tel:+6586955055">
              <MdPhoneInTalk className="contact-icon" />
              Let's Talk
            </a>
            <a
              className="btn btn-white"
              href="mailto:johnbuensalido145@gmail.com"
            >
              <HiOutlineMail className="btn-icon" />
              Send Email
            </a>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <div className="main-grid">
        {/* LEFT COLUMN */}
        <div className="left-column">
          {/* ABOUT */}
          <section className="card">
            <h2 className="section-title">
              <IoBriefcaseOutline className="section-icon" />
              About
            </h2>

            <p className="text-content">
              Computing Science student at Coventry University with hands-on
              experience in frontend development, backend systems, UI/UX design,
              and workflow automation. Strong foundation in HTML, CSS,
              JavaScript, TypeScript, React, Python, Django, Tailwind CSS, and
              MySQL, with the ability to build full-stack web applications.
            </p>
            <p className="text-content">
              Developed multiple projects including an Equipment Rental
              Management System (full-stack) and an award-winning e-commerce
              platform (FCU University Enterprise Online Shop). Experienced in
              building AI-powered automation workflows, including auto-reply
              email systems to improve operational efficiency and communication
              processes.
            </p>

            <p className="text-content">
              Passionate about developing scalable, user-centered applications
              and continuously improving through self-learning, real-world
              projects, and modern development practices. Seeking opportunities
              to contribute to web development projects and grow as a software
              developer.
            </p>
          </section>

          {/* TECH STACK */}
          <section className="card">
            <div className="section-header">
              <h2 className="section-title">
                <PiFlask className="section-icon" />
                Tech Stack
              </h2>
            </div>
            <div className="tech-category">
              <h3 className="category-title">Frontend Development</h3>
              <div className="tag-group">
                <span className="tag">HTML5</span>
                <span className="tag">CSS3</span>
                <span className="tag">JavaScript</span>
                <span className="tag">TypeScript</span>
                <span className="tag">Responsive Web Design</span>
                <span className="tag">Tailwind CSS</span>
                <span className="tag">Component-Based UI</span>
              </div>
            </div>

            <div className="tech-category">
              <h3 className="category-title">Frameworks & Libraries</h3>
              <div className="tag-group">
                <span className="tag">React</span>
                <span className="tag">Django</span>
                <span className="tag">Shadcn</span>
              </div>
            </div>

            <div className="tech-category">
              <h3 className="category-title">Backend & Database</h3>
              <div className="tag-group">
                <span className="tag">MySQL</span>
                <span className="tag">Python</span>
                <span className="tag">CRUD Operations</span>
              </div>
            </div>

            <div className="tech-category">
              <h3 className="category-title">Tools & Workflow</h3>
              <div className="tag-group">
                <span className="tag">Git & GitHub</span>
                <span className="tag">Visual Studio Code</span>
                <span className="tag">Figma</span>
                <span className="tag">Chrome DevTools</span>
              </div>
            </div>

            <div className="tech-category">
              <h3 className="category-title">Automation</h3>
              <div className="tag-group">
                <span className="tag">Zapier</span>
              </div>
            </div>
          </section>
        </div>

        {/* RIGHT COLUMN */}
        <div className="right-column">
          {/* EXPERIENCE */}
          <section className="card">
            <h2 className="section-title section-animate">
              <IoBriefcaseOutline className="section-icon" />
              Experience
            </h2>

            <div className="experience-list">
              {/* EDUCATION */}
              <div className="exp-item">
                <div className="exp-dot active-dot"></div>
                <div className="exp-content">
                  <h3 className="exp-title">BS Computing Science - 2nd Year</h3>
                  <p className="exp-company">Coventry University</p>
                </div>
                <span className="exp-year">2026</span>
              </div>

              {/* WEB DESIGN & UI/UX */}
              <div className="exp-item">
                <div className="exp-dot"></div>
                <div className="exp-content">
                  <h3 className="exp-title">Web Design & UI/UX Practice</h3>
                  <p className="exp-company">
                    Practicing UI/UX principles, responsive design, and
                    interactive animations with Figma, and Framer.
                  </p>
                </div>
                <span className="exp-year">2026</span>
              </div>

              <div className="exp-item">
                <div className="exp-dot"></div>
                <div className="exp-content">
                  <h3 className="exp-title">
                    Equipment Rental Management System
                  </h3>
                  <p className="exp-company">
                    A comprehensive web-based application for managing equipment
                    rentals, built with modern web technologies to streamline
                    rental operations for businesses.
                  </p>
                </div>
                <span className="exp-year">2024</span>
              </div>
              <div className="exp-item">
                <div className="exp-dot"></div>
                <div className="exp-content">
                  <h3 className="exp-title">AI Email Automation with Zapier</h3>
                  <p className="exp-company">
                    Developed an automation workflow that detects incoming
                    emails and generates AI-based auto-replies, improving
                    response time and streamlining communication processes.
                  </p>
                </div>
                <span className="exp-year">2024</span>
              </div>
              <div className="exp-item">
                <div className="exp-dot"></div>
                <div className="exp-content">
                  <h3 className="exp-title">
                    FCU University Enterprise Online Shop
                  </h3>
                  <p className="exp-company">
                    E-commerce platform for university merchandise and supplies
                  </p>
                </div>
                <span className="exp-year">2023</span>
              </div>
              {/* TECH STACK */}
              <div className="exp-item">
                <div className="exp-dot"></div>
                <div className="exp-content">
                  <h3 className="exp-title">
                    Tech Stack & Programming Experience
                  </h3>
                  <p className="exp-company">
                    HTML5, CSS3, Tailwind CSS, JavaScript, Python, Django, MySQL
                  </p>
                </div>
                <span className="exp-year">2023</span>
              </div>

              {/* CERTIFICATION */}

              {/* FOUNDATIONS */}
              <div className="exp-item">
                <div className="exp-dot"></div>
                <div className="exp-content">
                  <h3 className="exp-title">Programming Foundations</h3>
                  <p className="exp-company">
                    Self-learning, online courses, mini-projects
                  </p>
                </div>
                <span className="exp-year">2022</span>
              </div>

              {/* START */}
              <div className="exp-item">
                <div className="exp-dot"></div>
                <div className="exp-content">
                  <h3 className="exp-title">
                    Hello World! <PiHandWaving className="wave-icon" />
                  </h3>
                  <p className="exp-company">Wrote my first line of code</p>
                </div>
                <span className="exp-year">2021</span>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="connect-wrapper">
        <section className="card connect-container">
          <div className="connect-grid">
            <div className="connect-group">
              <h3 className="connect-title">
                <MdOutlineTrackChanges className="icon" /> Goals
              </h3>

              <div className="connect-item">
                Strengthen my full-stack development and UI/UX skills by
                building user-centered and scalable web applications, while
                exploring automation to enhance efficiency and user experience.
              </div>

              <div className="connect-item">
                Gain practical experience through real-world projects, improving
                my knowledge in backend development, databases, and testing as I
                grow as a developer.
              </div>
            </div>

            {/* Social Links */}
            <div className="connect-group">
              <h3 className="connect-title">
                <GoPaperclip className="icon" /> Social Links
              </h3>

              <a
                className="connect-item"
                href="https://github.com/michaelbuensalido"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="connect-icon" /> GitHub
              </a>

              <a
                className="connect-item"
                href="https://www.instagram.com/mchlbnsld/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="connect-icon" /> Instagram
              </a>
            </div>

            {/* Speaking */}

            <div className="connect-group contact-box">
              {/* Title */}
              <h3 className="connect-title">
                <AiOutlineMessage className="icon" /> Contact
              </h3>

              {/* Card Body */}
              <div className="contact-card">
                <p className="connect-desc">
                  Open to collaborations on web design and development projects.
                </p>

                <a
                  className="connect-action"
                  href="mailto:michaelbuensalido15@gmail.com"
                >
                  Get in touch →
                </a>
              </div>
            </div>

            {/* Contact */}
            <div className="contact-layout">
              <div className="contact-links">
                <a
                  className="contact-item"
                  href="mailto:johnbuensalido145@gmail.com"
                >
                  <HiOutlineMail className="contact-icon" />
                  <div className="contact-info">
                    <span className="contact-title">Email</span>
                    <span className="contact-sub">
                      johnbuensalido145@gmail.com
                    </span>
                  </div>
                  <span className="contact-arrow">›</span>
                </a>

                <a className="contact-item" href="tel:86955055">
                  <MdPhoneInTalk className="contact-icon" />
                  <div className="contact-info">
                    <span className="contact-title">Let’s Talk</span>
                    <span className="contact-sub">8695 5055</span>
                  </div>
                  <span className="contact-arrow">›</span>
                </a>

                <a
                  className="contact-item"
                  href="https://m.me/michaelbuensalido"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookMessenger className="contact-icon" />
                  <div className="contact-info">
                    <span className="contact-title">Messenger</span>
                    <span className="contact-sub">Chat with me</span>
                  </div>

                  <span className="contact-arrow">›</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-line"></div>

        <p className="footer-text">
          © {new Date().getFullYear()} Michael Buensalido — All rights reserved.
        </p>
      </footer>
    </div>
  );
}
