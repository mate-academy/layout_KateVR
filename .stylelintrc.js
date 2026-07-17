module.exports = {
  extends: "@mate-academy/stylelint-config",
  plugins: ["stylelint-scss"],
  rules: {
    // The task layout is tuned by block, so property order should not create noise.
    "order/order": null,
    "order/properties-order": null,
  },
};
