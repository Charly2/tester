/**
 * Created by Juan Carlos on 01/02/2018.
 */
var Producto = {};
var Images = [];
var flag = false;


$( "#idP" ).change(function() {
    let a = $( "#idP" ).val();
    var url  = 'http://192.168.0.16:3000/'+a;
    getData(url);

});



function updateImg(){
    Array.prototype.slice.call(document.getElementById("fotos").children).map((i)=>{
        let a = i.naturalHeight +"px x " + i.naturalWidth+"px";
        addCaracteristicas(a,"foto_info");
        console.log(a)
    });
}


function getData(url){
    
    limpiar();
    limpiar_auto();
    $.get(url,function (data,status) {
        Producto = data[0];
        Images = [];
       flag = true;
        setTimeout(function(){ print(data) }, 300);
        console.dir(Producto);
    });
    
}


function print(data) {
    limpiar();
    document.getElementById("producto").style.opacity = 1;
    cargar("#nombre","Nombre");
    cargar("#marca","marca");
    cargar("#des","des");
    $('#carac_i').val(Producto.carac);
    Producto.carac.split('.').map(dato=>addCaracteristicas(dato,'carac'));
    cargar("#color","Color");
    cargar("#medida","medidas");
    cargar("#peso","peso");
    cargar("#cat","cat");
    cargar("#precio","precio");
    cargar("#precioD","Precio_con_Descuento");
    cargar("#fechai","Fecha_Inicial_del_Descuento");
    cargar("#fechaf","Fecha_Final_del_Descuento");
    $( "#fechai_i" ).datepicker({ dateFormat: 'yy-mm-dd' });
    $( "#fechaf_i" ).datepicker({ dateFormat: 'yy-mm-dd' });
    cargar("#sku","SKU")
    cargar("#codBarr","codBar")
    cargar("#inventario","Inventario");
    cargar("#condicion","Condicion");
    cargar("#member","mem");
    cargar("#medidap","medidaPaq");
    cargar("#pesop","pesoPaq");
    cargar("#impuestos","impu");
    cargar("#envio","Envío_Gratis");


    addfotos(Producto.Galeria__Principal);
    addfotos(Producto.Galeria_contenido);
    addfotos(Producto.Imagen1);
    addfotos(Producto.Imagen2);
    addfotos(Producto.Imagen3);


    addfotosNone(Producto.Galeria__Principal);
    addfotosNone(Producto.Galeria_contenido);
    addfotosNone(Producto.Imagen1);
    addfotosNone(Producto.Imagen2);
    addfotosNone(Producto.Imagen3);

    
    
   


    


}

$('#fotos').hover(function(){
    if(flag){
        updateImg();
        flag= false;
    }
   
})



function cargar(s,key){
    let valor = Producto[key];
    $(s).html(valor);
    $(s+'_i').val(valor)  
}

function addCaracteristicas(dato,tipo) {
    var ca = document.getElementById(tipo);
    var a = document.createElement('li');
    a.innerHTML = dato;
    ca.appendChild(a);
}

function addfotos(dato) {
    var ca = document.getElementById('fotos');
    var a = document.createElement('img');
    a.src = dato;
    ca.appendChild(a);
}

function limpiar() {
   
    document.getElementById("producto").style.opacity = 0;
    document.getElementById('fotos').innerHTML = "";
    document.getElementById('carac').innerHTML = "";

}
function limpiar_auto(){
    document.getElementById('fotos_none').innerHTML = "";
    document.getElementById('foto_info').innerHTML = "";
}

function addfotosNone(dato) {
    var ca = document.getElementById('fotos_none');
    var a = document.createElement('img');
    a.src = dato;
    //console.dir(a)
    Images.push[a];
    ca.appendChild(a);
}



let sNombre = $('#nombre_i');
sNombre.keypress(()=>{update(sNombre , "Nombre")});
sNombre.keyup(()=>{update(sNombre , "Nombre")});
sNombre.change(()=>{update(sNombre , "Nombre")});

let sMarca = $('#marca_i');
sMarca.keypress(()=>{update(sMarca ,"marca")});
sMarca.keyup(()=>{update(sMarca ,"marca")});
sMarca.change(()=>{update(sMarca, "marca")});

let sDes = $('#des_i');
sDes.keypress(()=>{update(sDes ,"des")});
sDes.keyup(()=>{update(sDes ,"des")});
sDes.change(()=>{update(sDes, "des")});

let sCarac = $('#carac_i');
sCarac.keypress(()=>{update(sCarac ,"carac")});
sCarac.keyup(()=>{update(sCarac ,"carac")});
sCarac.change(()=>{update(sCarac, "carac")});

let sColor = $('#color_i');
sColor.keypress(()=>{update(sColor ,"Color")});
sColor.keyup(()=>{update(sColor ,"Color")});
sColor.change(()=>{update(sColor, "Color")});


let sMedida = $('#medida_i');
sMedida.keypress(()=>{update(sMedida ,"medidas")});
sMedida.keyup(()=>{update(sMedida ,"medidas")});
sMedida.change(()=>{update(sMedida, "medidas")});


let sPeso = $('#peso_i');
sPeso.keypress(()=>{update(sPeso ,"peso")});
sPeso.keyup(()=>{update(sPeso ,"peso")});
sPeso.change(()=>{update(sPeso, "peso")});



let sCat = $('#cat_i');
sCat.keypress(()=>{update(sCat ,"cat")});
sCat.keyup(()=>{update(sCat ,"cat")});
sCat.change(()=>{update(sCat, "cat")});

let sPrecio = $('#precio_i');
sPrecio.keypress(()=>{update(sPrecio ,"precio")});
sPrecio.keyup(()=>{update(sPrecio ,"precio")});
sPrecio.change(()=>{update(sPrecio, "precio")});

let sPrecioD = $('#precioD_i');
sPrecioD.keypress(()=>{update(sPrecioD ,"Precio_con_Descuento")});
sPrecioD.keyup(()=>{update(sPrecioD ,"Precio_con_Descuento")});
sPrecioD.change(()=>{update(sPrecioD, "Precio_con_Descuento")});

let sFechai = $('#fechai_i');
sFechai.keypress(()=>{update(sFechai ,"Fecha_Inicial_del_Descuento")});
sFechai.keyup(()=>{update(sFechai ,"Fecha_Inicial_del_Descuento")});
sFechai.change(()=>{update(sFechai, "Fecha_Inicial_del_Descuento")});

let sFechaf = $('#fechaf_i');
sFechaf.keypress(()=>{update(sFechaf ,"Fecha_Final_del_Descuento")});
sFechaf.keyup(()=>{update(sFechaf ,"Fecha_Final_del_Descuento")});
sFechaf.change(()=>{update(sFechaf, "Fecha_Final_del_Descuento")});

let sSku = $('#sku_i');
sSku.keypress(()=>{update(sSku ,"SKU")});
sSku.keyup(()=>{update(sSku ,"SKU")});
sSku.change(()=>{update(sSku, "SKU")});


let sCodBarr = $('#codBarr_i');
sCodBarr.keypress(()=>{update(sCodBarr ,"codBar")});
sCodBarr.keyup(()=>{update(sCodBarr ,"codBar")});
sCodBarr.change(()=>{update(sCodBarr, "codBar")});

let sInventario = $('#inventario_i');
sInventario.keypress(()=>{update(sInventario ,"Inventario")});
sInventario.keyup(()=>{update(sInventario ,"Inventario")});
sInventario.change(()=>{update(sInventario, "Inventario")});

let sCondicion = $('#condicion_i');
sCondicion.keypress(()=>{update(sCondicion ,"Condicion")});
sCondicion.keyup(()=>{update(sCondicion ,"Condicion")});
sCondicion.change(()=>{update(sCondicion, "Condicion")});

let sMember = $('#member_i');
sMember.keypress(()=>{update(sMember ,"mem")});
sMember.keyup(()=>{update(sMember ,"mem")});
sMember.change(()=>{update(sMember, "mem")});

let sMedidaP = $('#medidap_i');
sMedidaP.keypress(()=>{update(sMedidaP ,"medidaPaq")});
sMedidaP.keyup(()=>{update(sMedidaP ,"medidaPaq")});
sMedidaP.change(()=>{update(sMedidaP, "medidaPaq")});

let sPesoP = $('#pesop_i');
sPesoP.keypress(()=>{update(sPesoP ,"pesoPaq")});
sPesoP.keyup(()=>{update(sPesoP ,"pesoPaq")});
sPesoP.change(()=>{update(sPesoP, "pesoPaq")});

let sImpuestos = $('#impuestos_i');
sImpuestos.keypress(()=>{update(sImpuestos ,"impu")});
sImpuestos.keyup(()=>{update(sImpuestos ,"impu")});
sImpuestos.change(()=>{update(sImpuestos, "impu")});

let sEnvio = $('#envio_i');
sEnvio.keypress(()=>{update(sEnvio ,"Envío_Gratis")});
sEnvio.keyup(()=>{update(sEnvio ,"Envío_Gratis")});
sEnvio.change(()=>{update(sEnvio, "Envío_Gratis")});




$('#medidaCorr').on('click',function(){
    dellCm("medidas");
});

$('#medidaCorrP').on('click',function(){
    dellCm("medidaPaq");
});

$('#condicionCorr').on('click',function(){
    if(Producto.Condicion=="Nuevo"){
        Producto.Condicion = 1;
    }else{
        Producto.Condicion = 2;
    }
    print(Producto);
});



function update(s,sa) {
    Producto[sa] = s.val();
    print(Producto);
}

function dellCm(se){
    let str = Producto[se];
    console.log(str);
    arr = str.split(" ", 10);
    if(arr[5]=="cm"){
        let str = arr[0]+arr[1]+arr[2]+arr[3]+arr[4];
        Producto[se] = str;
    }
    print(Producto);
}



$('#rejected').on('click',function(){
    corregirImg();
    console.dir(Producto);
    $.ajax({
        type: "POST",
        url: "http://192.168.0.16:3000/malos",
        data: Producto,
        success: function(e){
            if(e.status){
                let a = $( "#idP" ).val();
                a++;
                var url  = 'http://192.168.0.16:3000/'+a;
                console.log(url);
                getData(url);
                $( "#idP" ).val(a);
                $( ".form" ).scrollTop( 0 );
                $( ".producto" ).scrollTop( 0 );
            }
        }
      });
});

$('#accepted').on('click',function(){
    corregirImg();
    console.dir(Producto);
    $.ajax({
        type: "POST",
        url: "http://192.168.0.16:3000/buenos",
        data: Producto,
        success: function(e){
            if(e.status){
                let a = $( "#idP" ).val();
                a++;
                var url  = 'http://192.168.0.16:3000/'+a;
                console.log(url);
                getData(url);
                $( "#idP" ).val(a);
                $( ".form" ).scrollTop( 0 );
                $( ".producto" ).scrollTop( 0 );
            }
        }
      });
});


function corregirImg(){
    Producto.Galeria__Principal = Producto.Galeria__Principal +','+ Producto.Galeria_contenido;
    console.dir( Producto.Galeria__Principal);
    Producto.Galeria_contenido ; 
}
