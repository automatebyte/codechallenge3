# codechallenge3
# Simple Blog/Post Manager

A simple JavaScript-based web application that allows users to **view**, **add**, **edit**, and **delete** blog posts. The app interacts with a local REST API using `json-server` and demonstrates key concepts like DOM manipulation, event handling, and asynchronous HTTP requests with `fetch`.

---

##  Learning Objectives

- Understand how to interact with RESTful APIs using JavaScript
- Manipulate the DOM in response to user actions and API data
- Use HTTP methods (`GET`, `POST`, `PATCH`, `DELETE`) effectively
- Structure frontend code using functions for clarity and reusability

---

## Features

- Display a list of blog posts fetched from a local API
- View detailed content of a post by clicking its title
- Add new blog posts via a form
- Edit existing posts with an inline form
- Delete posts dynamically
- Clean UI with responsive layout using vanilla CSS

---

## Project Structure

simple-blog-manager/
├── index.html # Main HTML page
├── css/
│ └── styles.css # Styling
├── src/
│ └── index.js # JavaScript logic
└── db.json # Mock JSON API data

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/simple-blog-manager.git
cd simple-blog-manager

2. Install json-server

npm install -g json-server
3. Run the mock API server

json-server --watch db.json
You can open index.html in your browser or use live-server:


live-server
 API Endpoints
Method	Endpoint	Description
GET	/posts	Get all blog posts
GET	/posts/:id	Get a single post
POST	/posts	Create a new post
PATCH	/posts/:id	Update an existing post
DELETE	/posts/:id	Delete a post

 Sample Data
Your db.json file might look like:

json
Copy
Edit
{
  "posts": [
    {
      "id": 1,
      "title": "The Rise of Tech in Africa",
      "content": "African startups are booming in 2025 with innovation in fintech and healthtech.",
      "author": "Tech Africa"
    },
    {
      "id": 2,
      "title": "From Hustle to Unicorn",
      "content": "Meet the next billionaires building from the ground up.",
      "author": "Visionary Weekly"
    }
  ]
}
 

Project Status
 Core Deliverables
DOM Manipulation
Form Handling
CRUD via API
 Clean UI

 License
MIT License © 2025