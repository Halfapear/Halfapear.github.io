document.addEventListener('DOMContentLoaded', function() {
    // 为每个.item绑定点击事件
    document.querySelectorAll('.container .item').forEach(function(item) {
        item.addEventListener('click', function() {
            // 首先，获取当前.item所在的.container
            const currentContainer = this.closest('.container');
            
            // 移除当前.container中所有.item的active类
            currentContainer.querySelectorAll('.item').forEach(function(innerItem) {
                innerItem.classList.remove('active');
            });
            
            // 为当前点击的.item添加active类
            this.classList.add('active');
        });
    });
});
// 首先，即使问题表面上看似简单，背后可能隐藏着复杂的细节。在处理DOM操作和事件监听时，需要考虑到：
// DOM的结构：元素如何组织在一起，它们之间的关系是什么。
// 事件传播：事件是如何在DOM树中传播的，包括捕获和冒泡阶段。
// 事件目标：事件的目标(event.target)和触发事件的实际元素可能不同，特别是当涉及到多个嵌套元素时。



//下面是原版代码
// // 获取所有.item元素
// let items=document.querySelectorAll('.item');

// // 设置选中态样式
// function setActive(){
//     // 遍历所有.item元素，移出active样式
//     items.forEach((item)=>{
//         item.classList.remove('active');
//     })
//     // 为当前选中项添加active样式
//     this.classList.add('active');
// }
// // 遍历所有.item元素，分别为其设置点击事件
// items.forEach((item)=>{
//     item.addEventListener('click',setActive);
// }) 

//一堆奇奇怪怪的点来点去，其实也不用太苦恼
//每个单词你认得，这样再配上注释，你就知道在说什么了