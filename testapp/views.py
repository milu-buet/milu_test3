from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def func1():
    return 0

def home(request):
  return render(request,'testapp/homepage.html')
