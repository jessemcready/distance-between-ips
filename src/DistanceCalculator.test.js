const DistanceCalculator = require("./DistanceCalculator")

// @ponicode
describe("fetchOriginURL", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["George", "George", "Michael"], ["Edmond", "Jean-Philippe", "Anas"], ["George", "Pierre Edouard", "Michael"]]
        inst = new DistanceCalculator.DistanceCalculator(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.fetchOriginURL("http://base.com", "https://croplands.org/app/a/reset?token=")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.fetchOriginURL("http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg", "https://croplands.org/app/a/reset?token=")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.fetchOriginURL("www.google.com", "Www.GooGle.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.fetchOriginURL("ponicode.com", "https://croplands.org/app/a/reset?token=")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.fetchOriginURL("ponicode.com", "https://accounts.google.com/o/oauth2/revoke?token=%s")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.fetchOriginURL(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("fetchDestinationURL", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["George", "Jean-Philippe", "Anas"], ["Anas", "Michael", "Pierre Edouard"], ["Anas", "Pierre Edouard", "Anas"]]
        inst = new DistanceCalculator.DistanceCalculator(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.fetchDestinationURL("http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.fetchDestinationURL("http://www.croplands.org/account/confirm?t=")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.fetchDestinationURL("http://base.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.fetchDestinationURL("https://twitter.com/path?abc")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.fetchDestinationURL("ponicode.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.fetchDestinationURL(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("calculateDistance", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["George", "Edmond", "Edmond"], ["Jean-Philippe", "Anas", "George"], ["Pierre Edouard", "Pierre Edouard", "Anas"]]
        inst = new DistanceCalculator.DistanceCalculator(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.calculateDistance()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("handleSubmit", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["Pierre Edouard", "Michael", "Edmond"], ["Jean-Philippe", "Pierre Edouard", "Anas"], ["Jean-Philippe", "Edmond", "Jean-Philippe"]]
        inst = new DistanceCalculator.DistanceCalculator(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.handleSubmit()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("handleClick", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["George", "Anas", "Jean-Philippe"], ["Michael", "Pierre Edouard", "Anas"], ["Michael", "Michael", "Anas"]]
        inst = new DistanceCalculator.DistanceCalculator(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.handleClick()
        }
    
        expect(callFunction).not.toThrow()
    })
})
