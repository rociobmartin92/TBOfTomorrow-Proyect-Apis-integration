const {getDefaultConfig} = require('@react-native/metro-config');
const {mergeConfig} = require('metro-config');

module.exports = async () => {
  const defaultConfig = await getDefaultConfig(__dirname);

  // Define las variables de entorno que deseas cargar desde .env
  defaultConfig.extra = {
    env: {
      BASE_URL: process.env.BASE_URL,

      // Agrega cualquier otra variable de entorno que necesites aquí
    },
  };

  return mergeConfig(defaultConfig, {
    // Puedes agregar más configuraciones personalizadas aquí si es necesario
  });
};
