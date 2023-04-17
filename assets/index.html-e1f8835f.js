import{ab as a,G as n,H as s,ac as e}from"./framework-03ed10d2.js";const i="/assets/RESpire_v1-f50a9098.svg",t={},o=e('<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p>RP2040 + ESP32 开发板,对比RASPBERRY PICO W设计的。 这里将ESP32当作协处理器,向RP2040提供WiFi链接,便携Logger等功能</p><h2 id="原理图" tabindex="-1"><a class="header-anchor" href="#原理图" aria-hidden="true">#</a> 原理图</h2><figure><img src="'+i+`" alt="Schem" tabindex="0" loading="lazy"><figcaption>Schem</figcaption></figure><h2 id="渲染" tabindex="-1"><a class="header-anchor" href="#渲染" aria-hidden="true">#</a> 渲染</h2><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><h3 id="esp32-code" tabindex="-1"><a class="header-anchor" href="#esp32-code" aria-hidden="true">#</a> ESP32 Code</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>    <span class="token keyword">import</span> machine
    

    <span class="token keyword">def</span> <span class="token function">Core1_task</span><span class="token punctuation">(</span>void<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Hello Task 1&quot;</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">Core2_task</span><span class="token punctuation">(</span>void<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Hello Task 2&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="rp2040-code" tabindex="-1"><a class="header-anchor" href="#rp2040-code" aria-hidden="true">#</a> RP2040 Code</h3>`,9),c=[o];function d(r,p){return n(),s("div",null,c)}const u=a(t,[["render",d],["__file","index.html.vue"]]);export{u as default};
