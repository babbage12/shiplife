const cloudinary = require('cloudinary').v2;
const path = require('path');
const fs = require('fs');

cloudinary.config({
    cloud_name: 'de5jbyhxx',
    api_key: '113465516585926',
    api_secret: 'VM5LJBpwkcfQPkFi21w6PzrhurE'
});

const images = [
    { file: 'IMG_1741.JPG', name: 'sibenik-hero' },              // #13 HERO
    { file: 'IMG_1726.JPG', name: 'sibenik-port-01' },           // #2
    { file: 'IMG_1727.JPG', name: 'sibenik-port-02' },           // #3
    { file: 'IMG_1730.JPG', name: 'sibenik-port-03' },           // #5
    { file: 'IMG_1731.JPG', name: 'sibenik-port-04' },           // #6
    { file: 'IMG_1734.JPG', name: 'sibenik-oldtown-01' },        // #9
    { file: 'IMG_1740.JPG', name: 'sibenik-oldtown-02' },        // #12
    { file: 'IMG_1744.JPG', name: 'sibenik-oldtown-03' },        // #16
    { file: 'IMG_1753.JPG', name: 'sibenik-oldtown-04' },        // #26
    { file: 'IMG_1755.JPG', name: 'sibenik-streets-01' },        // #28
    { file: 'IMG_1759.JPG', name: 'sibenik-streets-02' },        // #32
    { file: 'IMG_1763.JPG', name: 'sibenik-food-01' },           // #36
    { file: 'IMG_1762.JPG', name: 'sibenik-food-02' }            // #35
];

const sourceDir = '/Volumes/BBCSO/Sibinek, Croatia/';

async function uploadImages() {
    console.log('Starting Šibenik upload (13 images)...\n');

    for (const img of images) {
        const filePath = path.join(sourceDir, img.file);

        if (!fs.existsSync(filePath)) {
            console.log(`SKIP: ${img.file} not found`);
            continue;
        }

        try {
            const result = await cloudinary.uploader.upload(filePath, {
                public_id: `shiplife/sibenik/${img.name}`,
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
