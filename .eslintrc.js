module.exports = {
    root: true,
    extends: [
        "@react-native-community",
        "airbnb-typescript",
        "prettier",
        "prettier/@typescript-eslint",
        "prettier/react",
    ],
    rules: {
        "import/no-unresolved": "off",
        "import/prefer-default-export": "off",
    },
};
