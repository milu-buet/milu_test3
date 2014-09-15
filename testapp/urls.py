__author__ = 'milu'

from django.conf.urls import patterns, include, url

from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    #url(r'^$', 'testapp.views.home'),
    url(r'^$', 'testapp.views.portfolio'),
    url(r'^home$', 'testapp.views.home'),
    url(r'^post_test$', 'testapp.views.post_test'),
    url(r'^viz/logger/logbgd$', 'testapp.views.viz_test'),
    url(r'^viz/count$', 'testapp.views.viz_count'),
    # url(r'^blog/', include('blog.ur
)