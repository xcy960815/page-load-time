
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.pageLoadTime = {}));
}(this, (function (exports) { 'use strict';

    // function performanceCollect(callback) {
    //     const collect = {
    //         initData: (timing) => ({
    //             // DNS查找时间
    //             DNS查找时间: timing.domainLookupEnd - timing.domainLookupStart,
    //             // TCP建连时间
    //             TCP建连时间: timing.connectEnd - timing.connectStart,
    //             // 首字节时间
    //             首字节时间: timing.responseStart - timing.navigationStart,
    //             // 白屏时间
    //             白屏时间: timing.domLoading - timing.navigationStart,
    //             // 上一个页面到当前页面的时间
    //             上一个页面到当前页面的时间:
    //                 timing.fetchStart - timing.navigationStart,
    //             // 重定向时间
    //             重定向时间: timing.redirectEnd - timing.redirectStart,
    //             // 请求从发送到接收的时间
    //             请求从发送到接收的时间: timing.responseStart - timing.requestStart,
    //             // dom解析时间
    //             dom解析时间: timing.domComplete - timing.domLoading,
    //             // DOM准备时间
    //             DOM准备时间:
    //                 timing.domContentLoadedEventStart - timing.navigationStart,
    //             // load 时间
    //             'load 时间': timing.loadEventEnd - timing.loadEventStart,
    //             // 可操作时间
    //             可操作时间: timing.domInteractive - timing.navigationStart,
    //             // 页面完全加载的时间，总时长
    //             '页面完全加载的时间，总时长':
    //                 timing.loadEventEnd - timing.navigationStart,
    //         }),
    //         domReady: (cb) => {
    //             let timer = null
    //             const runCheck = () => {
    //                 if (performance.timing.domComplete) {
    //                     clearTimeout(timer)
    //                     cb()
    //                 } else {
    //                     timer = setTimeout(runCheck, 100)
    //                 }
    //             }
    //             // window.addEventListener('DOMContentLoaded', runCheck, false)
    //         },
    //         load: (cb) => {
    //             let timer = null
    //             const runCheck = () => {
    //                 // 既然调用load的时候loadEventEnd会为0
    //                 // 那么就判断，如果值不为0,就调用perfData方法收集性能指标
    //                 if (performance.timing.loadEventEnd) {
    //                     clearTimeout(timer)
    //                     cb()
    //                 } else {
    //                     // 否则就定时调用runCheck方法，直到loadEventEnd不为0。
    //                     timer = setTimeout(runCheck, 100)
    //                 }
    //             }
    //             window.addEventListener('load', runCheck, false)
    //         },
    //     }
    //     collect.load(() => {
    //         const initData = collect.initData(performance.timing)
    //         // 添加一个类型，便于识别是load时提交的，还是domReady时提交的
    //         initData.type = 'load'
    //         callback(initData)
    //     })
    //     collect.domReady(() => {
    //         const initData = collect.initData(performance.timing)
    //         // 添加一个类型，便于识别是load时提交的，还是domReady时提交的
    //         initData.type = 'domReady'
    //         callback(initData)
    //     })
    // }

    // performanceCollect((data) => {
    //     const { type } = data
    //     console.log(
    //         `${type === 'domReady' ? 'dom加载完所用时间' : '页面全部加载完所用时间'
    //         }`
    //     )
    //     const tableLog = JSON.parse(JSON.stringify(data))
    //     delete tableLog.type
    //     console.table(tableLog)
    // })


    var obj = {
        name: "xiaoming"
    };

    exports.obj = obj;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
