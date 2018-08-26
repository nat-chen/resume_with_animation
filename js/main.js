function writeCssTextIntoPageAndStyleTag(prefix, cssStyle, fn) {
  let codeViewer = document.querySelector('#code');
  let styleTag = document.querySelector('#styleTag');
  let index = 1;
  let length = cssStyle.length;
  
  setTimeout(function callback() {
    if (index++ <= length) {
      let cssHtml = prefix + cssStyle.substring(0, index);
      styleTag.innerHTML = cssHtml;
      codeViewer.innerHTML = Prism.highlight(cssHtml, Prism.languages.css, 'css');
      codeViewer.scrollTop = codeViewer.scrollHeight
      setTimeout(callback, 50);
    } else {
      fn && fn();
    }
  }, 0);
}

function createMarkdownDiv() {
  let parentDiv = document.createElement('div');
  let div = document.createElement('div');
  parentDiv.id = 'paper';
  div.className = 'html';
  parentDiv.appendChild(div);
  document.body.appendChild(parentDiv);
  return div;
}
function writeMdTextIntoPage() {
  let div = createMarkdownDiv();
  let length = md.length;
  let index = 1;
  setTimeout(function callback() {
    if (index <= length) {
      let text = md.substring(0, index++);
      div.innerHTML = marked(text);
      div.scrollTop = div.scrollHeight;
      setTimeout(callback, 50);
    } else {
      writeCssTextIntoPageAndStyleTag(css1, css2, sayWorkDone)
    }
  }, 0);
}


function sayWorkDone() {
  document.querySelector('.html').classList.add('markdown-body')
  writeCssTextIntoPageAndStyleTag(css1 + css2, css3)
}

var css1 = `/* 
 * 面试官你好，我是XXX
 * 只用文字作做我介绍太单调了
 * 我就用代码来介绍吧
 * 首先准备一些样式
 */
*{
  transition: all 1s;
}
html{
  background: #eee;
}
#code{
  border: 1px solid #aaa;
  padding: 16px;
}

/* 我需要一点代码高亮 */
.token.selector{ color: #690; }
.token.property{ color: #905; }

/* 加一个呼吸效果 */
#code{
  animation: breath 0.5s infinite alternate-reverse;
}

/* 现在正式开始 */
/* 我需要一张白纸 */
#code-wrapper{
  width: 50%; left: 0; 
  position: fixed;
  height: 100%;
}
#paper > .content {
 display: block;
}

/* 于是我就可以在白纸上写字了，请看右边 */
`

var css2 = `
/* 接下来用一个优秀的库 marked.js
 * 把 Markdown 变成 HTML
 */
`

var css3 = `
/*
 * 这就是我的会动的简历
 * 谢谢观看
 */
`

var md = `
## 自我介绍
我叫 Nat Chen
1992 年月出生
自学前端半年
希望应聘前端开发岗位
## 技能介绍
熟悉 JavaScript CSS
## 项目介绍
1. XXX 轮播
2. XXX 简历
3. XXX 画板

## 联系方式
* QQ xxxxxxxx
* Email xxxxxxxx
* 手机 xxxxxxx

## 联系方式
- QQ xxxxxxxx
- Email xxxxxxxx
- 手机 xxxxxxx
## 联系方式
- QQ xxxxxxxx
- Email xxxxxxxx
- 手机 xxxxxxx
## 联系方式
- QQ xxxxxxxx
- Email xxxxxxxx
- 手机 xxxxxxx
## 联系方式
- QQ xxxxxxxx
- Email xxxxxxxx
- 手机 xxxxxxx
## 联系方式
- QQ xxxxxxxx
- Email xxxxxxxx
- 手机 xxxxxxx
## 联系方式
- QQ xxxxxxxx
- Email xxxxxxxx
- 手机 xxxxxxx
## 联系方式
- QQ xxxxxxxx
- Email xxxxxxxx
- 手机 xxxxxxx
`

writeCssTextIntoPageAndStyleTag('', css1, writeMdTextIntoPage);

