export function* gatekeeper() {
    while (true) {
        console.log('what is your favorite food');
        const answer = yield;
        if (answer === 'bacon') {
            break;
        }
        console.log("WRONNGGGG");
    }
    console.log('you may pass');
}