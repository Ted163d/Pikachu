! function () {
    var code = `
    /* 下面我用CSS代码画一个皮卡丘 */

    /* 皮肤 */
    .preview {
        background: #FFE600;
    }

    /* 鼻子 */
    .nose {
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 10px 12px;
        border-color: black transparent transparent;
    
        border-radius: 50%;
        position: absolute;
        top: 28px;
        left: 50%;
    
        transform: translateX(-50%);
    }
    
    /* 眼睛 */
    .eye {
        width: 49px;
        height: 49px;
        background: #2e2e2e;
        position: absolute;
        border: 2px solid #000;
        border-radius: 50%;
    }
    
    .eye::before {
        content: '';
        display: block;
        width: 24px;
        height: 24px;
        background: white;
        border: 2px solid black;
        border-radius: 50%;
        position: absolute;
        left: 7px;
        top: -2px;
    }
    
    .eye.left {
        right: 50%;
        margin-right: 90px;
    }
    
    .eye.right {
        left: 50%;
        margin-left: 90px;
    }
    
    /* 脸 */
    .face {
        width: 68px;
        height: 68px;
        background: #F00;
        border-radius: 50%;
        position: absolute;
        top: 85px;
        border: 2px solid black;
    }
    
    .face.left {
        right: 50%;
        margin-right: 90px;
    }
    
    .face.right {
        left: 50%;
        margin-left: 90px;
    }
    
    /* 上嘴唇 */
    .upperLip {
        height: 20px;
        width: 80px;
        border: 2px solid #000;
        position: absolute;
        top: 52px;
        background: #FFE600;
    }
    
    .upperLip.left {
        right: 50%;
        border-top: none;
        border-right: none;
        border-bottom-left-radius: 40px 20px;
        transform: rotate(-15deg)
    }
    
    .upperLip.right {
        left: 50%;
        border-top: none;
        border-left: none;
        border-bottom-right-radius: 40px 20px;
        transform: rotate(15deg)
    }
    
    /* 下嘴唇 */
    .lowerLip-wrapper {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 0;
        height: 140px;
        width: 200px;
        overflow: hidden;
    }
    
    .lowerLip {
        height: 3000px;
        width: 120px;
        border-radius: 100px/400px;
        background: #990513;
        border: 2px solid black;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        overflow: hidden;
    }
    
    .lowerLip::after {
        content: '';
        display: block;
        width: 150px;
        height: 150px;
        background: #fc4a62;
        border-radius: 50%;
        position: absolute;
        left: 50%;
        bottom: -40px;
        transform: translateX(-50%);
    }
    /* 谢谢观看 */
    `;

    var speed = 100;
    var starN = 0;
    writecode(code, speed);

    lowSpeedBtn.onclick = function () {
        speed = 100;
        window.clearInterval(writeCodeSit);

        writecode(code, speed);
    }
    midSpeedBtn.onclick = function () {
        speed = 40;
        window.clearInterval(writeCodeSit);

        writecode(code, speed);
    }
    fastSpeedBtn.onclick = function () {
        speed = 10;
        window.clearInterval(writeCodeSit);

        writecode(code, speed);
    }


    function writecode(codeStr, speed) {
        var styleTag = document.querySelector(".styleTag")
        var code = document.querySelector('#code')
        var n = starN;

        window.writeCodeSit = setInterval(() => {

            var strsub = codeStr.substring(n, n + 1);
            styleTag.innerHTML += strsub;
            code.innerHTML += strsub;

            code.scrollTop = code.scrollHeight;
            n++;
            starN = n;

            if (n >= codeStr.length) {
                window.clearInterval(writeCodeSit);
            }
        }, speed);
    };
}();