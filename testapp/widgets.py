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
    title = 'New List'

    def get_data(self):
        dummy_data = [
                    {'label': 'Sun', 'value': 98},
                    {'label': 'Earth', 'value': 15},
                    {'label': 'Moon', 'value': 2},
                    {'label': 'Mars', 'value': 12},
                    {'label': 'Jupitar', 'value': 30},
                     ]
        return dummy_data
    

    def get_more_info(self):
        sample_info = 'this is a list'
        return '{} Wow!'.format(sample_info)


class MyGraphWidget(GraphWidget):
    title = 'New Graph'

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
    zoom = 4
    #default_ui = True

    def double_click_zoom(self):
        return True

    