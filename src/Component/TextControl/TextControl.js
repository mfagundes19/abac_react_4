function getDateTime() {
    const date = new Date();
    return (date.getHours()+':'+date.getMinutes()+':'+date.getSeconds()+' '+date.toLocaleDateString());
}



const TextControl = (props) => {
    switch(props.type){
        case 'h1':
            return(
                <h1>{props.name} - {getDateTime()}</h1>
            )    
            break;
        case 'h2':
            return(
                <h2>{props.name} - {getDateTime()}</h2>
            )    
            break;
        case 'h3':
            return(
                <h3>{props.name} - {getDateTime()}</h3>
            )    
            break;
        case 'h4':
            return(
                <h4>{props.name} - {getDateTime()}</h4>
            )    
            break;
        case 'h5':
                return(
                    <h5>{props.name} - {getDateTime()}</h5>
                )    
                break;
        case 'h6':
            return(
                <h6>{props.name} - {getDateTime()}</h6>
            )    
            break;
        case 'span':
            return(
                <span>{props.name} - {getDateTime()}</span>
            )  
            break;
        case 'span-bold':
            return(
                <span><b>{props.name} - {getDateTime()}</b></span>
            )  
            break;
        case 'span-italic':
            return(
                <span><i>{props.name} - {getDateTime()}</i></span>
            )  
            break;
        case 'span-color':
            return(
                <span style={{color: props.color}}>{props.name} - {getDateTime()}</span>
            )  
            break;
    }
}

export default TextControl;