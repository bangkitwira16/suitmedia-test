export interface Response {
    data?: [],
    links?: {
        first: string | null,
        last: string | null,
        next: string | null,
        prev: string | null,
    },
    meta?: {
        current_page: number | null | undefined,
        from: number | null | undefined,
        last_page: number | null | undefined,
        links:[],
        path: string | null | undefined,
        per_page: number | null | undefined,
        to: number | null | undefined,
        total: number | null | undefined,
    }
}