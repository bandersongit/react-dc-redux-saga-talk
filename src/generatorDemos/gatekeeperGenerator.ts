export function* gatekeeper() {
    while (true) {
        console.log('what is your favorite food');
        /* .next() can also be passed an argument. A value passed to .next() will
        * be treated as the return value of the last yield instruction before the generator was paused.
        */
        const answer = yield;
        if (answer === 'bacon') {
            break;
        }
        console.log('WRONNGGGG');
    }
    console.log('you may pass');
}