
var proCal={
    teclado:document.querySelectorAll('#calculadora ul li'),
    action:null,
    operaciones:document.querySelector('#operaciones'),
    digito:0,
    cantidad:0
    
};
var metCal={
    start:function(){
    proCal.teclado.forEach(element => {
        element.addEventListener('click',metCal.OpcionBotton)  
        });
    },
        OpcionBotton:function(tecla){
            proCal.action=tecla.target.getAttribute('class');
            proCal.digito=tecla.target.innerHTML;
            metCal.calculadora(proCal.action,proCal.digito);
        },
        calculadora:function(action,digito){
            switch(action){
                case 'numero':
                (proCal.operaciones.innerHTML==0)?(proCal.operaciones.innerHTML=digito):
                (proCal.operaciones.innerHTML+=digito)
                proCal.operaciones.innerHTML+=digito;
                console.log(action);
                break;
                case 'signo':
                if(proCal.cantidad==1){
                    proCal.operaciones.innerHTML+=digito;
                }
                (proCal.cantidad==1)?proCal.operaciones.innerHTML=digito:proCal.operaciones.innerHTML+=digito;
                proCal.cantidad++;
                proCal.operaciones.innerHTML+=digito;
                console.log(action);
                break;
                case 'decimal':
                console.log(action);
                break;
                case 'igual':
                console.log(action);
                break;
                default:
                break;
            }

        },
        delete:function(){
            proCal.operaciones.innerHTML==0;

        }
    }

metCal.start();