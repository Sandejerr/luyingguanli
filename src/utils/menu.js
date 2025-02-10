const menu = {
    list() {
        return [
            {
                "backMenu": [
                    {
                        "child": [
                            {
                                "buttons": [
                                    "查看",
                                    "新增",
                                    "修改",
                                    "删除"
                                ],
                                "menu": "管理员管理",
                                "menuJump": "列表",
                                "tableName": "users"
                            }
                        ],
                        "menu": "管理员管理"
                    }
                    , {
                        "child": [
                            {
                                "buttons": [
                                    "查看",
                                    "新增",
                                    "修改",
                                    "删除"
                                ],
                                "menu": "初级管理管理",
                                "menuJump": "列表",
                                "tableName": "chujiguanli"
                            }
                        ],
                        "menu": "初级管理管理"
                    }
                    , {
                        "child": [
                            {
                                "buttons": [
                                    "查看",
                                    "新增",
                                    "修改",
                                    "删除"
                                ],
                                "menu": "用户管理",
                                "menuJump": "列表",
                                "tableName": "yonghu"
                            }
                        ],
                        "menu": "用户管理"
                    }
                    , {
                        "child": [
                            {
                                "buttons": [
                                    "查看",
                                    "新增",
                                    "修改",
                                    "删除"
                                ],
                                "menu": "营地管理",
                                "menuJump": "列表",
                                "tableName": "yingdi"
                            }
                            ,
                            {
                                "buttons": [
                                    "订单",
                                    "查看",
                                    "删除"
                                ],
                                "menu": "营地预约管理",
                                "menuJump": "列表",
                                "tableName": "yingdiOrder"
                            }
                        ],
                        "menu": "营地管理"
                    }
                    , {
                        "child": [
                            {
                                "buttons": [
                                    "查看",
                                    "新增",
                                    "修改",
                                    "删除"
                                ],
                                "menu": "接待管理",
                                "menuJump": "列表",
                                "tableName": "jiedai"
                            }
                        ],
                        "menu": "接待管理"
                    }
                    , {
                        "child": [
                            {
                                "buttons": [
                                    "查看",
                                    "新增",
                                    "修改",
                                    "删除"
                                ],
                                "menu": "结算管理",
                                "menuJump": "列表",
                                "tableName": "jiesuan"
                            }
                        ],
                        "menu": "结算管理"
                    }
                    , {
                        "child": [
                            {
                                "buttons": [
                                    "查看",
                                    "新增",
                                    "删除",
                                    "修改"
                                ],
                                "menu": "接待类型管理",
                                "menuJump": "列表",
                                "tableName": "dictionaryJiedai"
                            }
                            ,
                            {
                                "buttons": [
                                    "查看",
                                    "新增",
                                    "删除",
                                    "修改"
                                ],
                                "menu": "接待状态管理",
                                "menuJump": "列表",
                                "tableName": "dictionaryJiedaiZhuangtai"
                            }
                            ,
                            {
                                "buttons": [
                                    "查看",
                                    "新增",
                                    "删除",
                                    "修改"
                                ],
                                "menu": "结算状态管理",
                                "menuJump": "列表",
                                "tableName": "dictionaryJiesuanZhuangtai"
                            }
                            ,
                            {
                                "buttons": [
                                    "查看",
                                    "新增",
                                    "删除",
                                    "修改"
                                ],
                                "menu": "营地类型管理",
                                "menuJump": "列表",
                                "tableName": "dictionaryYingdi"
                            }
                            ,
                            {
                                "buttons": [
                                    "查看",
                                    "新增",
                                    "删除",
                                    "修改"
                                ],
                                "menu": "营地状态管理",
                                "menuJump": "列表",
                                "tableName": "dictionaryYingdiZhuangtai"
                            }
                        ],
                        "menu": "基础数据管理"
                    }
                    // ,{
                    //     "child":[
                    //         {
                    //             "buttons":[
                    //                 "查看",
                    //                 "新增",
                    //                 "修改",
                    //                 "删除"
                    //             ],
                    //             "menu":"轮播图管理",
                    //             "menuJump":"列表",
                    //             "tableName":"config"
                    //         }
                    //     ],
                    //     "menu":"轮播图信息"
                    // }
                ],
                "frontMenu": [],
                "hasBackLogin": "是",
                "hasBackRegister": "否",
                "hasFrontLogin": "否",
                "hasFrontRegister": "否",
                "roleName": "管理员",
                "tableName": "users"
            },
            {
                "backMenu": [
                    {
                        "child": [
                            {
                                "buttons": [
                                    "查看",
                                    "新增",
                                    "修改",
                                    "删除"
                                ],
                                "menu": "用户管理",
                                "menuJump": "列表",
                                "tableName": "yonghu"
                            }
                        ],
                        "menu": "用户管理"
                    }
                    , {
                        "child": [
                            {
                                "buttons": [
                                    "查看",
                                    "新增",
                                    "修改",
                                    "删除"
                                ],
                                "menu": "营地管理",
                                "menuJump": "列表",
                                "tableName": "yingdi"
                            }
                            ,
                            {
                                "buttons": [
                                    "订单",
                                    "查看",
                                    "删除"
                                ],
                                "menu": "营地预约管理",
                                "menuJump": "列表",
                                "tableName": "yingdiOrder"
                            }
                        ],
                        "menu": "营地管理"
                    }
                    , {
                        "child": [
                            {
                                "buttons": [
                                    "查看",
                                ],
                                "menu": "接待管理",
                                "menuJump": "列表",
                                "tableName": "jiedai"
                            }
                        ],
                        "menu": "接待管理"
                    }
                    , {
                        "child": [
                            {
                                "buttons": [
                                    "查看",
                                ],
                                "menu": "结算管理",
                                "menuJump": "列表",
                                "tableName": "jiesuan"
                            }
                        ],
                        "menu": "结算管理"
                    }
                    // ,{
                    //     "child":[
                    //         {
                    //             "buttons":[
                    //                 "查看",
                    //                 "新增",
                    //                 "修改",
                    //                 "删除"
                    //             ],
                    //             "menu":"轮播图管理",
                    //             "menuJump":"列表",
                    //             "tableName":"config"
                    //         }
                    //     ],
                    //     "menu":"轮播图信息"
                    // }

                ],
                "frontMenu": [],
                "hasBackLogin": "是",
                "hasBackRegister": "否",
                "hasFrontLogin": "否",
                "hasFrontRegister": "否",
                "roleName": "初级管理员",
                "tableName": "chujiguanli"
            }
        ]
    }
}
export default menu;
