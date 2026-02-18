const cloudinary = require('cloudinary').v2;
const path = require('path');
const fs = require('fs');

cloudinary.config({
    cloud_name: 'de5jbyhxx',
    api_key: '113465516585926',
    api_secret: 'VM5LJBpwkcfQPkFi21w6PzrhurE'
});

const images = [
    { file: 'DSC00327.JPG', name: 'semarang-borobudur-hero' },
    { file: 'DSC00332.JPG', name: 'semarang-borobudur-temple-01' },
    { file: 'DSC00340.JPG', name: 'semarang-borobudur-temple-02' },
    { file: 'DSC00345.JPG', name: 'semarang-borobudur-temple-03' },
    { file: 'DSC00351.JPG', name: 'semarang-borobudur-temple-04' },
    { file: 'DSC00359.JPG', name: 'semarang-borobudur-temple-05' },
    { file: 'DSC00363.JPG', name: 'semarang-borobudur-temple-06' },
    { file: 'DSC00368.JPG', name: 'semarang-borobudur-temple-07' }
];

const sourceDir = '/Volumes/BBCSO/Brudobundur Temple, Semerang';

async function uploadImages() {
    console.log('Starting Semarang/Borobudur upload...\n');

    for (const img of images) {
        const filePath = path.join(sourceDir, img.file);

        if (!fs.existsSync(filePath)) {
            console.log(`SKIP: ${img.file} not found`);
            continue;
        }

        try {
            const result = await cloudinary.uploader.upload(filePath, {
                public_id: `shiplife/semarang/${img.name}`,
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
