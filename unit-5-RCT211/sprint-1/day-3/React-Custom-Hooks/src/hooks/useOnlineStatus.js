import { useEffect , useState } from "react";


const useOnlineStatus = () => {

    const [status , setStatus] = useState();

    useEffect(() => {
        if(navigator.online){
            setStatus(true);

        }
        else {
            setStatus(false);
        }
    },[status]);
    
    return status
};

export default useOnlineStatus;
