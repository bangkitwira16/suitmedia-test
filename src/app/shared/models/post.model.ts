export interface image {
    file_name?: string;
    id?: number;
    mime?: string;
    url?: string;
}

export interface Post {
    id: number | null;
    content: string;
    small_image: image[];
    slug: string;
    title: string;
    published_at: string
    image_url: string | undefined;
}