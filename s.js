(({contextMenus:m,scripting:s,runtime:t,action:p})=>{let f=(a,b)=>(b||a).url[0]!="c"&&s.executeScript({target:b?{tabId:b.id,frameIds:[a.frameId]}:{tabId:a.id,allFrames:!0},world:"MAIN",func:async()=>{let d=document,v=d.getElementsByTagName("video"),i=v.length;if(i){for(var r=Array(i);r[--i]=v[i].offsetWidth,i;);(v=v[r.indexOf(Math.max(...r))])!=d.pictureInPictureElement&&v.readyState?v.disablePictureInPicture=!await v.requestPictureInPicture():d.exitPictureInPicture()}}});t.onInstalled.addListener(()=>m.create({id:"",title:"Picture in picture",contexts:["page","video"]})),m.onClicked.addListener(f),p.onClicked.addListener(f)})(chrome)