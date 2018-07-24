export function* positiveInts() {
    let int = 1;
    while (true) {
        yield int;
        int ++;
    }
}