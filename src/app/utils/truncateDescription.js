export const truncateDescription = (description) => {
    var stingMax = 140;
    var descriptionString = description;
    return descriptionString.substring(0, stingMax);
};
