__author__ = 'milu'

from django.conf.urls import patterns, include, url
from dajaxice.core import dajaxice_autodiscover, dajaxice_config
dajaxice_autodiscover()

from django.contrib.staticfiles.urls import staticfiles_urlpatterns


urlpatterns = patterns('',
    # Examples:
    #url(r'^$', 'testapp.views.home'),
    url(r'^$', 'dajaxtest.views.home'),
    # url(r'^blog/', include('blog.ur
    url(dajaxice_config.dajaxice_url, include('dajaxice.urls')),
    #staticfiles_urlpatterns(),
)

urlpatterns += staticfiles_urlpatterns()