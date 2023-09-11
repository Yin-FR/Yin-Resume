import smtplib
import os
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def send_mail_to(to_email,
              title,
              body, 
              smtp_server='mail.privateemail.com', 
              smtp_port=587, 
              smtp_username='contact@yincodeworld.com', 
              smtp_password=os.getenv("MAIL_PWD")):
    
    if to_email == "admin":
        to_email = os.getenv("ADMIN_MAIL")

    msg = MIMEMultipart()
    msg['From'] = smtp_username
    msg['To'] = to_email
    msg['Subject'] = title

    body = '<font="Times New Roman">{}</font>'.format(body)
    msg.attach(MIMEText(body, 'html'))

    try:
        server = smtplib.SMTP(smtp_server, smtp_port)
        server.starttls()
        server.login(smtp_username, smtp_password)
        text = msg.as_string()
        server.sendmail(smtp_username, to_email, text)
        server.quit()
        return "SUCCESS"
    except Exception as e:
        raise e