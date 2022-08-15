import {FrameName} from "./FrameName";
import {Frame} from "../Tome/Frame";

export abstract class AuthenticationFrame extends Frame {
    protected constructor() {
        super(FrameName.AuthenticationFrame);
    }
    protected abstract destroy() : void;
    protected abstract show() : void;
    protected abstract hide() : void;
    protected abstract render() : string;
}
