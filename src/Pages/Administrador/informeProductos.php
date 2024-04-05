<?php
include_once '../../Config/conexion.php';

$consulta = "SELECT * FROM producto;";
header("Content-Type: application/vnd.ms-excel; charset=UTF-8");
header("Content-Disposition: attachment; filename=informe-Productos.xls");
?>

<table>
    <caption>Datos de los Productos</caption>
    <tr>
        <th>Id Producto</th>
        <th>Id Categoria</th>
        <th>Nombre</th>
        <th>Precio</th>
        <th>Cantidad</th>
        <th>Descripcion</th>
        <th>Unidades de Medida</th>
        <th>Referencia</th>
    </tr>

<?php 
$resultado = mysqli_query($conexion, $consulta);
while ($filas = mysqli_fetch_assoc($resultado)){
?>
    <tr>
        <td> <?php echo $filas['id_Producto']; ?></td>
        <td> <?php echo $filas['id_Categoria']; ?></td>
        <td> <?php echo $filas['Nombre_Producto']; ?></td>
        <td> <?php echo $filas['Precio_Producto']; ?></td>
        <td> <?php echo $filas['Cantidad_Producto']; ?></td>
        <td> <?php echo $filas['Descripcion_Producto']; ?></td>
        <td> <?php echo $filas['Unidad_Medida']; ?></td>
        <td> <?php echo $filas['Referencia_Producto']; ?></td>
    </tr>
<?php } ?>

</table>