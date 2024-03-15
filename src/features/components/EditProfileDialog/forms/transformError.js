export default function transformError(error) {

    const errors = [];
    for (let key in error) {
        error[key].forEach(message => {
            errors.push({
                name: key,
                message
            });
        });
    };

    return errors;
}