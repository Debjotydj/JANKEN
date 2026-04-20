const r=document.getElementById('rock');
const p=document.getElementById('paper');
const s=document.getElementById('sesior');
const rs=document.getElementById('resetValue');

let score = JSON.parse(localStorage.getItem("userscore"));

if (!score) {
    score = {
        scoreWin: 0,
        scoreLost: 0,
        scoreTie: 0,
        total: 0,
    };
    localStorage.setItem("userscore", JSON.stringify(score)); // save default
}

let dispScore=function(){
    let sc=JSON.parse(localStorage.getItem("userscore"));
    let w=sc.scoreWin;
    let t=sc.scoreTie;
    let l=sc.scoreLost;
    let tot=sc.total;

    let wb=document.querySelector('#winb');
    wb.innerText="WIN : "+w;
    let tb=document.querySelector('#tieb');
    tb.innerText="TIE : "+t;
    let lb=document.querySelector('#lostb');
    lb.innerText="LOST : "+l;
    let totb=document.querySelector('#totalb');
    totb.innerText="TOTAL : "+tot;
}


dispScore();

rs.onclick=function(){
    score.scoreWin=0;
    score.scoreTie=0;
    score.scoreLost=0;
    score.total=0;

    localStorage.setItem("userscore", JSON.stringify(score));

    let disp='';
    document.querySelector('#display').value=disp;
    dispScore();
}

r.onclick=function(){
    let ran=Math.random()*3;
    
    if(ran>0 && ran<=1){
        let comp='draw match';//r
        score.scoreTie++;
        localStorage.setItem("userscore",JSON.stringify(score));
        dispScore();
        let disp='you=rock     computer=rock';
        document.querySelector('#display').value=disp;
        document.querySelector('#result').innerHTML=comp;
    }
    else if(ran>1 && ran<=2){
        let comp='you lost !';//p
        score.scoreLost++;
        score.total--;
        localStorage.setItem("userscore",JSON.stringify(score));
        dispScore();
        let disp='you=rock     computer=paper';
        document.querySelector('#display').value=disp;
        document.querySelector('#result').innerHTML=comp;
    }
    else{
        let comp='you win !';//s
        score.scoreWin++;
        score.total++;
        localStorage.setItem("userscore",JSON.stringify(score));
        dispScore();
        let disp='you=rock     computer=Scissor';
        document.querySelector('#display').value=disp;
        document.querySelector('#result').innerHTML=comp;
    }


}

p.onclick=function(){
    let ran=Math.random()*3;
    
    if(ran>0 && ran<=1){
        let comp='you win !';//r
        score.scoreWin++;
        score.total++;
        localStorage.setItem("userscore",JSON.stringify(score));
        dispScore();
        let disp='you=paper     computer=rock';
        document.querySelector('#display').value=disp;
        document.querySelector('#result').innerHTML=comp;
    }
    else if(ran>1 && ran<=2){
        let comp='draw match';//p
        score.scoreTie++;
        localStorage.setItem("userscore",JSON.stringify(score));
        dispScore();
        let disp='you=paper     computer=paper';
        document.querySelector('#display').value=disp;
        document.querySelector('#result').innerHTML=comp;
    }
    else{
        let comp='you lost !';//s
        score.scoreLost++;
        score.total--;
        localStorage.setItem("userscore",JSON.stringify(score));
        dispScore();
        let disp='you=paper     computer=Scissor';
        document.querySelector('#display').value=disp;
        document.querySelector('#result').innerHTML=comp;
    }
}

s.onclick=function(){
    let ran=Math.random()*3;
    
    if(ran>0 && ran<=1){
        let comp='you lost !';//r
        score.scoreLost++;
        score.total--;
        localStorage.setItem("userscore",JSON.stringify(score));
        dispScore();
        let disp='you=Scissor     computer=rock';
        document.querySelector('#display').value=disp;
        document.querySelector('#result').innerHTML=comp;
    }
    else if(ran>1 && ran<=2){
        let comp='you win !';//p
        score.scoreWin++;
        score.total++;
        localStorage.setItem("userscore",JSON.stringify(score));
        dispScore();
        let disp='you=Scissor     computer=paper';
        document.querySelector('#display').value=disp;
        document.querySelector('#result').innerHTML=comp;
    }
    else{
        let comp='draw match';//s
        score.scoreTie++;
        localStorage.setItem("userscore",JSON.stringify(score));
        dispScore();
        let disp='you=Scissor     computer=Scissor';
        document.querySelector('#display').value=disp;
        document.querySelector('#result').innerHTML=comp;
    }
}
