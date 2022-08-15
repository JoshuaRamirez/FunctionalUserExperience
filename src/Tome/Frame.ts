import {Guid} from "./Guid";
import {FrameName} from "../Frames/FrameName";
import {Frames} from "./Frames";
import {Application} from "../Application";

export abstract class Frame {
    private readonly frames: Frames;
    public readonly Key: string;
    public readonly Name: FrameName;
    public Output : string;
    protected constructor(frameName: FrameName) {
        this.Name = frameName;
        this.Key = Guid.MakeNew().ToString();
        this.frames = Application.UiShell.Frames;
    }
    protected Render() : string {
        this.Output = this.render();
        this.render();
        return this.Output;
    }
    public Show() : void {
        this.Render();
        this.show();
        this.frames.OnAfterShow(this);
    }
    public Hide() : void {
        this.hide();
        this.frames.OnAfterHide(this);
    }
    public Destroy() : void {
        this.Hide();
        this.destroy();
        this.frames.OnAfterDestroy(this);
    }
    protected abstract destroy() : void;
    protected abstract show() : void;
    protected abstract hide() : void;
    protected abstract render() : string
}
