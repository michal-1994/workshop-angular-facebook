import { MyDatePipe } from './my-date.pipe';

describe('MyDatePipe', () => {
    let pipe : MyDatePipe;
    
    beforeEach(() => {
        pipe = new MyDatePipe();
    })
    
    it('create an instance', () => {
        expect(pipe).toBeTruthy();
    });
    
    it('should returns empty string for falsy value', () => {
        [false, '', null, undefined, NaN, 0].forEach(x => {
            expect(pipe.transform(x)).toEqual(''); 
        });
    });
    
    it ('should return empty string for non-Date values', () => {
        [[], {}].forEach(x => {
            expect(pipe.transform(x)).toEqual(''); 
        });
    });
    
    it ('should return proper date for date string', () => {
        const input = new Date('2022-06-09, 10:20:30');
        expect(pipe.transform(input)).toEqual('9 czerwca 2022, 10:20'); 
    });
});
