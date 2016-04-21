var myDashboard = new Dashboard();

myDashboard.addWidget('new_widget', 'Number', {
    getData: function () {
        var self = this;
        Dashing.utils.get('new_widget', function(data) {
            $.extend(self.scope, data);
        });
    },
    interval: 3000
});


myDashboard.addWidget('new_list_widget', 'List', {
    getData: function () {
        var self = this;
        Dashing.utils.get('new_list_widget', function(data) {
            $.extend(self.scope, data);
        });
    },
    interval: 3000
});


myDashboard.addWidget('new_graph_widget', 'Graph', {
	    getData: function () {
        var self = this;
        Dashing.utils.get('new_graph_widget', function(data) {
            $.extend(self.scope, data);
        });
    },
    interval: 3000
});


myDashboard.addWidget('new_map_widget', 'Map', {
	    getData: function () {
        var self = this;
        Dashing.utils.get('new_map_widget', function(data) {
            $.extend(self.scope, data);
        });
    },
    interval: 3000
});


