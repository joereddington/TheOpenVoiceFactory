/*
 * Unit tests for javascript/comscan.js
 *
 */
describe('Comscan', function() {

    // inject the HTML fixture for the tests
    beforeEach(function() {
        var fixture = '<table id="mainGrid" border=1 height=520 width=720 class="four"></table> <form name="myform"> <textarea id="messagewindow" name="outputtext"></textarea> </form>';
        document.body.insertAdjacentHTML(
            'afterbegin',
            fixture);
	alert("done");

    });


// * Does that object have the right number of slides in it. 
    it('We can parse an example json document', function() {
        setupInternalDataStructures(sample);	
        expect(Object.keys(links).length).toBe(100);
    });

// * When loading the first page. Do a selection of the right squares have the correct message in them?
    it('When loading top page, the utterances are in the right place', function() {
        setupInternalDataStructures(sample);	
        expect(labels["toppage"][0][0]).toBe('Yes');
        expect(labels["toppage"][1][1]).toBe('I want to talk to you.');
    });

// * When pressing a particular button, does the message window change apropreityly 
  it('Message window sets up and changes with button press.', function() {
        setupInternalDataStructures(sample);	
	setupMessageWindow();
	expect(document.getElementById("messagewindow").value).toBe("");
	add(1,1);
	expect(document.getElementById("messagewindow").value).toBe(" I want to talk to you.");
    });


 it('clear function works', function() {
        setupInternalDataStructures(sample);	
	setupMessageWindow();
	expect(document.getElementById("messagewindow").value).toBe("");
	add(1,1);
	expect(document.getElementById("messagewindow").value).toBe(" I want to talk to you.");
	add(0,4);
	expect(document.getElementById("messagewindow").value).toBe("");
    });


   it('clear function works', function() {
        setupInternalDataStructures(sample);	
	setupMessageWindow();
	expect(document.getElementById("messagewindow").value).toBe("");
	add(1,1);
	expect(document.getElementById("messagewindow").value).toBe(" I want to talk to you.");
	add(0,4);
	expect(document.getElementById("messagewindow").value).toBe("");
    });


  it('Two part function works', function() {
        setupInternalDataStructures(sample);	
	setupMessageWindow();
	expect(document.getElementById("messagewindow").value).toBe("");
	add(2,2);
	add(3,1);
	add(1,1);
	expect(document.getElementById("messagewindow").value).toBe(" I have a pain in my");
	expect(key).toBe("bodyparts")


    });

// * When pressing a particular button, does the contents of other buttons change. 
  it('the add function changes the keys', function() {
        setupInternalDataStructures(sample);	
	add(2,2);
	expect(key).toBe("personalcare");
    });


	describe("Manifest testing", function() {
		beforeEach(function(done){
			// You can call any async task, when done() is called the test will begin
			manifest=""
			load_manifest("http://localhost:9876/base/tests/testinputs/manifest.json");
			setTimeout(() => {done();}, 100); 
		}); 
		
		
		it('We can get a manifest file', function(done) {
			expect(manifest.length).not.toBeLessThan(1)
			setTimeout(done(),2000)
			});			

		
		it('Check manifest file reads correctly', function(done) {
			console.log(manifest);
			expect(manifest['format']).toBe("open-board-0.1")
			setTimeout(done(),2000)
			});			
			});	



//Keep for the spy snippet 
//it('Speak function is triggered...', function() {
 //       spyOn(window, "say");
  //      expect(think).toHaveBeenCalled();
   //     //learned this at http://www.htmlgoodies.com/html5/javascript/spy-on-javascript-methods-using-the-jasmine-testing-framework.html#fbid=KJtVgELupgs
  //  });

});



