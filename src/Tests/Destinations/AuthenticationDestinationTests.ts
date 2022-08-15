import {AuthenticationDestination} from "../../Destinations/AuthenticationDestination";
import {Application} from "../../Application";

describe("AuthenticationDestination",() => {
    const frames = Application.UiShell.Frames;
    const destination = new AuthenticationDestination();
    it("Does Ingress", () => {
        destination.Ingress();
    });
    it("Does Egress", () => {
        destination.Egress();
    });
});

