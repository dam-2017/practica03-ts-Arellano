export class Cadena {
   public cadena: string;

    constructor(cadena:string){
        this.cadena = cadena;
    }

    isPalindrome(): boolean{
       let temp = new String(this.cadena); 
       let pointer1 = 0;
       let pointer2 = temp.length-1;
       while(pointer1<pointer2){
           if(temp.charAt(pointer1)!=temp.charAt(pointer2)){
               return false;
           }
           pointer1++;
           pointer2--;
       }
        return true;
    }

    countVocals(): number[]{
        let temp = new String(this.cadena);
        temp = temp.toLowerCase(); 
        let arrayVocals = [0,0,0,0,0];
        for(let i = 0;i<temp.length;i++){
            switch(temp.charAt(i)){
                case 'a':
                    arrayVocals[0]++;
                    break;
                case 'e':
                    arrayVocals[1]++;
                    break;
                case 'i':
                    arrayVocals[2]++;
                    break;
                case 'o':
                    arrayVocals[3]++;
                    break;
                case 'u':
                    arrayVocals[4]++;
                    break; 
                default:
                    break;                   
            }
        }
        return arrayVocals;
    }

    countLetters():number{
        let numLetters = 0;
        let temp = new String(this.cadena);
        temp = temp.toLowerCase();

        for(let i = 0;i<temp.length;i++){
            let char = temp.charCodeAt(i);
            if(char>96 && char < 123 ){
                numLetters++;
            }
        }
        return numLetters;
    }

    countWords(): number{
        let numWords =  0;
        let temp = new String(this.cadena);
        let flag = false;

        for(let i = 0;i<temp.length;i++){
            let char = temp.charCodeAt(i);
            if((char>96 && char < 123) && !flag ){
                flag = true;
                numWords++;
                continue;
            }
            if(flag && char==32){
                flag = false;
            }
        }

        return numWords;
    }



}