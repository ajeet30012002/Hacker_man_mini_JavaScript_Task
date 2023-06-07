let f1,f2,th1,th2;
const change=()=>{
    let a1=document.getElementById('first');
    f1= setInterval(()=>{
       return new Promise((resolve,reject)=>{
        a1.innerHTML+='0';
        resolve(100);
       })
    },200)
    f2= setInterval(()=>{
        return new Promise((resolve,reject)=>{
            a1.innerHTML+='1';
            resolve(101);
        })
    },100)
}
change();
const change1=()=>{
    let a2=document.getElementById('third');
   th1=  setInterval(()=>{
       return new Promise((resolve,reject)=>{
        a2.innerHTML+='0';
        resolve(103);
       })
    },100)
   th2=  setInterval(()=>{
        return new Promise((resolve,reject)=>{
            a2.innerHTML+='1';
            resolve(104);
        })
    },200)
}
change1();
let user1=document.getElementById('user');
let p4=prompt("Specify Target");
user1.innerHTML=p4;
let c1 = [
    "Initializing Hack tool",
    "Connecting to Facebook",
    "Connecting to server 1",
    "Connection failed. Retrying...",
    "Connecting to server 2",
    "Connected Successfully...",
    `user-Name ${p4}`,
    "Trying Brute force",
    "200k Password tried...",
    "Match Not Found",
    "Another 200k Passwords Tried...",
    "Match Found",
    "Accessing Account",
    "Hack Successfully"
];
let p10=document.getElementById('data1');
const sleep=async (seconds)=>{
   return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(true);
    },seconds*1000)
})
}
const showhack= async (message)=>{
   await sleep(2);
   p10.innerHTML+=message+"<br />";
   console.log(message);
}
(async ()=>{
    for(let i=0;i<c1.length;i++)
    {
       await showhack(c1[i]);
    }
})()