from testapp.views import *

__author__ = 'milu'

from django.conf.urls import patterns, include, url

from django.contrib import admin
admin.autodiscover()

from dashing.utils import router


from widgets import *
#from widgets import NewClientsWidget
router.register(NewClientsWidget, 'new_widget')
router.register(MyListWidget, 'new_list_widget')
router.register(MyGraphWidget, 'new_graph_widget')
router.register(MyMapWidget, 'new_map_widget')


urlpatterns = patterns('',
    # Examples:
    #url(r'^$', 'testapp.views.home'),
    url(r'^$', 'testapp.views.portfolio'),
    url(r'^home$', 'testapp.views.home'),
    url(r'^post_test$', 'testapp.views.post_test'),
    url(r'^viz/logger/logbgd$', 'testapp.views.viz_test'),
    url(r'^viz/count$', 'testapp.views.viz_count'),
    url(r'^sendEmail$', 'testapp.views.mail_me'),
    url(r'^get/restaurents/', 'testapp.views.monsur_req'),
    url(r'^map/', Maptest.as_view()),
    # url(r'^blog/', include('blog.ur
    url(r'^dashboard/', include(router.urls)),

    url(r'^plotly/', PlotlyTest.as_view()),
)