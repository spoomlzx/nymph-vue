<template>
    <div class="about">
        <el-card class="box-card">
            <div slot="header" class="card-header clearfix">
                <span class="card-title" v-if="isEdit">编辑文件</span>
                <span class="card-title" v-else>添加文件</span>
                <div class="btn-operate">
                    <el-button type="primary" @click="backToList">返回列表</el-button>
                    <el-button type="success" @click="clearForm" v-show="!isEdit">清 空</el-button>
                </div>
            </div>
            <el-form ref="form" :model="fileForm" size="medium" label-width="80px">
                <el-form-item label="文件名">
                    <el-input v-model="fileForm.title"></el-input>
                </el-form-item>
                <el-row :gutter="20">
                    <el-col :span="6">
                        <el-form-item label="类型">
                            <el-select v-model="fileForm.type" placeholder="请选择">
                                <el-option
                                        v-for="item in types"
                                        :key="item.id"
                                        :label="item.name"
                                        :value="item.id">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="5">
                        <el-rate
                                v-model="fileForm.degree"
                                :max="3"
                                :colors="['#68bf78', '#F7BA2A', '#ff5c18']"
                                :texts="['秘密', '机密', '绝密']"
                                :low-threshold="1"
                                :high-threshold="3"
                                show-text>
                        </el-rate>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="发文字号">
                            <el-input v-model="fileForm.serial"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="4" v-show="fileForm.type===1">
                        <el-form-item label="红头编号">
                            <el-input v-model="fileForm.serialRed"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row :gutter="20" v-show="!isEdit">
                    <el-col :span="8">
                        <el-form-item label="文件状态">
                            <el-switch
                                    v-model="fileForm.state"
                                    active-text="借阅"
                                    inactive-text="办理ing"
                                    active-value=3
                                    inactive-value=1>
                            </el-switch>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6" v-show="fileForm.state==='3'">
                        <el-form-item label="借阅人">
                            <el-input v-model="name"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="8">
                        <el-form-item label="印发日期">
                            <el-date-picker
                                    v-model="fileForm.printTime"
                                    type="date"
                                    value-format="timestamp"
                                    placeholder="选择日期">
                            </el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="收到日期">
                            <el-date-picker
                                    v-model="fileForm.receiveTime"
                                    type="date"
                                    value-format="timestamp"
                                    placeholder="选择日期">
                            </el-date-picker>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-form-item label="备注">
                    <el-input
                            type="textarea"
                            autosize
                            placeholder="请输入内容"
                            v-model="fileForm.remark">
                    </el-input>
                </el-form-item>
                <el-form-item label="文件上传">
                    <el-upload
                            class="upload-demo"
                            drag
                            action="https://jsonplaceholder.typicode.com/posts/"
                            multiple>
                        <i class="el-icon-upload"></i>
                        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                    </el-upload>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm">添 加</el-button>
                </el-form-item>
            </el-form>
        </el-card>


    </div>
</template>

<script>
  import { getTypes, getFileById, addFile } from '../../api/file'

  const defaultForm = {
    title: '',
    type: 1,
    degree: 1,
    serial: '',
    serialRed: '',
    state: '1',
    printTime: '',
    receiveTime: new Date().getTime(),
    remark: ''
  };
  export default {
    name: 'AddEdit',
    props: {
      isEdit: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        fileForm: Object.assign({}, defaultForm),
        name: '',
        types: []
      }
    },
    created() {
      this.fetchTypes();
      if (this.isEdit) {
        console.log(this.$route.params);
        const id = this.$route.params && this.$route.params.id;
        this.getFile(id)
      }
    },
    methods: {
      fetchTypes() {
        getTypes().then(res => {
          this.types = res.data
        })
      },
      getFile(id) {
        getFileById(id).then(res => {
          this.fileForm = res.data
        }).catch(() => {
          this.$message({
            showClose: true,
            message: '找不到该文件',
            type: 'error'
          });
        })
      },
      backToList() {
        this.$router.push({ path: '/file/list' })
      },
      clearForm() {
        this.fileForm = Object.assign({}, defaultForm);
      },
      submitForm() {
        addFile(this.fileForm, this.name).then((res) => {
          this.$message({
            showClose: true,
            message: '添加文件成功',
            type: 'success'
          });
        });
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .card-header {
        .card-title {
            font-size: 16px;
            line-height: 36px;
        }

        .btn-operate {
            float: right;
        }
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both
    }
</style>
