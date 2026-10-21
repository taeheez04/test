const async = require("async");

async.parallel({
    bun: (callback) => {
        setTimeout(function () {
            console.log("빵 준비 완료!");
            callback(null, "빵 준비 완료!");
            // error가 없어 null로 적음
        }, 3000);
    },
    patty: (callback) => {
        setTimeout(function () {
            console.log("패티 준비 완료!");
            callback(null, "패티 준비 완료!");
        }, 5000);
    },
    veggies: (callback) => {
        setTimeout(function () {
            console.log("채소 준비 완료!");
            callback(null, "채소 준비 완료!");
        }, 1000);
    }
}, (error, results) => {
    if(error) {
        console.log("에러 발생:", error);
        return;
    }

    console.log("\n=== 햄버거 재료 준비 현황 ===");
    console.log("bun: ", results.bun);
    console.log("patty: ", results.patty);
    console.log("veggies: ", results.veggies);

    console.log("\n=== 최종 results 객체 ===");
    console.log(results);
})