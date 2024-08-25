export let timeLeft = 30;

export function countdown() {
    if (timeLeft == -1) {
        clearTimeout(timerId);
    } else {
        timeLeft--;
    }
}

export const timerId = setInterval(countdown, 1000);
