__author__ = 'milu'

from django.conf.urls import patterns, include, url

from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    #url(r'^$', 'testapp.views.home'),
    url(r'^$', 'testapp.views.portfolio'),
    url(r'^p$', 'testapp.views.portfolio'),
    # url(r'^blog/', include('blog.ur
)