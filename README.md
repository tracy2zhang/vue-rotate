# vue-rotate

> A Vue.js rotate component

## 安装

```bash
  npm install vue-rotate -S
```

## 使用

```html
<rotate ref="rotate" :rotating="isRotating"></rotate>
```

```js
import Rotate from 'vue-rotate'
...
export default {
  data () {
    return {
      isRotating: true
    }
  },
  components: {
    Rotate
  }
}
...
```

### props
#### rotating (是否转动)
Type: `Boolean`<br>
Required: `false`<br>
Default: `false`
#### dps (转速degree per second)
Type: `Number`<br>
Required: `false`<br>
Default: `10`

### methods
#### play 开始旋转
```js
this.$refs.rotate.play()
```
#### pause 停止旋转
```js
this.$refs.rotate.pause()
```
#### reset 重置
```js
this.$refs.rotate.reset()
```
