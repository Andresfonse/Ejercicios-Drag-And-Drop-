/* Drag and Drop utilizando la libreria Sorteable JS == */

const dropItems = document.getElementById('drop-items');

new Sortable(dropItems, {
    animation: 150, //ms, velocidad de animacion moviendo elementos al ordenar
    chosenClass: "sortable-chosen", //Nombre de clase al elemento elegido
    dargClass: "sortable-drag", // Nombre de clase para el elemento de arrastre
});