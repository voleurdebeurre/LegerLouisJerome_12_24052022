import { useEffect } from 'react';

function AppendScript(resourceUrl){
    useEffect(() => {
        const script = document.createElement('script');
        script.src = resourceUrl;
        script.async = true;
        script.type = "text/jsx";
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
            }
    }, [resourceUrl]);
};
export default AppendScript;