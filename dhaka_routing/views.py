# Create your views here.
from django.shortcuts import render
from django.http import HttpResponse, HttpResponseBadRequest

def home(request):
	return HttpResponse('OK')
