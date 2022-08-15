import {describe} from "mocha";
import {Frames} from "../../Tome/Frames";
import {FrameName} from "../../Frames/FrameName";
import {AuthenticationFrameStub} from "../Stubs/AuthenticationFrameStub";

describe("Frames Test Suite", () => {
    Frames.RegisterFactoryMethod(FrameName.AuthenticationFrame, () => new AuthenticationFrameStub())
    require("./AuthenticationFrameTests");
});
