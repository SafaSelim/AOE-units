export interface Unit {
    id: number,
    name: string,
    age: Age,
    cost: Cost,
    description?: string,
    expansion?: string,
    build_time?: number,
    reload_time?: number,
    attack_delay?: number,
    movement_rate?: number,
    line_of_sight?: number,
    hit_points?: number,
    range?: number | string,
    attack?: number,
    armor?: string,
    accuracy?: string,
    attack_bonus?: string[];
    armor_bonus?: string[];
    search_radius?: number;
    blast_radius?: number;
}

export type Age = "Dark" | "Feudal" | "Castle" | "Imperial";

export type Cost = { Food?: number; Wood?: number, Gold?: number } | null

