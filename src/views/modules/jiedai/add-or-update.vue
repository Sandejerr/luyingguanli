<template>
  <div class="addEdit-block">
    <el-form
        class="detail-form-content"
        ref="ruleForm"
        :model="ruleForm"
        :rules="rules"
        label-width="auto"
    >
      <el-row>
<!--        <el-col :span="12" v-if="sessionTable !='yingdi'">-->
<!--          <el-form-item class="select" v-if="type!='info'" label="营地" prop="yingdiId">-->
<!--            <el-select v-model="ruleForm.yingdiId" :disabled="ro.yingdiId" filterable placeholder="请选择营地"-->
<!--                       @change="yingdiChange">-->
<!--              <el-option-->
<!--                  v-for="(item,index) in yingdiOptions"-->
<!--                  v-bind:key="item.id"-->
<!--                  :label="item.yingdiName"-->
<!--                  :value="item.id">-->
<!--              </el-option>-->
<!--            </el-select>-->
<!--          </el-form-item>-->
<!--        </el-col>-->

        <el-col :span="12" v-if="sessionTable !='yingdi' ">
          <el-form-item class="input" v-if="type!='info'" label="营地名称" prop="yingdiName">
            <el-input v-model="yingdiForm.yingdiName"
                      placeholder="营地名称" clearable readonly></el-input>
          </el-form-item>
          <div v-else-if="type=='info'">
            <el-form-item class="input" label="营地名称" prop="yingdiName">
              <el-input v-model="ruleForm.yingdiName"
                        placeholder="营地名称" readonly></el-input>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="12" v-if="sessionTable !='yingdi' ">
          <el-form-item class="input" v-if="type!='info'" label="营地编号" prop="yingdiUuidNumber">
            <el-input v-model="yingdiForm.yingdiUuidNumber"
                      placeholder="营地编号" clearable readonly></el-input>
          </el-form-item>
          <div v-else-if="type=='info'">
            <el-form-item class="input" label="营地编号" prop="yingdiUuidNumber">
              <el-input v-model="ruleForm.yingdiUuidNumber"
                        placeholder="营地编号" readonly></el-input>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="12" v-if="sessionTable !='yingdi' ">
          <el-form-item class="upload" v-if="type!='info' && !ro.yingdiPhoto" label="营地照片" prop="yingdiPhoto">
            <img style="margin-right:20px;" v-bind:key="index"
                 v-for="(item,index) in (yingdiForm.yingdiPhoto || '').split(',')" :src="$base.url+item" width="100"
                 height="100">
          </el-form-item>
          <div v-else-if="type=='info'">
            <el-form-item v-if="ruleForm.yingdiPhoto" label="营地照片" prop="yingdiPhoto">
              <img style="margin-right:20px;" v-bind:key="index"
                   v-for="(item,index) in (ruleForm.yingdiPhoto || '').split(',')" :src="$base.url+item" width="100"
                   height="100">
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="12" v-if="sessionTable !='yingdi' ">
          <el-form-item class="input" v-if="type!='info'" label="营地地点" prop="yingdiAddress">
            <el-input v-model="yingdiForm.yingdiAddress"
                      placeholder="营地地点" clearable readonly></el-input>
          </el-form-item>
          <div v-else-if="type=='info'">
            <el-form-item class="input" label="营地地点" prop="yingdiAddress">
              <el-input v-model="ruleForm.yingdiAddress"
                        placeholder="营地地点" readonly></el-input>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="12" v-if="sessionTable !='yingdi' ">
          <el-form-item class="input" v-if="type!='info'" label="营地类型" prop="yingdiValue">
            <el-input v-model="yingdiForm.yingdiValue"
                      placeholder="营地类型" clearable readonly></el-input>
          </el-form-item>
          <div v-else-if="type=='info'">
            <el-form-item class="input" label="营地类型" prop="yingdiValue">
              <el-input v-model="ruleForm.yingdiValue"
                        placeholder="营地类型" readonly></el-input>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="12" v-if="sessionTable !='yingdi' ">
          <el-form-item class="input" v-if="type!='info'" label="营地状态" prop="yingdiZhuangtaiValue">
            <el-input v-model="yingdiForm.yingdiZhuangtaiValue"
                      placeholder="营地状态" clearable readonly></el-input>
          </el-form-item>
          <div v-else-if="type=='info'">
            <el-form-item class="input" label="营地状态" prop="yingdiZhuangtaiValue">
              <el-input v-model="ruleForm.yingdiZhuangtaiValue"
                        placeholder="营地状态" readonly></el-input>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="12" v-if="sessionTable !='yingdi' ">
          <el-form-item class="input" v-if="type!='info'" label="营地热度" prop="yingdiClicknum">
            <el-input v-model="yingdiForm.yingdiClicknum"
                      placeholder="营地热度" clearable readonly></el-input>
          </el-form-item>
          <div v-else-if="type=='info'">
            <el-form-item class="input" label="营地热度" prop="yingdiClicknum">
              <el-input v-model="ruleForm.yingdiClicknum"
                        placeholder="营地热度" readonly></el-input>
            </el-form-item>
          </div>
        </el-col>
<!--        <el-col :span="12" v-if="sessionTable !='yonghu'">-->
<!--          <el-form-item class="select" v-if="type!='info'" label="用户" prop="yonghuId">-->
<!--            <el-select v-model="ruleForm.yonghuId" :disabled="ro.yonghuId" filterable placeholder="请选择用户"-->
<!--                       @change="yonghuChange">-->
<!--              <el-option-->
<!--                  v-for="(item,index) in yonghuOptions"-->
<!--                  v-bind:key="item.id"-->
<!--                  :label="item.yonghuName"-->
<!--                  :value="item.id">-->
<!--              </el-option>-->
<!--            </el-select>-->
<!--          </el-form-item>-->
<!--        </el-col>-->

        <el-col :span="12" v-if="sessionTable !='yonghu' ">
          <el-form-item class="input" v-if="type!='info'" label="用户姓名" prop="yonghuName">
            <el-input v-model="yonghuForm.yonghuName"
                      placeholder="用户姓名" clearable readonly></el-input>
          </el-form-item>
          <div v-else-if="type=='info'">
            <el-form-item class="input" label="用户姓名" prop="yonghuName">
              <el-input v-model="ruleForm.yonghuName"
                        placeholder="用户姓名" readonly></el-input>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="12" v-if="sessionTable !='yonghu' ">
          <el-form-item class="input" v-if="type!='info'" label="用户手机号" prop="yonghuPhone">
            <el-input v-model="yonghuForm.yonghuPhone"
                      placeholder="用户手机号" clearable readonly></el-input>
          </el-form-item>
          <div v-else-if="type=='info'">
            <el-form-item class="input" label="用户手机号" prop="yonghuPhone">
              <el-input v-model="ruleForm.yonghuPhone"
                        placeholder="用户手机号" readonly></el-input>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="12" v-if="sessionTable !='yonghu' ">
          <el-form-item class="input" v-if="type!='info'" label="用户身份证号" prop="yonghuIdNumber">
            <el-input v-model="yonghuForm.yonghuIdNumber"
                      placeholder="用户身份证号" clearable readonly></el-input>
          </el-form-item>
          <div v-else-if="type=='info'">
            <el-form-item class="input" label="用户身份证号" prop="yonghuIdNumber">
              <el-input v-model="ruleForm.yonghuIdNumber"
                        placeholder="用户身份证号" readonly></el-input>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="12" v-if="sessionTable !='yonghu' ">
          <el-form-item class="upload" v-if="type!='info' && !ro.yonghuPhoto" label="用户头像" prop="yonghuPhoto">
            <img style="margin-right:20px;" v-bind:key="index"
                 v-for="(item,index) in (yonghuForm.yonghuPhoto || '').split(',')" :src="$base.url+item" width="100"
                 height="100">
          </el-form-item>
          <div v-else-if="type=='info'">
            <el-form-item v-if="ruleForm.yonghuPhoto" label="用户头像" prop="yonghuPhoto">
              <img style="margin-right:20px;" v-bind:key="index"
                   v-for="(item,index) in (ruleForm.yonghuPhoto || '').split(',')" :src="$base.url+item" width="100"
                   height="100">
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="12" v-if="sessionTable !='yonghu' ">
          <el-form-item class="input" v-if="type!='info'" label="电子邮箱" prop="yonghuEmail">
            <el-input v-model="yonghuForm.yonghuEmail"
                      placeholder="电子邮箱" clearable readonly></el-input>
          </el-form-item>
          <div v-else-if="type=='info'">
            <el-form-item class="input" label="电子邮箱" prop="yonghuEmail">
              <el-input v-model="ruleForm.yonghuEmail"
                        placeholder="电子邮箱" readonly></el-input>
            </el-form-item>
          </div>
        </el-col>
        <input id="updateId" name="id" type="hidden">
        <input id="yingdiId" name="yingdiId" type="hidden">
        <input id="yonghuId" name="yonghuId" type="hidden">
        <el-col :span="12">
          <el-form-item class="input" v-if="type!='info'" label="接待名称" prop="jiedaiName">
            <el-input v-model="ruleForm.jiedaiName"
                      placeholder="接待名称" clearable :readonly="ro.jiedaiName"></el-input>
          </el-form-item>
          <div v-else-if="type=='info'">
            <el-form-item class="input" label="接待名称" prop="jiedaiName">
              <el-input v-model="ruleForm.jiedaiName"
                        placeholder="接待名称" readonly></el-input>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="12">
          <el-form-item class="input" v-if="type!='info'" label="接待编号" prop="jiedaiUuidNumber">
            <el-input v-model="ruleForm.jiedaiUuidNumber"
                      placeholder="接待编号" clearable :readonly="ro.jiedaiUuidNumber"></el-input>
          </el-form-item>
          <div v-else-if="type=='info'">
            <el-form-item class="input" label="接待编号" prop="jiedaiUuidNumber">
              <el-input v-model="ruleForm.jiedaiUuidNumber"
                        placeholder="接待编号" readonly></el-input>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="12">
          <el-form-item class="upload" v-if="type!='info' && !ro.jiedaiPhoto" label="接待照片" prop="jiedaiPhoto">
            <file-upload
                tip="点击上传接待照片"
                action="file/upload"
                :limit="3"
                :multiple="true"
                :fileUrls="ruleForm.jiedaiPhoto?$base.url+ruleForm.jiedaiPhoto:''"
                @change="jiedaiPhotoUploadChange"
            ></file-upload>
          </el-form-item>
          <div v-else>
            <el-form-item v-if="ruleForm.jiedaiPhoto" label="接待照片" prop="jiedaiPhoto">
              <img style="margin-right:20px;" v-bind:key="index"
                   v-for="(item,index) in (ruleForm.jiedaiPhoto || '').split(',')" :src="$base.url+item" width="100"
                   height="100">
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="12">
          <el-form-item class="select" v-if="type!='info'" label="接待类型" prop="jiedaiTypes">
            <el-select v-model="ruleForm.jiedaiTypes" :disabled="ro.jiedaiTypes" placeholder="请选择接待类型">
              <el-option
                  v-for="(item,index) in jiedaiTypesOptions"
                  v-bind:key="item.codeIndex"
                  :label="item.indexName"
                  :value="item.codeIndex">
              </el-option>
            </el-select>
          </el-form-item>
          <div v-else-if="type=='info'">
            <el-form-item class="input" label="接待类型" prop="jiedaiValue">
              <el-input v-model="ruleForm.jiedaiValue"
                        placeholder="接待类型" readonly></el-input>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="12">
          <el-form-item class="input" v-if="type!='info'" label="价格" prop="jiedaiNewMoney">
            <el-input v-model="ruleForm.jiedaiNewMoney"
                      placeholder="价格" clearable :readonly="ro.jiedaiNewMoney"></el-input>
          </el-form-item>
          <div v-else-if="type=='info'">
            <el-form-item class="input" label="价格" prop="jiedaiNewMoney">
              <el-input v-model="ruleForm.jiedaiNewMoney"
                        placeholder="价格" readonly></el-input>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="12">
          <el-form-item class="select" v-if="type!='info'" label="接待状态" prop="jiedaiZhuangtaiTypes">
            <el-select v-model="ruleForm.jiedaiZhuangtaiTypes" :disabled="ro.jiedaiZhuangtaiTypes"
                       placeholder="请选择接待状态">
              <el-option
                  v-for="(item,index) in jiedaiZhuangtaiTypesOptions"
                  v-bind:key="item.codeIndex"
                  :label="item.indexName"
                  :value="item.codeIndex">
              </el-option>
            </el-select>
          </el-form-item>
          <div v-else-if="type=='info'">
            <el-form-item class="input" label="接待状态" prop="jiedaiZhuangtaiValue">
              <el-input v-model="ruleForm.jiedaiZhuangtaiValue"
                        placeholder="接待状态" readonly></el-input>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="24">
          <el-form-item v-if="type!='info'" label="接待介绍" prop="jiedaiContent">
            <editor style="min-width: 200px; max-width: 600px;"
                    v-model="ruleForm.jiedaiContent"
                    class="editor"
                    action="file/upload">
            </editor>
          </el-form-item>
          <div v-else-if="type=='info'">
            <el-form-item v-if="ruleForm.jiedaiContent" label="接待介绍" prop="jiedaiContent">
              <span v-html="ruleForm.jiedaiContent"></span>
            </el-form-item>
          </div>
        </el-col>
      </el-row>
      <el-form-item class="btn">
        <el-button v-if="type!='info'" type="primary" class="btn-success" @click="onSubmit">提交</el-button>
        <el-button v-if="type!='info'" class="btn-close" @click="back()">取消</el-button>
        <el-button v-if="type=='info'" class="btn-close" @click="back()">返回</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import styleJs from "../../../utils/style.js";
// 数字，邮件，手机，url，身份证校验
import {isNumber, isIntNumer, isEmail, isPhone, isMobile, isURL, checkIdCard} from "@/utils/validate";
import utilsJs, {getYearFormat, getMonthFormat, getDateFormat, getDatetimeFormat} from "../../../utils/utils.js";

export default {
  data() {
    return {
      addEditForm: null,
      id: '',
      type: '',
      sessionTable: "",//登录账户所在表名
      role: "",//权限
      userId: "",//当前登录人的id
      yingdiForm: {},
      yonghuForm: {},
      ro: {
        yingdiId: false,
        yonghuId: false,
        jiedaiName: false,
        jiedaiUuidNumber: false,
        jiedaiPhoto: false,
        jiedaiTypes: false,
        jiedaiNewMoney: false,
        jiedaiZhuangtaiTypes: false,
        jiedaiContent: false,
        jiedaiDelete: false,
        insertTime: false,
      },
      ruleForm: {
        yingdiId: '',
        yonghuId: '',
        jiedaiName: '',
        jiedaiUuidNumber: new Date().getTime(),
        jiedaiPhoto: '',
        jiedaiTypes: '',
        jiedaiNewMoney: '',
        jiedaiZhuangtaiTypes: '',
        jiedaiContent: '',
        jiedaiDelete: '',
        insertTime: '',
      },
      jiedaiTypesOptions: [],
      jiedaiZhuangtaiTypesOptions: [],
      yingdiOptions: [],
      yonghuOptions: [],
      rules: {
        yingdiId: [
          {required: true, message: '营地不能为空', trigger: 'blur'},
          {
            pattern: /^[0-9]*$/,
            message: '只允许输入整数',
            trigger: 'blur'
          }
        ],
        yonghuId: [
          {required: true, message: '用户不能为空', trigger: 'blur'},
          {
            pattern: /^[0-9]*$/,
            message: '只允许输入整数',
            trigger: 'blur'
          }
        ],
        jiedaiName: [
          {required: true, message: '接待名称不能为空', trigger: 'blur'},
        ],
        jiedaiUuidNumber: [
          {required: true, message: '接待编号不能为空', trigger: 'blur'},
        ],
        jiedaiPhoto: [
          {required: true, message: '接待照片不能为空', trigger: 'blur'},
        ],
        jiedaiTypes: [
          {required: true, message: '接待类型不能为空', trigger: 'blur'},
          {
            pattern: /^[0-9]*$/,
            message: '只允许输入整数',
            trigger: 'blur'
          }
        ],
        jiedaiNewMoney: [
          {required: true, message: '价格不能为空', trigger: 'blur'},
          {
            pattern: /^[0-9]{0,6}(\.[0-9]{1,2})?$/,
            message: '只允许输入整数6位,小数2位的数字',
            trigger: 'blur'
          }
        ],
        jiedaiZhuangtaiTypes: [
          {required: true, message: '接待状态不能为空', trigger: 'blur'},
          {
            pattern: /^[0-9]*$/,
            message: '只允许输入整数',
            trigger: 'blur'
          }
        ],
        jiedaiContent: [
          {required: true, message: '接待介绍不能为空', trigger: 'blur'},
        ],
        jiedaiDelete: [
          {required: true, message: '逻辑删除不能为空', trigger: 'blur'},
          {
            pattern: /^[0-9]*$/,
            message: '只允许输入整数',
            trigger: 'blur'
          }
        ],
        insertTime: [
          {required: true, message: '录入时间不能为空', trigger: 'blur'},
        ],
      }
    };
  },
  props: ["parent"],
  computed: {},
  created() {
    //获取当前登录用户的信息
    this.sessionTable = this.$storage.get("sessionTable");
    this.role = this.$storage.get("role");
    this.userId = this.$storage.get("userId");

    this.$route.query.id
    this.yingdiChange( this.$route.query.id)
    this.$route.query.id2
    this.yonghuChange(this.$route.query.id2)

    if (this.role != "管理员") {
    }
    this.addEditForm = styleJs.addStyle();
    this.addEditStyleChange()
    this.addEditUploadStyleChange()
    //获取下拉框信息
    this.$http({
      url: `dictionary/page?page=1&limit=100&sort=&order=&dicCode=jiedai_types`,
      method: "get"
    }).then(({data}) => {
      if (data && data.code === 0) {
        this.jiedaiTypesOptions = data.data.list;
      }
    });
    this.$http({
      url: `dictionary/page?page=1&limit=100&sort=&order=&dicCode=jiedai_zhuangtai_types`,
      method: "get"
    }).then(({data}) => {
      if (data && data.code === 0) {
        this.jiedaiZhuangtaiTypesOptions = data.data.list;
      }
    });

    this.$http({
      url: `yingdi/page?page=1&limit=100`,
      method: "get"
    }).then(({data}) => {
      if (data && data.code === 0) {
        this.yingdiOptions = data.data.list;
      }
    });
    this.$http({
      url: `yonghu/page?page=1&limit=100`,
      method: "get"
    }).then(({data}) => {
      if (data && data.code === 0) {
        this.yonghuOptions = data.data.list;
      }
    });

  },
  mounted() {
  },
  methods: {
    // 下载
    download(file) {
      window.open(`${file}`)
    },
    // 初始化
    init(id, type) {
      if (id) {
        this.id = id;
        this.type = type;
      }
      if (this.type == 'info' || this.type == 'else') {
        this.info(id);
      }
      // 获取用户信息
      this.$http({
        url: `${this.$storage.get("sessionTable")}/session`,
        method: "get"
      }).then(({data}) => {
        if (data && data.code === 0) {
          var json = data.data;
        } else {
          this.$message.error(data.msg);
        }
      });
    },
    yingdiChange(id) {
      this.$http({
        url: `yingdi/info/` + id,
        method: "get"
      }).then(({data}) => {
        if (data && data.code === 0) {
          this.yingdiForm = data.data;
        }
      });
    },
    yonghuChange(id) {
      this.$http({
        url: `yonghu/info/` + id,
        method: "get"
      }).then(({data}) => {
        if (data && data.code === 0) {
          this.yonghuForm = data.data;
        }
      });
    },
    // 多级联动参数
    info(id) {
      let _this = this;
      _this.$http({
        url: `jiedai/info/${id}`,
        method: 'get'
      }).then(({data}) => {
        if (data && data.code === 0) {
          _this.ruleForm = data.data;
          _this.yingdiChange(data.data.yingdiId)
          _this.yonghuChange(data.data.yonghuId)
          _this.ruleForm.jiedaiContent = _this.ruleForm.jiedaiContent.replaceAll("src=\"upload/", "src=\"" + this.$base.url + "upload/");
        } else {
          _this.$message.error(data.msg);
        }
      });
    },
    // 提交
    onSubmit() {
      this.$refs["ruleForm"].validate(valid => {
        this.ruleForm.yingdiId=this.$route.query.id
        this.ruleForm.yonghuId=this.$route.query.id2
        if (valid) {
          this.ruleForm.jiedaiContent = this.ruleForm.jiedaiContent.replaceAll(this.$base.url, "");
          this.$http({
            url: `jiedai/${!this.ruleForm.id ? "save" : "update"}`,
            method: "post",
            data: this.ruleForm
          }).then(({data}) => {
            if (data && data.code === 0) {
              this.$message({
                message: "操作成功",
                type: "success",
                duration: 1500,
                onClose: () => {
                  this.$router.push(
                      {
                        path: '/jiedai',
                        query: {

                        }
                      }
                  )
                }
              });
            } else {
              this.$message.error(data.msg);
            }
          });
        }
      });
    },
    // 获取uuid
    getUUID() {
      return new Date().getTime();
    },
    // 返回
    back() {
      this.$router.push(
          {
            path: '/yingdiOrder',
            query: {
            }
          }
      )
    },
    //图片
    jiedaiPhotoUploadChange(fileUrls) {
      this.ruleForm.jiedaiPhoto = fileUrls;
      this.addEditUploadStyleChange()
    },

    addEditStyleChange() {
      this.$nextTick(() => {
        // input
        document.querySelectorAll('.addEdit-block .input .el-input__inner').forEach(el => {
          el.style.height = this.addEditForm.inputHeight
          el.style.color = this.addEditForm.inputFontColor
          el.style.fontSize = this.addEditForm.inputFontSize
          el.style.borderWidth = this.addEditForm.inputBorderWidth
          el.style.borderStyle = this.addEditForm.inputBorderStyle
          el.style.borderColor = this.addEditForm.inputBorderColor
          el.style.borderRadius = this.addEditForm.inputBorderRadius
          el.style.backgroundColor = this.addEditForm.inputBgColor
        })
        document.querySelectorAll('.addEdit-block .input .el-form-item__label').forEach(el => {
          el.style.lineHeight = this.addEditForm.inputHeight
          el.style.color = this.addEditForm.inputLableColor
          el.style.fontSize = this.addEditForm.inputLableFontSize
        })
        // select
        document.querySelectorAll('.addEdit-block .select .el-input__inner').forEach(el => {
          el.style.height = this.addEditForm.selectHeight
          el.style.color = this.addEditForm.selectFontColor
          el.style.fontSize = this.addEditForm.selectFontSize
          el.style.borderWidth = this.addEditForm.selectBorderWidth
          el.style.borderStyle = this.addEditForm.selectBorderStyle
          el.style.borderColor = this.addEditForm.selectBorderColor
          el.style.borderRadius = this.addEditForm.selectBorderRadius
          el.style.backgroundColor = this.addEditForm.selectBgColor
        })
        document.querySelectorAll('.addEdit-block .select .el-form-item__label').forEach(el => {
          el.style.lineHeight = this.addEditForm.selectHeight
          el.style.color = this.addEditForm.selectLableColor
          el.style.fontSize = this.addEditForm.selectLableFontSize
        })
        document.querySelectorAll('.addEdit-block .select .el-select__caret').forEach(el => {
          el.style.color = this.addEditForm.selectIconFontColor
          el.style.fontSize = this.addEditForm.selectIconFontSize
        })
        // date
        document.querySelectorAll('.addEdit-block .date .el-input__inner').forEach(el => {
          el.style.height = this.addEditForm.dateHeight
          el.style.color = this.addEditForm.dateFontColor
          el.style.fontSize = this.addEditForm.dateFontSize
          el.style.borderWidth = this.addEditForm.dateBorderWidth
          el.style.borderStyle = this.addEditForm.dateBorderStyle
          el.style.borderColor = this.addEditForm.dateBorderColor
          el.style.borderRadius = this.addEditForm.dateBorderRadius
          el.style.backgroundColor = this.addEditForm.dateBgColor
        })
        document.querySelectorAll('.addEdit-block .date .el-form-item__label').forEach(el => {
          el.style.lineHeight = this.addEditForm.dateHeight
          el.style.color = this.addEditForm.dateLableColor
          el.style.fontSize = this.addEditForm.dateLableFontSize
        })
        document.querySelectorAll('.addEdit-block .date .el-input__icon').forEach(el => {
          el.style.color = this.addEditForm.dateIconFontColor
          el.style.fontSize = this.addEditForm.dateIconFontSize
          el.style.lineHeight = this.addEditForm.dateHeight
        })
        // upload
        let iconLineHeight = parseInt(this.addEditForm.uploadHeight) - parseInt(this.addEditForm.uploadBorderWidth) * 2 + 'px'
        document.querySelectorAll('.addEdit-block .upload .el-upload--picture-card').forEach(el => {
          el.style.width = this.addEditForm.uploadHeight
          el.style.height = this.addEditForm.uploadHeight
          el.style.borderWidth = this.addEditForm.uploadBorderWidth
          el.style.borderStyle = this.addEditForm.uploadBorderStyle
          el.style.borderColor = this.addEditForm.uploadBorderColor
          el.style.borderRadius = this.addEditForm.uploadBorderRadius
          el.style.backgroundColor = this.addEditForm.uploadBgColor
        })
        document.querySelectorAll('.addEdit-block .upload .el-form-item__label').forEach(el => {
          el.style.lineHeight = this.addEditForm.uploadHeight
          el.style.color = this.addEditForm.uploadLableColor
          el.style.fontSize = this.addEditForm.uploadLableFontSize
        })
        document.querySelectorAll('.addEdit-block .upload .el-icon-plus').forEach(el => {
          el.style.color = this.addEditForm.uploadIconFontColor
          el.style.fontSize = this.addEditForm.uploadIconFontSize
          el.style.lineHeight = iconLineHeight
          el.style.display = 'block'
        })
        // 多文本输入框
        document.querySelectorAll('.addEdit-block .textarea .el-textarea__inner').forEach(el => {
          el.style.height = this.addEditForm.textareaHeight
          el.style.color = this.addEditForm.textareaFontColor
          el.style.fontSize = this.addEditForm.textareaFontSize
          el.style.borderWidth = this.addEditForm.textareaBorderWidth
          el.style.borderStyle = this.addEditForm.textareaBorderStyle
          el.style.borderColor = this.addEditForm.textareaBorderColor
          el.style.borderRadius = this.addEditForm.textareaBorderRadius
          el.style.backgroundColor = this.addEditForm.textareaBgColor
        })
        document.querySelectorAll('.addEdit-block .textarea .el-form-item__label').forEach(el => {
          // el.style.lineHeight = this.addEditForm.textareaHeight
          el.style.color = this.addEditForm.textareaLableColor
          el.style.fontSize = this.addEditForm.textareaLableFontSize
        })
        // 保存
        document.querySelectorAll('.addEdit-block .btn .btn-success').forEach(el => {
          el.style.width = this.addEditForm.btnSaveWidth
          el.style.height = this.addEditForm.btnSaveHeight
          el.style.color = this.addEditForm.btnSaveFontColor
          el.style.fontSize = this.addEditForm.btnSaveFontSize
          el.style.borderWidth = this.addEditForm.btnSaveBorderWidth
          el.style.borderStyle = this.addEditForm.btnSaveBorderStyle
          el.style.borderColor = this.addEditForm.btnSaveBorderColor
          el.style.borderRadius = this.addEditForm.btnSaveBorderRadius
          el.style.backgroundColor = this.addEditForm.btnSaveBgColor
        })
        // 返回
        document.querySelectorAll('.addEdit-block .btn .btn-close').forEach(el => {
          el.style.width = this.addEditForm.btnCancelWidth
          el.style.height = this.addEditForm.btnCancelHeight
          el.style.color = this.addEditForm.btnCancelFontColor
          el.style.fontSize = this.addEditForm.btnCancelFontSize
          el.style.borderWidth = this.addEditForm.btnCancelBorderWidth
          el.style.borderStyle = this.addEditForm.btnCancelBorderStyle
          el.style.borderColor = this.addEditForm.btnCancelBorderColor
          el.style.borderRadius = this.addEditForm.btnCancelBorderRadius
          el.style.backgroundColor = this.addEditForm.btnCancelBgColor
        })
      })
    },
    addEditUploadStyleChange() {
      this.$nextTick(() => {
        document.querySelectorAll('.addEdit-block .upload .el-upload-list--picture-card .el-upload-list__item').forEach(el => {
          el.style.width = this.addEditForm.uploadHeight
          el.style.height = this.addEditForm.uploadHeight
          el.style.borderWidth = this.addEditForm.uploadBorderWidth
          el.style.borderStyle = this.addEditForm.uploadBorderStyle
          el.style.borderColor = this.addEditForm.uploadBorderColor
          el.style.borderRadius = this.addEditForm.uploadBorderRadius
          el.style.backgroundColor = this.addEditForm.uploadBgColor
        })
      })
    },
  }
};
</script>
<style lang="scss">
.editor {
  height: 500px;

  & /deep/ .ql-container {
    height: 310px;
  }
}

.amap-wrapper {
  width: 100%;
  height: 500px;
}

.search-box {
  position: absolute;
}

.addEdit-block {
  margin: -10px;
}

.detail-form-content {
  padding: 12px;
  background-color: transparent;
}

.btn .el-button {
  padding: 0;
}</style>

