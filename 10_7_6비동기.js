// Node.js는 비동기 처리이기에 병렬적(동시 처리) 진행함.
function func_1(){
    setTimeout(function() {
        console.log("20233053 김태희");
    }, 200);
}
function func_2(){
    setTimeout(function() {
        console.log("20233053 KimTeaHee");
    }, 100);
}

func_1();
func_2();