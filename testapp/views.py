import smtplib
from django.shortcuts import render
from django.http import HttpResponse, HttpResponseBadRequest
import simplejson as json

# Create your views here.
from django.utils import simplejson
from django.views.generic import TemplateView


def func1():
    return 0

def home(request):
  return render(request,'testapp/homepage.html')

def portfolio(request):
    return render(request,'OnePage/index.html')

def mail_me(request):
    #print request.POST

    contactEmail = request.POST['contactEmail']
    contactSubject = request.POST['contactSubject']
    contactName = request.POST['contactName']
    contactMessage = request.POST['contactMessage']

    msg = "OK"

    if len(contactEmail) == 0 or len(contactName) == 0 or len(contactMessage) == 0:
        msg = "ERROR!"

        if len(contactName) == 0:
            msg = msg+"<br> Name can't be empty!"
        if len(contactEmail) == 0:
            msg = msg+"<br> Enter valid email address!"
        if len(contactMessage) == 0:
            msg = msg+"<br> Empty message body!"


    if msg == "OK":

        try:
           TO = ["milu.buet@gmail.com"]
           FROM = contactEmail
           SUBJECT = contactSubject
           TEXT = contactMessage

           message = """\
                From: %s
                To: %s
                Subject: %s

                %s
                """ % (FROM, ", ".join(TO), SUBJECT, TEXT)


           send_mail(FROM,TO,message)
        except Exception as e:
            pass
            print e
            msg = "ERROR SENDING!"




    return HttpResponse(msg)


def send_mail(FROM,TO,message):
    server = smtplib.SMTP('localhost')
    server.sendmail(FROM, TO, message)
    server.quit()




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


def monsur_req(request):

    restaurents = '{"api_title":"Find API","data":[{"id":"4871","name":"Zara Danbury","address":"Royal Oak<br \/>Chelmsford Road","town":"Mortimer","postcode":"CM9 6TJ","isfav":"0","category":"Indian","rating":"4.0","location":{"latitude":"51.7138848","longitude":"0.61177269999996"},"thumbnail":"https:\/\/owners.eatatrestaurant.com\/assets\/images\/restaurants\/thumbnails\/4871_51751deead4c4.jpg","square_photo":"https:\/\/owners.eatatrestaurant.com\/assets\/images\/restaurants\/square\/4871_51751deead4c4.jpg","photo_url":"https:\/\/owners.eatatrestaurant.com\/assets\/images\/restaurants\/4871_51751deead4c4.jpg","max_reservation_count":"15","phone":"+441245 223186","email":"info@zaradanbury.com ","website":"www.zaradanbury.com\/","priceband":"\u00a3\u00a3","short_desc":"Zara showcases its creativity with a unique fresh modern look, this time, at the Royal Oak situated between Danbury & Woodham Mortimer.","trs_enabled":"2","offer_count":"0","premium":1},{"id":"4869","name":"Zara Mayland","address":"Mayland Mill<br \/>Steeple Road","town":"Mayland","postcode":"CM3 6EG","isfav":"0","category":"Indian","rating":"4.8","location":{"latitude":"51.6798998164084","longitude":"0.772842487805178"},"thumbnail":"https:\/\/owners.eatatrestaurant.com\/assets\/images\/restaurants\/thumbnails\/4869_51750fa674a27.jpg","square_photo":"https:\/\/owners.eatatrestaurant.com\/assets\/images\/restaurants\/square\/4869_51750fa674a27.jpg","photo_url":"https:\/\/owners.eatatrestaurant.com\/assets\/images\/restaurants\/4869_51750fa674a27.jpg","max_reservation_count":"15","phone":"+441621 740998","email":"info@zaramayland.com","website":"www.zaramayland.com\/","priceband":"\u00a3\u00a3","short_desc":"Zara Mayland Restaurant Opened in February 2008, is in a grade 2 listed building in the village of Mayland. It has already been widely acknowledged by many of our customers as a great restaurant within the local community.","trs_enabled":"2","offer_count":"0","premium":1},{"id":"4870","name":"Zara Shelford","address":"1 Hinton Way<br \/>Great Shelford","town":"Cambridge","postcode":"CB22 5AX","isfav":"0","category":"Indian","rating":"4.3","location":{"latitude":"52.1489199212272","longitude":"0.14015891268923"},"thumbnail":"https:\/\/owners.eatatrestaurant.com\/assets\/images\/restaurants\/thumbnails\/4870_51751619c0cf8.jpg","square_photo":"https:\/\/owners.eatatrestaurant.com\/assets\/images\/restaurants\/square\/4870_51751619c0cf8.jpg","photo_url":"https:\/\/owners.eatatrestaurant.com\/assets\/images\/restaurants\/4870_51751619c0cf8.jpg","max_reservation_count":"15","phone":"+441223 846668","email":"info@zarashelford.com","website":"www.zarashelford.com\/","priceband":"\u00a3\u00a3","short_desc":"Dedicated to invention as well as tradition \nFresh modern decor - high quality Indian food","trs_enabled":"2","offer_count":"0","premium":1}],"paging":{"available_results":"1"},"owner_info":{"registration_offer_enabled":"1","birthday_offer_enabled":"1"}}'

    return HttpResponse(restaurents)



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


class Maptest(TemplateView):
    template_name = 'testapp/gmap.html'
    pass




import  plotly.offline as py
import plotly.graph_objs as go

class PlotlyTest(TemplateView):
    template_name = 'testapp/plotbar.html'

    def get_context_data(self, **kwargs):
        if 'view' not in kwargs:
            kwargs['view'] = self

        kwargs['av'] = 12
        html  =self.get_plotly_obj()
        buble = self.get_bubble_obj()
        kwargs['html'] = html
        kwargs['buble'] = buble
        return kwargs


    def get_plotly_obj(self):
        import plotly
        from plotly.graph_objs import Scatter, Layout

        print plotly.__version__  # version >1.9.4 required

        html = plotly.offline.plot({
        "data": [
            Scatter(x=[1, 2, 3, 4], y=[4, 1, 3, 7])
        ],
        "layout": Layout(
            title="Simple Graph"
        )
        },output_type='div')

        print(html)
        return html

    def get_line_obj(self):
        pass
        trace1 = go.Scatter(
            x = [1,2], y = [1,2]
        )

        trace2 = go.Scatter(
            x = [1,2], y =[2,1]
        )

        return py.plot([trace1,trace2],output_type='div')

    def get_bubble_obj(self):
        pass
        trace = go.Scatter(
            x = [1,2,3], y = [1,2,3],
            marker = dict(
                color = ['red','blue','green'],
                size = [30,80,200],
            ),
            mode = 'markers'
        )

        layout = go.Layout(
            showlegend = True,
            title = 'Simple Buble'
        )

        fig = go.Figure(
            data = [trace],
            layout = layout
        )



        return py.plot(fig,output_type='div')

