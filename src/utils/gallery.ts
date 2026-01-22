import fs from 'fs';
import path from 'path';

export function getGalleryImages() {
  const galleryPath = path.join(process.cwd(), 'public', 'gallery');
  
  try {
    const files = fs.readdirSync(galleryPath);
    return files.filter(file => {
      const ext = path.extname(file).toLowerCase();
      return ['.jpg', '.jpeg', '.png', '.gif', '.webp'].includes(ext);
    });
  } catch (error) {
    console.error('Error reading gallery directory:', error);
    return [];
  }
}
