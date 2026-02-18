const cloudinary = require('cloudinary').v2;
const path = require('path');
const fs = require('fs');

cloudinary.config({
    cloud_name: 'de5jbyhxx',
    api_key: '113465516585926',
    api_secret: 'VM5LJBpwkcfQPkFi21w6PzrhurE'
});

const images = [
    { file: 'IMG_3300.JPG', name: 'odessa-cathedral-park' },
    { file: 'IMG_3302.JPG', name: 'odessa-vorontsov-monument' },
    { file: 'IMG_3305.JPG', name: 'odessa-mozart-hotel' },
    { file: 'IMG_3307.JPG', name: 'odessa-ornate-facade' },
    { file: 'IMG_3320.JPG', name: 'odessa-cafe-candid' },
    { file: 'IMG_3323.JPG', name: 'odessa-cafe-meal' },
    { file: 'IMG_3324.JPG', name: 'odessa-cathedral-closeup' },
    { file: 'IMG_3327.JPG', name: 'odessa-port-sculpture' }
];

const sourceDir = '/Volumes/BBCSO/Odessa, Ukraine';

async function uploadImages() {
    console.log('Starting Odessa upload...\n');

    for (const img of images) {
        const filePath = path.join(sourceDir, img.file);

        if (!fs.existsSync(filePath)) {
            console.log(`SKIP: ${img.file} not found`);
            continue;
        }

        try {
            const result = await cloudinary.uploader.upload(filePath, {
                public_id: `shiplife/odessa/${img.name}`,
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
