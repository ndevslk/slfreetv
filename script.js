async function urls(id){
const response=await fetch('urls.json');
const urls=await response.json();
return urls[id];}
async function clearkeys(id){
const response=await fetch('clearkeys.json');
const clearkeys=await response.json();
return{
kid:clearkeys[id][0],
key:clearkeys[id][1]}}
async function init(){
const params=new URLSearchParams(window.location.search);
const id=params.get('id');
const url='https://moblive.yuppcdn.net'+await urls(id);
const clearkey=await clearkeys('all');
jwplayer('player').setup({
key:'XSuP4qMl+9tK17QNb+4+th2Pm9AWgMO/cYH8CI0HGGr7bdjo',
file:url,
width:'100%',
height:'100%',
autostart:true,
drm:{
clearkey:{
key:clearkey.key,
keyId:clearkey.kid
}}})}
const referrer=document.referrer;
if(referrer==='https://ndevslk.github.io/slfreetv/'){
init();}