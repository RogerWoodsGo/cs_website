from django.conf.urls import patterns, include, url

from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    url(r'^$', 'spider_list.views.index', name='home'),
    url(r'^spider\.html$', 'spider_list.views.index', name='home'),
    url(r'^sendmail\.html$', 'spider_list.views.sendmail', name='mail'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^item', 'spider_list.views.get_item', name='get_item'),
    url(r'^admin/', include(admin.site.urls)),
    #url(r'^desc', 'spider_list.views.desc'),
)
