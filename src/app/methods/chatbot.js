const generateChatResponse = (message) => {
    // Simple response
    let res = 'Vui lòng liên hệ qua sđt 0123456789 để được tư vấn trực tiếp nhé !'
    if(message.toLocaleLowerCase().includes('hi') ||
        message.toLocaleLowerCase().includes('hello') ||
        message.toLocaleLowerCase().includes('chào')) res = 'Chào bạn, rất vui được gặp bạn !'
    else if(message.toLocaleLowerCase().includes('web')) res = 'Đây là trang web kinh doanh các loại xe máy sẵn có tại shop nhé !'
    else if(message.toLocaleLowerCase().includes('bye') ||
        message.toLocaleLowerCase().includes('tạm biệt')) res = 'Hẹn gặp lại, cảm ơn bạn đã ghé thăm !'
    else if(message.toLocaleLowerCase().includes('name is') ||
        message.toLocaleLowerCase().includes('tên là')) res = 'Thật là một cái tên rất hay !'
    else if(message.toLocaleLowerCase().includes('ok') ||
        message.toLocaleLowerCase().includes('vâng')) res = 'Vâng ạ !'

    return res;
}

export { generateChatResponse }