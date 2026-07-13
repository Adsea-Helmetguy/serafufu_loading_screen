// download.js
// Downloads the packaged zip file from the project root.

const DOWNLOAD_FILE = 'serafufu_loading_set.zip';

function downloadZipFile() {
  const btn = document.getElementById('download-btn');
  if (!btn) {
    console.error('Download button not found.');
    return;
  }

  const originalText = btn.textContent;
  btn.disabled = true;
  btn.textContent = 'Downloading...';

  try {
    const a = document.createElement('a');
    a.href = DOWNLOAD_FILE;
    a.download = DOWNLOAD_FILE;
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    btn.textContent = 'Download Started';
  } catch (err) {
    console.error('Download failed:', err);
    btn.textContent = 'Download Failed';
  } finally {
    setTimeout(() => {
      btn.disabled = false;
      btn.textContent = originalText;
    }, 1500);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('download-btn')?.addEventListener('click', downloadZipFile);
});
