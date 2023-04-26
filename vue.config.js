module.exports ={
    css: {
        /*scss processing options in loadOptions */
        loaderOptions:{
            sass:
                {
                    /*added styles */
                    additionalData: '@import "@/assets/styles/styles.scss";'
                }
        }
    }
}