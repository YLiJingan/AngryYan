<template>
  <div>
    <div class="toolbar">
      <form class="form-inline">
        <input type="text" class="form-control" placeholder="姓名">
        <button class="btn btn-success" >查询</button>
        <button class="btn btn-primary" data-toggle="modal" data-target="#addModal">新增</button>
      </form>
    </div>
    <div class="tablebar">
      <table class="table table-hover" :data="users">
        <thead>
        <tr>
          <th><input type="checkbox"></th>
          <th>#</th>
          <th prop="name">姓名</th>
          <th prop="sex">性别</th>
          <th prop="birth">生日</th>
          <th prop="addr">地址</th>
          <th>操作</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td><input type="checkbox"></td>
          <td>111</td>
          <td>颜丽菁</td>
          <td>女</td>
          <td>199.06.26</td>
          <td>sadxssffd</td>
          <td>
            <button class="btn btn-default" style='padding:3px;' data-toggle="modal" data-target="#editModal">编辑</button>
            <button class="btn btn-danger" style='padding:3px;' data-toggle="modal" data-target="#delModal">删除</button>
          </td>
        </tr>
        </tbody>
      </table>
      <nav aria-label="Page navigation pull-right">
        <button class="btn btn-info">批量删除</button>
        <ul class="pagination pull-right">
          <li>
            <a href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li><a href="#">1</a></li>
          <li><a href="#">2</a></li>
          <li><a href="#">3</a></li>
          <li><a href="#">4</a></li>
          <li><a href="#">5</a></li>
          <li>
            <a href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>

    <!-- ADD Modal -->
    <div class="modal fade" id="addModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" id="myModalLabel">新增</h4>
          </div>
          <div class="modal-body">
            <form class="form-horizontal">
              <div class="form-group">
                <label for="inputName" class="col-sm-2 control-label">姓名</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="inputName" placeholder="Name">
                </div>
              </div>
              <div class="form-group">
                <label for="inputRadio" class="col-sm-2 control-label">性别</label>
                <div class="col-sm-10">
                  <input type="radio"  id="inputRadio" name='sex'>男
                  <input type="radio" id="inputRadio" name='sex'>女
                </div>
              </div>
              <div class="form-group">
                <label for="inputAge" class="col-sm-2 control-label">年龄</label>
                <div class="col-sm-10">
                  <input type="number" class="form-control" id="inputAge" placeholder="Age">
                </div>
              </div>
              <div class="form-group">
                <label for="inputBir" class="col-sm-2 control-label">生日</label>
                <div class="col-sm-10">
                  <input type="date" class="form-control" id="inputBir" placeholder="Birthday">
                </div>
              </div>
              <div class="form-group">
                <label for="inputAddess" class="col-sm-2 control-label">地址</label>
                <div class="col-sm-10">
                  <textarea class="form-control" id="inputAdress"></textarea>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary">提交</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Edit Modal -->
    <div class="modal fade" id="editModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" id="myModalLabel">编辑</h4>
          </div>
          <div class="modal-body">
            <form class="form-horizontal">
              <div class="form-group">
                <label for="inputName" class="col-sm-2 control-label">姓名</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="inputName" placeholder="Name">
                </div>
              </div>
              <div class="form-group">
                <label for="inputRadio" class="col-sm-2 control-label">性别</label>
                <div class="col-sm-10">
                  <input type="radio"  id="inputRadio" name='sex'>男
                  <input type="radio" id="inputRadio" name='sex'>女
                </div>
              </div>
              <div class="form-group">
                <label for="inputAge" class="col-sm-2 control-label">年龄</label>
                <div class="col-sm-10">
                  <input type="number" class="form-control" id="inputAge" placeholder="Age">
                </div>
              </div>
              <div class="form-group">
                <label for="inputBir" class="col-sm-2 control-label">生日</label>
                <div class="col-sm-10">
                  <input type="date" class="form-control" id="inputBir" placeholder="Birthday">
                </div>
              </div>
              <div class="form-group">
                <label for="inputAddess" class="col-sm-2 control-label">地址</label>
                <div class="col-sm-10">
                  <textarea class="form-control" id="inputAdress"></textarea>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary">提交</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Edit Modal -->
    <div class="modal fade" id="delModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" id="myModalLabel">删除</h4>
          </div>
          <div class='modal-body'>
            <h4>确定要删除吗?</h4>
          </div>
          <div class='modal-footer'>
            <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary">提交</button>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
  import { getUserListPage } from '../api/api';
    export default{
      data(){
        return{
          users:[],
          listLoading:false
        }
      },
      method:{
        getUsers(){
          let para = {

          }
          getUserListPage(para).then((res) =>{
            this.users = res.data.users;
          });
        },
        mounted(){
          this.getUsers();
        }
      }
    }
</script>

<style scoped>
  .toolbar{
    width:100%;
    background-color:#fff;
    padding:10px
  }
  .tablebar{
    margin:0px 10px 0px 10px;
  }
  table{
    margin-bottom:0px;
  }
  table tbody tr{
    background-color:#fff;
  }
  nav ul{
    margin:0;
    padding:8px;
  }
  nav button{
    margin:8px 0 0 8px;
  }
  label{
    font-weight:normal;
  }
</style>
