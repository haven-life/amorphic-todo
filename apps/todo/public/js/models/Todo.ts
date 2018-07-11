import {supertypeClass, property, Supertype, Remoteable, Persistable} from 'amorphic';

@supertypeClass
export class Todo extends Persistable(Remoteable(Supertype)) {
    @property()
    id: number;

    @property()
    title: string = '';

    @property()
    complete: boolean = false;

    static new (title: string) {
        return new Todo().init(title)
    }

    init (title: string) {
        this.title = title;
    }
}