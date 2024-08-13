import fs from 'fs';
import path from 'path';

export async function GET(req) {
  const songsDirectory = path.join(process.cwd(), 'public', 'Songs');
  
  try {
    const folders = fs.readdirSync(songsDirectory);
    
    const result = {};

    for (const folder of folders) {
      const folderPath = path.join(songsDirectory, folder);
      const files = fs.readdirSync(folderPath);

      // Generate URLs instead of reading files directly
      result[folder] = files
        .filter(file => file.endsWith('.mp3'))
        .map(file => `/Songs/${folder}/${file}`);
    }
    
    return new Response(JSON.stringify(result), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to list files' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
