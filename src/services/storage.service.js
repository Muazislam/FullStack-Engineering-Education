import ImageKit from '@imagekit/nodejs';

const imagekit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,  // This is the default and can be omitted
});


async function uploadFile(buffer) {
    const  result =  await imagekit.files.upload({
      file: buffer.toString("base64"),
      fileName: "screenshot-2026-10-23_22-04-59.png"

  })
  return result;
}

export default uploadFile;
