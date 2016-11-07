var $ = require('jquery');
var artdialog = require('artdialog');

var sureText = '确定';
var cancelText = '取消';
if ($.t) {
  sureText = $.t('common.sure');
  cancelText = $.t('common.cancel');
}
if (I18NT) {
  sureText = I18NT('common.sure', '确定');
  cancelText = I18NT('common.cancel', '取消');
}

/**
 * tip 提示
 * @param  {String} content 文本
 * @param  {Object} options 参数
 * @param  {Function} cb    回调函数
 * @return {Object}         返回实例
 */
exports.tip = function(content, options, cb) {
  var opt = $.extend({
    skin: 'ui-toast'
  }, options, {
    content: content
  })
  var d = artdialog(opt).show();
  if (opt.time != 0) {
    setTimeout(function() {
      d.close().remove();
      cb && Object.prototype.toString.call(cb) === "[object Function]" && cb();
    }, opt.time || 3000)
  }
  return d;
}
/**
 * confirm 弹窗
 * @param  {String}   content 文本
 * @param  {Object}   options 参数
 * @param  {Function} cb      确认回调
 * @return {Object}           返回实例
 */
exports.confirm = function(content, options, cb) {
  var opt = $.extend({
    fixed: true,
    padding: '60px 80px',
    okValue: sureText,
    ok: (cb && Object.prototype.toString.call(cb) === "[object Function]") ? cb : function() {},
    cancelValue: cancelText,
    cancel: function() {}
  }, options, {
    content: content
  })
  return artdialog(opt).showModal();
}

/**
 * alert 弹窗
 * @param  {String} content 文本
 * @param  {Object} options 参数
 * @return {Object}         返回实例
 */
exports.modal = function(content, options) {
  var opt = $.extend({
    fixed: true,
    padding: '60px 80px',
    ok: function() {},
    okValue: sureText
  }, options, {
    content: content
  })
  return artdialog(opt).showModal();
}