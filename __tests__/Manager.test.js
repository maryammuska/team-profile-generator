const manager = require('../lib/Manager');

describe("testing maanger class", 
    function() {
        it ("returns correct info",
            function() {
                const e = new manager("Maryam", "65", "maryam@fake.com", "76") 
                // expect that the name of this employee is whatever the user has entered
                expect (e.name).toBe("Maryam");
                expect (e.id).toBe("65");
                expect (e.email).toBe("maryam@fake.com");
                expect (e.officeNumber).toBe("76");
            }
        )
    }
);