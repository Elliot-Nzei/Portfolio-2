# Elliot Nzei – Portfolio with Contact API

A modern, full-stack personal portfolio by Elliot Nzei. Showcases skills, projects, research, and features a **Contact Me** form powered by a Flask API and Gmail SMTP.

---

## 🌐 Frontend

- Built with **HTML**, **CSS** (Glassmorphism), and **JavaScript**
- SPA-like experience: fixed sidebar, floating vertical navbar
- Sections: `Home`, `Skills`, `Projects`, `Research`, `Contact`
- Responsive, developer-focused UI

---

## 🔧 Backend

- **Flask** REST API (`/api/contact`) for contact form submissions
- Sends emails via **Gmail SMTP**
- **Flask-CORS** for secure frontend-backend communication
- Credentials managed with **python-dotenv**

---

## 📁 Project Structure

```
portfolio-2/
├── backend/
│   ├── app.py           # Flask API
│   ├── .env             # EMAIL_USER, EMAIL_PASS
│   └── requirements.txt # Python dependencies
├── frontend/
│   ├── index.html       # Main page
│   ├── research.html    # Research section
│   ├── skills.html      # Skills section, etc.
│   ├── css/
│   ├── js/
│   └── images/
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/portfolio-2.git
cd portfolio-2
```

### 2. Backend Setup (Flask API)

**a. Create a Virtual Environment**
```bash
cd backend
python -m venv venv
# Activate:
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate
```

**b. Install Dependencies**
```bash
pip install -r requirements.txt
```

**c. Configure Environment Variables**

Create a `.env` file in the `backend/` folder:
```
EMAIL_USER=your_gmail_address@gmail.com
EMAIL_PASS=your_app_password
```
> ⚠️ Use an App Password if Gmail 2FA is enabled.

**d. Run the Backend**
```bash
python app.py
```
Server runs at: [http://localhost:5000](http://localhost:5000)

---

### 3. Frontend

Open `frontend/index.html` in your browser. The contact form will POST to the Flask API.

---

## 🔐 Environment Variables

| Variable     | Description                |
|--------------|---------------------------|
| EMAIL_USER   | Your Gmail address        |
| EMAIL_PASS   | Your Gmail App Password   |

