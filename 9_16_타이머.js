//객체 표현 방식을 oldobject newobject 로 비교한 코드 및 결과를 나타내시오. 
//그리고 3초뒤 카운트다운 한다는 메시지를 출력후 
// 3초후 1초마다 5초 4초 3초 2초 1초 발사 메시지를 출력후 
// 타이머 종료하는 함수를 타이머 함수 3종류를 이용해 구현후 위의 객체내용과 함께 워드파일로 업로드하시오

console.log("3초 후 카운트 다운 시작합니다.");

setTimeout(function() {
    let object = {
        time: 5
    }

    let id = setInterval(function() {
        for (let key in object) {
            console.log(`${object[key]--}초`);
        }
    }, 1000)

    setTimeout(function() {
        clearInterval(id);
        console.log("발사")
    }, 6000)

}, 3000)