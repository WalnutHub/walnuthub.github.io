---
index: false
icon: creative
pageInfo: false
comment: false  
copyright: false
footer: MIT 协议, 版权所有 © 2013-present Pallasmanul
---

## Beginner

### Get KiwiDap

* download frmware [kiwidap.uf2](https://github.com/kiwidap/kiwidap/releases/download/1.0/kiwidap.uf2)  

::: warning
current firmware only Raspberry RP2040 MCU
:::

### kiwidap hardware
* raspberry pico 
* 待续


### flash firmware
* raspberry pico 
    点击BOOTSEL按键重新上电,出现一个U盘，将下载好的固件拖拽到文件夹即可
    ![rp2040](./vuepress/public/../../../.vuepress/public/rp2040_msc_download.png)



### micropython start script ([thonny](https://thonny.org/))

*  connect Micropython and running this script
``` python
    # 导入模块
    import kiwidap
    import time

    # 定义 DAP 引脚
    SWDIO = 1
    SWCLK = 2
    RESET = 3
    TDI = 4
    TDO = 5

    # 初始化kiwidap
    kiwidap.init(SWDIO,SWCLK,TDI,TDO,RESET)

    # 定义接收 发送 buf
    RXBUFFER = bytearray(64)
    TXBUFFER = bytearray(64)

    # 调用DAP Progress
    while True:
        if(kiwidap.winusb_read(RXBUFFER) == True):
            kiwidap.progress(RXBUFFER,TXBUFFER)
            kiwidap.winusb_write(TXBUFFER)
        time.sleep_us(1)
```




## IDE config
* [Keil](https://www.keil.com/) 
* [openocd](https://gnutoolchains.com/arm-eabi/openocd/)



## kiwidap module API

``` python

* kiwidap.winusb_read(buf) 

    read winusb data to buf

* kiwidap.winusb_write(buf)

    write buf data to winusb

* kiwidap.progress(src,dest)

    cmsis dap progress
    src: input data buffer
    dest: output data buffer

```


