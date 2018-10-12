// 登录页
import React,{Component} from 'react'
import {Text,View,Image,TextInput,Button,StyleSheet} from 'react-native'
// 引入定义的路径变量
import Global from '../../utils/global'

export default class Prodectlist extends Component{
    // 初始化状态
    constructor(){
        super();
        this.state={uname:'',upwd:''}
    }
    // 点击登录触发事件
    handlePress=()=>{
        // 获取内容传入参数
        var params="uname="+this.state.uname+"&upwd="+this.state.upwd;
        // 异步带参请求数据库数据
        fetch(Global.baseUrl+'user/login.php?'+params)
        .then(response=>response.json())
        .then(result=>{
            // 对请求的结果进行判断看是否登录成功
            if(result.code==200){
                // 成功跳转到main页
                this.props.navigation.navigate('main')
            }else{
                alert("用户名或者密码不正确");
            }
            // 清空输入框内容(输入框别忘绑定value)
            this.setState({uname:'',upwd:''})
        })
    }
    // 保存input输入的用户名
    saveName=(msg)=>{
        this.setState({uname:msg})
    }
    // 保存input输入的密码
    savePwd=(msg)=>{
        this.setState({upwd:msg})
    }
    render(){
        return <View>
                <Text style={{alignSelf:'center',color:'red',fontSize:26}}>登录</Text>
                <Image style={myStyles.myImage} source={require("../../imgs/my.png")}></Image>
                <TextInput onChangeText={this.saveName} value={this.state.uname} placeholder="请输入用户名"></TextInput>
                <TextInput onChangeText={this.savePwd} value={this.state.upwd} placeholder="请输入密码" secureTextEntry={true}></TextInput>
                <Button title="登录" onPress={this.handlePress}></Button>
        </View>
    }
}
// 定义css样式
var myStyles=StyleSheet.create({
    myImage:{width:80,height:80,borderRadius:40,alignSelf:'center'}
})