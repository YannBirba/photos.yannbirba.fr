import Event from "./Event";
import User from "./User";

interface Group {
    id?: number;
    name: string;
    created_at?: Date | null | undefined;
    updated_at?: Date | null | undefined;
    events?: Event[];
    users?: User[];
}

export default Group;
