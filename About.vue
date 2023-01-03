<script>
export default {
    props:['AboutData.fName'],

    data(){
        return{
            AboutData:{
                fName:null,
                lName:null,
                pCode:null
            }
        }
    },
    methods:{
        about(e){
            props:[AboutData.fName,this.AboutData.lName]
            console.log(this.AboutData.fName,this.AboutData.lName)
        }
    },
    

}
 </script>
<template>
    <div id='login-info'>
        {{ About.fName }}
    <h2>About Me</h2>
    <form  @submit.prevent="getFormValues">
        <!-- <v-form v-on:submit="About" action="#" method="post"></v-form> -->
<!--  -->
    First Name:<input type="text" v-model="AboutData.fName" placeholder="Enter your Name" name="fName" /><br>
    LastName:<input type="text" v-model="AboutData.Lname" placeholder="Enter your lastName" name="lName" /><br>
    Pin:<input type="text" v-model="AboutData.pCode" placeholder="Enter pincode" name="pCode"/><br>
    <button v-on:click="about">Submit</button>
    <!-- <v-on:click="Submit"> -->
    <!-- <v-form v-on:submit="sub" action="#" method="post"></v-form> -->

    </form>
    </div>
</template>

<style>
    .org-description {
      margin-top: 50px;
    }
  </style>