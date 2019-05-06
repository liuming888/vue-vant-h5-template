export default{
    methods: {
        mx_showLoad(){
            this.$store.commit('setLoaddingNum', 1);
        },
        mx_closeLoad(){
            this.$store.commit('setLoaddingNum', -1);
        }
    }
}