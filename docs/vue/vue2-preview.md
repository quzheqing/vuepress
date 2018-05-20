# vue2-preview缩略图插件

```
https://github.com/daidaitu1314/vue2-preview
```

``` js
//npm
npm i vue2-preview -S

//引入
import VuePreview from 'vue2-preview'
Vue.use(VuePreview)
```


``` js
//使用
<template>
  <img class="preview-img" v-for="(item, index) in list" :src="item.src" height="100" @click="$preview.open(index, list)">
</template>

<script>
export default {
    data () {
      return {
        list: [{
          src: 'https://placekitten.com/600/400',
          w: 600,
          h: 400
        }, {
          src: 'https://placekitten.com/1200/900',
          w: 1200,
          h: 900
        }]
      }
    }
  }
</script>
```
图片宽度自适应

``` js
//插件里写imgload获取图片宽高
onRead(file) {
      let img = new Image(); 
      img.src = file.content;
      let that = this;
      img.onload = function () {   // 图片的宽高要做onload后才能获取到
        that.imgList.push({
          src:file.content,
          msrc:file.content,
          title: "图片",
          w: img.width,
          h: img.height
        })
      } 
    },
```


