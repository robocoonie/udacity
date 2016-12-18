//var name = "Lee Almodovar";
//var role = "Senior QA Test Engineer";

//var formattedName = HTMLheaderName.replace("%data%", name);
//var formattedRole = HTMLheaderRole.replace("%data%", role);

//$("#header").prepend(formattedRole);
//$("#header").prepend(formattedName);


var bio = {
	"name":"Lee Almodovar",
	"role":"Senior QA Test Engineer",
	"contacts": {
		"email":"me@leealmodovar.com",
		"mobile":"562-360-0451",
		"github":"robocoonie",	
		"twitter":"@Lee_Almodovar",
		"location":"Los Angeles"
	},
	"biopic":"http://i.imgur.com/r1wfADf.png",
	"welcomeMessage":"Hi, I'm Lee Almodovar. I help software developers find the little quirks that make their applications stop functioning.",
	"skills":["JIRA Administration", "Selenium WebDriver", "Mobile Testing", "Manual Testing", "Mocha", "Javascript"]
}

var work = {
	"jobs": [
		{
			"employer":"Hallmark SpiritClips",
			"title":"QA Automation Engineer",
			"location":"Santa Monica, CA",
			"dates":"9/2015 - 2/2016",
			"description":"Release coordinator for Print-on-Demand platform project; handling scheduling, preparation of release notes, and daily deployments. QA Automation implemented using JavaScript and Node.js with Mocha framework and Selenium WebDriver."
		},
		{
			"employer":"iCrossing, Inc.",
			"title":"Lead QA Automation Engineer",
			"location":"Santa Monica, CA",
			"dates":"4/2015 - 8/2015",
			"description":"Implemented groundwork for JavaScript and Node.js-based automation utilizing SauceLabs VMs and the Mocha framework with Selenium WebDriver. Helped in establishing Jenkins continuous integration automation and build system. Managed a small team of automation engineers."
		},
		{
			"employer":"Jukin Media, Inc.",
			"title":"Senior QA Test Engineer",
			"location":"Culver City, CA",
			"dates":"5/2014 - 4/2015",
			"description":"Assisted in start-up growth by implementation of QA testing tools and policy, IT server hardware, and cloud backup solutions to facilitate faster, cleaner delivery, and efficient storage of project code. Established project documentation procedures, as well as creating QA testing guidelines and strategies. Served as System Administrator for Atlassian products, as well as IT Help Desk during fledling stages of company growth."
		},
		{
			"employer":"TTMS, Inc.",
			"title":"Mobile QA Test Engineer",
			"location":"Torrance, CA"
			"dates":"3/2014 - 5/2014",
			"description":"Creation and maintenance of test cases and suites for a multi-component iOS and Android-based mobile Telematics solution for new-model Lexus brand vehicles. Created front-end automation testing tools using JavaScript and Selenium IDE."
		},
		{
			"employer":"NuORDER, Inc.",
			"title":"Senior QA Test Engineer",
			"location":"West Hollywood, CA",
			"dates":"2/2013 - 1/2014",
			"description":"Web-based and iOS manual testing with minor front-end JavaScript and Selenium WebDriver automation on a B2B-driven service, as well as test case creation and management including client tech support and troubleshooting. Also served as JIRA Administrator."
		},
		{
			"employer":"Guthy-Renker",
			"title":"Front-End QA Test Engineer",
			"location":"Santa Monica, CA",
			"dates":"1/2012 - 2/2013",
			"description":"E-commerce and mobile front-end website and analytics testing, including form validation using Selenium WebDriver and JavaScript. Provided US Spanish localization software translation."
		},
		{
			"employer":"42 Entertainment",
			"title":"Front-End QA Test Engineer",
			"location":"Pasadena, CA",
			"dates":"8/2011 - 12/2011",
			"description":"Established efficient testing and task management system for the entire software development life cycle and process, coordinating the Development, Game Design, Art, Production and QA departments. Developed milestones, test cases and suites, and procedures for customer service. Served as System Administrator for Trac defect tracking system and TestLink test case management system."
		},
		{
			"employer":"Wilshire Media Group",
			"title":"Mobile QA Test Engineer",
			"location":"Westwood, CA",
			"dates":"5/2011 - 7/2011",
			"description":"Android-based manual testing of client/cloud music download and management application on prototype devices and SanDisk storage media for Cricket Wireless."
		},
		{
			"employer":"Smith Micro Software",
			"title":"Mobile QA Test Engineer",
			"location":"Aliso Viejo, CA",
			"dates":"3/2011 - 5/2011",
			"description":"Manual testing of a variety of cellular telephony modem and phone devices, testing dynamic tunneling network management firmware across multiple Windows, Linux and Android environments."
		},
		{
			"employer":"Blockbuster Digital",
			"title":"Mobile QA Test Engineer",
			"location":"Los Angeles, CA",
			"dates":"11/2010 - 3/2011",
			"description":"White-box testing of digital video rental and playback platform for Android, iPhone, Blackberry and Windows Mobile devices, including video streaming on-demand services."
		},
		{
			"employer":"NFL Network",
			"title":"Regression QA Test Engineer",
			"location":"Culver City, CA",
			"dates":"8/2010 - 11/2010",
			"description":"Regression and functionality testing for the NFL.com on-demand video and blog content, as well as their proprietary internal content management tool. Duties included monitoring live game feeds on NFL GamePass and AudioPass products to ensure sync of audio and video streams of games in-progress."
		},
		{
			"employer":"Activision-Blizzard",
			"title":"QA Tester",
			"location":"El Segundo, CA",
			"dates":"6/2010 - 8/2010",
			"description":"Console-specific black-box video game testing on 3rd Generation consoles and associated peripherals for the Tony Hawk Shred video game."
		},
		{
			"employer":"Dorado",
			"title":"French Localization Consultant",
			"location":"San Mateo, CA",
			"dates":"11/2009 - 12/2009",
			"description":"Localization of Flex source code Canadian English ANSI strings to Canadian French UTF-8 strings for use in the internal Toronto Dominion Bank mortgage management software."
		},
		{
			"employer":"Frog Design",
			"title":"Spanish Localization Consultant",
			"location":"San Francisco, CA",
			"dates":"8/2009 - 10/2009",
			"description":"Localization of source code American English UTF-8 strings to US Spanish and Latin-American Spanish UTF-8 strings for use in a prototype cell phone for AT&T."
		},
		{
			"employer":"Cisco",
			"title":"Spanish Localization Consultant",
			"location":"San Jose, CA",
			"dates":"8/2009"
			"description":"Localization of source code American English UTF-8 strings to US Spanish and Latin-American Spanish UTF-8 strings for use in existing and prototype Enterprise network configuration and management software."
		},
		{
			"employer":"Phoenix Technologies",
			"title":"French/Spanish Localization QA Test Engineer",
			"location":"Milpitas, CA",
			"dates":"12/2008 - 8/2009",
			"description":"Primary on-site translation and localization consultant for French and Spanish languages, including manual and Selenium IDE automation testing of web-based applications, BIOS-based security solutions and E-commerce platforms."
		},
		{
			"employer":"Mousechief Co.",
			"title":"QA Tester",
			"location":"Emeryville, CA",
			"dates":"5/2008",
			"description":"Final-phase manual playtesting of Mac and PC-based Dangerous High School Girls in Trouble video game."
		},
		{
			"employer":"LimeLife, Inc.",
			"title":"Lead QA Test Engineer",
			"location":"Menlo Park, CA",
			"dates":"11/2006 - 5/2008",
			"description":"QA certification testing on BREW, J2ME, and Danger mobile phones, pre-Smartphone era. Lead various projects and QA teams to deliver projects on time and under budget. Also served as BREW certification trainer."
		},
		{
			"employer":"Sony Pictures Digital",
			"title":"Mobile QA Tester",
			"location":"Culver City, CA",
			"dates":"6/2006 - 10/2006",
			"description":"QA certification testing on BREW, J2ME, and Danger mobile phones, pre-Smartphone era. Served as BREW certification trainer, and instituted a scripted version of the certification worksheet for use by the test team."
		},
		{
			"employer":"EA Mobile",
			"title":"Senior QA Certification Tester",
			"location":"Los Angeles, CA",
			"dates":"11/2005 - 6/2006",
			"description":"Code Release Test Engineer involved in BREW certification testing as final step before submission to carriers."
		},
		{
			"employer":"Jakks Pacific",
			"title":"QA Tester",
			"location":"Malibu, CA",
			"dates":"10/2005 - 11/2005",
			"description":"Testing of embedded system video game devices."
		},
		{
			"employer":"Activision",
			"title":"QA Tester",
			"location":"Santa Monica, CA",
			"dates":"6/2005 - 10/2005",
			"description":"Black-box video game testing on 2nd generation console-specific devices and peripherals for the Ulimate Spider-Man and Tony Hawk's American Wasteland video games."
		},
		{
			"employer":"Transportation Security Administation",
			"title":"Transportation Security Officer",
			"location":"Los Angeles, CA",
			"dates":"10/2003 - 11/2004",
			"description":"Checked Baggage TSO for LAX certified for use of various detection machines and technologies. Appointed to the Mobile Screening Team from June 2004 until August 2004."
		},
		{
			"employer":"Disneyland Resort",
			"title":"Merchandise Cast Member",
			"location":"Anaheim, CA",
			"dates":"5/2001 - 6/2003",
			"description":"Exercised Disney Model of Customer Service in a role of Store Operations Cast Member. Promoted to Lead Arcade Service Technician from January 2003 until June 2003."
		}
	]
}

var projects = {
	"projects": [
		{
			"title":"",
			"dates":"",
			"description":"",
			"images": [
				"url1": "",
				"url2": "",
				"url3": ""
			]
		}
	]
}

var education = {
	"schools": [
		{
			"name":"Long Beach City College",
			"city":"Long Beach, CA",
			"degree":"Incomplete",
			"majors": ["Computer Science", ""],
			"dates":"2000-2006",
			"url": "http://lbcc.edu"
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




