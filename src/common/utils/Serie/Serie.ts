class Serie {

    static calcularTermino(n : number){
        const primo =  this.Primo(n+1);
        const triangular = this.Triangular(n);
        const fibonacci = this.Fibonacci(n+1);

        return primo - 2*triangular + fibonacci;
    }

    private static esPrimo(n :number): boolean {
        for(let i=2; i<n; i++){
            if(n%i === 0) return false;
        }
        return n !== 1;
    }

    private static numerosPrimos(muestra: number = 100) : number[] {
        const lista : number[] = [];
        
        for(let i=2; i<muestra; i++){
            if(this.esPrimo(i) == true){
                lista.push(i);
            }
        }

        return lista;
    }

    static Primo (n: number): number {
        const listaNumerosPrimos = this.numerosPrimos();
        return listaNumerosPrimos[n-1];
    }

    private static generarNumerosTriangulares(muestra: number = 50): number []{
        const lista : number[] = [];
        
        for(let i=1; i<muestra; i++){
            lista.push((i*(i+1))/2);
        }
        
        return lista;
    }

    static Triangular (n: number) : number{
        const listaNumerosTriangulares = this.generarNumerosTriangulares();
        return listaNumerosTriangulares[n-1];
    }

    private static generarNumerosFibonacci(muestra: number = 50): number []{
        const lista: number[] = [];
        let a = 0;
        let b = 1;
        
        for(let i=0; i<muestra; i++){
            b=b+a;
            a=b-a;
            lista.push(a);
        }
    
        return lista;
    }

    static Fibonacci (n: number){
        const listaNumerosFibonacci = this.generarNumerosFibonacci();
        return listaNumerosFibonacci[n-1];
    }

}

export default Serie;
