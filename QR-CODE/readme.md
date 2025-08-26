# QR Code Generator

A simple web application that generates QR codes from user-provided URLs using a serverless API on Vercel.

[QRcode](https://projects-two-inky.vercel.app/)

![QR-CODE IMAGE](https://github.com/DEEPAK-RAMGIRI/PROJECTS/blob/main/QR-CODE/qr-code.png)

## Technologies Used

- **JavaScript (ES6+)** – Frontend scripting and API integration  
- **HTML5 & CSS3** – Building the user interface  
- **Node.js** – Server-side runtime for Vercel serverless functions  
- **qr-image** – Node package for generating QR codes  
- **Vercel** – Hosting and deployment platform for serverless functions  

### Features

- Generate QR codes from any valid URL
- QR codes displayed instantly without page reload
- Serverless API using `qr-image` for quick QR generation
- Frontend built with plain HTML, CSS, and JavaScript

### Folder Structure

```plaintext
QR-CODE/
├─ api/
│ └─ generate-qr.js # Serverless function
├─ public/
│ ├─ index.html # Frontend page
│ ├─ style.css # styles for html file
│ └─ script.js # JavaScript for API call
├─ package.json # Project dependencies
└─ package-lock.json
```
