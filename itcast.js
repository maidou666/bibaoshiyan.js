/**
 * Created by Administrator on 2017/2/19.
 */
(function(global){

    var init,

     itcast = function(selector,context){
        return new itcast.fn.init(selector,context);
    };
    //置换原型
    itcast.fn=itcast.prototype={
        constructor:itcast
    };

    init=itcast.fn.init=function(selector,context){

    };


//    实现init对象，继承字itcast.prototype
    init.prototyp=itcast.fn;
    //提供可拓展的接口
    itcast.extend = itcast.fn.extend = function(source) {
        // 枚举 source对象上所有属性
        for (var k in source) {
            // 添加到调用者身上
            this[k] = source[k];
        }
    };


    itcast.extend({
        isReady: false,
        each: function(obj, callback) {
            var i = 0,
                l = obj.length;

            for (; i < l; i++) {
                if (callback.call(obj[i], obj[i], i) === false) {
                    break;
                }
            }
            // 返回遍历的对象
            return obj;
        }
    });


    // 选择器引擎
    // 通过select函数 来查询dom元素
    var select = function(selector, context) {
        // 存储所有获取到的dom元素
        var ret = [];
        // 判断是否指定了context
        if (context) {
            // context 是 dom对象
            // 使用context调用querySelectorAll 获取dom元素
            // 将其转换成真数组返回
            if (context.nodeType === 1) {
                return Array.prototype.slice.call(context.querySelectorAll(selector));
            }
            // context 是 dom数组或伪数组
            // 遍历context，使用当前遍历到的元素调用querySelectorAll 获取dom元素
            // 得到结果doms，要将其所有dom元素 追加到 ret数组内，
            else if (context instanceof Array ||
                (typeof context === 'object' && 'length' in context)) {
                for (var i = 0, l = context.length; i < l; i++) {
                    var doms = context[i].querySelectorAll(selector);
                    for (var j = 0, k = doms.length; j < k; j++) {
                        ret.push(doms[j]);
                    }
                }
            }
            // context 为 字符串即选择器
            else {
                return Array.prototype.slice.call(
                    document.querySelectorAll(context + ' ' + selector));
            }
            return ret;
        }
        // 如果context没有传入实参
        // 通过document调用querySelectorAll来直接获取dom元素
        else {
            return Array.prototype.slice.call(document.querySelectorAll(selector));
        }
    };
//    暴露给用户核心函数，用来查询DOM元素
    global.$ = global.itcast =itcast;

    ('DOMContentLoaded', function() {
        itcast.isReady = true;
    });
//

}(window));