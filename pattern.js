function printtable(n){
    for (let i=1;i<=10;i++){
        console.log(n + "x" + i + "=" + n*i);
    }
}
function printstars(n){
    for (let row=1;row<=n;row++){
        let line="";
        for (let col=1;col<=n;col++){
            if (n%2==1 && col>row){
                break;
            }
            line=line+"*";
        }
        console.log(line);
    }
}
function analyze(){
    let n=Number(prompt("Enter a number:"));
    let sum=0;
    for(let i=1;i<=n;i++){
        sum=sum+i;
    }
if (n%2==0){
    alert(n + "is even.Sum=" + sum);
}else{
    alert(n+"is odd.Sum=" + sum);
}
printstars(n);
printtable(n);
}
analyze();
if (confirm("Do you want to run the program again?")){
    analyze();
}