"""
Django settings for milu_test3 project.

For more information on this file, see
https://docs.djangoproject.com/en/1.6/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/1.6/ref/settings/
"""

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
import os
BASE_DIR = os.path.dirname(os.path.dirname(__file__))


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/1.6/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = '44oq-=oi)ev57kxp3s&2vs8^j!l7-_o74)e)&6p)+*)_1yn#*x'
#
# # SECURITY WARNING: don't run with debug turned on in production!
# DEBUG = True
#
# TEMPLATE_DEBUG = True
#
# ALLOWED_HOSTS = []

from dev_settings import *




# Application definition

INSTALLED_APPS = (
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'testapp',
    'svgdrawing',
    'dajaxice',
    'dajax',
    'games',
    'djangobower',
    # 'corsheaders',
    'dhaka_routing',
    'dashing',
)

MIDDLEWARE_CLASSES = (
    'django.contrib.sessions.middleware.SessionMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',

)

CORS_ORIGIN_ALLOW_ALL = True

CORS_ALLOW_HEADERS = (
        'x-requested-with',
        'content-type',
        'accept',
        'origin',
        'authorization',
        'x-csrftoken',
        'Accept-Encoding',
        'Accept-Language',
        'Connection',
        'Content-Length',
        'Host',
        'Referer',
        'User-Agent',

    )



ROOT_URLCONF = 'milu_test3.urls'

WSGI_APPLICATION = 'milu_test3.wsgi.application'


# Database
# https://docs.djangoproject.com/en/1.6/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}

# Internationalization
# https://docs.djangoproject.com/en/1.6/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/1.6/howto/static-files/

STATIC_URL = '/static/'

STATIC_ROOT = os.path.join(BASE_DIR,'static2').replace('\\','/')

STATICFILES_DIRS = (
    os.path.join(BASE_DIR,'static').replace('\\','/'),

)

# BOWER_COMPONENTS_ROOT = os.path.join(BASE_DIR,'bower_components').replace('\\','/')
BOWER_COMPONENTS_ROOT = BASE_DIR
BOWER_PATH = '/usr/bin/bower'

BOWER_INSTALLED_APPS = (
    'jquery#2.0.2',
    'EaselJS',

)



TEMPLATE_DIRS = (
    os.path.join(BASE_DIR, 'templates').replace('\\','/'),
)

TEMPLATE_LOADERS = (
    'django.template.loaders.filesystem.Loader',
    'django.template.loaders.app_directories.Loader',
    'django.template.loaders.eggs.Loader',
)

TEMPLATE_CONTEXT_PROCESSORS = (
    'django.contrib.auth.context_processors.auth',
    'django.core.context_processors.debug',
    'django.core.context_processors.i18n',
    'django.core.context_processors.media',
    'django.core.context_processors.static',
    'django.core.context_processors.request',
    'django.contrib.messages.context_processors.messages',
)

STATICFILES_FINDERS = (
    'django.contrib.staticfiles.finders.FileSystemFinder',
    'django.contrib.staticfiles.finders.AppDirectoriesFinder',
    'dajaxice.finders.DajaxiceFinder',
    'djangobower.finders.BowerFinder',
)


####