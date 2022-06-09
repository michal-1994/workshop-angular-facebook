export class Sorter {
    static sortBy<T>(collection: T[], mapTo: (value: T) => number): T[] {
        return [...collection].sort((a, b) => {
            const value1 = mapTo(a);
            const value2 = mapTo(b);
            return value1 - value2;
            // if (value1 > value2) {
            //     return 1;
            // } else if (value1 < value2) {
            //     return -1;
            // } else {
            //     return 0;
            // }
        });
    }
}
