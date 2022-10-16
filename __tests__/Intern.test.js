const intern = require('../lib/Intern');

describe("testing intern class", 
    function() {
        it ("returns correct info",
            function() {
                const e = new intern("Jake", "78", "jake@fake.com", "UCLA") 
                // expect that the name of this employee is whatever the user has entered
                expect (e.name).toBe("Jake");
                expect (e.id).toBe("78");
                expect (e.email).toBe("jake@fake.com");
                expect (e.school).toBe("UCLA");
            }
        )
    }
);