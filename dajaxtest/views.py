from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def home(request):
    #return HttpResponse("test")
    return render(request,"dajaxtest/test1.html")
