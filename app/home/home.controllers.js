angular.module('app')
    .controller('HomeCtrl',function($scope){
        $scope.message='this is home';
            $scope.title = "Mission Control Api Doc";

            $scope.queryStr='';
            const geekwise = {};
            geekwise.name ="Geekwise";
            geekwise.baseUrl = 'geekwise/';

            geekwise.methods =['GET','POST','PATCH'];

            geekwise.dataTypes = ['dashboard','rounds','instructors','assistants','students','courses','stats'];



            geekwise.urls = [

                //dashboard
                    {url:'dashboard',method:'GET',desc:'get dashboard data',dataType:"dashboard"},


                //rounds
                    {url:'rounds',method:"GET", dataType:"rounds", desc: "get all rounds" },

                    {url:'rounds/:id',method:"GET", dataType:"rounds" , desc: "get a specific round" },

                    {url:'rounds',method:"POST", dataType:"rounds", desc: "create a new round" },

                    {url:'rounds/:id',method:"PATCH", dataType:"rounds" , desc: "update a specific round" },

                    //instructors
                    {url:'instructors',method:"GET", dataType:"instructors", desc: "get all instructors"  },

                    {url:'instructors/:id',method:"GET", dataType:"instructors",desc: "get a specific instructor" },

                    {url:'instructors',method:"POST", dataType:"instructors",desc: "create a new instructor" },

                    {url:'instructors/:id',method:"PATCH", dataType:"instructors" ,desc: "update a specific instructor"},

                    //assistants
                    {url:'assistants',method:"GET", dataType:"assistants" ,desc: "get all assistants"},

                    {url:'assistants/:id',method:"GET", dataType:"assistants",desc: "get a specific assistant" },

                    {url:'assistants',method:"POST", dataType:"assistants",desc: "create a new assistant"},

                    {url:'assistants/:id',method:"PATCH", dataType:"assistants",desc: "update a specific assistant"},

                    //students
                    {url:'students',method:"GET", dataType:"students" ,desc: "get all students" },

                    {url:'students/:id',method:"GET", dataType:"students" ,desc: "get a specific student" },

                    {url:'students',method:"POST", dataType:"students" ,desc: "create a new student" },

                    {url:'students/:id',method:"PATCH", dataType:"students",desc: "update a specific student" },

                    //courses
                    {url:'courses',method:"GET", dataType:"courses" ,desc: "get all courses" },

                    {url:'courses/:id',method:"GET", dataType:"courses",desc: "get a specific course" },

                    {url:'courses',method:"POST", dataType:"courses", desc: "create a new course"},

                    {url:'courses/:id',method:"PATCH", dataType:"courses",desc: "update a specific course"},

                    //stats
                    {url:'stats',method:'GET',dataType:"stats",desc: "get all stats" },


            ];


            const hashtag = {};
            hashtag.name ="Hastag";

            const cohorts = {};
            cohorts.name = "Cohorts";

            const shift3 = {};
            shift3.name = 'Shift3';

            const capture = {};
            capture.name = "Capture";

            const tenants = {};
            tenants.name = "Tenants";

            const payments = {};
            payments.name = "Payments";

            const events = {};
            events.name = "Events";

            const timeline = {};
            timeline.name = 'Timeline';

            const users = {};
            users.name = "Users";




            $scope.selectedEndPoint = geekwise;
            $scope.selectedOrder = 'dataType';


            $scope.endPoints = [
                    geekwise,
                    hashtag,
                    cohorts,
                    shift3,
                    capture,
                    tenants,
                    payments,
                    events,
                    timeline,
                    users
            ];



            $scope.selectEndPoint= function (endpoint){
                    $scope.selectedEndPoint = endpoint;
            };

            $scope.selectOrder = function(order){
                    $scope.selectedOrder =  order
            };

            $scope.searchFunc = item => {
                    let partIndex;
                    let result;
                    let query;
                    let jsonStr = JSON.stringify(item).toLowerCase();

                    if ($scope.queryStr && $scope.queryStr.trim()) {
                            query = $scope.queryStr.trim().split(' ');
                            result = true;
                            for (partIndex in query) {
                                    if (~jsonStr.indexOf(query[partIndex].toLowerCase())) {
                                            result = result && true;
                                    } else {
                                            result = false;
                                    }
                            }

                            return result;
                    }

                    return true;
            };

            $scope.hasChildren=function(index,type){

                    var repeated = document.getElementsByClassName('repeated');
                    console.log(index,type);

                    return true;
            }
});
