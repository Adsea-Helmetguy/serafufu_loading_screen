#!/bin/bash
# update_images.sh
# Run this file on macOS or Linux to automatically scan the 'serafufu_images' directory
# and update the 'config.js' file with the latest list of images.

echo "Updating config.js image list..."

CONFIG_FILE="config.js"

echo "// config.js" > "$CONFIG_FILE"
echo "const CONFIG = {" >> "$CONFIG_FILE"
echo "  imageFolder: 'serafufu_images/'," >> "$CONFIG_FILE"
echo "  images: [" >> "$CONFIG_FILE"

# Loop through all files in the serafufu_images directory
for file in serafufu_images/*; do
    filename=$(basename "$file")
    # Check if it is a file and not the Chibi character or directory
    if [ -f "$file" ] && [ "$filename" != "Chibi_sera.png" ]; then
        echo "    '$filename'," >> "$CONFIG_FILE"
    fi
done

echo "  ]," >> "$CONFIG_FILE"
echo "  chibiImage: 'loading/Chibi_sera.png'," >> "$CONFIG_FILE"
echo "  visibleDuration: 13000," >> "$CONFIG_FILE"
echo "  invisibleDuration: 2000," >> "$CONFIG_FILE"
echo "  enableBWFilter: true" >> "$CONFIG_FILE"
echo "};" >> "$CONFIG_FILE"

echo ""
echo "Success! config.js has been updated with all images in 'serafufu_images'."
echo "Refresh your OBS browser source to see the new images in rotation."
echo ""
