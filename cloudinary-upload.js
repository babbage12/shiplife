const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

async function uploadFolder(folderPath, cloudinaryFolder) {
  const files = fs.readdirSync(folderPath);
  const imageFiles = files.filter(f =>
    /\.(jpg|jpeg|png|gif|webp)$/i.test(f)
  );

  console.log(`Found ${imageFiles.length} images in ${folderPath}`);

  const uploadedUrls = [];

  for (const file of imageFiles) {
    const filePath = path.join(folderPath, file);
    try {
      console.log(`Uploading ${file}...`);
      const result = await cloudinary.uploader.upload(filePath, {
        folder: `shiplife/${cloudinaryFolder}`,
        transformation: [
          { width: 400, quality: 'auto', fetch_format: 'auto' }
        ]
      });

      uploadedUrls.push({
        original: file,
        url: result.secure_url,
        public_id: result.public_id
      });

      console.log(`✓ Uploaded: ${file}`);
    } catch (error) {
      console.error(`✗ Failed to upload ${file}:`, error.message);
    }
  }

  return uploadedUrls;
}

// Get folder path from command line
const folderPath = process.argv[2];
const cloudinaryFolder = process.argv[3] || path.basename(folderPath);

if (!folderPath) {
  console.error('Usage: node cloudinary-upload.js <folder-path> [cloudinary-folder-name]');
  process.exit(1);
}

uploadFolder(folderPath, cloudinaryFolder)
  .then(results => {
    console.log('\n✓ Upload complete!');
    console.log(JSON.stringify(results, null, 2));
  })
  .catch(error => {
    console.error('Upload failed:', error);
    process.exit(1);
  });
