$(document).ready(function() {
	
	function Journal() {
		this.entries = [];
		this.addEntry = function addEntr(entry) {
			this.entries.push(entry);
		},
		this.displayAllEntries = function() {
			for(var i = 0; i < this.entries.length; i++) {
				var entry = this.entries[i];
				$('#displayJournal').append(entry.toHtml());
			}
		}
	}
	function Entry(title, author, content, tag) {
		this.title = title;
		this.author = author;
		this.content = content;
		this.tag = tag;
		this.toHtml = function() {
			var output = "";
			output += "<article class=\"journalEntries\"><h3>";
			output += this.title + "</h3><h5>";
			output += this.author + "</h5><p>";
			output += this.content + "</p><p>";
			for(var i=0; i<tag.length; i++) {
				output += "#" + tag[i] + " ";
			}
			output += "</p>";
			output += "</article>";
			return output;
		}
	}
	var myJournal = new Journal();	
		myJournal.addEntry(new Entry("First Entry", "By me", "Blah Blah Blah", ["pureawesomeness"]));
		myJournal.addEntry(new Entry("Second Entry", "By me", "Blah Blah Blah", ["pureawesomeness"]));
		myJournal.addEntry(new Entry("Third Entry", "By me", "Blah Blah Blah", ["pureawesomeness"]));
		myJournal.addEntry(new Entry("Fourth Entry", "By me", "Blah Blah Blah", ["pureawesomeness"]));

		myJournal.displayAllEntries();

		$('#journalForm').submit(function() {
			event.preventDefault();
			var title = $('#titleName').val();
			var author = $('#authorName').val();
			var content = $('#entryContent').val();
			var tags = $('#tags').val().split(' ');
			var entry = new Entry(title, author, content, tags);
			myJournal.addEntry(entry);
			$('#displayJournal').append(entry.toHtml());	
			console.log(title + ' ' + author + ' ' + content + ' ' + tags);
			console.log(entry.toHtml());
		});


});