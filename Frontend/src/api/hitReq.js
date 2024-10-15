const hitRequest = async (url, method, data) => {
    if(!data){
        data = null;
    }
    const urlPrefix = 'http://localhost:8000/api/v1';
    try {
        const response = await fetch(`${urlPrefix}${url}`, {
            method: method,
            credentials: 'include',
            body: data
        });
        const responseData = await response.json();
        if(responseData.statusCode >= 200 && responseData.statusCode < 300 || responseData.success==true){
            console.log("Request successful");
            return responseData;
        }
        else{
            console.log("Request failed");
            return null;
        }
    } catch (error) {
        console.log("Error during hitRequest api : ", error);
    }
}

export default hitRequest;