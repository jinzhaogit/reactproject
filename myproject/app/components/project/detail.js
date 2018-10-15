import React,{Component} from 'react'
import {View,Text,ScrollView,Button,Image} from 'react-native'
import Global from '../../utils/global'
export default class DetailComponent extends Component{
    constructor(){
        super();
        this.state={
            title:'',//标题
            subtitle:'',//副标题
            picList:[], //图片列表
            picIndex:0,
            timer:null
        }
    }
    componentDidMount(){
        // 取productlist.js事件传过来的ID值
        var id=this.props.navigation.getParam('id');
        // 发送请求
        fetch(Global.baseUrl+"product/details.php?lid="+id)
        .then(response=>response.json())
        .then(result=>{
            // 将数据保存到状态中
            this.setState({
                title:result.details.title,
                subtitle:result.details.subtitle,
                picList:result.details.picList
            })
            // 启动定时器创建轮播图
           var myTimer=setInterval(()=>{
                var nowIndex=this.state.picIndex;
                nowIndex++;
                if(nowIndex==(this.state.picList.length)){
                    nowIndex=0
                }
                this.setState({picIndex:nowIndex})
            },2200)
            this.setState({timer:myTimer})
        })
    }
    // 清除定时器
    componentWillUnmount(){
        clearInterval(this.state.timer)
    }
    render(){
        return <View style={{flex:1}}>
            <ScrollView>
                {
                    this.state.picList.length>0
                    &&
                    <Image style={{width:200,height:200}} 
                    source={{uri:Global.baseImageUrl+this.state.picList[this.state.picIndex].lg}}></Image>
                }
                <Text>{this.state.title}</Text>
                <Text>{this.state.subtitle}</Text>
            </ScrollView>
            <View>
                <Button title="编辑产品" color="red"></Button>
            </View>
        </View>
    }
}