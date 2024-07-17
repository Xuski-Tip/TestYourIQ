<template>
        <div v-for="(item, index)  in message" :key="index" :style = 'computedStylesContainer'  :class="{ 'active': activeIndex === index }" @click="toggleActive(index)"  class="checkbox-container">
            <input type="radio"    @click="toggleActive(index)"     class="custom-radio"  name="choice">
            <label for="checkbox1" :class="{ 'active': activeIndex === index }"  class="custom-checkbox"></label>
            <label for="checkbox1" :style = 'computedStylesText' class="checkbox-label">{{ item }}</label>   
        </div>
        

</template>
<script> 

    export default {
        data() {
            return {
                activeIndex: null 
            };
        },
        computed: {
            computedStylesContainer() {
                return {
                    height: this.changeSizeOfinput,
                    marginBottom: this.moreSpaceUnder
                    
                }
            },
            computedStylesText() {
                return {

                    lineHeight: this.changeText
                }
            }
        },
        methods: {
            toggleActive(index) {
                this.activeIndex = index
        },
        },
        props: {
            message: {
                type: Array,
            },
            changeSizeOfinput: {
                type: String
            },
            moreSpaceUnder: {
                type: String
            },
            changeText: {
                type:String
            }
        }
    }
</script>
<style scoped>
    form {
        width: 100%;
    }

    .custom-radio {
        display: none;
    }
    

    .checkbox-container {
        cursor: pointer;
        display: flex;
        align-items: center;
        padding-left: 35px;
        margin-bottom: 8px;
        background-color: rgb(242,243,243, 0.2);
        height: 50px;
    }
    .checkbox-container.active {
        background-color: #FFC700;
    }
    .checkbox-label {
                line-height: 58px   ;
        padding-left: 39px;
        padding-right: 5px;
        font-family: 'PT Serif';
        font-size: 18px;
        cursor: pointer;
    }
    .custom-checkbox {
        min-width: 20px;
        min-height: 20px;
        background-color: transparent;
        border: 1px solid #FFFFFF;
        border-radius: 50%;
        cursor: pointer;
    }
    .custom-checkbox.active {
        background-color: #2950C2;
    } 


</style>