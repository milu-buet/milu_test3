__author__ = 'milu'


from django.conf.urls import patterns, include, url

urlpatterns = patterns('',
    # Examples:
    url(r'^$', 'games.views.home'),
    url(r'^/game1$', 'games.views.game1'),
)
