var instanceof = { };
instanceof.interceptors.response.use(
    (response) => {
        Nprogress.done(){
            return response.data
        }
    }
)