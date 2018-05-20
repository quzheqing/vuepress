# vue监听滚动条吸顶

``` js
mounted(){
	window.addEventListener('scroll', this.handleScroll)
}


handleScroll () {
	var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
	console.log(scrollTop)
	if(scrollTop > 45){
	  this.isFixed = true;
	}else{
	  this.isFixed = false;
	}
},
```