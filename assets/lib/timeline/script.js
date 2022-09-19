$(document).ready(function() {
	$('#my-timeline').timelinexml({ 
		src : 'assets/timeline/temporada2018_2019.xml',
		showLatest : false, 
		selectLatest : false,
		eventTagName : "event",
		dateTagName : "date",
		titleTagName : "title",
		thumbTagName : "thumb",
		contentTagName : "content",
		linkTagName : "link",
		mode : "xml",
		htmlEventClassName : "timeline-event",
		htmlDateClassName : "timeline-date",
		htmlTitleClassName : "timeline-title",
		htmlContentClassName : "timeline-content",
		htmlLinkClassName : "timeline-link",
		htmlThumbClassName : "timeline-thumb"
	});
});