function CountDown(num) {
    if (num <= 0) {
        console.log('all done!!!');
        return;
    }

    console.log(num);
    num--;
    CountDown(num);
}

CountDown(9);