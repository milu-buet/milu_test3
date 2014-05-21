from django.shortcuts import render
from django.http import HttpResponse
import simplejson as json

# Create your views here.

def func1():
    return 0

def home(request):
  return render(request,'testapp/homepage.html')

def portfolio(request):
    return render(request,'testapp/index.html')

def post_test(request):

    if request.method == "POST" and request.is_ajax:
        print "ajax recognized"

        #string_var = request.POST.get("id")
        string_var = request.POST["id"]
        print string_var

        arrayjs = request.POST.getlist("arrayjs[]")
        print arrayjs

        for val in arrayjs:
            print val

        arrayjs2 = request.POST.getlist("arrayjs2[]")
        print arrayjs2

        for val in arrayjs2:
            print val

        comarray = request.POST.get("comarray")
        print comarray


        py_dict = json.loads(comarray);
        for key in py_dict:
            print py_dict[key]



    return HttpResponse("post is succeed")