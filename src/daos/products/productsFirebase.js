import ContenedorProductosFirebase from "../../persistence/Contenedores/Productos/ClassProductsFirebase.js";

// Subclase productos firebase
class productsDaoFirebase extends ContenedorProductosFirebase {
    constructor (collectionName) {
        // ejecuta el constructor de la clase contenedor de Firebase
        super(collectionName);
    }
}

export {productsDaoFirebase}