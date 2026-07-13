// download.js
// Bundles the live template (HTML/CSS/JS + current images) into a zip on demand.

const STATIC_FILES = [
  'index.html', 'style.css', 'config.js', 'script.js',
  'download.js', 'README.md', 'update_images.bat', 'update_images.sh'
];

function getAllAssetPaths() {
  const paths = [];
  if (CONFIG.images) CONFIG.images.forEach(img => paths.push(CONFIG.imageFolder + img));
  if (CONFIG.chibiImage) paths.push(CONFIG.chibiImage);
  return paths;
}

async function buildAndDownloadZip() {
  const btn = document.getElementById('download-btn');
  const originalText = btn.textContent;
  btn.disabled = true;
  btn.textContent = 'Zipping...';

  try {
    const zip = new JSZip();
    const allPaths = [...STATIC_FILES, ...getAllAssetPaths()];

    await Promise.all(allPaths.map(async (path) => {
      const res = await fetch(path);
      if (!res.ok) { console.warn('Skipped (not found):', path); return; }
      zip.file(path, await res.blob());
    }));

    const zipBlob = await zip.generateAsync({ type: 'blob' });
    const url = URL.createObjectURL(zipBlob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'serafufu-loading-screen.zip';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    btn.textContent = 'Downloaded!';
  } catch (err) {
    console.error('Zip creation failed:', err);
    btn.textContent = 'Download Failed';
  } finally {
    setTimeout(() => { btn.disabled = false; btn.textContent = originalText; }, 2500);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('download-btn')?.addEventListener('click', buildAndDownloadZip);
});