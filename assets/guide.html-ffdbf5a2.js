import{_ as t}from"./rp2040_msc_download-e4c423cc.js";import{ab as p,G as o,H as l,E as n,S as s,N as e,ac as i,W as c}from"./framework-03ed10d2.js";const r={},u=n("h2",{id:"目标",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#目标","aria-hidden":"true"},"#"),s(" 目标")],-1),d=n("p",null,"😺KiwiDAP的目标是成为一个优秀的高级调试器 , 支持如脱机烧录 , 接口检测 , 无线调试等功能 ...",-1),k=n("h3",{id:"获取kiwidap",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#获取kiwidap","aria-hidden":"true"},"#"),s(" 获取kiwidap")],-1),v={href:"https://github.com/kiwidap/kiwidap/releases/download/1.0/kiwidap.uf2",target:"_blank",rel:"noopener noreferrer"},b=i('<div class="hint-container warning"><p class="hint-container-title">注意</p><p>当前固件只支持 Raspberry RP2040 MCU</p></div><h3 id="kiwidap硬件" tabindex="-1"><a class="header-anchor" href="#kiwidap硬件" aria-hidden="true">#</a> kiwidap硬件</h3><ul><li>raspberry pico</li><li>待续</li></ul><h3 id="烧录固件" tabindex="-1"><a class="header-anchor" href="#烧录固件" aria-hidden="true">#</a> 烧录固件</h3><ul><li>raspberry pico 点击BOOTSEL按键重新上电,出现一个U盘，将下载好的固件拖拽到文件夹即可 <img src="'+t+'" alt="rp2040" loading="lazy"></li></ul>',5),m={id:"micropython启动脚本-thonny",tabindex:"-1"},h=n("a",{class:"header-anchor",href:"#micropython启动脚本-thonny","aria-hidden":"true"},"#",-1),_={href:"https://thonny.org/",target:"_blank",rel:"noopener noreferrer"},w=i(`<ul><li>连接Micropython 运行以下程序</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>    <span class="token comment"># 导入模块</span>
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
            <span class="token builtin">len</span> <span class="token operator">=</span> kiwidap<span class="token punctuation">.</span>progress<span class="token punctuation">(</span>RXBUFFER<span class="token punctuation">,</span>TXBUFFER<span class="token punctuation">)</span>
            kiwidap<span class="token punctuation">.</span>winusb_write<span class="token punctuation">(</span>TXBUFFER<span class="token punctuation">,</span><span class="token builtin">len</span><span class="token punctuation">)</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span>RXBUFFER<span class="token punctuation">)</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span>TXBUFFER<span class="token punctuation">)</span>
        time<span class="token punctuation">.</span>sleep_us<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="kiwidap-module-api" tabindex="-1"><a class="header-anchor" href="#kiwidap-module-api" aria-hidden="true">#</a> kiwidap module API</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>
<span class="token operator">*</span> kiwidap<span class="token punctuation">.</span>progress<span class="token punctuation">(</span>src<span class="token punctuation">,</span>dest<span class="token punctuation">)</span>

    cmsis dap 数据处理
    src<span class="token punctuation">:</span> 数据输入<span class="token builtin">buffer</span>
    dest<span class="token punctuation">:</span> 数据输出<span class="token builtin">buffer</span>

<span class="token operator">*</span> kiwidap<span class="token punctuation">.</span>winusb_read<span class="token punctuation">(</span>buf<span class="token punctuation">)</span> 

    读取 winusb 数据到buf

<span class="token operator">*</span> kiwidap<span class="token punctuation">.</span>winusb_write<span class="token punctuation">(</span>buf<span class="token punctuation">)</span>

    将buf数据写入 winusb

<span class="token operator">*</span> kiwidap<span class="token punctuation">.</span>usbip_read<span class="token punctuation">(</span>buf<span class="token punctuation">)</span>

    读取 usbip 数据到buf   

<span class="token operator">*</span> kiwidap<span class="token punctuation">.</span>usbip_write<span class="token punctuation">(</span>buf<span class="token punctuation">)</span>
    将buf数据写入 usbip


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ide-调试配置" tabindex="-1"><a class="header-anchor" href="#ide-调试配置" aria-hidden="true">#</a> IDE 调试配置</h2>`,5),f={href:"https://www.keil.com/",target:"_blank",rel:"noopener noreferrer"},y={href:"https://gnutoolchains.com/arm-eabi/openocd/",target:"_blank",rel:"noopener noreferrer"},g=n("div",{class:"hint-container warning"},[n("p",{class:"hint-container-title"},"注意"),n("p",null,"1 Keil 版本不能太低 , 已测试5.25无法识别调试器 , 推荐使用v5.32 2 使用我们提供的最新版openocd")],-1);function E(F,R){const a=c("ExternalLinkIcon");return o(),l("div",null,[u,d,k,n("ul",null,[n("li",null,[s("下载固件"),n("a",v,[s("kiwidap.uf2"),e(a)])])]),b,n("h3",m,[h,s(" Micropython启动脚本 ("),n("a",_,[s("thonny"),e(a)]),s(")")]),w,n("ul",null,[n("li",null,[n("a",f,[s("Keil"),e(a)])]),n("li",null,[n("a",y,[s("openocd"),e(a)])])]),g])}const B=p(r,[["render",E],["__file","guide.html.vue"]]);export{B as default};
