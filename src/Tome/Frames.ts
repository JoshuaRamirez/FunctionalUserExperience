import {Frame} from "./Frame";
import {FrameName} from "../Frames/FrameName";

export class Frames {
    private created = new Map<FrameName, Map<string, Frame>>();
    private rendered = new Map<FrameName, Map<string, Frame>>();
    private static factoryMethods = new Map<FrameName, ()=>Frame>();

    public static RegisterFactoryMethod(frameName: FrameName, factoryMethod: ()=>Frame) {
        this.factoryMethods.set(frameName, factoryMethod);
    }
    public Create(frameName: FrameName) : Frame {
        const factoryMethod = Frames.factoryMethods.get(frameName);
        if (!factoryMethod) {
            throw new Error("Missing Frame Factory Method Instance")
        }
        const frame = factoryMethod();
        this.setOnNameMap(frame, this.created);
        return frame;
    }
    public GetRendered(frameName: FrameName, frameKey: string) {
        return this.resolve(frameName, frameKey, this.rendered);
    }
    public GetCreated(frameName: FrameName, frameKey: string) {
        return this.resolve(frameName, frameKey, this.created);
    }
    public OnAfterShow(frame: Frame) {
        this.setOnNameMap(frame, this.rendered);
    }
    public OnAfterHide(frame: Frame) {
        this.deleteFromNameMap(frame, this.rendered);
    }
    public OnAfterDestroy(frame: Frame) {
        this.deleteFromNameMap(frame, this.created);
        this.deleteFromNameMap(frame, this.rendered);
    }
    private resolve(frameName: FrameName, frameKey: string, map: Map<FrameName, Map<string, Frame>>) {
        if (map.has(frameName)) {
            if (map.get(frameName).has(frameKey)) {
                return map.get(frameName).get(frameKey);
            }
        }
        return undefined;
    }
    private setOnNameMap(frame: Frame, map: Map<FrameName, Map<string, Frame>>) {
        if (!map.has(frame.Name)) {
            map.set(frame.Name, new Map<string, Frame>());
        }
        map.get(frame.Name).set(frame.Key, frame);
    }
    private deleteFromNameMap(frame: Frame, map: Map<FrameName, Map<string, Frame>>) {
        if (!map.has(frame.Name)) {
            return;
        }
        map.get(frame.Name).delete(frame.Key);
    }
}
