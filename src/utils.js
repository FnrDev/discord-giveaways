const { resolveColor } = require('discord.js');

const validateEmbedColor = (embedColor) => {
    try {
        embedColor = resolveColor(embedColor)
        return Number.isFinite(embedColor);
    } catch {
        return false;
    }
};

module.exports = {
    validateEmbedColor
};
