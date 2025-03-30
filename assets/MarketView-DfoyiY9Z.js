import{_ as ae,r as n,j as F,k as M,c as i,h as se,b as $,a as t,d as v,l as y,m as j,F as B,e as D,v as I,p as oe,f as R,t as T,n as H,o as r}from"./index-BvQQ6c71.js";import{F as le}from"./FeatureSidebar-BUypuvcV.js";const ne={class:"market-page"},ie={class:"container"},re={class:"main-content"},ce={class:"parameter-panel"},de={class:"parameter-grid"},ue={class:"parameter-item"},ve={class:"parameter-item"},pe=["value"],fe={class:"parameter-item"},me={class:"param-group"},ge={class:"param-item"},ye={class:"style-input"},be={class:"style-tags"},he=["onClick"],ke={class:"form-actions"},we=["disabled"],Le={key:0,class:"fas fa-spinner fa-spin"},_e={class:"result-content"},Re={key:0,class:"placeholder-text"},Te={key:1,class:"analysis-output"},Ce={class:"output-header"},Se={class:"header-left"},xe={class:"timestamp"},Ve=["innerHTML"],Oe={key:0,class:"feedback-section"},$e={class:"feedback-title"},je={class:"feedback-buttons"},Ne={key:0,class:"feedback-comment"},Pe={key:1,class:"feedback-thanks"},Ue="https://api.coze.cn/v1/workflow/run",Ee="pat_hWPutau3CRQrAOS48iXuQH0aDsIriuczPJkZKuSPejqq0X2w1I1xU4VtxeeKio2a",Fe={__name:"MarketView",setup(Me){const o=n({categoryL1:"",categoryL2:"",categoryL3:"",categoryL4:"",priceRange:"",style_features:""}),z=["风衣","汉服","牛仔裤","皮草","皮衣","时尚套装","休闲裤","休闲运动套装","秀禾服","羽绒服","Polo衫","T恤","背心","衬衫","大码上装","大码下装","短裤","短外套","防晒服","工装制服","夹克","马甲","毛呢大衣","棉裤","棉衣","牛仔衬衫","牛仔外套","皮裤","商务正装西服","设计师/潮牌男装","时尚防晒服","唐装","卫裤","卫衣","西服","西裤","休闲西服","羊毛衫","羊绒背心","羊绒开衫","羊绒衫","羊绒套衫","羽绒裤","羽绒马甲","针织衫","中老年上装","中老年套装","中老年下装","中山装"],A=["POLO衫","T恤","半身裙","背心吊带","衬衫","短外套","风衣","连衣裙","毛衣","毛针织衫","牛仔裤","派克服","皮衣","时尚防晒服","卫裤","休闲裤","羊绒衫","羽绒服","中老年女装","打底裤","大码连衣裙","大码女装","汉服","蕾丝衫/雪纺衫","马夹","毛呢外套","棉衣/棉服","抹胸","皮草","旗袍","时尚套装","唐装/中式服装裙子","唐装/中式服装上衣","卫衣/绒衫","西装","休闲运动套装","秀禾服","打底服","大码衬衫","大码牛仔裤","大衣","短裤","礼服_晚装","连体衣/裤","连体衣裤","马甲","棉裤/羽绒裤","棉衣_棉服","设计师/潮牌女装","天然皮草","卫衣_绒衫","西服","西服套装","西装裤/正装裤","羊毛衫","羊绒大衣","真丝上装"],b=n([]);F(()=>o.value.categoryL1,a=>{o.value.categoryL2="",a==="男装"?b.value=z:a==="女装"?b.value=A:b.value=[]});const f=n(!1),l=n(""),N=n(null),K=async a=>{if(!f.value)try{if(f.value=!0,N.value=null,l.value="正在分析中...",!o.value.categoryL1||!o.value.categoryL2||!o.value.priceRange||!o.value.style_features)throw new Error("请填写完整的分析参数");console.log("提交的参数:",o.value);const e={workflow_id:"7467779625705308223",parameters:{categoryL1:o.value.categoryL1,categoryL2:o.value.categoryL2,priceRange:o.value.priceRange,style_features:o.value.style_features},is_async:!1};console.log("发送请求:",e);const s=await fetch(Ue,{method:"POST",headers:{Authorization:`Bearer ${Ee}`,"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(e)});if(!s.ok){const w=await s.json();throw new Error(w.message||"分析请求失败")}const c=await s.json();if(console.log("收到响应:",c),c.error)throw new Error(c.error.message||"分析过程出现错误");c.data&&(l.value=c.data,C.value&&C.value.scrollIntoView({behavior:"smooth"})),await Z()}catch(e){console.error("分析错误:",e),N.value=e.message,l.value=`分析失败: ${e.message}`}finally{f.value=!1}},C=n(null),J=M(()=>new Date().toLocaleString("zh-CN")),h=n(["简约","时尚","休闲"]),g=n(""),q=()=>{g.value.trim()&&(h.value.push(g.value.trim()),g.value="")},Q=a=>{h.value.splice(a,1)};F(h,a=>{o.value.style_features=a.join(",")},{deep:!0});const X=()=>{if(!l.value)return;const a=new Blob([l.value],{type:"text/plain;charset=utf-8"}),e=document.createElement("a");e.href=URL.createObjectURL(a),e.download=`趋势分析报告_${new Date().toLocaleString()}.txt`,document.body.appendChild(e),e.click(),document.body.removeChild(e),URL.revokeObjectURL(e.href)},W=async()=>{try{const a=window.location.href;await navigator.clipboard.writeText(a),alert("链接已复制到剪贴板")}catch(a){console.error("复制失败:",a),alert("复制链接失败,请手动复制")}},Y=M(()=>{if(!l.value)return"";try{let s=function(u){return u.split("## ").filter(Boolean).map(p=>{const[d,...x]=p.split(`
`).filter(_=>_.trim());let L=d,E="";const V=d.match(/(.+?)（价格带：(.+?)）/);V&&(L=V[1].trim(),E=V[2]);const ee=x.reduce((_,te)=>{const O=te.match(/- \*\*(.+?)\*\*：(.+)/);return O&&(_[O[1]]=O[2]),_},{});return{platform:L.trim(),priceRange:E,metrics:ee}})},c=function(u){let p=`<div class="platform-container">
        <h3>${u.platform} ${u.priceRange?`<span class="price-range">（价格带：${u.priceRange}）</span>`:""}</h3>
        <table class="data-table" border="1" cellspacing="0" cellpadding="0">
          <thead>
            <tr>`;return Object.keys(u.metrics).forEach(d=>{p+=`<th>${d}</th>`}),p+=`</tr>
          </thead>
          <tbody>
            <tr>`,Object.values(u.metrics).forEach(d=>{const x=!isNaN(parseFloat(d))&&parseFloat(d)>1e3,L=/\d+\.\d+/.test(d)?Number(parseFloat(d)).toLocaleString(void 0,{minimumFractionDigits:2}):d;p+=`<td class="${x?"highlight":""}">${L}</td>`}),p+=`</tr>
          </tbody>
        </table>
      </div>`,p};const a=typeof l.value=="string"?JSON.parse(l.value):l.value;if(!a.data)return"";const e=a.data.trimStart(),w=s(e);let U="";return w.forEach(u=>{U+=c(u)}),U}catch(a){return console.error("处理分析结果时出错:",a),"正在分析中..."}}),Z=async()=>{try{const a=await fetch("http://localhost:3000/api/save-record",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pageType:"market",categoryL1:o.value.categoryL1,categoryL2:o.value.categoryL2,priceRange:o.value.priceRange,result:l.value.toString()})});if(!a.ok)throw new Error(`保存记录失败: ${a.status}`);const e=await a.json();console.log("记录保存成功:",e)}catch(a){console.error("保存记录出错:",a)}},m=n(null),k=n(""),S=n(!1),P=a=>{m.value=a},G=async()=>{try{console.log("提交反馈:",{type:m.value,comment:k.value,pageType:"market",timestamp:new Date().toISOString()}),await new Promise(a=>setTimeout(a,500)),S.value=!0,setTimeout(()=>{m.value=null,k.value="",S.value=!1},3e3)}catch(a){console.error("提交反馈失败:",a)}};return(a,e)=>(r(),i("div",ne,[se(le),e[23]||(e[23]=$('<div class="animated-background" data-v-70704247><div class="fashion-icon" data-v-70704247><i class="fas fa-tshirt" data-v-70704247></i></div><div class="fashion-icon" data-v-70704247><i class="fas fa-hat-cowboy" data-v-70704247></i></div><div class="fashion-icon" data-v-70704247><i class="fas fa-socks" data-v-70704247></i></div><div class="fashion-icon" data-v-70704247><i class="fas fa-shoe-prints" data-v-70704247></i></div><div class="fashion-icon" data-v-70704247><i class="fas fa-glasses" data-v-70704247></i></div></div>',1)),t("div",ie,[e[22]||(e[22]=t("header",null,[t("div",{class:"brand-name"}," PickPro—智选专家 "),t("p",{class:"subtitle animated-text"},[t("span",{class:"glowing-white-text"},"【市场脉搏鸟瞰】")])],-1)),t("div",re,[t("div",ce,[e[14]||(e[14]=t("h2",null,[t("i",{class:"fas fa-sliders"}),v(" 选品参数设置")],-1)),t("div",de,[t("div",ue,[e[8]||(e[8]=t("label",null,"服装一级类目",-1)),y(t("select",{"onUpdate:modelValue":e[0]||(e[0]=s=>o.value.categoryL1=s)},e[7]||(e[7]=[t("option",{value:""},"请选择",-1),t("option",{value:"女装"},"女装",-1),t("option",{value:"男装"},"男装",-1)]),512),[[j,o.value.categoryL1]])]),t("div",ve,[e[10]||(e[10]=t("label",null,"服装二级类目",-1)),y(t("select",{"onUpdate:modelValue":e[1]||(e[1]=s=>o.value.categoryL2=s)},[e[9]||(e[9]=t("option",{value:""},"请选择",-1)),(r(!0),i(B,null,D(b.value,s=>(r(),i("option",{key:s,value:s},T(s),9,pe))),128))],512),[[j,o.value.categoryL2]])]),t("div",fe,[e[12]||(e[12]=t("label",null,"价格带",-1)),y(t("select",{"onUpdate:modelValue":e[2]||(e[2]=s=>o.value.priceRange=s)},e[11]||(e[11]=[$('<option value="" data-v-70704247>请选择</option><option value="0-50" data-v-70704247>0-50元</option><option value="50-100" data-v-70704247>50-100元</option><option value="100-200" data-v-70704247>100-200元</option><option value="200-500" data-v-70704247>200-500元</option><option value="500-1000" data-v-70704247>500-1000元</option><option value="1000-inf" data-v-70704247>1000元以上</option>',7)]),512),[[j,o.value.priceRange]])]),t("div",me,[t("div",ge,[e[13]||(e[13]=t("label",null,"风格特色",-1)),t("div",ye,[t("div",be,[(r(!0),i(B,null,D(h.value,(s,c)=>(r(),i("span",{key:c,class:"style-tag"},[v(T(s)+" ",1),t("i",{class:"fas fa-times",onClick:w=>Q(c)},null,8,he)]))),128))]),y(t("input",{"onUpdate:modelValue":e[3]||(e[3]=s=>g.value=s),onKeyup:oe(q,["enter"]),type:"text",placeholder:"输入风格特色并按回车添加",class:"style-tag-input"},null,544),[[I,g.value]])])])])]),t("div",ke,[t("button",{type:"submit",class:"submit-btn",onClick:K,disabled:f.value},[f.value?(r(),i("i",Le)):R("",!0),v(" "+T(f.value?"分析中...":"开始分析"),1)],8,we)])]),t("div",_e,[l.value?(r(),i("div",Te,[t("div",Ce,[t("div",Se,[e[16]||(e[16]=t("h3",null,"分析报告",-1)),t("span",xe,T(J.value),1)]),t("div",{class:"action-buttons"},[t("button",{class:"action-btn",onClick:X},e[17]||(e[17]=[t("i",{class:"fas fa-download"},null,-1),v(" 导出报告 ")])),t("button",{class:"action-btn",onClick:W},e[18]||(e[18]=[t("i",{class:"fas fa-share-alt"},null,-1),v(" 分享 ")]))])]),t("div",{class:"output-content",ref_key:"outputBox",ref:C,innerHTML:Y.value},null,8,Ve),l.value?(r(),i("div",Oe,[t("div",$e,[e[21]||(e[21]=v(" 您对分析结果的评价如何？ ")),t("div",je,[t("button",{class:H(["feedback-btn like-btn",{active:m.value==="like"}]),onClick:e[4]||(e[4]=s=>P("like"))},e[19]||(e[19]=[t("i",{class:"fas fa-thumbs-up"},null,-1),v(" 有帮助 ")]),2),t("button",{class:H(["feedback-btn dislike-btn",{active:m.value==="dislike"}]),onClick:e[5]||(e[5]=s=>P("dislike"))},e[20]||(e[20]=[t("i",{class:"fas fa-thumbs-down"},null,-1),v(" 不满意 ")]),2)])]),m.value?(r(),i("div",Ne,[y(t("textarea",{"onUpdate:modelValue":e[6]||(e[6]=s=>k.value=s),placeholder:"请告诉我们您的具体建议（选填）",rows:"2"},null,512),[[I,k.value]]),t("button",{class:"submit-comment-btn",onClick:G},"提交")])):R("",!0),S.value?(r(),i("div",Pe," 感谢您的反馈！我们将不断改进分析质量。 ")):R("",!0)])):R("",!0)])):(r(),i("div",Re,e[15]||(e[15]=[t("i",{class:"fas fa-chart-pie"},null,-1),t("p",null,"请设置选品参数开始分析",-1)])))])])]),e[24]||(e[24]=$('<div class="decoration-elements" data-v-70704247><div class="floating-element" style="--delay:0s;" data-v-70704247><i class="fas fa-chart-line" data-v-70704247></i></div><div class="floating-element" style="--delay:2s;" data-v-70704247><i class="fas fa-tags" data-v-70704247></i></div><div class="floating-element" style="--delay:4s;" data-v-70704247><i class="fas fa-shopping-bag" data-v-70704247></i></div></div>',1))]))}},Ie=ae(Fe,[["__scopeId","data-v-70704247"]]);export{Ie as default};
