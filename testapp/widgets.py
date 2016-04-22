from django.db.models import Count
from django.conf import settings

from dashing.widgets import NumberWidget, ListWidget, GraphWidget, MapWidget

from random import randint

users = randint(50, 100)

class NewClientsWidget(NumberWidget):
    title = 'New Users'

    def get_value(self):
    	global users
    	users += 1
        return users
    
    def get_detail(self):
    	global users
        return '{} actives'.format(users/3)

    def get_more_info(self):
    	global users
        return '{} fakes'.format(users/10)


class MyListWidget(ListWidget):
    title = 'Solar Mass Index'

    def get_data(self):
        dummy_data = [
                    {'label': 'Sun', 'value': 98},
                    {'label': 'Earth', 'value': 15},
                    {'label': 'Moon', 'value': 2},
                    {'label': 'Mars', 'value': 12},
                    {'label': 'Jupitar', 'value': 30},
                    {'label': 'Pluto', 'value': 9},
                    {'label': 'Venus', 'value': 11},
                     ]
        return dummy_data
    

    def get_more_info(self):
        sample_info = 'List of solar objects'
        return '{} and mass index'.format(sample_info)


class MyGraphWidget(GraphWidget):
    title = 'Population Rate'

    def get_data(self):
        dummy_data = [
                    { 'x': 0, 'y': 40 }, 
                    { 'x': 1, 'y': 49 }, 
                    { 'x': 2, 'y': 38 }, 
                    { 'x': 3, 'y': 30 }, 
                    { 'x': 4, 'y': 32 }
                     ]
        return dummy_data
    

    def get_more_info(self):
        sample_info = 'this is a Graph'
        return '{} Wow!'.format(sample_info)


class MyMapWidget(MapWidget):
    title = 'New Map'
    zoom = 12
    center = {'lat': 23.811378365396163,'lng':90.41298508644104}
    markers = [{'lat': 23.811378365396163,'lng':90.41298508644104},]
    #default_ui = True

    def double_click_zoom(self):
        return True

    