import {assert} from "chai";
import {AuthenticationFrameStub} from "../Stubs/AuthenticationFrameStub";
import {FrameName} from "../../Frames/FrameName";
import {Frame} from "../../Tome/Frame";
import {Application} from "../../Application";

describe("AuthenticationFrame ", () => {
    const _frames = Application.UiShell.Frames;
    let _frameKey : string;
    const _frameName = FrameName.AuthenticationFrame;
    it("Instantiates", () => {
        const instance = new AuthenticationFrameStub();
        assert.isObject<AuthenticationFrameStub>(instance, "Instance Not Detected");
    });
    it("Creates", () => {
        const frame = _frames.Create(FrameName.AuthenticationFrame);
        _frameKey = frame.Key;
        const createdFrame = _frames.GetCreated(_frameName, _frameKey);
        assert.isObject<Frame>(createdFrame, "CreatedFrames Missing Created Frame");
    });
    it("Shows", () => {
        const createdFrame = _frames.GetCreated(_frameName, _frameKey);
        createdFrame.Show();
        const renderedFrame = Application.UiShell.Frames.GetRendered(_frameName, _frameKey);
        assert.equal(createdFrame.Output, AuthenticationFrameStub.name, "Expected Render Output Missing")
        assert.isObject<Frame>(renderedFrame, "Rendered Frame Missing From RenderedFrames");

    });
    it("Hides", () => {
        let renderedFrame = _frames.GetRendered(_frameName, _frameKey);
        renderedFrame.Hide();
        renderedFrame = _frames.GetRendered(_frameName, _frameKey);
        const createdFrame = _frames.GetCreated(_frameName, _frameKey);
        assert.isUndefined<Frame>(renderedFrame, "Hidden Frame In RenderedFrames");
        assert.isObject<Frame>(createdFrame, "Hidden Frame Missing From CreatedFrames");
    });
    it("Destroys", () => {
        let createdFrame = _frames.GetCreated(_frameName, _frameKey);
        createdFrame.Destroy();
        createdFrame = _frames.GetCreated(_frameName, _frameKey);
        const renderedFrame = _frames.GetRendered(_frameName, _frameKey);
        assert.isUndefined(createdFrame, "Destroyed Frame in CreatedFrames");
        assert.isUndefined(renderedFrame, "Destroyed Frame in RenderedFrames");
    });
});
