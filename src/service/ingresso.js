export default function calcularValorIngresso (meioIng, ValorIng, cupom) { 

      let total = 0;


        if (meioIng === true) {
            total = ValorIng * 15.00;
        } else {
            total = ValorIng * 30.00;
        }


        if (cupom.toUpperCase() === 'AMOFILME') {
            let desc = total * 0.05; 
            total = total - desc;
        }

        return total
}