function niceLogger(){
    console.log("Hello World!");
        return "Hello World.";
}

function messageRepeater(messageToRepeat){
    // message repeater functionality
    if (Array.isArray(messageToRepeat)){
    
        return [...messageToRepeat, ...messageToRepeat, ...messageToRepeat];

    }

    else{

    let stringMessageToReapeat = messageToRepeat.toString();
    return stringMessageToReapeat + stringMessageToReapeat + stringMessageToReapeat;
    
    }
}

module.exports = {
    niceLogger,
    messageRepeater
}