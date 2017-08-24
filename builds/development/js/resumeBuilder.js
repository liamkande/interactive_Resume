var bio = {
	name: 'Liam Kande',
	role: 'Web Developer',
	contacts: {
		mobile: "646-717-0370",
		email: ["kande.ans@outlook.com"],
		github: 'liamkande',
		twitter: '@lkplaysmusic',
		location: "New York",
	},
	welcomeMessage: "Hello! my name is Kande, and this is my resume. Please feel free to reach if you have any questions. Cheers!",
	skills: [
	'programing', 'Javascript', 'ReactJS', 'jQuery', 'HTML', 'CSS', 'NodeJS', 'SASS', 'GitHub', 'Photoshop', 'Illustrator', 'Dreamweaver','Bootstrap'
	],
	//biopic: 'https://avatars0.githubusercontent.com/u/23286067?v=3&s=460'
};

bio.display = function(){
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$('#topContacts').prepend(formattedMobile);

	if (bio.contacts.email.length > 0){
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email.join(' | ') );
	$('#topContacts').append(formattedEmail);
	}
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	//var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
	var formattedSkills = HTMLskills.replace("%data%", bio.skills);

	$('#topContacts').append(formattedTwitter, formattedGithub, formattedLocation);
	$('#header').prepend(formattedName, formattedRole);
	$('#footerContacts').append(formattedMobile, formattedEmail, formattedGithub, formattedTwitter,formattedLocation);

	if(bio.skills.length > 0) {
	$('#header').append(HTMLskillsStart);
	var formattedSkills = HTMLskills.replace("%data%", bio.skills.join(', ').toUpperCase() + '.');
	$('#skills').prepend(formattedSkills);
	}
};

bio.display();

var education = {
		schools: [
		{
			name: 'Full Sail University',
			location: 'Winter Park, FL',
			degree: 'BA in Web Design & Development',
			major: ['Web Design & Development'],
			dates: '2015 - 2017',
			description: "Gained a solid understanding of essential software, principles of usability, fundamentals of coding in HTML5, CSS3, JavaScript and jQuery as well as color, type, layout, and user interface design."
		},
		{
			name: 'Udacity',
			location: 'Mountain View, CA',
			degree: 'Nanodegree in Front-End Development',
			major: ['Web Development'],
			dates: '2016 - 2016',
			//url: "",
			description: "A miniature degree program for graduates developed by AT&T, Google, Hack Reactor, and GitHub."
		},
		{
			name: 'ASU',
			location: 'Phoenix, AZ',
			degree: 'BA in Digital culture',
			major: ['Digital Culture Design'],
			dates: '2009 - 2013',
			url: "",
			description: "This dynamic curriculum prepared me with tangible skills in cultural media but also with the critical-thinking skills to understand the broader impact of technologies on life and culture."
		}
	]
};

education.display = function() {
		$("#education").append(HTMLschoolStart);

		var formal= education.schools;

		function addFormalSchool(school) {
            formattedName = HTMLschoolName.replace("%data%", school.name);
            formattedDegree = HTMLschoolDegree.replace('%data%', school.degree);
            formattedDate = HTMLschoolDates.replace('%data%', school.dates);
            formattedLocation = HTMLschoolLocation.replace('%data%', school.location);
            formattedMajor = HTMLschoolMajor.replace('%data%', school.major.join( ', '));
            formattedNameDegree = formattedName + formattedDegree;
            formattedDescription = HTMLschoolDescription.replace("%data%", school.description);
            $(".education-entry:last").append(formattedNameDegree, formattedDate, formattedLocation, formattedMajor, formattedDescription);

			$('.education-entry > a').slice(0, 1).attr("href", "https://www.fullsail.edu");
			$('.education-entry > a').slice(1, 2).attr("href", "http://www.udacity.com/");
        	$('.education-entry > a').slice(2, 3).attr("href", "http://www.asu.edu/");
        }

        formal.forEach(addFormalSchool);
};

education.display();

var work = {
	jobs: [
	{
		employer: 'Fox News',
		title: 'Frontend Developer',
		dates: "May 2017 - (Contract)",
		location: 'New York, NY',
		description: "• Guarantee the technical feasibility of UI/UX designs.<br>• Optimize applications for maximum speed and scalability.<br>• Evaluate and implement advanced JavaScript libraries and frameworks as needed."
	},
	{
		employer: 'Microsoft',
		title: 'Brand Ambassador',
		dates: "June 2016 - May 2017",
		location: 'New York, NY',
		description: "• Promoted the brand through consumer interactions at events ranging in scale.<br>• Met and exceeded company sales and productivity goals by 33% beyond holidays targets.<br>• Identified and solved technical issues with a variety of diagnostic tools."
	},
	{
		employer: 'Samsung Electronics',
		title: 'User Experience Consultant',
		dates: "September 2013 - February 2015",
		location: 'New York, NY',
		description:"• Installed software, modified and repaired hardware to resolve technical issues.<br>• Managed call flow and responded to technical support needs of customers.<br>• Resolved problems with malfunctioning products including mobile phones, tablets, and computers."
	}
	]
};

work.display = function() {
		$('#workExperience').append(HTMLworkStart);

		var workList = work.jobs;

		function addWorkExperience(job){
		var formattedEmployer = HTMLworkEmployer.replace('%data%', job.employer);
		var formattedTitle = HTMLworkTitle.replace('%data%', job.title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		var formattedDates = HTMLworkDates.replace('%data%', job.dates);
		var formattedLocation = HTMLworkLocation.replace('%data%', job.location);
		var formattedDescription = HTMLworkDescription.replace('%data%',job.description);
		$('.work-entry:last').append(formattedEmployerTitle, formattedDates, formattedLocation, formattedDescription);

		$('.work-entry:last > a').slice(0, 1).attr("href", "https://www.microsoft.com");
		$('.work-entry:last > a').slice(1, 2).attr("href", "http://www.samsung.com/");
		$('.work-entry:last > a').slice(2, 3).attr("href", "https://actionlink.com/");
	}
	workList.forEach(addWorkExperience);
};

work.display();

var projects = {
	projects: [
	{
		title: "Bulletin Board App with React.js",
		dates: '2017',
		description: "<em>React.js | ES6 | JSX | Babel | NPM.</em> <br>\n⦿Developed a Bulletin board app using React components and properties, added state to components to handle events, worked with PropTypes, developed a more complete app with React.js and companion tools like Babel, NPM, and more.",
		images: ["images/prj1.png"]
	},
	{
		title: "Responsive Design with Bootstrap",
		dates: '2017',
		description: "<em>Bootstrap | Responsive Design | HTML | CSS | JavaScript.</em> <br>\n⦿Created a website with a custom Bootstrap layout grid, Inserted a navigation bar, a container for a hero image, glyphicons and page content by working with columns and containers.",
		images: ["images/prj2.png"]
	}
	]
};

projects.display = function() {
		$('#projects').append(HTMLprojectStart);
		var projectList = projects.projects;

		function addProjects(project){
		var formattedTitle = HTMLprojectTitle.replace('%data%', project.title);
		var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
		var formattedDescription = HTMLprojectDescription.replace('%data%', project.description);
		$('.project-entry:last').append(formattedTitle, formattedDates, formattedDescription);

		$('.project-entry:last > a').slice(0, 1).attr("href", "https://github.com/liamkande/Bulletin-Board-App-with-ReactJS/archive/master.zip");
		$('.project-entry:last > a').slice(1, 2).attr("href", "https://github.com/liamkande/Responsive-Design-with-Bootstrap/archive/master.zip");

		if (project.images.length > 0) {
			project.images.forEach(function(img){
				var formattedImage = HTMLprojectImage.replace("%data%", img);
				$(".project-entry:last").append(formattedImage);
			});
		}
	}
	projectList.forEach(addProjects);
};

projects.display();

$("#mapDiv").append(googleMap);

function inName(name) {
	name = name.trim().split(" ");
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	name[1] = name[1].toUpperCase();
	return name[0] + ' ' + name[1];
}
$('#main').append(internationalizeButton);
