---
index: false
icon: discover
category:
  - 使用指南
pageInfo: false
comment: false  
copyright: false

footer: MIT 协议, 版权所有 © 2013-present Pallasmanul
---



## 简介

RP2040 + ESP32 开发板,对比RASPBERRY PICO W设计的。
这里将ESP32当作协处理器,向RP2040提供WiFi链接,便携Logger等功能


## 原理图
![Schem](./resources/RESpire_v1.svg)


## 渲染



## 代码


### ESP32 Code
``` python
    import machine
    

    def Core1_task(void):
        print("Hello Task 1")

    def Core2_task(void):
        print("Hello Task 2")
```

### RP2040 Code

