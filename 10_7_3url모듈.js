const url = require("url")

const parsedObject = url.parse("https://ecampus.changwon.ac.kr/login.php"); // 창원대 이캠퍼스 링크
console.log(parsedObject);
/* Url {
  protocol: 'https:', >> 통신규약
  slashes: true, >> 빗금, 디렉토리와 파일을 구분하는.. 경로에 사용
  auth: null, >> 인증상태
  host: 'ecampus.changwon.ac.kr', >> 호스트
  port: null, >> 연결포트
  hostname: 'ecampus.changwon.ac.kr', >> 호스트이름
  hash: null, >> 암호화 관련 (해시)
  search: null, >> 검색 매개변수
  query: null, >> DB안에 쿼리
  pathname: '/login.php', >> 경로이름
  path: '/login.php', >> 경로
  href: 'https://ecampus.changwon.ac.kr/login.php' >> 본 url
} url 객체로 출력*/