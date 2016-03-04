angular.module('app')
	.controller('emissionsController', ['$scope', 'dayFactory', 'viewFactory', 'networkFactory', 'timeFactory', function(scope, day, view, networks, time) {
		// TODO : This getday is hardcoded, needs to be made today / based on the timefactory thing
		day.search('bbc1', moment.utc('2016-02-24'))
			.then(function(res){
				scope.channels = res.data
				scope.channels.forEach(function(cur) {
					cur.emissions.forEach(function(cur) {
						if (cur.end < cur.start)
							console.log(cur.title, moment.utc(cur.start).format(), moment.utc(cur.end).format())
					})
				})
			})
		scope.colorTable = {}

		scope.log = function (val) {console.log(val)}

		scope.activeNetworks = networks.activeNetworks


		networks.all().then(function(networks) {
			networks.data.forEach(function(cur) {
				scope.colorTable[cur.callsign] = cur.color
			})
			console.log('color table : ', scope.colorTable)
		})

			
		scope.absBlockWidth = view.absBlockWidth
		scope.relBlockWidth = view.relBlockWidth
	}])