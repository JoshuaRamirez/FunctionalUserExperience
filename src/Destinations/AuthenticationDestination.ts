import {FrameName} from "../Frames/FrameName";
import {Destination} from "../Tome/Destination";
import {Application} from "../Application";

export class AuthenticationDestination extends Destination {
    private authenticationFrameKey: string;
    public Ingress() : void {
        const authenticationFrame = Application.UiShell.Frames.Create(FrameName.AuthenticationFrame);
        this.authenticationFrameKey = authenticationFrame.Key;
        authenticationFrame.Show();
    }
    public Egress() : void {
        const authenticationFrame = Application.UiShell.Frames.GetCreated(FrameName.AuthenticationFrame, this.authenticationFrameKey);
        authenticationFrame.Destroy();
    }
}
