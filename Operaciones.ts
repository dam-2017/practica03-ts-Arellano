export class Operaciones {
    op1:number;
    op2:number;

    constructor(op1:number,op2:number){
        this.op1 = op1;
        this.op2 = op2;
    }

    add():number{
        return this.op1+this.op2;
    }

    sub():number{
        return this.op1-this.op2;
    }

    factorial(num:number):number{
       let ret = 1;
        if(num==0 || num==1){
            return 1;
        }
        for(let i=num;i>0;i--){
            ret*=i;
        }
        return ret;
    }

    isPrime(num:number):boolean{
        let help = num-1;
        while(help>=2 && num!=2){
            if(num%help==0)
                return false;
            help--;    
        }
        return true;
    }

}
