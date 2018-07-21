const fs = require('fs');

// 异步删除
/*fs.unlink('./test/hello.txt', (err) => {
    if (err) throw err;
    console.log('successfully deleted /tmp/hello');
});*/



// 重命名
/*
fs.rename('./test/hello.txt', './test/hello2.txt', (err) => {
    if (err) throw err;

    // 获取属性
    fs.stat('./test/hello2.txt', (err, stats) => {
        if (err) throw err;
        console.log(`文件属性: ${JSON.stringify(stats)}`);
    });
});
*/

// 当前文件所在路径
//console.log(process.cwd())

let fd;

try {
    fd = fs.openSync('./test/hello2.txt', 'a');
    fs.appendFileSync(fd, `<template>
	<div>
		<div class="bannerBJYH fixed-header">
			<span class="title">&nbsp;</span>
			<span class="backGo" @click.stop="goBack()">返回</span>
		</div>
		<section v-if="articleContentInfo && showContent" class="article-content-body">
			<h1>{{articleContentInfo.Title}}</h1>
			<div class="fLip gap10 pt10"><span>{{articleContentInfo.Date}}</span><span>{{articleContentInfo.From}}</span></div>
			<p class="lh20 pt13" v-html="articleContent">
			</p>
		</section>
	</div>
</template>

<script>`, 'utf8');
} catch (err) {
    /* Handle the error */
} finally {
    if (fd !== undefined)
        fs.closeSync(fd);
}