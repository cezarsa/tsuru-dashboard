(function($, window){

	var graph = function(opts) {
		if (opts["envs"].hasOwnProperty("GRAPHITE_HOST")){
			$.graphiteGraph(opts);
		}
	}

	var allGraphs = function(appName, envs) {
		var kinds = ["mem_max", "cpu_max", "connections"];
		$.each(kinds, function(i, kind) {
			var opts = {
				appName: appName,
				serie: "1min",
				from: "1h",
				hover: false,
				kind: kind,
				envs: envs
			}
			graph(opts);
		});
	};

	$.AllGraphs = allGraphs;
	$.Graph = graph;

})(jQuery, window);