# vue-rotate

> A Vue.js rotate component

## 安装

```bash
  npm install vue-rotate -S
```

## 使用

```html
<rotate :rotating="isRotating"></rotate>
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
