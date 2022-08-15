import {AuthenticationFrame} from "../../Frames/AuthenticationFrame";

export class AuthenticationFrameStub extends AuthenticationFrame {
    constructor() {
        super();
    }
    protected hide() : void {
        return;
    }
    protected show(): void {
        return;
    }
    protected render() : string {
        return AuthenticationFrameStub.name;
    }
    protected destroy() {
        return;
    }
}
