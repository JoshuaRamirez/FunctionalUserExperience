import {AuthenticationDestination} from "./Destinations/AuthenticationDestination";
import {Destination} from "./Tome/Destination";

export class FlowShell {
    private currentLocation: Destination
    public Authenticate() : void {
        if (this.currentLocation) {
            this.currentLocation.Egress();
        }
        this.currentLocation = new AuthenticationDestination();
        this.currentLocation.Ingress();
    }
    public Home() : void {
        this.currentLocation.Egress();
        //TODO: new HomeDestination().Ingress();
    }
}
