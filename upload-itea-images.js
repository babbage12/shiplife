const cloudinary = require('cloudinary').v2;
const path = require('path');
const fs = require('fs');

cloudinary.config({
    cloud_name: 'de5jbyhxx',
    api_key: '113465516585926',
    api_secret: 'VM5LJBpwkcfQPkFi21w6PzrhurE'
});

const images = [
    { file: 'IMG_1285.JPG', name: 'itea-easter-morning-hero' },      // #8 HERO
    { file: 'IMG_1278.JPG', name: 'itea-deck-smoke-01' },            // #2
    { file: 'IMG_1287.JPG', name: 'itea-town-smoke' },               // #10
    { file: 'IMG_1292.JPG', name: 'itea-scene-01' },                 // #15
    { file: 'IMG_1295.JPG', name: 'itea-scene-02' },                 // #17
    { file: 'IMG_1296.JPG', name: 'itea-scene-03' },                 // #18
    { file: 'IMG_1297.JPG', name: 'itea-resistance-memorial' },      // #19
    { file: 'IMG_1298.JPG', name: 'itea-scene-04' },                 // #20
    { file: 'IMG_1299.JPG', name: 'itea-church-01' },                // #21
    { file: 'IMG_1301.JPG', name: 'itea-church-02' },                // #23
    { file: 'IMG_1302.JPG', name: 'itea-church-03' },                // #24
    { file: 'IMG_1305.JPG', name: 'itea-street-01' },                // #27
    { file: 'IMG_1328.JPG', name: 'itea-street-02' },                // #31
    { file: 'IMG_1345.JPG', name: 'itea-scene-05' },                 // #33
    { file: 'IMG_1346.JPG', name: 'itea-scene-06' },                 // #34
    { file: 'IMG_1361.JPG', name: 'itea-scene-07' },                 // #39
    { file: 'IMG_1363.JPG', name: 'itea-war-memorial' },             // #41
    { file: 'IMG_1365.JPG', name: 'itea-scene-08' },                 // #42
    { file: 'IMG_1369.JPG', name: 'itea-scene-09' }                  // #44
];

const sourceDir = '/Volumes/BBCSO/Itea, Greece ';

async function uploadImages() {
    console.log('Starting Itea upload (19 images)...\n');

    for (const img of images) {
        const filePath = path.join(sourceDir, img.file);

        if (!fs.existsSync(filePath)) {
            console.log(`SKIP: ${img.file} not found`);
            continue;
        }

        try {
            const result = await cloudinary.uploader.upload(filePath, {
                public_id: `shiplife/itea/${img.name}`,
                overwrite: true,
                resource_type: 'image'
            });
            console.log(`OK: ${img.name}`);
        } catch (err) {
            console.log(`FAIL: ${img.name} - ${err.message}`);
        }
    }

    console.log('\nDone!');
}

uploadImages();
