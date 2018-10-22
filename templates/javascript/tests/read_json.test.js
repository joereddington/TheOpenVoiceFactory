 /*
  * Unit tests for javascript/comscan.js
  *
  */
 describe('Open Voice Factory internal format behaviour tests', function() {
 
     // inject the HTML fixture for the tests
     beforeEach(function() {
         var fixture = '<table id="mainGrid" border=1 height=520 width=720 class="four"></table> <form name="myform"> <textarea id="messagewindow" name="outputtext"></textarea> </form>';
         document.body.insertAdjacentHTML(
             'afterbegin',
             fixture);
         setupInternalDataStructures(sample);
         setupMessageWindow();
 	manifest="";
 
     });
 
 
     // * Does that object have the right number of slides in it. 
     it('We can parse an example json document', function() {
         expect(Object.keys(links).length).toBe(100);
     });
 
 
     // * When pressing a particular button, does the message window change apropreityly 
     it('Message window sets up and changes with button press.', function() {
         expect(document.getElementById("messagewindow").value).toBe("");
         add(1, 1);
         expect(document.getElementById("messagewindow").value).toBe(" I want to talk to you.");
     });
 
 
     it('clear function works', function() {
         expect(document.getElementById("messagewindow").value).toBe("");
         add(1, 1);
         expect(document.getElementById("messagewindow").value).toBe(" I want to talk to you.");
         add(0, 4);
         expect(document.getElementById("messagewindow").value).toBe("");
     });
 
 
     it('clear function works', function() {
         expect(document.getElementById("messagewindow").value).toBe("");
         add(1, 1);
         expect(document.getElementById("messagewindow").value).toBe(" I want to talk to you.");
         add(0, 4);
         expect(document.getElementById("messagewindow").value).toBe("");
     });
 
 
     it('Two part function works', function() {
         expect(document.getElementById("messagewindow").value).toBe("");
         add(2, 2);
         add(3, 1);
         add(1, 1);
         expect(document.getElementById("messagewindow").value).toBe(" I have a pain in my");
         expect(key).toBe("bodyparts")
 
 
     });
 
     // * When pressing a particular button, does the contents of other buttons change. 
     it('the add function changes the keys', function() {
         setupInternalDataStructures(sample);
         add(2, 2);
         expect(key).toBe("personalcare");
     });
 });
 
 
 describe("Manifest testing", function() {
     beforeEach(function(done) {
         // You can call any async task, when done() is called the test will begin
         manifest = ""
         load_json_file("manifest.json", function hope(man) {manifest=man;
         });
         setTimeout(() => {
             done();
         }, 1000);
     });
 
 
     it('We can get a manifest file', function(done) {
         expect(manifest.length).not.toBeLessThan(1)
         setTimeout(done(), 2000)
     });
 
 
     it('Check manifest file reads correctly', function(done) {
         expect(manifest['format']).toBe("open-board-0.1")
         setTimeout(done(), 2000)
     });
 });
 
 
 describe("Load Simple OBF file", function() {
     beforeEach(function(done) {
         // You can call any async task, when done() is called the test will begin
         currentpage = ""
         manifest = ""
         load_json_file("boards/toppage.obf",function(input){currentpage=input});
         load_json_file("manifest.json",function(input){manifest=input});
         setTimeout(() => {
             done();
         }, 3000);
     });
 
 
     it('Mainpageloaded', function(done) {
         expect(currentpage.length).not.toBeLessThan(1)
         done()
     });
 
 
     it('Check the number of columns', function(done) {
         expect(currentpage.grid.columns).toBe(5)
         done()
     });
 
 
     it('Work out the grid', function(done) {
         expect(get_obf_button(3, 3).label).toBe("Describing")
         done()
     });

     describe("With adds", function() {

beforeEach(function(done){
 document.getElementById("messagewindow").value=""
console.log("hello there!") 
console.log("hello there!"+document.getElementById("messagewindow").value)
console.log(currentpage["id"])
add(1,1);
         setTimeout(() => {
             done();
         }, 2000);

});

it('with an add', function(done){

console.log("more there!") 
console.log("more there!"+document.getElementById("messagewindow").value)
console.log(currentpage["id"])
expect(document.getElementById("messagewindow").value).toBe(" I want to talk to you.");
done()
});





});


 });
 
 describe("Load root file from manifest", function() {
     beforeEach(function(done) {
        var fixture = '<table id="mainGrid" border=1 height=520 width=720 class="four"></table> <form name="myform"> <textarea id="messagewindow" name="outputtext"></textarea> </form>';
        document.body.insertAdjacentHTML( 'afterbegin', fixture);
         currentpage = ""
         manifest = ""
	 setupMessageWindow()
         // You can call any async task, when done() is called the test will begin
         load_json_file("manifest.json", parse_manifest);
         setTimeout(() => {
             done();
         }, 2000);
     });
 
     it('Work out the grid', function(done) {
         expect(get_obf_button(3, 3).label).toBe("Describing")
         done()
     });




 });
 
 





   //
//
//    it('clear function works', function() {
//        expect(document.getElementById("messagewindow").value).toBe("");
//        add(1, 1);
//        expect(document.getElementById("messagewindow").value).toBe(" I want to talk to you.");
//        add(0, 4);
//        expect(document.getElementById("messagewindow").value).toBe("");
//	done()
//    });
//
//
//    it('Two part function works', function() {
//        expect(document.getElementById("messagewindow").value).toBe("");
//        add(2, 2);
//        add(3, 1);
//        add(1, 1);
//        expect(document.getElementById("messagewindow").value).toBe(" I have a pain in my");
//        expect(key).toBe("bodyparts")
//	done()
//
//
//    });
//
//    // * When pressing a particular button, does the contents of other buttons change. 
//    it('the add function changes the keys', function() {
//        setupInternalDataStructures(sample);
//        add(2, 2);
//        expect(key).toBe("personalcare");
//	done()
//    });




//Keep for the spy snippet 
//it('Speak function is triggered...', function() {
//       spyOn(window, "say");
//      expect(think).toHaveBeenCalled();
//     //learned this at http://www.htmlgoodies.com/html5/javascript/spy-on-javascript-methods-using-the-jasmine-testing-framework.html#fbid=KJtVgELupgs
//  });
