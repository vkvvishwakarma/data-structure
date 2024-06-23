function solution(N) {
    var enable_print = N % 10;
    var arrayNum = [];
    while (N > 0) {
        arrayNum.push(N % 10);
         if (enable_print == 0 && N % 10 !== 0) {
        enable_print = 1;
        }
         else if(enable_print = 1){
            // process.stdout.write((N % 10).toString());
         }

        N = Math.floor(N / 10);
    }
    process.stdout.write(arrayNum.join(""));
}


console.log(solution("012345670"));