var name = "Lee Almodovar";
var role = "Senior QA Test Engineer";

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


var bio = {
	"name":"Lee Almodovar",
	"role":"Senior QA Test Engineer",
	"contacts": {
		"email":"me@leealmodovar.com",
		"mobile":"562-360-0451",	
		"twitter":"@Lee_Almodovar",
		"location":"Los Angeles"
	},
	"bioPic":"http://i.imgur.com/r1wfADf.png",
	"welcomeMessage":"Hi, I'm Lee Almodovar. I help software developers find the little quirks that make their applications stop functioning.",
	"skills":["JIRA Administration", "Selenium WebDriver", "Mobile Testing", "Manual Testing", "Mocha", "Javascript"]
}

$("#main").append(bio.name);

var work = {};
work.position = "Sr. QA Test Engineer";
work.employer = "Hallmark Spiritclips";
work.years = 0.5;

var education = {
	"schools": [
		{
			"name":"Long Beach City College",
			"city":"Long Beach, CA",
			"degree":"Transfer, Incomplete",
			"major":"Computer Science",
			"years":"2000-2006"
		}
	],

	"onlineCourses": [
		{
			"title":"JavaScript Basics",
			"school":"Udacity",
			"dates":"2016",
			"url":"http://www.udacitycom/course/ud804"
		}
	]
}

$("#main").append(work.position);
$("#main").append(education.schools.name);


