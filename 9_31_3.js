function login(username, password) {
    const userDB = [
        { id: "admin", pw: "1234"},
        { id: "alice", pw: "alice!123"},
        { id: "dan", pw: "whatever"},
        { id: "zxc", pw: "666"}
    ];

    const user = userDB.find(u => u.id === username);
    
    if (!user) {
        throw new Error ("존재하지 않는 사용자입니다.");
    }
    else if (user.pw !== password) {
        throw new Error ("비밀번호가 틀렸습니다.");
    }

    return `${username}님 로그인 성공!`;
}

try {
    console.log(login("admin", "1234"));
    console.log(login("alice", "alice!123"));
    console.log(login("kim", "1234"));
} catch (e) {
    console.error("로그인 실패:", e.message);
}