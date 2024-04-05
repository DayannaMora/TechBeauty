import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ProductService from '../../Service/ProductService';
import './CSS/registrar_Producto.css';

const EditarProducto = () => {
    const { id } = useParams();
    const [producto, setProducto] = useState({ id: '', categoria: '', nombre: '', precio: '', cantidad: '', descripcion: '', unidadMedida: '', referencia: '' });

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await ProductService.getProductById(id);
                const data = response.data;
    
                if (data && data.data) {
                    const productData = data.data;
                    setProducto({ id: productData.pkId || '', categoria: (productData.fkIdCategories && productData.fkIdCategories.pkId) || '', nombre: productData.name || '', precio: productData.price || '', cantidad: productData.productQuantity || '', descripcion: productData.description || '', unidadMedida: productData.measurementUnit || '', referencia: productData.productReference || '' });
                } else {
                    console.error('Error: No se encontraron datos válidos en la respuesta.');
                }
            } catch (error) {
                console.error('Error al obtener el producto:', error);
            }
        };
    
        fetchProduct();
    }, [id]);
    
    const handleSubmit = async (event) => {
        event.preventDefault();

        const updatedProduct = {
            pkId: producto.id,
            fkIdCategories: { pkId: producto.categoria },
            name: producto.nombre,
            price: producto.precio,
            productQuantity: producto.cantidad,
            description: producto.descripcion,
            measurementUnit: producto.unidadMedida,
            productReference: producto.referencia
        };

        try {
            await ProductService.updateProduct(id, updatedProduct);
            alert('Producto actualizado exitosamente');
        } catch (error) {
            console.error('Error al actualizar el producto:', error);
            alert('Error al actualizar el producto');
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setProducto({ ...producto, [name]: value });
    };

    return (
        <div className="containerEditProduct">
            <main>
                <div className="contentProduct-container">
                    <h1>Editar Producto</h1>
                    <form className="editar_productos" onSubmit={handleSubmit}>
                        <div className="editarProductos">
                            <div className="box-edit">
                                <input type="hidden" name="id" value={producto.id} />
                                <label htmlFor="categoria">Categoria: </label>
                                <select className="categorias-select" name="categoria" id="categoria" value={producto.categoria} onChange={handleChange}>
                                    <option value="">Seleccione la categoria</option>
                                    <option value="1">Maquillaje</option>
                                    <option value="2">Cuidado Facial</option>
                                    <option value="3">Cuidado Corporal</option>
                                    <option value="4">Esmaltes</option>
                                    <option value="5">Cabello</option>
                                </select>
                                <br /><br />
                                <label htmlFor="nombre">Nombre: </label><br />
                                <input className="control-edit" type="text" name="nombre" id="nombre" value={producto.nombre} onChange={handleChange} placeholder="Escriba el nombre del producto" />
                                <br /><br />
                                <label htmlFor="Precio">Precio: </label><br />
                                <input className="control-edit" type="number" name="precio" id="precio" value={producto.precio} onChange={handleChange} placeholder="Ingrese el Precio del producto" required min="1" step="1" />
                                <br /><br />
                                <label htmlFor="cantidad">Cantidad: </label><br />
                                <input className="control-edit" type="number" name="cantidad" id="cantidad" value={producto.cantidad} onChange={handleChange} placeholder="Ingrese la cantidad del producto" required min="1" max="500" step="1" />
                            </div>
                            <div className="box-edit">
                                <label htmlFor="descripcion">Descripción: </label><br />
                                <textarea className="control-edit" name="descripcion" id="descripcion" value={producto.descripcion} onChange={handleChange} rows="3" cols="25"></textarea>
                                <br /><br />
                                <label htmlFor="und_med">Unidad de Medida: </label><br />
                                <input className="control-edit" type="text" name="unidadMedida" id="unidadMedida" value={producto.unidadMedida} onChange={handleChange} placeholder="Ingrese la unidad de medida" required />
                                <br /><br />
                                <label htmlFor="referencia">Referencia: </label><br />
                                <input className="control-edit" type="text" name="referencia" id="referencia" value={producto.referencia} onChange={handleChange} placeholder="Ingrese la referencia del producto" required />
                                <br />
                                <div className='buttons-action'>
                                    <input type="submit" className='button-edit' name="submit" value="Actualizar Producto" />
                                    <Link className="button-edit" to={"/ListarProductos"}>Cancelar</Link>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default EditarProducto;
