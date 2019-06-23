/**
 * @type {Configuration}
 */
export const config = {
    validations: {
        thermometer: {
            categories: [
                {
                    name: 'ultra precise',
                    thresholds: [0.5, 3],
                },
                {
                    name: 'very precise',
                    thresholds: [0.5, 5],
                }
            ],
            defaultCategory: 'precise',
        },
        humidity: {
            categories: [
                {
                    name: 'keep',
                    thresholds: [1],
                }
            ],
            defaultCategory: 'discard',
        }
    }
};
