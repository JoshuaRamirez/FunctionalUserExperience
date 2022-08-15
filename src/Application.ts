import {DataShell} from "./DataShell";
import {FlowShell} from "./FlowShell";
import {UiShell} from "./UiShell";

export class Application {
    public static DataShell = new DataShell();
    public static FlowShell = new FlowShell();
    public static UiShell = new UiShell();
}
