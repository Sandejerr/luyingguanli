const base = {
    get() {
        return {
            url : "http://localhost:8080/luyingdiguanlixitong/",
            name: "luyingdiguanlixitong",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/luyingdiguanlixitong/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "露营地管理系统"
        } 
    }
}
export default base
