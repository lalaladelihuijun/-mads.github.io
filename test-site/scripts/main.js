let myHeading = document.querySelector('h1');
myHeading.textContent = 'hello world!';
/*document.querySelector('html').onclick = function() {
    alert('爬！！！！！！！！！');

}*/
let myImage =document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/新垣结衣.jpg') {
        myImage.setAttribute('src','images/炫炫.jpg');
    }else{
        myImage.setAttribute('src','images/新垣结衣.jpg');
    }
}
function setHeading(name){
    let myHeading = document.querySelector('h1');
    myHeading.textContent = '欢迎您，傻吊'+name+'!';

}
function getUsername () {
    
    let myName = prompt('请输入你的名字');
    localStorage.setItem('name','myName');
    setHeading(myName);
    let mylogin =document.querySelector('button');
    mylogin.textContent='切换用户';
}
let storedName = localStorage.setItem('name','myName');
if(!storedName){
    getUsername();
}
let myButton = document.querySelector('button');
myButton.onclick =  getUsername;