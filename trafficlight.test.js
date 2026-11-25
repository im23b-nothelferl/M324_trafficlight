//import module traffic light
const app = require("./trafficlight");

//test suite
describe('test suite traffic light', () => {
    //case red light
    it(`case red light`, () => {
        expect(app.trafficLight("red"))
            .toBe("DON'T WALK!");
    });

    //case green light: pedestrians may walk
    it(`case green light`, () => {
        expect(app.trafficLight("green"))
            .toBe("WALK!");
    });

    //case orange light: pedestrians have to pay attention
    it(`case orange light`, () => {
        expect(app.trafficLight("orange"))
            .toBe("ATTENTION!");
    });

    //case no color at all (node app.js without argument)
    it(`case no color means out of order`, () => {
        expect(app.trafficLight())
            .toBe("OUT OF ORDER");
    });

    //case unknown color: the function has no answer for it
    it(`case unknown color returns undefined`, () => {
        expect(app.trafficLight("blue"))
            .toBeUndefined();
    });

    //case sensitive: "RED" is not the same as "red"
    it(`case color in upper case is not recognized`, () => {
        expect(app.trafficLight("RED"))
            .toBeUndefined();
    });
});
