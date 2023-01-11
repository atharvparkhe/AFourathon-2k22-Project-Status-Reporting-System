from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.decorators import api_view
from django.contrib.auth import authenticate
from rest_framework.response import Response
from django.core.cache import cache
from rest_framework import status
from .serializers import *
from .threads import *
from .models import *
from .utils import *
import xlrd


@api_view(["POST"])
def signUp(request):
    try:
        data = request.data
        serializer = signupSerializer(data=data)
        if serializer.is_valid():
            email = serializer.data["email"]
            if MemberModel.objects.filter(email=email).first():
                return Response({"message":"Acount already exists."}, status=status.HTTP_406_NOT_ACCEPTABLE)
            new_customer = MemberModel.objects.create(
                email = email,
                name = serializer.data["name"]
            )
            new_customer.set_password(serializer.data["password"])
            new_customer.save()
            return Response({"message":"Account created"}, status=status.HTTP_201_CREATED)
        return Response({"error":serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
    except Exception as e:
        return Response({"error":str(e), "message":"Something went wrong"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(["POST"])
def logIn(request):
    try:
        data = request.data
        serializer = loginSerializer(data=data)
        if serializer.is_valid():
            email = serializer.data["email"]
            password = serializer.data["password"]
            customer_obj = MemberModel.objects.filter(email=email).first()
            if customer_obj is None:
                return Response({"message":"Account does not exist"}, status=status.HTTP_404_NOT_FOUND)
            user = authenticate(email=email, password=password)
            if not user:
                return Response({"message":"Incorrect password"}, status=status.HTTP_406_NOT_ACCEPTABLE)
            jwt_token = RefreshToken.for_user(user)
            return Response({"message":"Login successfull", "token":str(jwt_token.access_token)}, status=status.HTTP_202_ACCEPTED)
        return Response({"error":serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
    except Exception as e:
        return Response({"error":str(e), "message":"Something went wrong"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(["POST"])
def forgot(request):
    try:
        data = request.data
        serializer = emailSerializer(data=data)
        if serializer.is_valid():
            email = serializer.data["email"]
            user_obj = MemberModel.objects.filter(email=email).first()
            if not user_obj:
                return Response({"message": "User does not exist."}, status=status.HTTP_404_NOT_FOUND)
            thread_obj = Send_Forgot_OTP(email)
            thread_obj.start()
            return Response({"message":"reset mail sent"}, status=status.HTTP_200_OK)
        return Response({"error":serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
    except Exception as e:
        return Response({"error":str(e), "message":"Something went wrong"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(["POST"])
def reset(request):
    try:
        data = request.data
        serializer = otpSerializer(data=data)
        if serializer.is_valid():
            otp = serializer.data["otp"]
            if not cache.get(otp):
                return Response({"message":"OTP expired"}, status=status.HTTP_408_REQUEST_TIMEOUT)
            if not MemberModel.objects.filter(email=cache.get(otp)).first():
                return Response({"message":"user does not exist"}, status=status.HTTP_404_NOT_FOUND)
            user_obj = MemberModel.objects.get(email=cache.get(otp))
            user_obj.set_password(serializer.data["pw"])
            user_obj.save()
            return Response({"message":"Password changed successfull"}, status=status.HTTP_202_ACCEPTED)
        return Response({"error":serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
    except Exception as e:
        return Response({"error":str(e), "message":"Something went wrong"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(["POST"])
def admin_signUp(request):
    try:
        ser = signupSerializer(data=request.data)
        if ser.is_valid():
            email = ser.data["email"]
            if AdminModel.objects.filter(email=email).first():
                return Response({"message":"Acount already exists."}, status=status.HTTP_406_NOT_ACCEPTABLE)
            new_customer = AdminModel.objects.create(
                email = email,
                name = ser.data["name"]
            )
            new_customer.set_password(ser.data["password"])
            new_customer.save()
            return Response({"message":"Account created"}, status=status.HTTP_201_CREATED)
        return Response({"error":ser.errors}, status=status.HTTP_400_BAD_REQUEST)
    except Exception as e:
        return Response({"error":str(e), "message":"Something went wrong"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(["POST"])
def admin_logIn(request):
    try:
        ser = loginSerializer(data=request.data)
        if ser.is_valid():
            email = ser.data["email"]
            password = ser.data["password"]
            customer_obj = AdminModel.objects.filter(email=email).first()
            if customer_obj is None:
                return Response({"message":"Account does not exist"}, status=status.HTTP_404_NOT_FOUND)
            user = authenticate(email=email, password=password)
            if not user:
                return Response({"message":"Incorrect password"}, status=status.HTTP_406_NOT_ACCEPTABLE)
            jwt_token = RefreshToken.for_user(user)
            return Response({"message":"Login successfull", "token":str(jwt_token.access_token)}, status=status.HTTP_202_ACCEPTED)
        return Response({"error":ser.errors}, status=status.HTTP_400_BAD_REQUEST)
    except Exception as e:
        return Response({"error":str(e), "message":"Something went wrong"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(["POST"])
def admin_forgot(request):
    try:
        ser = emailSerializer(data=request.data)
        if ser.is_valid():
            email = ser.data["email"]
            user_obj = AdminModel.objects.filter(email=email).first()
            if not user_obj:
                return Response({"message": "User does not exist."}, status=status.HTTP_404_NOT_FOUND)
            thread_obj = Send_Forgot_OTP(email)
            thread_obj.start()
            return Response({"message":"reset mail sent"}, status=status.HTTP_200_OK)
        return Response({"error":ser.errors}, status=status.HTTP_400_BAD_REQUEST)
    except Exception as e:
        return Response({"error":str(e), "message":"Something went wrong"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(["POST"])
def admin_reset(request):
    try:
        ser = otpSerializer(data=request.data)
        if ser.is_valid():
            otp = ser.data["otp"]
            if not cache.get(otp):
                return Response({"message":"OTP expired"}, status=status.HTTP_408_REQUEST_TIMEOUT)
            if not AdminModel.objects.filter(email=cache.get(otp)).first():
                return Response({"message":"user does not exist"}, status=status.HTTP_404_NOT_FOUND)
            user_obj = AdminModel.objects.get(email=cache.get(otp))
            user_obj.set_password(ser.data["pw"])
            user_obj.save()
            return Response({"message":"Password changed successfull"}, status=status.HTTP_202_ACCEPTED)
        return Response({"error":ser.errors}, status=status.HTTP_400_BAD_REQUEST)
    except Exception as e:
        return Response({"error":str(e), "message":"Something went wrong"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


# add employee data
@api_view(["POST"])
def add_employee_data(request):
    try:
        ser = FileModelSerializer(data=request.data)
        if ser.is_valid():
            file_obj = ser.save()
            path = str(file_obj.file.path)
            workbook = xlrd.open_workbook(path)
            sheet = workbook.sheet_by_index(0)
            for row in range(1,sheet.nrows):
                name = str(sheet.cell_value(row,0))
                email = str(sheet.cell_value(row,1)).lower()
                org = MemberModel.objects.create(
                    name = name,
                    email = email,
                    phone = sheet.cell_value(row,2)
                )
                pw = get_random_string(8)
                org.set_password(pw)
                thread_obj = send_credentials_mail(email, pw)
                thread_obj.start()
                org.save()
                return Response({"message": "Employees Added Successfully"}, status=status.HTTP_200_OK)
        return Response({"error":ser.errors}, status=status.HTTP_400_BAD_REQUEST)
    except Exception as e:
        return Response({"error":str(e), "message":"Something went wrong"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(["POST"])
def add_employee(request):
    try:
        ser = add_employee_serializer(data=request.data)
        if ser.is_valid():
            email = ser.data["email"],
            org = MemberModel.objects.create(
                name = ser.data["name"],
                email = email,
                phone = ser.data["phone"]
            )
            pw = get_random_string(8)
            org.set_password(pw)
            thread_obj = send_credentials_mail(email, pw)
            thread_obj.start()
            org.save()
            return Response({"message": "Employee Added Successfully"}, status=status.HTTP_200_OK)
        return Response({"error":ser.errors}, status=status.HTTP_400_BAD_REQUEST)
    except Exception as e:
        return Response({"error":str(e), "message":"Something went wrong"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

