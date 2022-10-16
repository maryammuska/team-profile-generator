const employee = require('../lib/Employee');

describe("testing employee class", 
    function() {
        it ("returns correct info",
            function() {
                const e = new employee("Maryam", "65", "maryam@fake.com") 
                // expect that the name of this employee is whatever the user has entered
                expect (e.name).toBe("Maryam");
            }
        )
    }
);