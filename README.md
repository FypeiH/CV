# Filipe Bravo – Personal CV (Built with Angular)

This project is my **personal curriculum vitae**, fully developed from scratch using **Angular** and **TailwindCSS**.  
The goal was to create a **clean, dynamic, and responsive** CV layout that could be easily updated, localized, and exported as a PDF.

---

## 🧠 Overview

- Built entirely in **Angular 17** with a **component-based architecture**.
- Designed using **TailwindCSS** for precise control over layout and responsiveness.
- Includes **i18n support** (🇵🇹 Portuguese / 🇺🇸 English) via Angular pipes and translations.
- PDF generation handled with **jsPDF** and **html-to-image**.
- Modular structure allows reuse of components such as:
  - `<app-experience-item>`
  - `<app-skill-item>`
  - `<app-personal-info>`
  - `<app-professional-info>`

---

## 🧩 Features

- **Responsive Design** – Optimized for A4 size and web viewing.
- **Dynamic Content** – All data managed via JSON and translation files.
- **Dark/Light Layout** – Visual hierarchy between sidebar and main content.
- **Single-page Export** – Generates a polished, print-ready CV in PDF format.
- **Bilingual Support** – Switch language instantly between Portuguese and English.

---

## ⚙️ Tech Stack

- **Frontend:** Angular 18  
- **Styling:** TailwindCSS  
- **PDF Export:** jsPDF + html-to-image  
- **Icons:** Angular Material  
- **Language Support:** ngx-translate

---

## 🚀 Running the Project

```bash
# Clone this repository
git clone https://github.com/fypeih/CV.git
cd CV

# Install dependencies
npm install

# Start development server
ng serve
