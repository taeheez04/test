// lodash 라이브러리 cmd에 설치
// {} {} 파일이 생김 package.json

const _ = require("lodash");

console.log(_.chunk([13, 22, 39, 40, 500], 2));
console.log(_.uniq([12, 12, 22, 33]));
console.log(_.flatten([14, [12, [13]]]));

let result = _.chain([1, 2, 8, 11, 20]) // 여러 함수들을 연결해 사용하게 해줌
              .map(n => n * 3)
              .filter(n => n > 10)
              .take(2)
              .value();

console.log(result);