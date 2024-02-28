// 代码雨逻辑
const width = document.getElementById("myCanvas").width = window.innerWidth;
const height = document.getElementById("myCanvas").height = window.innerHeight;
const ctx = document.getElementById("myCanvas").getContext("2d");
const arr = Array(Math.ceil(width / 10)).fill(0);
const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split("");

function rain() {
    ctx.fillStyle = "rgba(0,0,0,0.05)";
    ctx.fillRect(0, 0, width, height);
    ctx.fillStyle = "#0f0";
    arr.forEach(function (value, index) {
        ctx.fillText(str[Math.floor(Math.random() * str.length)], index * 10, value + 10);
        arr[index] = value >= height || value > 8888 * Math.random() ? 0 : value + 10;
    });
}

setInterval(rain, 30);

// 表单提交逻辑
document.getElementById('submit').addEventListener('click', function(event) {
    event.preventDefault(); // 防止表单默认提交

    // var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var correctPassword = "asd"; // 设置正确密码

    if(password === correctPassword) {
        window.location.href = "cs.html"; // 密码正确，跳转到正确的页面
    } else {
        window.location.href = "http://example.com/wrong-password-page"; // 密码错误，跳转到错误的页面
    }
});
