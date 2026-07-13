Website Link: https://adsea-helmetguy.github.io/serafufu_loading_screen/

# Skullgirls-Style OBS Loading Screen

A beautiful, high-contrast, black-and-white stylized loading screen browser source for OBS, designed for streamers.

## Features
- **Skullgirls-inspired Aesthetic:** Comic halftone diagonal lines overlay, vignette edge shadowing, and high-contrast styling filters.
- **Dynamic Transition:** Background image disappears for 2 seconds every 15 seconds, selects a new random image, and fades back in.
- **Staggered Animations:** Staggered left-to-right bouncing loading dots and a bouncing chibi character (`loading.png`) looping every 1.5 seconds.
- **Responsive Width Scaling:** Automatically scales images of varying ratios so their widths always touch the screen borders.

---

## 🚀 Setup & Installation (OBS)

1. **Download the Files:** Download/clone this entire folder containing:
   - `index.html`
   - `style.css`
   - `config.js`
   - `script.js`
   - `serafufu_images/` (folder containing background images)
   - `loading/` (folder containing the chibi asset)
2. **Add Browser Source in OBS:**
   - Open OBS Studio.
   - Click **+** in the **Sources** dock and choose **Browser**.
   - Name it (e.g., "Serafufu Loading Screen").
   - Tick the **Local file** checkbox.
   - Click **Browse** and select the [index.html](serafufu_loading_screen/index.html) file.
   - Set the **Width** to your stream output width (e.g., `1920`) and **Height** to `1080`.
   - Click **OK**.

---

## 🎨 Customizing Your Images (Fully Automated)

When the streamer wants to add new art, remove images, or change the current set:
1. Drag and drop any background image files (PNG, JPG, WebP, etc.) directly into the [serafufu_images](serafufu_loading_screen/serafufu_images) folder.
2. Run the update script corresponding to your operating system to automatically update the image list:
   * **Windows:** Double-click **[update_images.bat](serafufu_loading_screen/update_images.bat)**.
   * **macOS / Linux:** Run **[update_images.sh](serafufu_loading_screen/update_images.sh)** (or run `./update_images.sh` in your terminal).
3. The script scans the folder and updates [config.js](serafufu_loading_screen/config.js) in less than a second!
4. Refresh the Browser Source in OBS to apply the changes.

---

## ⚙️ Configuration Options

In [config.js](serafufu_loading_screen/config.js), you can also customize:
- `visibleDuration`: How long an image stays on screen (default: `13000`ms / 13 seconds).
- `invisibleDuration`: How long the screen is black/faded out (default: `2000`ms / 2 seconds).
- `enableBWFilter`: Enable/disable the high-contrast comic black-and-white look (set to `true` or `false`).
