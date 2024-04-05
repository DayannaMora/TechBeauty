<?php
include_once('../../config/conexion.php');

$Nit = $_REQUEST['Nit'];

$consulta = "SELECT * FROM proovedores WHERE Nit_Proveedor = '$Nit'";
$resultado = mysqli_query($conexion, $consulta);
$filas = mysqli_fetch_array($resultado);

?>
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="./Css/editarProveedor.css">
    <link rel="icon" type="image/png" href="../../View/pag_Inicial/logo_barra.png">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css">
    <title>Editar Proveedor</title>
</head>
<body>
<div class="container">
<?php require_once './barra_dashboard.html';?>
        <main>
            <div class="content-container">
            <h1>Editar Proveedor</h1>
            <form class="registro_proveedores" action="../../Controller/Proveedores/editarProveedor.php" method="post">
                <div class="registro">
                    <div class="box">
                        <input type="hidden" name="Nit" value="<?php echo $filas['Nit_Proveedor']; ?>">
                        <label for="nombre">Nombre: </label>
                        <input class="control" type="text" name="nombre" id="nombre" placeholder="Escriba el nombre del proveedor: " value="<?php echo $filas['Nombre_Proveedor'] ?>">
                        <br><br>
                        <label for="apellido">Apellido: </label>
                        <input class="control" type="text" name="apellido" id="apellido" placeholder="Escriba el apellido del proveedor: " value="<?php echo $filas['Apellido_Proveedor'] ?>">
                        <br><br>
                        <label for="direccion">Dirección: </label>
                        <input class="control" type="text" name="direccion" id="direccion" placeholder="Ingrese la dirección del proveedor: " value="<?php echo $filas['Direccion_Proveedor'] ?>">
                        <br><br>
                        <label for="telefono">Teléfono: </label>
                        <input class="control" type="text" name="telefono" id="telefono" placeholder="Ingrese el teléfono del proveedor: " value="<?php echo $filas['Telefono_Proveedor'] ?>">
                        <br><br>
                        <label for="email">Email: </label>
                        <input class="control" type="email" name="email" id="email" placeholder="Ingrese el email del proveedor: " value="<?php echo $filas['Email_Proveedor'] ?>">
                        <br><br>
                        <label for="razon_social">Razón Social: </label>
                        <input class="control" type="text" name="razon_social" id="razon_social" placeholder="Ingrese la razón social del proveedor: " value="<?php echo $filas['Razon_Social_Proveedor'] ?>">
                    </div>
                    <div class="box">
                        <label for="tipo_producto">Tipo de Producto: </label>
                        <input class="control" type="text" name="tipo_producto" id="tipo_producto" placeholder="Ingrese el tipo de producto del proveedor: " value="<?php echo $filas['Tipo_Producto'] ?>">
                        <br><br>
                        <label for="marca">Marca: </label>
                        <input class="control" type="text" name="marca" id="marca" placeholder="Ingrese la marca del proveedor: " value="<?php echo $filas['Marca_Proveedor'] ?>">
                        <div class="boton-container">
                            <input type="submit" name="submit" value="Editar Proveedor">
                            <br>
                            <a class="botonRegresar" href="./consultar_proveedores.php">Regresar</a>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </main>
    </div>
</body>
</html>
