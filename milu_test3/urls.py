from django.conf.urls import patterns, include, url

from django.contrib import admin
from dashing.utils import router


admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'milu_test3.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
    url(r'^', include('testapp.urls')),
    url(r'^dhaka/routing', include('dhaka_routing.urls')),
    url(r'^svg/', include('svgdrawing.urls')),
    url(r'^games/', include('games.urls')),
    url(r'^dashboard/', include(router.urls)),

)
