const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const defaultConfig = getDefaultConfig(__dirname);

// 새로 추가한 설정
const customConfig = {
  resolver: {
    sourceExts: ['jsx', 'js', 'ts', 'tsx'], // 필요에 따라 확장자 수정
  },
  watchFolders: ['./'], // 모든 폴더를 감시하지 않고 특정 폴더만 감시하도록 설정
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
};

// 기존 설정과 병합
module.exports = mergeConfig(defaultConfig, customConfig);
