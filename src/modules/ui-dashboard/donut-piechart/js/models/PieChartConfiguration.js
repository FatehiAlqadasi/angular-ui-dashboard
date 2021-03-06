angular.module('ui.dashboard.DonutApp').factory('ui.dashboard.PieChartConfiguration',function(){

	var PieChartConfiguration = function(configuration){
		this.id = this._generateID();
		this.width = 300;
		this.height = 300;
		this.amplitude = 360;
		this.startAngle = 0;
		this.padAngle = 0;
		this.radius = 90;
		this.strokeWidth = 90;
		this.opacity = 1;
		//Green scale : ['#3AAB89','#6BD3B4','#A4EDD7','#E0FCF4','#CEECE3'];
		this.colors = d3.scale.category10().range();
		this.sort = null;
		this.slice = {
			border : {
				display : true,
				color : '#FFFFFF',
				width : 2
			},
			label : {
				//Label position outside of the slice : 'out', centered in slice : 'in'
				position : 'out',
				display : true,
				line : {
					display : true,
					size : 10,
					color : 'gray',
					class : 'ui-dashboard-pie-label-line'
				},
				value : {
					fontsize : 12,
					color : 'gray',
					class : 'ui-dashboard-pie-label-value',
					format : function(value){
				        return value.data;
				    }
				},
				name : {
					topOffset : 2,
					fontsize : 11,
					color : 'lightgrey',
					class : 'ui-dashboard-pie-label-name',
					format : function(value){
				        return '';
				    }
				}
			},
			hover : {
				apply : true,
				callback : function(value){},
				growBy : 5
			},
			click : function(value){}
		};
		this.border = {
			display : true,
			color : 'lightgrey',
			strokeWidth : 2,
			opacity : 1
		};
		this.title = {
			display : true,
			fontsize : 24,
			value : '',
			color : 'black',
			opacity : 1
		};
		this.tooltip = {
			display : true,
			format : function(value,index) {
				return "<strong>Value:</strong> <span style='color:red'>" + value.data + "</span>";
			}
		};
		this.transitions = {
			arc : 1000,
			label : 500
		};

		this.update(configuration);
	};

	PieChartConfiguration.prototype._generateID = function(){
		var id = '';
	    var possible = 'abcdef0123456789';

	    for( var i=0; i < 16; i++ )
	        id += possible.charAt(Math.floor(Math.random() * possible.length));

	    return 'pie-chart-'+id;
	};

	PieChartConfiguration.prototype._mergeRecursive = function(obj1,obj2){
		for (var p in obj2) {
            try {
                obj1[p] = ( obj2[p].constructor==Object ) ? this._mergeRecursive(obj1[p], obj2[p]) : obj2[p];
            } catch(e) {
                obj1[p] = obj2[p];
            }
        }
        return obj1;
	};


	PieChartConfiguration.prototype.update = function(configuration){
		this._mergeRecursive(this,configuration);
		this.strokeWidth = this.radius;
	};

	PieChartConfiguration.prototype.getColor = function(index){
		return (this.colors[index]) ? this.colors[index]:this.colors[0];
	};

	return PieChartConfiguration;
});