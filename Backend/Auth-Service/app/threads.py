from django.core.mail import send_mail
from django.core.cache import cache
from django.conf import settings
import threading, random


class Send_Forgot_OTP(threading.Thread):
    def __init__(self, email):
        self.email = email
        threading.Thread.__init__(self)
    def run(self):
        try:
            otp = random.randint(100001, 999999)
            cache.set(otp, self.email, 350)
            print(otp)
            subject = "OTP to Reset your Account Password"
            message = f"The OTP to Reset your Account Password is {otp}.\nIts valid only for 2 mins."
            email_from = settings.EMAIL_HOST_USER
            send_mail(subject , message ,email_from ,[self.email])
        except Exception as e:
            print(e)
