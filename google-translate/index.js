
const {Translate} = require('@google-cloud/translate').v2;

async function translateText(text, targetLanguage) {

    const targetLanguages = ['en', 'es', 'pt']

    if (!targetLanguages.includes(targetLanguage)) {
        throw new Error('Invalid target language');
    }
    const translate = await new Translate({
          keyFilename: 'key.json',
          projectId: 'lauro-na-palma-da-mao'
    });

    return await new Promise(async (resolve,reject) => {
        await translate.translate(text, targetLanguage, (err, translation) => {
            if (err) {
                return reject(err)
            }
            return resolve(translation);
        });
    })

}
module.exports = translateText 
