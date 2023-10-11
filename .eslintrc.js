module.exports = {
  root: true,
  extends: '@react-native',
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'react/no-unstable-nested-components': [
          'warn',
          {
            allowAsProps: true,
            customValidators: [],
          },
        ],
        'react-hooks/exhaustive-deps': 'off',
      },
    },
  ],
};
