__author__ = 'milu'


from django.conf.urls import patterns, include, url

urlpatterns = patterns('',
    # Examples:
    url(r'^$', 'svgdrawing.views.home'),
    url(r'^chart$', 'svgdrawing.views.svgchart'),
)
