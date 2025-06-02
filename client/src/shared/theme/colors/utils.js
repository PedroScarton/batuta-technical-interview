const colorBlackList = ['backgroundImage'];
const variantBlackList = ['contrastText', '800', '700', '600', '500', '400', '300', '200', '100'];

export const buildAlpha = (opacity, colors) => {
  const opacityValue = opacity / 100;

  return Object.entries(colors).reduce((opacities, [colorKey, colorValue]) => {
    if (colorBlackList.includes(colorKey)) return opacities;
    const processedVariants = Object.entries(colorValue).reduce(
      (variants, [variantKey, variantColor]) => {
        if (variantBlackList.includes(String(variantKey))) return variants;
        if (typeof variantColor !== 'string') return variants;
        if (!variantColor.includes('rgb')) return variants;

        variants[variantKey] = variantColor
          .replace('rgb(', 'rgba(')
          .replace(')', `,${opacityValue})`);

        return variants;
      },
      {}
    );

    if (Object.keys(processedVariants).length > 0) opacities[colorKey] = processedVariants;

    return opacities;
  }, {});
};
