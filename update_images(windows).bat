@echo off
:: update_images.bat
:: Run this file on Windows to automatically scan the 'serafufu_images' directory 
:: and update the 'config.js' file with the latest list of images.

echo Updating config.js image list...

set "CONFIG_FILE=config.js"

echo // config.js > "%CONFIG_FILE%"
echo const CONFIG = { >> "%CONFIG_FILE%"
echo   imageFolder: 'serafufu_images/', >> "%CONFIG_FILE%"
echo   images: [ >> "%CONFIG_FILE%"

:: Loop through all files in the serafufu_images directory
for %%f in (serafufu_images\*) do (
    set "filename=%%~nxf"
    :: Ignore index files, chibi character or hidden files if they end up here
    if not "%%~nxf"=="loading.png" (
        echo     '%%~nxf', >> "%CONFIG_FILE%"
    )
)

echo   ], >> "%CONFIG_FILE%"
echo   chibiImage: 'loading/loading.png', >> "%CONFIG_FILE%"
echo   visibleDuration: 13000, >> "%CONFIG_FILE%"
echo   invisibleDuration: 2000, >> "%CONFIG_FILE%"
echo   enableBWFilter: false >> "%CONFIG_FILE%"
echo }; >> "%CONFIG_FILE%"

echo.
echo Success! config.js has been updated with all images in 'serafufu_images'.
echo Refresh your OBS browser source to see the new images in rotation.
echo.
pause
