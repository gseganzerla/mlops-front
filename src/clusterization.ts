export const clusterization = (data: object) => {

    $.ajax({
        url: 'http://localhost:5000/clusterization',
        method: 'POST',
        contentType: 'application/json;charset=UTF-8',
        data: JSON.stringify(data),
        beforeSend: () => { },
        success: (response) => {
            $('#text').text(JSON.stringify(response, undefined, 4))
        },
        error: () => { },
    })
}