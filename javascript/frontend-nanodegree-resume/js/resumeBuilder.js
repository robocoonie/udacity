var name = "Lee Almodovar";
var role = "QA Automation Engineer";

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


var bio = {
	"name":"Lee Almodovar",
	"role":"QA Automation Engineer",
	"contacts": {
		"email":"lee@recycledsushi.com",
		"mobile":"562-360-0451",	
		"twitter":"@Lee_Almodovar",
		"location":"Los Angeles"
	},
	"biopic":"https://dl.dropboxusercontent.com/u/29329110/BlogAssets/WorkLee.jpg",
	"welcome message":"Hi, I'm Lee Almodovar. I help software developers find the little quirks that make their applications stop functioning.",
	"skills":["JIRA Administration", "Selenium Automation", "WebDriver", "Grunt", "Mocha", "Javascript Automation"]
};

var work = {};
work.position = "QA Lead (Automation)";
work.employer = "iCrossing";
work.years = 0.08;

var education = {
	"schools": [
		{
			"name":"Long Beach City College",
			"city":"Long Beach, CA",
			"degree":"Transfer",
			"major":[
				"Computer Science",
				"Psychology"
			],
			"years":"2000-2006"
		},
		{
			"name":"Art Institute of Los Angeles",
			"city":"Santa Monica, CA",
			"degree":"Incomplete",
			"major":[
				"Web Design"
			],
			"years":"2010-2012"
		},
	],

	"onlineCourses": [
		{
			"title":"JavaScript Basics",
			"school":"Udacity",
			"dates":"2015",
			"url":"http://www.udacitycom/course/ud804"
		}
	]
}

$("#main").append(work["position"]);
$("#main").append(education.name);


