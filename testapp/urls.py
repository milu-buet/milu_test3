__author__ = 'milu'

from django.conf.urls import patterns, include, url

from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    url(r'^$', 'testapp.views.home'),
    # url(r'^blog/', include('blog.ur
)