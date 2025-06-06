from flask import Flask, request, jsonify
import os
import smtplib
from dotenv import load_dotenv
from email.message import EmailMessage
from flask_cors import CORS

# Load environment variables
load_dotenv()

EMAIL_USER = os.getenv("EMAIL_USER")
EMAIL_PASS = os.getenv("EMAIL_PASS")
EMAIL_TO = EMAIL_USER  # Send to yourself

app = Flask(__name__)
CORS(app)  # Allow cross-origin requests from your frontend

@app.route('/api/contact', methods=['POST'])
def contact():
    data = request.get_json()
    name = data.get('name')
    email = data.get('email')
    message = data.get('message')

    if not name or not email or not message:
        return jsonify({'error': 'All fields are required'}), 400

    try:
        msg = EmailMessage()
        msg['Subject'] = f'New Contact Form Message from {name}'
        msg['From'] = EMAIL_USER
        msg['To'] = EMAIL_TO
        msg.set_content(f"Name: {name}\nEmail: {email}\n\nMessage:\n{message}")

        with smtplib.SMTP_SSL('smtp.gmail.com', 465) as smtp:
            smtp.login(EMAIL_USER, EMAIL_PASS)
            smtp.send_message(msg)

        return jsonify({'message': 'Message sent successfully!'}), 200

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)
