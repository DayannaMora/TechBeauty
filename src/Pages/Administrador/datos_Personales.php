<?php
include_once('../config/conexion.php');

// Consulta para obtener los datos del usuario y empleado
$consulta = "SELECT u.id_Usuario, u.Nombre_Usuario, u.Apellido_Usuario, u.Telefono_Usuario, u.Direccion_Usuario, u.Email_Usuario, e.Eps_Empleado, e.Estrato_Empleado, e.Estado_Civil
             FROM usuario u
             INNER JOIN empleado e ON u.id_Usuario = e.id_Usuario";

$resultado = mysqli_query($conexion, $consulta);

?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Consulta de Datos Personales</title>
    <link rel="stylesheet" href="estilos.css"> <!-- Agrega tus estilos CSS aquí -->
</head>
<body>
    <h1>Consulta de Datos Personales</h1>
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Teléfono</th>
                <th>Dirección</th>
                <th>Email</th>
                <th>Eps</th>
                <th>Estrato</th>
                <th>Estado Civil</th>
            </tr>
        </thead>
        <tbody>
            <?php
            while ($fila = mysqli_fetch_assoc($resultado)) {
                echo "<tr>";
                echo "<td>" . $fila['id_Usuario'] . "</td>";
                echo "<td>" . $fila['Nombre_Usuario'] . "</td>";
                echo "<td>" . $fila['Apellido_Usuario'] . "</td>";
                echo "<td>" . $fila['Telefono_Usuario'] . "</td>";
                echo "<td>" . $fila['Direccion_Usuario'] . "</td>";
                echo "<td>" . $fila['Email_Usuario'] . "</td>";
                echo "<td>" . $fila['Eps_Empleado'] . "</td>";
                echo "<td>" . $fila['Estrato_Empleado'] . "</td>";
                echo "<td>" . $fila['Estado_Civil'] . "</td>";
                echo "</tr>";
            }
            ?>
        </tbody>
    </table>
</body>
</html>
