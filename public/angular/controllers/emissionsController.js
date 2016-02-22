angular.module('app')
	.controller('emissionsController', ['$scope', 'dayFactory', 'viewFactory', 'networksFactory', 'timeFactory', function(scope, day, view, networks, time) {
		// TODO : This getday is hardcoded, needs to be made today / based on the timefactory thing
		day.getDay('all', '2016-02-24')
			.then(function(res){
				scope.channels = res.data
				scope.channels.forEach(function(cur) {
					cur.emissions.forEach(function(cur) {
						if (cur.end < cur.start)
							console.log(cur.title, moment.utc(cur.start).format(), moment.utc(cur.end).format())
					})
				})
				// TODO on monday : figure out how, exactly, the different repeats are supposed to interlock
			})
		// scope.schedule = time.schedule
		// console.log(scope.schedule)


		networks.colorTable().then(function (res) {
			scope.colorTable = res
		})

			
		scope.absBlockWidth = view.absBlockWidth
		scope.relBlockWidth = view.relBlockWidth
	}])