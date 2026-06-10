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
import {
  FaGithub,
  FaFacebookMessenger,
  FaInstagram,
  FaFolderOpen,
} from "react-icons/fa";
import { GoPaperclip } from "react-icons/go";
import { MdPhoneInTalk } from "react-icons/md";

import { PiHandWaving } from "react-icons/pi";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedPreference = localStorage.getItem("themed");
    if (!savedPreference) {
      const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      return isDark ? true : false;
    }
    return false;
  });

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
            BSCS Student / Web Developer & Software Engineer
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
              Developed multiple projects, including a full-stack Equipment
              Rental Management System featuring authentication, CRUD
              operations, and RESTful API integration with MySQL, enabling
              efficient client-server data flow. Also built an award-winning
              e-commerce platform (FCU University Enterprise Online Shop) with
              responsive UI and dynamic product management.
            </p>

            <p className="text-content">
              Passionate about building user-centered applications and
              continuously improving through real-world projects and modern
              development practices. Currently seeking opportunities to
              contribute to frontend or full-stack development teams and grow as
              a software developer.
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
              <h3 className="category-title">Frontend</h3>
              <div className="tag-group">
                <span className="tag">HTML5</span>
                <span className="tag">CSS3</span>
                <span className="tag">JavaScript</span>
                <span className="tag">TypeScript</span>
                <span className="tag">React</span>
                <span className="tag">Next.js</span>
                <span className="tag">Tailwind CSS</span>
                <span className="tag">Shadcn</span>
              </div>
            </div>

            <div className="tech-category">
              <h3 className="category-title">Backend</h3>
              <div className="tag-group">
                <span className="tag">Python</span>
                <span className="tag">CRUD Operations</span>
                <span className="tag">REST</span>
                <span className="tag">Django</span>
                <span className="tag">MySQL</span>
              </div>
            </div>

            <div className="tech-category">
              <h3 className="category-title">Tools & Workflow</h3>
              <div className="tag-group">
                <span className="tag">Git & GitHub</span>
                <span className="tag">Zapier</span>
                <span className="tag">Figma</span>
                <span className="tag">Chrome DevTools</span>
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
                  <h3 className="exp-title">BS Computing Science </h3>
                  <p className="exp-company">Coventry University</p>
                </div>
                <span className="exp-year">2026</span>
              </div>

              <div className="exp-item">
                <div className="exp-dot"></div>
                <div className="exp-content">
                  <h3 className="exp-title">
                    Reliable Engineering Construction
                  </h3>
                  <p className="exp-company">
                    Developed a responsive corporate website for an engineering
                    and construction company, focusing on modern UI design, user
                    experience, and clear presentation of the company's services
                    and projects.
                  </p>
                </div>
                <span className="exp-year">2026</span>
              </div>

              {/* WEB DESIGN & UI/UX */}
              <div className="exp-item">
                <div className="exp-dot"></div>
                <div className="exp-content">
                  <h3 className="exp-title">Stoke</h3>
                  <p className="exp-company">
                    Stoke is a modern, full-featured web application designed to
                    streamline your culinary life. Built with a focus on
                    aesthetic excellence and seamless user experience, Stoke
                    combines recipe discovery, intelligent meal planning, and
                    automated shopping list generation into a single, cohesive
                    platform.
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
                  <h3 className="exp-title">AI Email Automation Workflow</h3>
                  <p className="exp-company">
                    Developed an automated email response system using Zapier,
                    integrating triggers and AI-generated replies to reduce
                    manual workload and improve response efficiency. Streamlined
                    communication workflows for faster handling of incoming
                    messages.
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
                    Developed an e-commerce platform with responsive UI and
                    dynamic product management features. Implemented frontend
                    components for product display, user interaction, and basic
                    transaction flow, contributing to an award-winning
                    university project.
                  </p>
                </div>
                <span className="exp-year">2023</span>
              </div>

              {/* CERTIFICATION */}
            </div>
          </section>
        </div>
      </div>

      <div className="main-bottom-row">
        <section className="card cert-card">
          <div className="section-header">
            <h2 className="section-title">Certifications</h2>
          </div>

          <div className="cert-list">
            <a
              className="cert-item"
              href="https://www.udemy.com/certificate/UC-5a47ba8f-905b-43cf-92ef-72cf768013ea/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3 className="cert-title">Javascript Developer Certification</h3>
              <p className="cert-org">Udemy</p>
            </a>
          </div>
        </section>

        <section className="card projects-card">
          <div className="section-header">
            <h2 className="section-title">Recent Projects</h2>
          </div>

          <div className="project-list">
            <a
              className="project-item"
              href="https://stoke-meal-planner.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3 className="project-title">Stoke</h3>
              <p className="project-desc">
                Recipe discovery, meal planning, and shopping list generation.
              </p>
              <span className="project-tag">
                https://stoke-meal-planner.netlify.app
              </span>
            </a>

            <a
              className="project-item"
              href="https://reliableengconstruction.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3 className="project-title">Reliable Engineering</h3>
              <p className="project-desc">
                Presentation of the company's services and projects.
              </p>
              <span className="project-tag">
                https://reliableengconstruction.com
              </span>
            </a>
            <a
              className="project-item"
              href="https://github.com/Oriiswan/Equipment-Rental-Management-System"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3 className="project-title">Equipment Rental System</h3>
              <p className="project-desc">
                Full-stack rental management with auth, CRUD, and REST API.
              </p>
              <span className="project-tag">https://github.com/ERMS </span>
            </a>

            <a
              className="project-item"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3 className="project-title">FCU Online Shop</h3>
              <p className="project-desc">
                Award-winning e-commerce platform with responsive UI.
              </p>
              <span className="project-tag">React</span>
            </a>
          </div>
        </section>
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
