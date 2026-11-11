// 桃花枝：右上、左下各一枝带露珠的桃花枝，轻轻摆动（2026-11-12 她选「乙 · 珠露」；飘落的碎花瓣她嫌「不和谐」，已去掉）
// 各棋页面在 </body> 前引用：<script src="peach.js"></script>
(()=>{
const st=document.createElement('style');
st.textContent=`.pbwrap{position:absolute;inset:0;overflow:hidden;pointer-events:none;z-index:-1}
.pb{position:absolute;pointer-events:none}.pb img{display:block;width:100%;height:auto}
.pb.tr{top:-14px;right:-26px;width:min(36vw,460px);transform-origin:100% 0;animation:pbA 7s ease-in-out infinite alternate}
.pb.bl{bottom:-14px;left:-26px;width:min(30vw,400px);transform-origin:0 100%;animation:pbB 8.5s ease-in-out infinite alternate}
.pb.bl img{transform:rotate(180deg)}
@keyframes pbA{from{transform:rotate(-1.6deg)}to{transform:rotate(1.4deg)}}
@keyframes pbB{from{transform:rotate(1.4deg)}to{transform:rotate(-1.6deg)}}
@media(max-width:600px){.pb.tr{width:40vw;top:-38px;right:-36px;opacity:.92}.pb.bl{width:42vw;bottom:-30px;left:-34px;opacity:.92}}
@media(prefers-reduced-motion:reduce){.pb{animation:none}}`;
document.head.appendChild(st);
if(getComputedStyle(document.body).position==='static')document.body.style.position='relative';
const wrap=document.createElement('div');wrap.className='pbwrap';wrap.setAttribute('aria-hidden','true');
wrap.innerHTML='<div class="pb tr"><img src="img/peach-branch.webp" alt=""></div><div class="pb bl"><img src="img/peach-branch.webp" alt=""></div>';
document.body.prepend(wrap);
})();
