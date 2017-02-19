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

//    实现init对象，继承字itcast.prototype
    init.prototyp=itcast.fn;
//    暴露给用户核心函数，用来查询DOM元素
    global.$ = global.itcast =itcast;

    ('DOMContentLoaded', function() {
        itcast.isReady = true;
    });


}(window));