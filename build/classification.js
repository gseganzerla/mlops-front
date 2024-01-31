export const classification = (data) => {
    $.ajax({
        url: 'http://localhost:5000/classification',
        method: 'POST',
        data: data,
        beforeSend: () => { },
        success: (response) => {
            console.log(response);
        },
        error: () => { },
    });
};
