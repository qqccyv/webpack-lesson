/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-09-19 14:40:33
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-09-23 16:24:39
 */
import content from './content'
// var img = require()
import img from '../public/images/timg3.jpg'
var imgTag = new Image()
console.log(img); // 被webpack打包后返回的是图片打包后的文件名 所以index.html 也要放在和main.js同级下  不然会找不到图片资源
imgTag.src = img
const app = document.getElementById('app')
app.append(imgTag)
new content()