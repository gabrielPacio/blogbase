export class BlogPost {
    id: number;
    title: string;
    author: string;
    date: string;
    content: string;
    comments: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
