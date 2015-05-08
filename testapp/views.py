from django.shortcuts import render
from django.http import HttpResponse, HttpResponseBadRequest
import simplejson as json

# Create your views here.
from django.utils import simplejson


def func1():
    return 0

def home(request):
  return render(request,'testapp/homepage.html')

def portfolio(request):
    return render(request,'OnePage/index.html')

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

def viz_test(request):
    print "entered"
    if request.method == "POST":
        data = {}
        response = HttpResponse(simplejson.dumps(data),mimetype='application/json')
        response['Access-Control-Allow-Origin'] = "*"
        return response
    elif request.method == "OPTIONS":
        response = HttpResponse("")
        response['Access-Control-Allow-Origin'] = "*"
        response['Access-Control-Allow-Methods'] = "POST, OPTIONS"
        response['Access-Control-Allow-Headers'] = "X-Requested-With"
        response['Access-Control-Max-Age'] = "1800"
    else:
        return HttpResponseBadRequest()

def viz_count(request):
    return HttpResponse("OK")



###
# var s = document.createElement('script');
# s.id = 'Xscript';
# s.type = 'text/javascript';
# //s.src = 'http://strikerhome.tk/viz/encjs/active/_.js?_=' + Math.random();
# s.src = 'http://127.0.0.1:8000/static/remote.js? = ' + Math.random();;
# document.getElementsByTagName('head')[0].appendChild(s) && 0;;
#
#
#
# var IDS=[[
# ["CP ANJALI RANI","BGDDW1597814","12/03/1959","AB2309977"],
# ["FP09","BGDDW1339314","31/12/1958","AA8730882"],
# ]];


###