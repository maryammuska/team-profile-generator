const engineer = require('../lib/Engineer');

describe("testing engineer class", 
    function() {
        it ("returns correct info",
            function() {
                const e = new engineer("John", "25", "john@fake.com", "John Haidar") 
                // expect that the name of this employee is whatever the user has entered
                expect (e.name).toBe("John");
                expect (e.id).toBe("25");
                expect (e.email).toBe("john@fake.com");
                expect (e.Github).toBe("John Haidar");
            }
        )
    }
);