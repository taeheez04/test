const os = require("os");

console.log(os.hostname()); // 운영체제의 호스트 이름 >> 51308-12
console.log(os.type()); // 운영체제의 이름을 리턴 >> Windows_NT
console.log(os.platform()); // 플랫폼 리턴 >> win32
console.log(os.arch()); // 아키텍쳐 리턴 >> x64
console.log(os.release()); // 버전 리턴 >> 10.0.26200
console.log(os.uptime()); // 실행된 시간 리턴
console.log(os.loadavg()); // 로드 애버리지 정보를 담은 배열 리턴 >> [ 0, 0, 0 ]
// load Average = 시스템이 처리해야 할 작업을 얼마나 기다리고 있는지

console.log(os.totalmem()); // 총 메모리 34033348608
console.log(os.freemem()); // 사용가능한 메모리 19194429440
console.log(os.cpus()); // cpu 정보 출력
/*{
    model: '13th Gen Intel(R) Core(TM) i9-13900',
    speed: 1997,
    times: { user: 35937, nice: 0, sys: 37453, idle: 3105296, irq: 1781 }
  }*/
console.log(os.networkInterfaces()); // 네트워크 인터페이스 정보
