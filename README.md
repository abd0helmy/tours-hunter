# Tours-Hunters Application


Tours-Hunters is a modern web application for booking nature tours around the world.  
It allows users to explore tours, view detailed information, and book their next adventure easily.

---

## 🚀 Features

- 🔐 User Authentication & Authorization (JWT-based)
- 👤 User Profiles & Account Management
- 🗺️ Browse & Search Tours
- ⭐ Tour Ratings & Reviews
- 💳 Secure Booking & Payments

---

## 🛠️ Built With

- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **Authentication:** JWT  
- **Payments:** Stripe (if integrated)

---

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/abd0helmy/tours-hunter.git
cd tours-hunters
```

Install dependencies:

```bash
npm install
```

---

## Environment Variables

Create a `config.env` file in the root of your project and add the following variables:

```env
# General
NODE_ENV=development
PORT=3000

# Database
DATABASE=mongodb+srv://<USERNAME>:<PASSWORD>@chatapp.wmyxeom.mongodb.net/natours?retryWrites=true&w=majority&appName=natours
DATABASE_PASSWORD=<YOUR_DATABASE_PASSWORD>

# JWT
JWT_SECRET=<YOUR_JWT_SECRET>
JWT_EXPIRES_IN=90d
JWT_COOKIE_EXPIRES_IN=90

# Email (Mailtrap for development)
EMAIL_USERNAME=<YOUR_EMAIL_USERNAME>
EMAIL_PASSWORD=<YOUR_EMAIL_PASSWORD>
EMAIL_HOST=sandbox.smtp.mailtrap.io
EMAIL_PORT=587
EMAIL_FROM=<YOUR_EMAIL>

# SendGrid (for production emails)
SENDGRID_USERNAME=<YOUR_SENDGRID_USERNAME>
SENDGRID_PASSWORD=<YOUR_SENDGRID_PASSWORD>

# Stripe
STRIPE_SECRET_KEY=<YOUR_STRIPE_SECRET_KEY>
STRIPE_WEBHOOK_SECRET=<YOUR_STRIPE_WEBHOOK_SECRET>
---

## ▶️ Running the App

Development mode:

```bash
npm run dev
```

Production mode:

```bash
npm start
```

App will run on:

```
http://localhost:3000
```

---

## 📁 Project Structure

```
Tours-Hunters/
│
├── controllers/
├── models/
├── routes/
├── public/
├── views/
├── utils/
├── app.js
└── server.js
```

---

## 🧪 API Endpoints (Example)

### Tours

- `GET /api/v1/tours`
- `POST /api/v1/tours`
- `GET /api/v1/tours/:id`
- `PATCH /api/v1/tours/:id`
- `DELETE /api/v1/tours/:id`

### Users

- `POST /api/v1/users/signup`
- `POST /api/v1/users/login`
- `GET /api/v1/users/me`
- `PATCH /api/v1/users/updateMe`

---

## 🔒 Security

- Password hashing with bcrypt
- JWT authentication
- Rate limiting
- Data sanitization
- XSS protection
- Helmet for secure headers

---

## 🧑‍💻 Author

**Your Name**  
GitHub: https://github.com/abd0helmy/

---

## 📜 License

This project is licensed under the MIT License.
