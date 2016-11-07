## 方法

### tip(content, options, cb)

> tip 提示

```
//默认值
{
  skin: 'ui-toast',
  time: 3000 // 3秒
}
// 使用方法
dialog.tip('修改成功', {
  time: 5000
})

```

### confirm(content, options, cb)

> confirm 弹窗

 * @param  {String}   content 文本
 * @param  {Object}   options 参数
 * @param  {Function} cb      确认回调
 * @return {Object}         返回实例

```
// 默认值
{
  fixed: true,
  padding: '60px 80px',
  okValue: ($.t && $.t('common.sure')) || '确定',
  ok: (cb && Object.prototype.toString.call(cb) === "[object Function]") ? cb : function() {},
  cancelValue: ($.t && $.t('common.cancel')) || '取消',
}
// 使用方法
dialog.confirm('确认删除？', {}, function() {
  $.ajax({})
})
```

### modal 

> alert 弹窗

 * @param  {String} content 文本
 * @param  {Object} options 参数
 * @return {Object}         返回实例

```
// 默认值
{
  fixed: true,
  padding: '60px 80px',
  okValue: ($.t && $.t('common.sure')) || '确定'
}
// 使用方法
dialog.modal('缺少对象');
```

