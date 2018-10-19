/*
 * Write unit test cases for refactoring read_json.js file
 * Unit tests for javascript using Jasmine and Karma
 *
 * Author: Joe
 * Contributer: Balvinder
 * 
 */

jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;

describe("Reading OBF Data into local data structures", function() {
  describe("Validate JSON file", function() {
    let originalTimeout;

    beforeEach(function() {
      originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
      jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
    });

    afterEach(function() {
      jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });

    it("It return error when pass incorrect JSON", function(doneFn) {
      let fileName = "test-1.obf";

      myFunctionThatMakesRequests(fileName, function(error, data) {
        const Board = new Setup(data);

        const parseJSON = function() {
          if (Board.error) {
            throw "Invalid JSON";
          }
        };

        expect(parseJSON).toThrow("Invalid JSON");

        doneFn();
      });
    });

    it('Parse JSON correctly and validate JSON format it should be "open-board-0.1"', function(doneFn) {
      let fileName = "test-2.obf";

      myFunctionThatMakesRequests(fileName, function(error, data) {
        let filterData = JSON.parse(data);

        let jsondata = JSON.stringify(filterData[0]);

        const Board = new Setup(jsondata);

        expect(Board.obfInput.format).toBe("open-board-0.1");

        doneFn();
      });
    });

    it("Parse JSON correctly and validate JSON format it should throw error message when format is incorrect", function(doneFn) {
      let fileName = "test-3.obf";

      myFunctionThatMakesRequests(fileName, function(error, data) {
        let filterData = JSON.parse(data);

        let jsondata = JSON.stringify(filterData[0]);

        const Board = new Setup(jsondata);

        Board.load();

        const parseJSON = function() {
          if (Board.error) {
            throw Board.error;
          }
        };

        expect(parseJSON).toThrow("Invalid format");

        doneFn();
      });
    });
  });

  describe("Test Name property", function() {
    let originalTimeout;

    beforeEach(function() {
      originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
      jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
    });

    afterEach(function() {
      jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });

    it('The key variable should be equals to "valid single cell board"', function(doneFn) {
      let fileName = "test-7.obf";

      myFunctionThatMakesRequests(fileName, function(error, data) {
        let filterData = JSON.parse(data);

        let jsondata = JSON.stringify(filterData[0]);

        const Board = new Setup(jsondata);

        Board.load();

        expect(Board.key).toBe("valid single cell board");

        doneFn();
      });
    });

    it('If the obf file does not have a "name" property it should throw error', function(doneFn) {
      var fileName = "test-2.obf";

      // Read data from file
      myFunctionThatMakesRequests(fileName, function(error, data) {
        let filterData = JSON.parse(data);

        let jsondata = JSON.stringify(filterData[0]);

        const Board = new Setup(jsondata);

        Board.load();

        var buttonLableFun = function() {
          if (Board.error) {
            throw Board.error;
          }
        };

        expect(buttonLableFun).toThrow("No page name defined");

        doneFn();
      });
    });
  });
});

/**
 * This function reads in the test data file
 *
 * @parameters:
 * filename: pass file name that you want to read
 * cb: return function with two parameters first is error and second is response
 *
 */

myFunctionThatMakesRequests = function(fileName, cb) {
  $.ajax({
    url: "/base/testdata/" + fileName,
    cache: false,
    success: function(data) {
      cb(false, data);
    },
    error: function(error) {
      cb(true, error);
    }
  });
};
