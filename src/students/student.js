module.exports = {
    sum(notes) {
        const reducer = function(acc, value) {
            if(value > 9) {
                value *= 2;
            }
            return acc + value;
        };

        if(Math.min(...notes) === 0) {
            return 0;
        }
        
        else if(notes.length > 5) {
            return 2 * notes.reduce(reducer, 0);
        }

        return notes.reduce(reducer, 0);
    }
};