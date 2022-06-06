import { toast } from "react-toastify";

const AlertToast = (msg, msgType = 'success') => {
    return toast(
        msg, {
            position: "bottom-right",
            type: msgType,
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            }
    );
}

export { AlertToast };