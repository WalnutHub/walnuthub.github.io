import{_ as t}from"./rp2040_msc_download-e4c423cc.js";import{ab as p,G as o,H as l,E as n,S as a,N as e,ac as i,W as r}from"./framework-03ed10d2.js";const c={},d=n("h2",{id:"beginner",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#beginner","aria-hidden":"true"},"#"),a(" Beginner")],-1),u=n("h3",{id:"get-kiwidap",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#get-kiwidap","aria-hidden":"true"},"#"),a(" Get KiwiDap")],-1),k={href:"https://github.com/kiwidap/kiwidap/releases/download/1.0/kiwidap.uf2",target:"_blank",rel:"noopener noreferrer"},m=i('<div class="hint-container warning"><p class="hint-container-title">Note</p><p>current firmware only Raspberry RP2040 MCU</p></div><h3 id="kiwidap-hardware" tabindex="-1"><a class="header-anchor" href="#kiwidap-hardware" aria-hidden="true">#</a> kiwidap hardware</h3><ul><li>raspberry pico</li><li>待续</li></ul><h3 id="flash-firmware" tabindex="-1"><a class="header-anchor" href="#flash-firmware" aria-hidden="true">#</a> flash firmware</h3><ul><li>raspberry pico 点击BOOTSEL按键重新上电,出现一个U盘，将下载好的固件拖拽到文件夹即可 <img src="'+t+'" alt="rp2040" loading="lazy"></li></ul>',5),b={id:"micropython-start-script-thonny",tabindex:"-1"},v=n("a",{class:"header-anchor",href:"#micropython-start-script-thonny","aria-hidden":"true"},"#",-1),h={href:"https://thonny.org/",target:"_blank",rel:"noopener noreferrer"},w=i(`<ul><li>connect Micropython and running this script</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>    <span class="token comment"># 导入模块</span>
    <span class="token keyword">import</span> kiwidap
    <span class="token keyword">import</span> time

    <span class="token comment"># 定义 DAP 引脚</span>
    SWDIO <span class="token operator">=</span> <span class="token number">1</span>
    SWCLK <span class="token operator">=</span> <span class="token number">2</span>
    RESET <span class="token operator">=</span> <span class="token number">3</span>
    TDI <span class="token operator">=</span> <span class="token number">4</span>
    TDO <span class="token operator">=</span> <span class="token number">5</span>

    <span class="token comment"># 初始化kiwidap</span>
    kiwidap<span class="token punctuation">.</span>init<span class="token punctuation">(</span>SWDIO<span class="token punctuation">,</span>SWCLK<span class="token punctuation">,</span>TDI<span class="token punctuation">,</span>TDO<span class="token punctuation">,</span>RESET<span class="token punctuation">)</span>

    <span class="token comment"># 定义接收 发送 buf</span>
    RXBUFFER <span class="token operator">=</span> <span class="token builtin">bytearray</span><span class="token punctuation">(</span><span class="token number">64</span><span class="token punctuation">)</span>
    TXBUFFER <span class="token operator">=</span> <span class="token builtin">bytearray</span><span class="token punctuation">(</span><span class="token number">64</span><span class="token punctuation">)</span>

    <span class="token comment"># 调用DAP Progress</span>
    <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>kiwidap<span class="token punctuation">.</span>winusb_read<span class="token punctuation">(</span>RXBUFFER<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token boolean">True</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            kiwidap<span class="token punctuation">.</span>progress<span class="token punctuation">(</span>RXBUFFER<span class="token punctuation">,</span>TXBUFFER<span class="token punctuation">)</span>
            kiwidap<span class="token punctuation">.</span>winusb_write<span class="token punctuation">(</span>TXBUFFER<span class="token punctuation">)</span>
        time<span class="token punctuation">.</span>sleep_us<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ide-config" tabindex="-1"><a class="header-anchor" href="#ide-config" aria-hidden="true">#</a> IDE config</h2>`,3),_={href:"https://www.keil.com/",target:"_blank",rel:"noopener noreferrer"},f={href:"https://gnutoolchains.com/arm-eabi/openocd/",target:"_blank",rel:"noopener noreferrer"},g=i(`<h2 id="kiwidap-module-api" tabindex="-1"><a class="header-anchor" href="#kiwidap-module-api" aria-hidden="true">#</a> kiwidap module API</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>
<span class="token operator">*</span> kiwidap<span class="token punctuation">.</span>winusb_read<span class="token punctuation">(</span>buf<span class="token punctuation">)</span> 

    read winusb data to buf

<span class="token operator">*</span> kiwidap<span class="token punctuation">.</span>winusb_write<span class="token punctuation">(</span>buf<span class="token punctuation">)</span>

    write buf data to winusb

<span class="token operator">*</span> kiwidap<span class="token punctuation">.</span>progress<span class="token punctuation">(</span>src<span class="token punctuation">,</span>dest<span class="token punctuation">)</span>

    cmsis dap progress
    src<span class="token punctuation">:</span> <span class="token builtin">input</span> data <span class="token builtin">buffer</span>
    dest<span class="token punctuation">:</span> output data <span class="token builtin">buffer</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function y(E,x){const s=r("ExternalLinkIcon");return o(),l("div",null,[d,u,n("ul",null,[n("li",null,[a("download frmware "),n("a",k,[a("kiwidap.uf2"),e(s)])])]),m,n("h3",b,[v,a(" micropython start script ("),n("a",h,[a("thonny"),e(s)]),a(")")]),w,n("ul",null,[n("li",null,[n("a",_,[a("Keil"),e(s)])]),n("li",null,[n("a",f,[a("openocd"),e(s)])])]),g])}const F=p(c,[["render",y],["__file","guide.html.vue"]]);export{F as default};
