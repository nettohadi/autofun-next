import React, {useEffect} from 'react';
const refCallbacks:refCallback[] = [];

type refCallback = {
    ref: any,
    callback: Function
}

function handleClickOutside(event) {
    let clickedOutside = true;

    for(let i=0; i <= refCallbacks.length-1; i++){
        if (refCallbacks[i].ref && refCallbacks[i].ref.contains(event.target)) {
            clickedOutside = false;

            refCallbacks.forEach((item, index) => {
                if(index != i){
                    item.callback();
                }
            })
            break;
        }
    }

    console.log({clickedOutside});
    console.log(refCallbacks);
    if(clickedOutside) {
        refCallbacks.forEach(item => item.callback())
    };

}

export function useClickOutside(refCallback: refCallback){



    React.useEffect(() => {
        if(refCallback.ref ){
            console.log('push', refCallback);
            refCallbacks.push(refCallback)

        }


    }, [refCallback.ref])

    useEffect(() => {

        //attach event only once
       document.addEventListener('click', handleClickOutside);

        //when unmount run this
        return () => {document.removeEventListener('click', handleClickOutside)}
    },[])
}

let timeout: NodeJS.Timeout | undefined = undefined;
export function debounce(func:any, wait:number) {
    const later = () => {
        clearTimeout(timeout);
        func();
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
}
