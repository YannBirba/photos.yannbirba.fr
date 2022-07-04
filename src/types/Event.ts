import Group from "./Group";
import Image from "./Image";

interface Event {
    id?: number;
    image?: Image | null | undefined;
    name: string;
    description?: string | null | undefined;
    location: string;
    year: number;
    start_date: Date;
    end_date?: Date | null | undefined;
    created_at?: Date | null | undefined;
    updated_at?: Date | null | undefined;
    groups?: Group[];
    images?: Image[];
}

export default Event;
