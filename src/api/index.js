import ajax from './ajax';

export default function test (){
  ajax({
    method:'get',
    url:'/',
    data:{
    name:'test'
    }
  }).then((res)=>{
     console.log(res,'res');
  })
}

test();