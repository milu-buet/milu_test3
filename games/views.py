from django.shortcuts import render
from django.http import HttpResponse
import simplejson as json


# Create your views here.

def home(request):
  return HttpResponse("game home works")

def game1(request):
    return render(request,"games/game1.html")
