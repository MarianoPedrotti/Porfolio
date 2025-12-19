// src/types/project.ts

// 1. Define la estructura de una captura individual (Slide del carrusel)
export interface Screenshot {
    imageURL: string;
    altText?: string; // Descripción opcional para el alt del carrusel
}

// 2. Nuevo Tipo para la Galería de Imágenes (Funcionalidad Completa)
export interface GalleryItem {
    // La descripción ahora se aplica a toda la funcionalidad/paso
description: string; 
    
    // 🛑 CAMBIO CLAVE: Reemplazamos la imagen única por un array de Screenshots
    screenshots: Screenshot[]; 
}

// 3. Interfaz Project (Sin cambios, ya que usa GalleryItem[])
export interface Project {
imageURL: string;
title: string;
stack: string;
description: string;
link: string;
slug: string;
route: { 
name: string; 
params: { 
    slug: string; 
    }; 
};
 gallery: GalleryItem[]; 
}