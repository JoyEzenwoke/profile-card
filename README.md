# Stage 0 & Stage 1 Frontend Task — Profile Card & Multi-Page Application

This repository contains my **Stage 0** and **Stage 1** Frontend tasks.  

---
Author 
Joy Ezenwoke Frontend Developer (in training)

## Stage 0 — Profile Card

I built a simple, responsive Profile Card using HTML, CSS, and JavaScript.

**Live Demo:** [View Live on GitHub Pages](https://yourusername.github.io/yourrepo/)

**Features:**
- Shows my name, bio, avatar, hobbies, and dislikes
- Displays the current time in milliseconds (auto-updates)
- Has working social links (GitHub, LinkedIn, X)
- Looks good on mobile, tablet, and desktop

**Technologies Used:**
- HTML
- CSS (Flexbox)
- JavaScript

---

## Stage 1 — Multi-Page Application

For Stage 1, I expanded the project to include **two new pages**:

### 1. About Me Page (`about.html`)
- Includes the following sections with `data-testid`s:
  - Bio — `test-about-bio`
  - Goals in this program — `test-about-goals`
  - Areas of low confidence — `test-about-confidence`
  - Note to future self — `test-about-future-note`
  - Extra thoughts — `test-about-extra`
- Semantic HTML (`main`, `section`, headings)
- Fully responsive and accessible

### 2. Contact Us Page (`contact.html`)
- Includes a **form with full validation**:
  - Full Name — `test-contact-name`
  - Email — `test-contact-email`
  - Subject — `test-contact-subject`
  - Message — `test-contact-message`
  - Submit button — `test-contact-submit`
  - Inline error messages — `test-contact-error-<field>`
  - Success message — `test-contact-success`
- Email format and message length validation
- Inline error messages with ARIA accessibility
- Keyboard accessible
- Responsive across devices

**Technologies Used:**
- HTML
- CSS (Flexbox + responsive media queries)
- JavaScript (form validation and dynamic time display)

---

## How to Run Locally

```bash
# Clone the repository
git clone https://github.com/JoyEzenwoke/yourrepo.git

# Navigate into the folder
cd yourrepo

# Open index.html in your browser to view the home page
Access the About Me page: about.html

Access the Contact Us page: contact.html

