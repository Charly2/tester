/**
 * Created by Charly on 10/03/2017.
 */
var connection = require("../connection/connection");

var productoModel = {};
var tabla = '2333-fin_machote_de_carga'




productoModel.findById = function (id,callback) {
    if (connection){
        var sql = 'SELECT * FROM `2333-fin_machote_de_carga` WHERE id = ?';
        connection.query(sql,id, function (error,data) {
            if (error)
                throw error;
            else{
                callback(null,data);
            }
        });
    }
};


productoModel.update = function (id,callback) {
    if (connection){
        var sql = 'SELECT * FROM `2333-fin_machote_de_carga` WHERE id = ?';
        connection.query(sql,id, function (error,data) {
            if (error)
                throw error;
            else{
                callback(null,data);
            }
        });
    }
};

productoModel.saveBien = function (id,callback) {
    var datos = [id.Nombre,id.marca,id.Modelo,id.des,id.carac,id.Color,id.medidas,id.peso,id.cat,id.Categoría_Extendida,id.precio,id.Precio_con_Descuento,id.Fecha_Inicial_del_Descuento,id.Fecha_Final_del_Descuento,id.SKU,id.codBar,id.Inventario,id.Condicion,id.Detalles_de_la_Condición_del_Producto,id.mem,id.Garantía_Extendida_por_parte_del_Vendedor,id.medidaPaq,id.pesoPaq,id.impu,id.Envío_Gratis,id.Galeria__Principal,id.Galeria_contenido,id.Imagen1,id.Imagen2,id.Imagen3];
    //console.log(datos.length);
    if (connection){
        var sql = 'INSERT INTO `buenos` (`id`, `Nombre`, `marca`, `Modelo`, `des`, `carac`, `Color`,  `medidas`, `peso`, `cat`, `Categoría_Extendida`, `precio`, `PrecioD`, `Fecha_Inicial_del_Descuento`, `Fecha_Final_del_Descuento`, `SKU`, `codBar`, `Inventario`, `Condicion`, `Detalles_de_la_Condición_del_Producto`, `mem`, `Garantía_Extendida_por_parte_del_Vendedor`, `medidaPaq`, `pesoPaq`, `impu`, `Envío_Gratis`, `Galeria__Principal`, `Galeria_contenido`, `Imagen1`, `Imagen2`, `Imagen3`) VALUES (NULL,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);';
        connection.query(sql,datos, function (error,data) {
            if (error)
                throw error;
            else{
                callback(null,data);
            }
        });
    }
};



productoModel.saveMal = function (id,callback) {
    var datos = [id.Nombre,id.marca,id.Modelo,id.des,id.carac,id.Color,id.medidas,id.peso,id.cat,id.Categoría_Extendida,id.precio,id.Precio_con_Descuento,id.Fecha_Inicial_del_Descuento,id.Fecha_Final_del_Descuento,id.SKU,id.codBar,id.Inventario,id.Condicion,id.Detalles_de_la_Condición_del_Producto,id.mem,id.Garantía_Extendida_por_parte_del_Vendedor,id.medidaPaq,id.pesoPaq,id.impu,id.Envío_Gratis,id.Galeria__Principal,id.Galeria_contenido,id.Imagen1,id.Imagen2,id.Imagen3];

    if (connection){
        var sql = 'INSERT INTO `malos` (`id`, `Nombre`, `marca`, `Modelo`, `des`, `carac`, `Color`,  `medidas`, `peso`, `cat`, `Categoría_Extendida`, `precio`, `PrecioD`, `Fecha_Inicial_del_Descuento`, `Fecha_Final_del_Descuento`, `SKU`, `codBar`, `Inventario`, `Condicion`, `Detalles_de_la_Condición_del_Producto`, `mem`, `Garantía_Extendida_por_parte_del_Vendedor`, `medidaPaq`, `pesoPaq`, `impu`, `Envío_Gratis`, `Galeria__Principal`, `Galeria_contenido`, `Imagen1`, `Imagen2`, `Imagen3`) VALUES (NULL,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);';
        connection.query(sql,datos, function (error,data) {
            if (error)
                throw error;
            else{
                callback(null,data);
            }
        });
    }
};

module.exports = productoModel;