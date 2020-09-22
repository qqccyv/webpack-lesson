/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-09-19 14:40:40
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-09-19 15:50:36
 */

const app = document.getElementById('app')
export default function content() {
  var content = document.createElement('div')
  content.innerHTML = "我是content"
  app.append(content)

}