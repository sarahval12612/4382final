(function() {

    angular
        .module('airplaneApp')
        .controller('weatherCtrl', weatherCtrl);

    weatherCtrl.$inject = ['$scope', 'SelectedData', 'DarkskyWeather'];

    function weatherCtrl($scope, SelectedData, DarkskyWeather) {

        var vm = this;
        console.log(window.location);

        vm.content = "Petfinder";

        vm.selectedDepartureICAO = "";
        vm.selectedArrivalICAO = "";
        vm.selectedWeight = "";

        //check selected Departure
        if (SelectedData.selectedDepartureICAO !== null) {
            vm.selectedDepartureICAO = SelectedData.selectedDepartureICAO;
        }
        
        //check selected Arrival
        if (SelectedData.selectedArrivalICAO !== null) {
            vm.selectedArrivalICAO = SelectedData.selectedArrivalICAO;
        }

        //check selected weight
        if (SelectedData.selectedWeight !== null) {
            vm.selectedWeight = SelectedData.selectedWeight;
        }

        //refactored for Angular 1.6 - removed success/error, used Promises...
        vm.getDepartureWeather = function() {
            
            var lat = vm.selectedDepartureICAO.airportLat;
            console.log(lat);
            var lon = vm.selectedDepartureICAO.airportLon;
            console.log(lon);            

            DarkskyWeather.getWeather(lat, lon)
                .then(function(response) {
                    vm.departureWeather = response.data;
                    console.log(vm.departureWeather);
                })
                .catch(function(e) {
                    console.log(e);
                });
        }

        //refactored for Angular 1.6 - removed success/error, used Promises...        
        vm.getArrivalWeather = function() {
            
            var lat = vm.selectedArrivalICAO.airportLat;
            var lon = vm.selectedArrivalICAO.airportLon;

            //refactored for Angular 1.6 - removed success/error, used Promises...
            DarkskyWeather.getWeather(lat, lon)
                .then(function(response) {
                    vm.arrivalWeather = response.data;
                    console.log(vm.arrivalWeather);
                })
                .catch(function(e) {
                    console.log(e);
                });
        }
        
        //call services
        vm.getDepartureWeather();
        vm.getArrivalWeather();

    }

})();
